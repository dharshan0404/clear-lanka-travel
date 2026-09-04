create table if not exists public.customer_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text check (char_length(display_name) <= 120),
  country text check (char_length(country) <= 120),
  travel_style text check (travel_style in ('Balanced','Comfort','Budget','Adventure')),
  notes text check (char_length(notes) <= 2000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.customer_profiles enable row level security;
revoke all on table public.customer_profiles from anon;
grant select, insert, update, delete on table public.customer_profiles to authenticated;
create policy "Customers can read own profile" on public.customer_profiles for select to authenticated using ((select auth.uid()) = id);
create policy "Customers can create own profile" on public.customer_profiles for insert to authenticated with check ((select auth.uid()) = id);
create policy "Customers can update own profile" on public.customer_profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy "Customers can delete own profile" on public.customer_profiles for delete to authenticated using ((select auth.uid()) = id);
create index if not exists customer_profiles_updated_at_idx on public.customer_profiles(updated_at desc);
