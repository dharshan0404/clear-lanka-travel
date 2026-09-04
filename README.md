# Clear Lanka Travel

A mobile-first static website for a transparent Sri Lanka travel-help service.

## Preview

Run a local server from this directory:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173`.

The secure owner dashboard is at `http://127.0.0.1:4173/admin.html`. It uses Supabase Auth plus the `site_admins` role table. Apply `supabase/migrations/002_site_cms.sql`, then add the approved owner user to `site_admins` before signing in.

The separate traveller account is at `http://127.0.0.1:4173/customer.html`. Sign-up, sign-in, sign-out, persistent sessions and password-reset requests use Supabase Auth. The browser-safe anon key is intentionally public; security depends on Row Level Security. Never add a `service_role` key to client files.

Run `supabase/migrations/001_customer_profiles.sql` in the project SQL editor to enable private customer profiles. The migration is prepared but was not applied from this workspace. In Supabase Authentication URL Configuration, allow the exact local and production customer page URLs. Confirmation and reset email delivery depend on the project email/SMTP configuration and are not assumed to work until configured.

## Owner configuration

Update the `CONFIG` object at the top of `script.js` with the owner's real:

- WhatsApp number (country code, no `+` or spaces)
- Display phone number
- Enquiry email

The enquiry form intentionally opens the visitor's email application, so no credentials or backend are required. For production, connect the form to the owner's preferred form service or server endpoint.

## Future chat integration

The visible “Chat with us — Coming soon” affordance is intentionally nonfunctional. Its markup and dialog live near the end of `index.html`, with behavior isolated in `script.js`, so a real-time provider can replace it later.

## Going live checklist

- Add final phone, email, business/legal name, privacy and terms pages.
- Confirm the production domain and update the canonical URL, social URLs, structured data URL, `robots.txt`, and `sitemap.xml` if it differs from `https://www.clearlankatravel.com/`.
- Replace illustrative CSS scenes with licensed brand photography if desired.
- Connect the enquiry form to a production endpoint and add spam protection.
- Add analytics and consent handling if required.
- Choose hosting and a domain separately.
- Connect the final site to Google Search Console and Bing Webmaster Tools, submit the sitemap, monitor indexing, and publish useful destination/price-guide content over time. Technical SEO helps discovery but does not guarantee rankings.

## Admin CMS

The admin interface manages homepage copy, prices, services, tours/projects, hotels/stays, places, travel guidance, partners, testimonials, media uploads, contact details, themes, section visibility and section ordering. Changes persist in Supabase and published content is loaded by the public website.

Production operations should also maintain:

- managed authentication with MFA, password recovery, secure server sessions and server-enforced roles;
- a hosted database with validation, revisions, publish states, backups and audit logs;
- protected server APIs for previewing and publishing content;
- object storage and a CDN for signed image uploads, optimization and moderation;
- HTTPS hosting, environment secrets, monitoring, rate limits and CSRF protection;
- for AI chat, a server-side provider integration, moderation, retention policy and usage controls. Never put an API key in client-side files.

Real traveller accounts also require verified email flows, secure password/session handling, privacy and deletion workflows, a customer-owned database model, authoritative booking/enquiry records, and cross-device synchronization.
