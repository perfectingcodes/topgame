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
  url: "https://topgameacademy.com", // PLACEHOLDER: real domain

  email: "info@topgameacademy.com", // PLACEHOLDER
  phone: "(239) 555-0147", // PLACEHOLDER
  phoneHref: "+12395550147", // PLACEHOLDER
  address: {
    line1: "Cape Coral Sports Complex",
    line2: "1410 SW 6th Pl", // PLACEHOLDER
    city: "Cape Coral",
    state: "FL",
    zip: "33991",
  },
  social: {
    instagram: "https://instagram.com/topgameacademy", // PLACEHOLDER
    facebook: "https://facebook.com/topgameacademy", // PLACEHOLDER
  },
} as const;

export const stats = [
  { value: "2", label: "Squads", detail: "U12 & U14 boys" },
  { value: "D-I", label: "Coaching", detail: "Navy, Division I" },
  { value: "153", label: "Career goals", detail: "Founder's state record" },
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
  birthYears: string;
  coachId: string;
  accent: "electric" | "gold";
  blurb: string;
  focus: string[];
  roster: { size: number; note: string };
};

export const teams: Team[] = [
  {
    slug: "u12-boys",
    name: "U12 Boys",
    ageGroup: "U12",
    birthYears: "Born 2014–2015", // PLACEHOLDER: confirm against the current seasonal year
    coachId: "leo",
    accent: "electric",
    blurb:
      "The foundation years, where technique becomes instinct. More minutes on the ball than any other group in the academy.",
    focus: [
      "Receiving on the half-turn",
      "1v1 in wide areas",
      "Defending the first pass",
      "Playing out from the back",
    ],
    roster: { size: 14, note: "9v9" }, // PLACEHOLDER: roster size
  },
  {
    slug: "u14-boys",
    name: "U14 Boys",
    ageGroup: "U14",
    birthYears: "Born 2012–2013", // PLACEHOLDER: confirm against the current seasonal year
    coachId: "leo",
    accent: "gold",
    blurb:
      "The proving years. The full 11v11 game, where positional discipline decides results as much as talent.",
    focus: [
      "11v11 shape and rotations",
      "Pressing triggers",
      "Set pieces, both ends",
      "Physical preparation",
    ],
    roster: { size: 18, note: "11v11" }, // PLACEHOLDER: roster size
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
    id: "leo",
    name: "Coach Leo Perez",
    role: "Founder & Head Coach",
    licenses: ["Division I — U.S. Naval Academy", "Florida Mr. Soccer"],
    bio: "Southwest Florida's most prolific scorer, now coaching both squads. Built the academy around the standards that got him to Division I.",
    initials: "LP",
  },
];

export const tryouts = {
  /** Empty = dates not announced yet; the page shows a register-interest state. */
  sessions: [] as {
    date: string;
    time: string;
    group: string;
    location: string;
  }[],
  bring: [
    "Cleats, shin guards, a light and a dark shirt",
    "Two full water bottles",
    "Medical release form (emailed after you register)",
    "A ball — size 4 for U12, size 5 for U14",
  ],
  evaluated: [
    {
      title: "Technical",
      body: "First touch under pressure, passing range, 1v1.",
    },
    { title: "Tactical", body: "Scanning, positioning, decision speed." },
    { title: "Physical", body: "Movement quality and repeat sprint ability." },
    { title: "Character", body: "Coachability and response to mistakes." },
  ],
  seasonFee: "$TBD per season", // PLACEHOLDER: season fee and what it covers
} as const;

export const faqs = [
  {
    q: "Who can try out?",
    a: "Any boy in the U12 or U14 age group, from any club or none. No prior academy experience needed.",
  },
  {
    q: "What does the season fee cover?",
    a: "Coaching, field time, and competition entry. Kits are ordered separately. Get in touch for the current fee schedule.", // PLACEHOLDER: confirm what the fee actually covers
  },
  {
    q: "What if my son misses tryouts?",
    a: "Get in touch anyway. We run individual looks during preseason.",
  },
] as const;

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
export const mediaReleasesOnFile = false; // PLACEHOLDER: confirm releases before launch

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

