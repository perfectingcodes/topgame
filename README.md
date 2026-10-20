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

## Before publishing

`pnpm build` **fails** while any `PLACEHOLDER` tag remains in
[`src/data/site.ts`](src/data/site.ts). Run `pnpm check` on its own to list
what's outstanding. Replace the value, delete the tag on that line, rebuild.

That guard exists so invented contact details can't reach a live site by
accident. `SKIP_CONTENT_CHECK=1 pnpm build` bypasses it for a local preview —
never for something you're publishing.

### Required (the build blocks on these)

- [ ] **Media releases for the team photos.** `public/photos/` shows
      identifiable minors. Set `mediaReleasesOnFile` to `true` in
      [`src/data/site.ts`](src/data/site.ts) only once a signed release is on
      file for every player visible, then delete the tag on that line. The build
      blocks until you do — deliberately.

- [ ] Email, phone, and street address
- [ ] Production domain (`club.url`) — also used for canonical URLs and sitemap
- [ ] Instagram and Facebook URLs
- [ ] Team birth years, confirmed against the current seasonal year
- [ ] Roster sizes for both squads
- [ ] Season fee, and what it covers (also referenced in the FAQ)

### Photography

Four club photos live in `public/photos/`, each with a 640px `-sm` variant for
mobile. All metadata was stripped on import (none carried GPS, but it's stripped
regardless).

Alt text describes the action rather than naming a squad on purpose: two of the
four were shot under another club's tent at a tournament, so captioning them as
a specific Top Game team would be a guess. If you can tell me which squad is in
which photo, the captions can be made specific.

To add more photos, drop them in and mirror the existing naming — `name.jpg`
plus `name-sm.jpg` — then add an entry to `photos` in `src/data/site.ts`.

### Optional

- [ ] `club.founded` — the footer hides "Est." until this is set
- [ ] Real sponsors (`sponsors`) — the page shows a "be our first partner" state
      while the list is empty
- [ ] Tournament reports (`articles`) — the page shows a "first reports coming"
      state while empty
- [ ] Tryout dates (`tryouts.sessions`) — the page invites families to register
      interest while empty
- [ ] Additional coaching staff (`coaches`)
- [ ] Coaching licences — `coaches[].licenses` currently lists Coach Leo's
      *playing* credentials. Add real USSF / United Soccer Coaches licences when
      confirmed, and don't claim any that aren't held.
- [ ] A higher-resolution or vector crest (see above)

### What was removed rather than left as filler

Earlier drafts contained invented sponsors, match reports, fixtures and
coaching staff. Publishing those would have misrepresented the club, so they
were deleted rather than shipped as placeholder text. The pages that displayed
them now render honest empty states instead.

### Founder content

Coach Leo's record on the About page is real information supplied by the club —
it is **not** placeholder text, so don't edit the achievements casually. Two
things are worth confirming before launch:

- The award years. The story has the Gatorade award in his junior year and Mr.
  Soccer as a senior, while the honours list dates Gatorade to 2019.
- The high school coach's quote is currently unattributed. An attributed quote
  carries far more weight — name the coach if you have permission.

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
