# rigitrade.com — Rigitrade AG, Swiss Automotive & Mobility Group

Corporate site for Rigitrade AG (zuriauto, Carseek.ch, TrackMyCar24).
The previous metals/AOD site is preserved on the `archive/metals-site` branch (tag `metals-site-final`).

## Stack

- Next.js 16 App Router, static export (`output: "export"`, trailing slashes), Tailwind CSS 4
- Two root layouts: `src/app/(de)` serves German at `/` (`lang="de-CH"`), `src/app/(en)/en` serves English at `/en/`
- Copy lives in typed dictionaries: `src/content/de.ts`, `src/content/en.ts` (same `Dictionary` type, so a missing translation fails the build)
- URL map: `src/content/routes.ts` (from the SEO and setup doc)
- Brand tokens: `src/app/globals.css` (from the Brand-CI package, Direction A)

## URLs

| Page | German | English |
| --- | --- | --- |
| Home | `/` | `/en/` |
| About | `/ueber-uns/` | `/en/about/` |
| Brands | `/marken/` | `/en/brands/` |
| Strategy | `/strategie/` | `/en/strategy/` |
| Contact | `/kontakt/` | `/en/contact/` |
| Legal notice | `/impressum/` | `/en/legal-notice/` |
| Privacy | `/datenschutz/` | `/en/privacy/` |

Every page carries hreflang alternates (de-CH, en, x-default → German); `sitemap.xml` and `robots.txt` are generated at build.

## Photos

Masters (one per slot, named after the slot, e.g. `hero-1.jpg`) are converted to WebP in four widths:

```bash
npm run photos -- path/to/masters   # writes public/img/<slot>-<640|1080|1600|2400>.webp
```

Slots and alt texts: `src/content/photos.ts`. Credits and licences: `PHOTO-CREDITS.md`.

## Commands

```bash
npm run dev          # local dev server
npm run type-check   # tsc
npm run lint         # eslint, zero warnings
npm test             # vitest unit tests (content parity, routes, SEO limits)
npm run build        # static export to out/
npm run test:e2e     # Playwright smoke test against out/ (build first)
```

## Environment

- `NEXT_PUBLIC_SITE_URL` — canonical origin, default `https://www.rigitrade.com`
- `NEXT_PUBLIC_FORMSPREE_CONTACT_ID` — contact form endpoint; without it the form opens the visitor's mail client