export const photoReel: Photo[] = [
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
    proof: [] as { value: string; label: string }[], // PLACEHOLDER: coaching record
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
    "Most players don't get recruited because nobody showed them how it works. This is a structured track from U12 through high school.",
  // TODO: confirm these match what the club actually delivers before publishing.
  pillars: [
    {
      title: "Player Profile",
      body: "Position, measurables, academics, and a highlight reel cut from real match footage.",
    },
    {
      title: "Academic Guidance",
      body: "NCAA and NAIA eligibility walked through early, while grades can still move.",
    },
    {
      title: "Exposure",
      body: "Targeted showcases. Two events that fit beat eight that don't.",
    },
    {
      title: "Family Education",
      body: "Divisions, timelines, scholarships, and what college soccer actually costs.",
    },
  ],
  /** Ordered widest-to-narrowest — the page renders these as a funnel. */
  stages: [
    {
      age: "U12",
      label: "Everyone starts here",
      title: "Foundation",
      body: "Technique and habits. No recruiting talk yet.",
    },
    {
      age: "U14",
      label: "The ones who do the work",
      title: "Profile",
      body: "Video starts, the profile is built, eligibility is explained.",
    },
    {
      age: "High school",
      label: "The ones who keep showing up",
      title: "Exposure",
      body: "Showcase planning and coach outreach, continuing after a player ages out.",
    },
    {
      age: "College",
      label: "Where the funnel leads",
      title: "Commitment",
      body: "Film, grades, a target list, and a family who understands the process.",
    },
  ],
  /**
   * The funnel narrows for real. Saying so plainly is deliberate — the club's
   * voice elsewhere is honest evaluation, and implying guaranteed placement
   * would be both untrue and the thing every other academy does.
   */
  reality:
    "A funnel narrows. Most players who start at U12 won't play college soccer — here or anywhere. What we control is that nobody reaches seventeen and finds out the door closed at fourteen.",
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
  /**
   * Which card the mark needs behind it. Several of these logos bake in their
   * own background, so one uniform card would break at least one of them:
   * Timeless is a white wordmark on black and disappears on a light card.
   */
  logoBg?: "light" | "dark";
};

export const sponsors: Sponsor[] = [
  // TODO: add each sponsor's website, and a `tier` where one has been agreed.
  {
    name: "Elevate Home Services",
    note: "AC · Heat · Plumbing · Electric",
    logo: "/brand/sponsors/elevate-home-services.png",
    logoBg: "light",
  },
  {
    name: "Super Screen",
    note: "The screen that lasts",
    logo: "/brand/sponsors/super-screen.png",
    logoBg: "light",
  },
  {
    name: "Gulfside Marine Services",
    logo: "/brand/sponsors/gulfside-marine.png",
    logoBg: "light",
  },
  {
    name: "Timeless Stone Solutions LLC",
    note: "Resonating with timeless aesthetics",
    logo: "/brand/sponsors/timeless-stone.png",
    logoBg: "dark",
  },
];

export const sponsorTiers = [
  {
    name: "Headline",
    price: "Let's talk",
    items: [
      "Logo on both match kits",
      "Named on every fixture post",
      "Banner at home matches",
      "Logo on this site",
    ],
  },
  {
    name: "Club",
    price: "Let's talk",
    items: [
      "Logo on training tops",
      "Quarterly social feature",
      "Banner at home matches",
      "Logo on this site",
    ],
  },
  {
    name: "Community",
    price: "Let's talk",
    items: [
      "Logo on this site",
      "Match-day shout-out",
      "Supports the scholarship fund",
    ],
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Tournament reports                                                         */
/* -------------------------------------------------------------------------- */

export type Article = {
  slug: string;
  title: string;
  date: string; // ISO
  team: string; // team slug, or "club"
  tournament: string;
  excerpt: string;
  body: string[];
};

/**
 * Empty until the club writes real reports — the page shows a "first reports
 * coming" state.
 *
 * When you do write them: decide a policy on naming players first. Publishing
 * the full names of minors is a real consideration for a youth club (first
 * names only, or written parental consent).
 */
export const articles: Article[] = [];
