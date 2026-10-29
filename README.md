# Mobility Assist

Phone-first marketing and lead site for an independent accessible-transportation booking and coordination service at
mobilityassist.online. Next.js (App Router, static export) · React · TypeScript · Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static HTML in out/
npm run typecheck
```

## Deployment (GitHub Pages)

`npm run build` writes plain HTML to `out/`. Every push to `main` runs `.github/workflows/deploy.yml`, which builds and
publishes `out/` to GitHub Pages. `public/CNAME` attaches `mobilityassist.online`. In the repo's **Settings → Pages**, set
**Source** to **GitHub Actions** once.

## Where things live

| Path | What it is |
| --- | --- |
| `src/config/site.ts` | **Single source of truth**: phone, contact details, fees, service areas, form endpoint, Google Ads IDs, `prelaunch` flag |
| `src/config/routes.ts` | Navigation, footer links and sitemap routes |
| `src/content/faq.tsx` | FAQ entries |
| `src/components/ServiceLanding.tsx` | Shared layout for service / Google Ads landing pages |
| `src/components/RideRequestForm.tsx` | Ride request form (posts JSON to `site.requestFormEndpoint`) |
| `src/app/` | Pages: services, conversion, company and the seven legal/disclosure pages |

Every call button is a `tel:` link with `data-cta="call"` and a `data-placement` attribute so call tracking can tell
which placement drove the call. The form fires a `ma:request-submitted` window event on success; the Google Ads form
conversion listens for it and never receives any form data.

## Ride request form

The site is static, so the form needs an external endpoint (Formspree, Basin, a CRM webhook, etc.) that accepts JSON
and does its own server-side validation and spam filtering. Until `requestFormEndpoint` is set, the form is shown with
a notice and cannot be submitted. Fields sent: name, phone, email, pickup/destination ZIP, date, time, trip type,
mobility requirement, staysSeated, passengers, companions, notes, consent. Never forward these to analytics.

## Launch checklist (from the business plan)

While `prelaunch` is `true`, legal pages carry a template notice, and robots/meta block
indexing. Before setting it to `false` and spending on ads:

**Business identity**
- [ ] Confirm the legal business name and fill in `legalName`, `email`, `privacyEmail`, `hours`, `mailingAddress`, `governingState`.
- [ ] Confirm the number is fully under your control, answered as Mobility Assist, and works from US phones. Then set `phone.verified: true`.

**Service fulfilment**
- [ ] Sign agreements with initial transport partners; document real service areas and vehicle capabilities.
- [ ] Add only verified areas to `serviceAreas`.
- [ ] Plan prices and fee terms live in `plans`, `planTerms` and `fees.coordinationFee` in `src/config/site.ts`. Have counsel review the Care Plan auto-renewal wording, and fill in `fees.fareCollection` and `fees.mayReceiveProviderCompensation`.

**Legal**
- [ ] Have every legal page reviewed by US counsel for your states and actual brokerage model, and edit to match practice
      (call recording, payment handling, refunds, compensation).

**Website and ads**
- [ ] Set `requestFormEndpoint` and test a real submission end to end.
- [ ] Add `googleAdsId` and conversion labels; confirm no personal or trip data reaches Google.
- [ ] Verify domain and phone number in Google Ads and Search Console.
- [ ] Test keyboard navigation, screen reader, contrast and zoom.
- [ ] Target ads only where fulfilment is realistic.

## Copy rules baked in

- Never "we provide transportation": Mobility Assist arranges rides; independent providers perform them.
- Independence disclosure beneath every hero CTA, in the header strip, mobile call bar and footer.
- No claims of lowest prices, guaranteed pickup, 24/7 availability or nationwide coverage.
- No other company's name, logo or testimonials. No em dashes.

## Photos and logos

- Photos live in `public/images/` and are registered in `src/content/photos.ts` with alt text and credits. All are from
  Unsplash under the Unsplash License (free commercial use, no attribution required). The footer notes that people
  pictured are models. Don't add photos showing another company's logo, vehicle livery or signage.
- Final logo (B2, pin wheel with motion arc) is in `brand/logos/final/`: static and animated versions of the full
  logo and the icon, each with an inverted version for dark backgrounds. Text is converted to outlines (Inter, SIL Open
  Font License), so the files look the same everywhere. The animated SVGs spin continuously and stop for visitors who
  have reduced motion turned on. Preview page: `brand/final-logo.html`.
- On the site, `src/components/Logo.tsx` draws the same mark inline; the wheel turns twice on load and again on hover
  (`.logo-wheel` in `globals.css`). `src/app/icon.svg` is the static mark.
- Earlier concepts remain in `brand/logos/` and `brand/logos/pin/` for reference.

## SEO

Built in:

| Item | Where |
| --- | --- |
| Unique title, description and canonical URL per page | `const page = {...}` at the top of each `src/app/*/page.tsx` → `pageMetadata()` |
| Open Graph and X (Twitter) cards with a 1200×630 share image | `src/lib/metadata.ts`, image at `/opengraph-image.png` (`src/app/opengraph-image.png/route.tsx`) |
| Structured data (JSON-LD): Organization, WebSite, WebPage, BreadcrumbList, Service (4 service pages), FAQPage | `src/lib/schema.ts`, rendered by `src/components/JsonLd.tsx` |
| XML sitemap with image entries and priorities | `/sitemap.xml` (`src/app/sitemap.ts`) |
| robots.txt (blocks everything while `prelaunch` is true) | `/robots.txt` (`src/app/robots.ts`) |
| Favicon, Apple touch icon, PNG and maskable icons, web manifest | `/icon.svg`, `/apple-touch-icon.png`, `/icon-192.png`, `/icon-512.png`, `/icon-maskable-512.png`, `/manifest.webmanifest` |
| Organization logo for Google | `/logo.png` (512×512) |
| Search Console / Bing verification tags | `googleSiteVerification`, `bingSiteVerification` in `site.ts` |
| Fast images: WebP at two widths with JPEG fallback, sized to prevent layout shift | `src/components/Photo.tsx`; regenerate `*.webp` and `*-640.webp` when adding a photo |
| Semantic HTML, one `h1` per page, descriptive alt text, internal links in nav and footer | throughout |

Structured data only states what `site.ts` says. Never add ratings, reviews, prices, an address or service areas
that aren't real and verifiable: Google treats misleading markup as spam.

### To start ranking

1. Finish the launch checklist, then set `prelaunch: false` and push. Until then every page is `noindex` and
   robots.txt blocks crawling, so nothing will rank.
2. Verify the domain in Google Search Console (DNS TXT record, or paste the token into `googleSiteVerification`),
   then submit `https://mobilityassist.online/sitemap.xml`. Do the same in Bing Webmaster Tools.
3. Test a few URLs with Google's Rich Results Test and the Schema Markup Validator.
4. Authority comes from outside the site: create a Google Business Profile (service-area business, no public address
   needed), keep the name and phone identical everywhere, list in reputable directories, and earn links from local
   disability, senior-care and caregiver organizations. Add each official profile URL to `socialProfiles`.
5. Only add city or state pages for places with verified provider coverage, each with genuinely local detail.
