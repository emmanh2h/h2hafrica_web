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

## Known follow-ups

- `/privacy-policy`, `/cookie-policy`, `/terms-of-use`, `/accessibility` are linked from the
  footer but not built (no real legal copy was provided).
- `/training`, `/tips`, `/lagos-summit`, `/contact` are intentionally lightweight — Training and
  Tips reuse the real WPGraphQL data in a simple listing; Lagos Summit and Contact are stubs
  (Contact has a working-looking form UI with no email backend wired up yet).
- A handful of dev-only console warnings about image aspect ratios (social icons, partner badge)
  are cosmetic and don't affect rendering.
