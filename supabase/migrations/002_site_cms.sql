-- Clear Lanka Travel production CMS: public content, owner roles and media uploads.
create extension if not exists pgcrypto;

create table if not exists public.site_admins (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'editor' check (role in ('owner','editor','viewer')),
  created_at timestamptz not null default now()
);

create or replace function public.is_site_admin(required_roles text[] default array['owner','editor'])
returns boolean language sql stable security definer set search_path = public
as $$ select exists(select 1 from public.site_admins where id = auth.uid() and role = any(required_roles)); $$;

create table if not exists public.site_settings (
  id text primary key default 'main' check (id = 'main'),
  content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

create table if not exists public.site_items (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('service','package','hotel','place','partner','guide','testimonial')),
  title text not null check (char_length(title) between 1 and 120),
  subtitle text not null default '',
  description text not null default '',
  price_label text not null default '',
  location text not null default '',
  image_url text not null default '',
  image_alt text not null default '',
  badge text not null default '',
  metadata jsonb not null default '{}'::jsonb,
  is_published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

alter table public.site_admins enable row level security;
alter table public.site_settings enable row level security;
alter table public.site_items enable row level security;

revoke all on public.site_admins, public.site_settings, public.site_items from anon, authenticated;
grant select on public.site_settings, public.site_items to anon, authenticated;
grant insert, update, delete on public.site_settings, public.site_items to authenticated;
grant select on public.site_admins to authenticated;

drop policy if exists "Public reads site settings" on public.site_settings;
create policy "Public reads site settings" on public.site_settings for select using (true);
drop policy if exists "Public reads published site items" on public.site_items;
create policy "Public reads published site items" on public.site_items for select using (is_published or public.is_site_admin(array['owner','editor','viewer']));
drop policy if exists "Admins manage settings" on public.site_settings;
create policy "Admins manage settings" on public.site_settings for all to authenticated using (public.is_site_admin()) with check (public.is_site_admin());
drop policy if exists "Admins manage items" on public.site_items;
create policy "Admins manage items" on public.site_items for all to authenticated using (public.is_site_admin()) with check (public.is_site_admin());
drop policy if exists "Admins read own role" on public.site_admins;
create policy "Admins read own role" on public.site_admins for select to authenticated using (id = auth.uid());

insert into public.site_settings(id, content) values ('main', jsonb_build_object(
  'heroEyebrow','Local help. Honest answers.',
  'heroTitle','Sri Lanka travel, made clear.',
  'heroLead','Plan your Sri Lanka trip with verified local drivers and guides, transparent taxi prices, and scam-aware advice that puts you—not a middleman—first.',
  'whatsappNumber','94770000000','displayPhone','+94 77 000 0000','email','hello@clearlankatravel.com',
  'theme','island','cardLayout','grid','sectionOrder',jsonb_build_array('services','discover','price-guide','safety','partners'),
  'sectionVisibility',jsonb_build_object('services',true,'discover',true,'price-guide',true,'safety',true,'partners',true)
)) on conflict (id) do nothing;

insert into public.site_items(type,title,subtitle,description,price_label,location,badge,sort_order,metadata)
select * from (values
 ('service','Airport pickup','Private arrival transfer','Reliable driver waiting at arrivals with a fixed price agreed first.','From $65','Islandwide','Verified',10,'{"icon":"✈"}'::jsonb),
 ('service','Taxi & private drivers','Single or multi-day bookings','Book a transfer or a trusted driver for several days.','Quote first','Islandwide','Verified',20,'{"icon":"⌁"}'::jsonb),
 ('service','Local guides','Heritage, wildlife and food','Meet knowledgeable local guides for memorable experiences.','By experience','Sri Lanka','Local',30,'{"icon":"♙"}'::jsonb),
 ('service','Custom itineraries','Route planning','A route shaped around your pace, interests, dates and budget.','Enquire','Sri Lanka','Custom',40,'{"icon":"⌖"}'::jsonb),
 ('service','Food & stay picks','Honest recommendations','Memorable family kitchens and characterful stays.','Free guide','Sri Lanka','Curated',50,'{"icon":"⌂"}'::jsonb),
 ('package','South coast & hill country','8–12 day suggested route','Colombo, Galle, Mirissa and Ella with a flexible private driver.','Custom quote','South & Central','Popular',10,'{}'::jsonb),
 ('hotel','Character stays','Hand-picked hotels and guesthouses','Clear recommendations matched to your budget and travel style.','Multiple budgets','Islandwide','Curated',10,'{}'::jsonb),
 ('place','Ella & tea country','Nature, walks and local stories','Plan a calmer hill-country experience with verified local help.','Explore','Ella','Must see',10,'{}'::jsonb)
) as seed(type,title,subtitle,description,price_label,location,badge,sort_order,metadata)
where not exists (select 1 from public.site_items);

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values ('site-media','site-media',true,5242880,array['image/jpeg','image/png','image/webp','image/gif'])
on conflict (id) do update set public=true,file_size_limit=excluded.file_size_limit,allowed_mime_types=excluded.allowed_mime_types;

drop policy if exists "Public reads site media" on storage.objects;
create policy "Public reads site media" on storage.objects for select using (bucket_id='site-media');
drop policy if exists "Admins upload site media" on storage.objects;
create policy "Admins upload site media" on storage.objects for insert to authenticated with check (bucket_id='site-media' and public.is_site_admin());
drop policy if exists "Admins update site media" on storage.objects;
create policy "Admins update site media" on storage.objects for update to authenticated using (bucket_id='site-media' and public.is_site_admin());
drop policy if exists "Admins delete site media" on storage.objects;
create policy "Admins delete site media" on storage.objects for delete to authenticated using (bucket_id='site-media' and public.is_site_admin());
