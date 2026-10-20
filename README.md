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

`pnpm check` (which `pnpm build` runs first) blocks while anything on the site
would be unverified. **Two items are blocking right now:**

1. **`club.email`** — unset. The contact form and every mailto on the site
   depend on it. Nothing else can stand in for it.
2. **`mediaReleasesOnFile`** — false. The photos show identifiable minors.
   Confirm a signed release is on file for every player shown, then set it true.

Everything else invented has been deleted rather than tagged, so there is no
placeholder text left in the UI.

### What was removed to get here

Content the club had not confirmed, taken out rather than published:

- Phone number and street address — the footer and contact page now show
  "Cape Coral, FL" and hide the rest until real values exist
- Team birth years, roster sizes, league names and season-focus lists
- The whole tryouts page, its dates, fees, kit list and evaluation criteria
  (the club is not recruiting — the season is underway)
- Sponsorship tiers and pricing
- The College Pathway's four "services", which described a programme the club
  never confirmed it runs. The funnel stays; it now describes development
  rather than promising a service.
- Tournament reports page and its invented match results
- The separate Academy/About page — Coach Leo now lives on `/coaches`

### Copy you should still read before launch

These were written for the club, not supplied by it. Nothing in them states a
fact, price or date, but they are the club's voice and should be approved:

- `club.tagline`
- `pillars` — the four "Four things we build" cards
- `teams[].blurb` — the one-line description of each squad
- `founder.coaching.lede` and `.body` — the "Developing players" section
- `pathway.blurb`, `pathway.stages[].body`, `pathway.reality`

Supplied by the club and left untouched: Coach Leo's record, honours, both
quotes, the four-point academy standard, the Instagram handle, and the sponsors.

### Optional, renders fine while empty

- `founder.coaching.proof` — a stat row for Leo's coaching record, hidden
  while empty
- `coaches[].bio` for Sebastian Lopez — shows "Full profile coming soon"
- `club.phone` / `club.address` / `club.social.facebook` — hidden while unset
- `club.founded` — the footer hides "Est." until set

### Photography

Five club photos live in `public/photos/`, each with a smaller variant for
mobile. All metadata was stripped on import (none carried GPS, but it's stripped
regardless).

`coach-leo.jpg` is cropped tight to the founder — the original had a child at
the left edge and two more in the bottom foreground, and the crop removes all
three, so his is the only identifiable face in it.

Alt text describes the action rather than naming a squad on purpose: two of the
four were shot under another club's tent at a tournament, so captioning them as
a specific Top Game team would be a guess. If you can tell me which squad is in
which photo, the captions can be made specific.

To add more photos, drop them in and mirror the existing naming — `name.jpg`
plus `name-sm.jpg` — then add an entry to `photos` in `src/data/site.ts`.

### Sponsor logos

Each mark carries its own background, so the card follows the logo rather than
one treatment being forced on all four (`logoBg` in `src/data/site.ts`):

| Sponsor | Card |
| --- | --- |
| Elevate Home Services | light — purple on white |
| Super Screen | light — transparent PNG, trimmed |
| Gulfside Marine Services | light — watercolour fades into white |
| Timeless Stone Solutions | **dark** — white wordmark on black, invisible on a light card |

Timeless was also cropped in from a 1024px square with heavy black margin so it
fills its card like the others.

### Optional

- [ ] `club.founded` — the footer hides "Est." until this is set
- [ ] Sponsor websites (`sponsors[].url`), and a `tier` for any sponsor where a
      level has actually been agreed — four sponsors are live, none has a tier
      set, because guessing one would misstate the arrangement
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

### The About page needs Coach Leo's coaching story

The page now leads with **"Developing players"** and demotes the playing career
to a short credential block below it, as asked. But that lead section is thin,
because the club has supplied a playing record and no coaching record.

Nothing has been invented to fill it. To make it the real focus of the page,
send over any of:

- How long Leo has been coaching, and when the academy started
- How many players have come through, and where they've gone on to play
- A parent or player quote
- What a session actually looks like, in his words

Numbers drop straight into `founder.coaching.proof` in `src/data/site.ts` and
render as a stat row; prose goes in `founder.coaching.body`.

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
