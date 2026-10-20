/**
 * Single source of truth for club content.
 *
 * ⚠️ Every line tagged PLACEHOLDER is invented scaffolding, not real club data.
 * `pnpm build` FAILS while any remain — delete the tag once you've put the real
 * value in. See `pnpm check` and the launch checklist in the README.
 *
 * Anything NOT tagged is real information supplied by the club. Fabricated
 * sponsors, match reports, staff and fixtures have been removed outright rather
 * than left in as filler, because publishing them would misrepresent the club.
 */

export const club = {
  name: "Top Game Academy",
  shortName: "Top Game",
  tagline: "Boys soccer development in Cape Coral",
  city: "Cape Coral",
  state: "FL",
  founded: null as number | null, // Optional — the footer hides "Est." until this is set
  url: "https://topgameacademy.com", // from the club's own tent banner

  email: null as string | null, // REQUIRED: the club's real address — forms and every mailto depend on it
  phone: null as string | null,
  phoneHref: null as string | null,
  address: null as {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;
  } | null,
  social: {
    instagram: "https://instagram.com/topgameacademy",
    instagramHandle: "@topgameacademy",
    facebook: null as string | null,
  },
} as const;

/**
 * Drives the announcement bar and the tryout page. Flip `recruiting` to true
 * and set `nextWindow` when the club opens its next intake.
 */
export const season = {
  recruiting: false,
  status: "Season underway",
  nextWindow: null as string | null, // e.g. "Tryouts open June 2027"
} as const;

export const stats = [
  { value: "2", label: "Squads", detail: "U12 & U14 boys" },
  { value: "1", label: "Standard", detail: "Outwork everyone" },
] as const;

export const pillars = [
  {
    icon: "brain",
    title: "Decide Faster",
    body: "Scanning, first touch away from pressure, and the next pass chosen before the ball arrives.",
  },
  {
    icon: "zap",
    title: "Compete Harder",
    body: "Small-sided games with real stakes, so players learn to handle a lead and a deficit.",
  },
  {
    icon: "users",
    title: "Grow Together",
    body: "Two age groups, one standard. U12 trains alongside U14 every week.",
  },
  {
    icon: "graduation-cap",
    href: "/pathway",
    title: "Play Beyond",
    body: "Development that travels — to high school, college, and the next tier of club soccer.",
  },
] as const;

export type Team = {
  slug: string;
  name: string;
  ageGroup: string;
  coachId: string;
  accent: "electric" | "gold";
  blurb: string;
};

export const teams: Team[] = [
  {
    slug: "u12-boys",
    name: "U12 Boys",
    ageGroup: "U12",
    coachId: "leo",
    accent: "electric",
    blurb:
      "The foundation years, where technique becomes instinct. More minutes on the ball than any other group in the academy.",
  },
  {
    slug: "u14-boys",
    name: "U14 Boys",
    ageGroup: "U14",
    coachId: "leo",
    accent: "gold",
    blurb:
      "The proving years. The full 11v11 game, where positional discipline decides results as much as talent.",
  },
];

export type Coach = {
  id: string;
  name: string;
  role: string;
  licenses: string[];
  bio: string;
  initials: string;
};

// TODO: add any additional staff. `licenses` below lists playing credentials,
// not coaching licences — add real USSF/United Soccer Coaches licences when
// confirmed, and don't claim any that aren't held.
export const coaches: Coach[] = [
  {
    id: "sebastian",
    name: "Coach Sebastian Lopez",
    role: "Coach",
    licenses: [],
    bio: "", // TODO: Sebastian's background — the card shows "Full profile coming soon" until filled
    initials: "SL",
  },
  {
    id: "leo",
    name: "Coach Leo Perez",
    role: "Founder & Head Coach",
    licenses: ["Division I — U.S. Naval Academy", "Florida Mr. Soccer"],
    bio: "Southwest Florida's most prolific scorer, now coaching both squads. Built the academy around the standards that got him to Division I.",
    initials: "LP",
  },
];

