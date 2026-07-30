# Happy2Host EDU Africa — Headless WordPress

WordPress (headless, WPGraphQL) + Next.js frontend, built from the Figma design.

## Structure

- `/` — WordPress core (MAMP-served at `http://localhost:8888/h2h_africa/`)
- `wp-content/mu-plugins/h2h-headless/` — content model: custom post types (Training Event,
  Testimonial, Service), ACF field groups for Home/About/Services page content, CORS, and
  custom GraphQL fields (`upcomingTrainingEvents`, `featuredTestimonials`)
- `frontend/` — Next.js 16 app (App Router, TypeScript, Tailwind v4) that queries WordPress via
  `/graphql`
- `seed.php` — one-off content seed matching the Figma copy; re-runnable via
  `.bin/wp eval-file seed.php --allow-root`

## Running locally

1. Start MAMP Pro (Apache + MySQL). If Apache won't start with "bad user name mamp", it's
   because `httpd.conf`'s `User` directive was changed from `mamp` to the current macOS user —
   see the dated backup at `wp-content/../conf` if you need to compare (the file lives in
   `/Applications/MAMP/conf/apache/httpd.conf`, a **shared** file that affects all MAMP sites).
2. `cd frontend && npm run dev` — runs at `http://localhost:3000`
3. WP admin: `http://localhost:8888/h2h_africa/wp-admin` — user `admin`, password
   `H2H-africa-2026!`

## Content model

- **Pages** (Home/About/Services) carry their section copy as ACF fields, matched to the Figma
  layout section-by-section. Fixed-count repeating groups (e.g. the 4 "Why Happy2Host" reasons)
  are modelled as individually-named ACF Group fields (`why_reason_1`..`4`) since the free ACF
  plugin has no Repeater field — free ACF site, no license required.
- **Training Events, Testimonials, Services** are custom post types — real collections, editable
  and extensible from wp-admin without touching code.
- **Tips** use native WordPress posts with a `tip_category` taxonomy.
- Header nav, footer sitemap/legal links, and newsletter copy are hardcoded in the frontend
  (not CMS-managed) — they're site chrome, not content that changes often.

## Deploying to production (Plesk)

Target layout: everything under `happy2host.africa` — WordPress at `/cmsadmin`, the Next.js
frontend at `/main` (temporary; moves to the domain root later — just unset `NEXT_BASE_PATH`
when that happens). Both run on the same Plesk server, so there's no cross-origin/CORS concern
between them in production.

### 1. WordPress → `/cmsadmin`

1. In Plesk, create the domain (if not already) and, under its document root, create a
   `cmsadmin` subdirectory.
2. Deploy the repo there — either Plesk's Git integration pointed at this GitHub repo (simplest;
   set the deploy path to `cmsadmin` relative to the webroot), or SFTP.
3. Create a MySQL database + user in Plesk's Databases section.
4. Create `wp-config.php` on the server from `wp-config-sample.php` (this file is gitignored —
   it's never in the repo) with the new DB credentials.
5. Migrate the database:
   ```
   # locally
   .bin/wp db export h2h-africa.sql --allow-root

   # upload h2h-africa.sql, then on the server (Plesk gives you SSH + phpMyAdmin either works)
   wp db import h2h-africa.sql
   wp search-replace 'http://localhost:8888/h2h_africa' 'https://happy2host.africa/cmsadmin' --allow-root
   ```
   (Plesk's WordPress Toolkit extension usually ships wp-cli already; if not, install it the same
   way this project's `.bin/wp` was set up locally.)
6. Migrate `wp-content/uploads/` via SFTP/rsync — it's gitignored, so it doesn't come over with
   the code.
7. In wp-admin → Settings → General, confirm Site Address (URL) is
   `https://happy2host.africa/cmsadmin`.
8. Re-flush permalinks (Settings → Permalinks → Save) so pretty URLs and `/graphql` work under
   the new path.

### 2. Frontend → `/main`

1. In Plesk, add a Node.js application for the domain, rooted at the `main` subdirectory, with
   this repo's `frontend/` deployed there (Plesk Git integration again, or SFTP).
2. Copy `frontend/.env.production.example` to `.env.production` on the server and fill in the
   real values (already set for `/cmsadmin` + `/main` — just confirm they match).
3. `npm install && npm run build`, then let Plesk's Passenger process manager start it
   (`npm run start` / `next start`).
4. Point Plesk's Node.js app settings at port/startup as required by its Node.js extension.

### 3. Verify

- `https://happy2host.africa/main` loads the site
- `https://happy2host.africa/cmsadmin/wp-admin` logs into WordPress
- `https://happy2host.africa/cmsadmin/graphql` responds to a GraphQL query
- Images (WP media) render on the frontend (confirms the `remotePatterns` entry for the prod
  domain in `next.config.ts` is correct)

## Known follow-ups

- `/privacy-policy`, `/cookie-policy`, `/terms-of-use`, `/accessibility` are linked from the
  footer but not built (no real legal copy was provided).
- `/training`, `/tips`, `/lagos-summit`, `/contact` are intentionally lightweight — Training and
  Tips reuse the real WPGraphQL data in a simple listing; Lagos Summit and Contact are stubs
  (Contact has a working-looking form UI with no email backend wired up yet).
- A handful of dev-only console warnings about image aspect ratios (social icons, partner badge)
  are cosmetic and don't affect rendering.
