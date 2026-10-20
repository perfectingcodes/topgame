# Top Game Academy

Website for Top Game Academy — a boys soccer club in Cape Coral, Florida, fielding
U12 and U14 squads.

React 19 + Vite + Tailwind 4 + wouter. Every page is prerendered to static HTML at
build time, so the site deploys as a plain folder of files.

## Commands

```bash
pnpm dev        # dev server
pnpm build      # client build → SSR build → prerender to dist/public
pnpm serve      # preview the production build
pnpm typecheck  # tsc --noEmit
pnpm brand      # regenerate brand assets from the crest
```

`pnpm build` emits `dist/public/` containing one `index.html` per route plus
`sitemap.xml`, `robots.txt`, and a `404.html` fallback for deep links.

## Brand identity

Pulled directly from the club crest — navy shield, electric-blue lightning bolts,
gold panels, red outline, silver ball. Tokens live in `src/styles.css` under
`@theme`.

| Role | Token | Hex |
| --- | --- | --- |
| Primary surface | `navy-950` / `navy-900` | `#07101d` / `#0c1a2c` |
| Accent (bolts, links) | `electric-500` | `#31a9e0` |
| Highlight, CTAs | `gold-500` | `#fdc82f` |
| Urgency (tryouts) | `flare-500` | `#e0342c` |
| Body text | `silver-200` / `silver-400` | `#dbe4ed` / `#9aabbd` |

**Type** — Barlow Condensed (bold italic, uppercase) for display, matching the
slanted lettering in the wordmark. Barlow for body copy.

**Motifs** — an `-8deg` skew on buttons and pills echoing the italic wordmark and
the bolts; faint diagonal "pitch lines" on dark sections; the crest used as an
oversized watermark.

### Logo artwork

The official crest lives at `public/brand/logo.png` — background removed and
cropped from the supplied JPEG. `favicon-32.png`, `apple-touch-icon.png`,
`icon-512.png`, and the `og.png` share card are all generated from it.

`src/components/Logo.tsx` also carries a vector crest built from the same
geometry. It renders in the prerendered HTML and is replaced by the real artwork
once that loads, so there is never a broken-image flash.

**Resolution note:** the source was a 447×447 JPEG, leaving the crest 438×373
after cropping. That is sharp everywhere on a standard display and in the header
and footer on any display, but the large hero crest will look slightly soft on a
retina screen. If the club has the original vector (AI/EPS/SVG) or a PNG of
1000px or more, point the generator at it and every size is re-cut:

```bash
pnpm brand path/to/higher-res-crest.png
```

## Before launch — replace the placeholder content

All club content lives in **`src/data/site.ts`**. The values below are invented
scaffolding so the site renders complete; search the file for `TODO`.

- [ ] Phone, email, and street address (`club`)
- [ ] Founding year and production domain (`club.founded`, `club.url`)
- [ ] Instagram / Facebook URLs (`club.social`)
- [ ] Real coaching staff — names, roles, licences, bios (`coaches`)
- [ ] Team birth years and leagues (`teams`)
- [ ] Training days, times, and field assignments (`teams[].trainingDays`)
      — training times live on the Teams pages; there is no fixture list
- [ ] Tryout dates, tryout fee, and season fee (`tryouts`)
- [ ] College Pathway details — confirm the four components match what the club
      actually delivers (`pathway`)
- [ ] Real sponsors and package pricing (`sponsors`, `sponsorTiers`); add logo
      files to `public/brand/sponsors/` if you want marks instead of wordmarks
- [ ] Real tournament reports (`articles`)
- [ ] Confirm the FAQ answers are accurate — especially travel expectations and
      whether financial assistance is genuinely offered (`faqs`)
- [ ] Supply a higher-resolution or vector version of the crest (see above)

### Naming players

The placeholder tournament reports deliberately never name individual players.
Publishing the full names of minors is a real decision for a youth club — settle
on a policy (first names only, or written parental consent) before writing real
match reports.

### Forms

The tryout and contact forms currently open the visitor's mail client with a
prefilled message, so nothing is silently dropped. Point them at a real endpoint
(Formspree, Netlify Forms, or the club's registration platform) before launch —
see the `TODO` in `src/pages/Tryouts.tsx` and `src/pages/Contact.tsx`.

## Deploying

`dist/public` is a static folder — Netlify, Vercel, Cloudflare Pages, or S3 all
work with no configuration. Point the host's 404 handler at `404.html` so
client-side deep links resolve.