/* -------------------------------------------------------------------------- */
/*  Instagram                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Post URLs (or bare shortcodes) to embed on the homepage, newest first.
 *
 * Instagram's embed endpoint needs no API key or access token for public posts,
 * so adding one is just pasting its link here:
 *
 *   "https://www.instagram.com/p/DAbc123xyz/"
 *   "https://www.instagram.com/reel/DAbc123xyz/"
 *
 * Six or so works best — the grid is three across on desktop.
 *
 * While this is empty the section falls back to the club's own match photos
 * under the same handle, which is honest: they are the club's pictures, just
 * not presented as Instagram posts.
 */
export const instagramPosts: string[] = [];

/* -------------------------------------------------------------------------- */
/*  Photography                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Club photos, supplied by the club. Each has a 640px `-sm` variant alongside
 * it for mobile; all metadata was stripped on import.
 *
 * ⚠️ These show identifiable minors. Make sure a signed media release is on
 * file for every player visible before this site goes live — see the README.
 *
 * Alt text deliberately describes the action rather than naming a squad: two
 * of the four were shot under another club's tent at a tournament, so captioning
 * them as a specific Top Game team would be a guess.
 */
export type Photo = { src: string; alt: string };

/**
 * Set true only once a signed media release is on file for every player
 * identifiable in `photos`. This gates publishing deliberately: these are
 * images of minors, and that consent is the club's to obtain, not something
 * a website build should assume.
 */
export const mediaReleasesOnFile = false; // REQUIRED: confirm signed releases for every player shown

export const photos = {
  /** Cropped tight to the founder — no player faces remain in frame. */
  coachLeo: {
    src: "/photos/coach-leo",
    alt: "Coach Leo Perez on the touchline in a Top Game Academy polo",
  },
  attack: {
    src: "/photos/attack",
    alt: "Academy players in white driving forward with the ball at a tournament",
  },
  duel: {
    src: "/photos/duel",
    alt: "Two players shoulder to shoulder competing for the ball",
  },
  celebrationCoach: {
    src: "/photos/celebration-coach",
    alt: "A coach applauding as players celebrate a goal",
  },
  celebrationTeam: {
    src: "/photos/celebration-team",
    alt: "Teammates running together to celebrate a goal",
  },
} as const satisfies Record<string, Photo>;

/** Square-cropped set used by the Instagram grid fallback. */
export const photoGrid: Photo[] = [
  photos.celebrationTeam,
  photos.attack,
  photos.celebrationCoach,
  photos.duel,
];

/* -------------------------------------------------------------------------- */
/*  Founder                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Supplied by the club — real person, real record. Unlike the rest of this file
 * these are NOT placeholders, so don't edit the achievements casually.
 *
 * TODO: confirm the award years. The text has the Gatorade award in his junior
 * year and Mr. Soccer as a senior, while the honours list dates Gatorade to
 * 2019 — worth checking both seasons line up before publishing.
 */
export const founder = {
  name: "Leo Perez",
  shortName: "Coach Leo",
  role: "Founder & Head Coach",
  initials: "LP",
  headline: "Florida's Mr. Soccer. Navy Division I.",
  tagline: "What he does now matters more.",

  /* ---- Coaching: the main story on the About page ---- */
  coaching: {
    lede: "Leo built Top Game Academy to be the environment he wanted locally — small groups, real coaching, and a standard that doesn't move.",
    body: [
      "He coaches both squads himself. That is deliberate: a hundred players spread across eight teams is a business model, not a development plan.",
      "The work is the same every week. Technique under pressure, decisions made a beat earlier than last season, and the habits that still hold up when a game gets loud.",
    ],
    /**
     * PLACEHOLDER: the club should supply specifics — how long he has been
     * coaching, how many players have come through, where they have gone on to
     * play, and a parent or player voice. This section is the focus of the page
     * and it is thin until that lands. Nothing is invented here on purpose.
     */
    proof: [] as { value: string; label: string }[], // TODO: coaching record — the stat row is hidden while empty
  },

  /* ---- Playing career: credential, deliberately compact ---- */
  playing: {
    summary:
      "At Mariner High School in Cape Coral he scored a school-record 153 goals, was named Gatorade Florida Boys Soccer Player of the Year as a junior and Florida's Mr. Soccer as a senior — the first Lee County athlete to win it since 1993 — then played Division I soccer at the United States Naval Academy.",
    closer:
      "That is the short version, and it is the least interesting thing about him now.",
  },

  // TODO: the club supplied this unattributed. Name the coach if you have
  // permission — an attributed quote carries far more weight.
  quote: {
    text: "Leo with the ball at his feet is unlike any other player I've coached in 26 years.",
    source: "His high school coach",
  },

  closing: {
    text: "If you don't work hard, you're not going to get where you want to be.",
    source: "Coach Leo",
  },

  honors: [
    "Gatorade Florida Boys Soccer Player of the Year",
    "Florida Mr. Soccer (Florida Dairy Farmers)",
    "2x All-American",
    "3x SWFL News-Press Player of the Year",
    "SWFL News-Press Athlete of the Year",
    "Florida Class 3A and Class 4A Player of the Year",
    "Division I Soccer, United States Naval Academy",
  ],

  records: [
    { value: "153", label: "Career goals" },
    { value: "71", label: "In a season" },
    { value: "68", label: "Assists" },
    { value: "15", label: "Hat tricks" },
  ],

  standard: [
    {
      title: "Player development first",
      body: "Elite technical skill, speed and game IQ, taught by someone who has played at the highest level.",
    },
    {
      title: "A competitive environment",
      body: "Training together and competing in tournaments across Florida.",
    },
    {
      title: "Character and mindset",
      body: "Discipline, accountability and confidence, on and off the field.",
    },
    {
      title: "A pathway forward",
      body: "Preparing players for high school, college and beyond.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*  College Pathway                                                            */
/* -------------------------------------------------------------------------- */

export const pathway = {
  blurb:
    "Most players never get a clear picture of how college soccer actually works. This is the track from first touch to a college roster.",
  /** Ordered widest-to-narrowest — the page renders these as a funnel. */
  stages: [
    {
      age: "U12",
      label: "Everyone starts here",
      title: "Foundation",
      body: "Technique and habits, built before any of it is about recruiting.",
    },
    {
      age: "U14",
      label: "The ones who do the work",
      title: "Development",
      body: "The full-sided game, and the decisions that come with it.",
    },
    {
      age: "High school",
      label: "The ones who keep showing up",
      title: "Exposure",
      body: "Competing at a level that gets a player seen.",
    },
    {
      age: "College",
      label: "Where the funnel leads",
      title: "Commitment",
      body: "A player ready for the standard a college program expects.",
    },
  ],
  /**
   * The funnel narrows for real. Saying so plainly is deliberate — implying
   * guaranteed placement would be untrue.
   */
  reality:
    "A funnel narrows. Most players who start at U12 won't play college soccer — here or anywhere. What we control is the standard they're held to while they're with us.",
} as const;

/* -------------------------------------------------------------------------- */
/*  Sponsors                                                                   */
/* -------------------------------------------------------------------------- */

export type Sponsor = {
  name: string;
  /** Omit until the club confirms a level — don't guess one. */
  tier?: "headline" | "club" | "community";
  note?: string;
  logo?: string;
  url?: string;
};

export const sponsors: Sponsor[] = [
  // TODO: add each sponsor's website, and a `tier` where one has been agreed.
  {
    name: "Elevate Home Services",
    note: "AC · Heat · Plumbing · Electric",
    logo: "/brand/sponsors/elevate-home-services.png",
  },
  {
    name: "Super Screen",
    note: "The screen that lasts",
    logo: "/brand/sponsors/super-screen.png",
  },
  {
    name: "Gulfside Marine Services",
    logo: "/brand/sponsors/gulfside-marine.png",
  },
  {
    name: "Timeless Stone Solutions LLC",
    note: "Resonating with timeless aesthetics",
    logo: "/brand/sponsors/timeless-stone.png",
  },
];
