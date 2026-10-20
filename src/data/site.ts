/**
 * Single source of truth for club content.
 *
 * ⚠️ PLACEHOLDERS: every value marked `TODO` below is invented scaffolding so
 * the site renders complete. Replace with the club's real details before launch.
 */

export const club = {
  name: "Top Game Academy",
  shortName: "Top Game",
  tagline: "Boys soccer development in Cape Coral",
  city: "Cape Coral",
  state: "FL",
  founded: 2019, // TODO: real founding year
  url: "https://topgameacademy.com", // TODO: real domain

  // TODO: replace all contact details
  email: "info@topgameacademy.com",
  phone: "(239) 555-0147",
  phoneHref: "+12395550147",
  address: {
    line1: "Cape Coral Sports Complex",
    line2: "1410 SW 6th Pl",
    city: "Cape Coral",
    state: "FL",
    zip: "33991",
  },
  social: {
    instagram: "https://instagram.com/topgameacademy",
    facebook: "https://facebook.com/topgameacademy",
  },
} as const;

export const stats = [
  { value: "2", label: "Squads", detail: "U12 & U14 boys" },
  { value: "3x", label: "Sessions a week", detail: "Year-round" },
  { value: "1:9", label: "Coach to player", detail: "Small groups" },
  { value: "100%", label: "Licensed staff", detail: "USSF credentialed" },
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
  league: string;
  coachId: string;
  accent: "electric" | "gold";
  blurb: string;
  focus: string[];
  trainingDays: { day: string; time: string; location: string }[];
  roster: { size: number; note: string };
};

export const teams: Team[] = [
  {
    slug: "u12-boys",
    name: "U12 Boys",
    ageGroup: "U12",
    birthYears: "Born 2014–2015", // TODO: confirm against current seasonal year
    league: "Florida Youth Soccer — Development Division", // TODO
    coachId: "head-u12",
    accent: "electric",
    blurb:
      "The foundation years, where technique becomes instinct. More minutes on the ball than any other group in the academy.",
    focus: [
      "Receiving on the half-turn",
      "1v1 in wide areas",
      "Defending the first pass",
      "Playing out from the back",
    ],
    trainingDays: [
      { day: "Tuesday", time: "5:30 – 7:00 PM", location: "Field 3" },
      { day: "Thursday", time: "5:30 – 7:00 PM", location: "Field 3" },
      { day: "Saturday", time: "9:00 – 10:30 AM", location: "Field 1" },
    ],
    roster: { size: 14, note: "9v9 — 14 players" },
  },
  {
    slug: "u14-boys",
    name: "U14 Boys",
    ageGroup: "U14",
    birthYears: "Born 2012–2013", // TODO: confirm against current seasonal year
    league: "Florida Youth Soccer — Competitive Division", // TODO
    coachId: "head-u14",
    accent: "gold",
    blurb:
      "The proving years. The full 11v11 game, where positional discipline decides results as much as talent.",
    focus: [
      "11v11 shape and rotations",
      "Pressing triggers",
      "Set pieces, both ends",
      "Physical preparation",
    ],
    trainingDays: [
      { day: "Monday", time: "6:00 – 7:45 PM", location: "Field 2" },
      { day: "Wednesday", time: "6:00 – 7:45 PM", location: "Field 2" },
      { day: "Saturday", time: "10:45 AM – 12:15 PM", location: "Field 1" },
    ],
    roster: { size: 18, note: "11v11 — 18 players" },
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

// TODO: replace with the club's actual staff, licenses, and bios.
export const coaches: Coach[] = [
  {
    id: "director",
    name: "Coach Marcus Reyes",
    role: "Technical Director",
    licenses: ["USSF B License"],
    bio: "Sets the curriculum across both age groups. Fifteen years coaching in Southwest Florida.",
    initials: "MR",
  },
  {
    id: "head-u12",
    name: "Coach Danny Oliveira",
    role: "Head Coach — U12 Boys",
    licenses: ["USSF C License"],
    bio: "Former collegiate midfielder. Runs sessions where nobody stands in a line.",
    initials: "DO",
  },
  {
    id: "head-u14",
    name: "Coach Alex Whitfield",
    role: "Head Coach — U14 Boys",
    licenses: ["USSF C License"],
    bio: "Leads the move to the full-sided game. Focused on game intelligence and set pieces.",
    initials: "AW",
  },
  {
    id: "keeper",
    name: "Coach Priya Raman",
    role: "Goalkeeping Coach",
    licenses: ["USSF Goalkeeping L2"],
    bio: "Dedicated keeper sessions for both squads — distribution, shot-stopping, commanding the box.",
    initials: "PR",
  },
];

export const tryouts = {
  // TODO: confirm dates, pricing, and registration link
  window: "Open tryouts — Summer 2026",
  sessions: [
    {
      date: "2026-06-08",
      time: "6:00 – 7:30 PM",
      group: "U12 Boys",
      location: "Field 3",
    },
    {
      date: "2026-06-09",
      time: "6:00 – 7:45 PM",
      group: "U14 Boys",
      location: "Field 2",
    },
    {
      date: "2026-06-15",
      time: "6:00 – 7:30 PM",
      group: "U12 Boys — second look",
      location: "Field 3",
    },
    {
      date: "2026-06-16",
      time: "6:00 – 7:45 PM",
      group: "U14 Boys — second look",
      location: "Field 2",
    },
  ],
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
  fee: "$0 to try out", // TODO
  seasonFee: "$TBD per season", // TODO: real season fee + what it covers
} as const;

export const faqs = [
  {
    q: "Who can try out?",
    a: "Any boy in the U12 or U14 age group, from any club or none. No prior academy experience needed.",
  },
  {
    q: "What does the season fee cover?",
    a: "Coaching, field time, league registration, and referees. Kits are ordered separately. Ask us for the current fee schedule.", // TODO
  },
  {
    q: "Do you offer financial assistance?",
    a: "Yes — a limited scholarship fund, handled privately. Cost shouldn't decide who plays.", // TODO: confirm this is true
  },
  {
    q: "What if my son misses tryouts?",
    a: "Get in touch anyway. We run individual looks during preseason.",
  },
] as const;

export const values = [
  {
    title: "Development over trophies",
    body: "A season is measured by how much better every player got.",
  },
  {
    title: "The standard is the standard",
    body: "Same expectations for U12 and U14 — on time, prepared, engaged.",
  },
  {
    title: "Parents are partners",
    body: "Honest evaluations and no politics. You'll always know where your son stands.",
  },
  {
    title: "Cape Coral first",
    body: "A local club, so the best players here don't need a two-hour round trip.",
  },
] as const;

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
  tier: "headline" | "club" | "community";
  note: string;
};

// TODO: replace with the club's real sponsors — and add logo files to
// public/brand/sponsors/ if you want marks instead of wordmarks.
export const sponsors: Sponsor[] = [
  { name: "Coastal Auto Group", tier: "headline", note: "Kit sponsor" },
  { name: "Cape Physical Therapy", tier: "club", note: "Medical partner" },
  { name: "Gulf Coast Dental", tier: "club", note: "Travel support" },
  { name: "Pelican Pizza Co.", tier: "community", note: "Match-day partner" },
  { name: "Riverside Realty", tier: "community", note: "Equipment fund" },
  { name: "Bayview Landscaping", tier: "community", note: "Field maintenance" },
];

export const sponsorTiers = [
  {
    name: "Headline",
    price: "From $2,500 / season", // TODO
    items: [
      "Logo on both match kits",
      "Named on every fixture post",
      "Banner at home matches",
      "Logo on this site",
    ],
  },
  {
    name: "Club",
    price: "From $1,000 / season", // TODO
    items: [
      "Logo on training tops",
      "Quarterly social feature",
      "Banner at home matches",
      "Logo on this site",
    ],
  },
  {
    name: "Community",
    price: "From $250 / season", // TODO
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
 * TODO: replace with real tournament write-ups.
 *
 * Note: these placeholders deliberately don't name individual players. Publishing
 * the full names of minors is a real consideration for a youth club — decide on a
 * policy (first names only, or parental consent) before writing real reports.
 */
export const articles: Article[] = [
  {
    slug: "gulf-coast-cup-u14-semifinal",
    title: "U14s reach Gulf Coast Cup semi-final",
    date: "2026-08-30",
    team: "u14-boys",
    tournament: "Gulf Coast Cup",
    excerpt:
      "Four matches in two days, one shootout, and a squad that looked nothing like the group that started preseason.",
    body: [
      "The U14s went in as the least experienced side in their bracket and came out in the final four. That says more about the group's application than any single scoreline.",
      "Saturday was about surviving the heat as much as the opposition. The shape held and both games were seen out without conceding late. Sunday's quarter-final went to penalties.",
      "Three of the goals conceded across the weekend came from our own attacking transitions. Rest defence goes straight into the next training block.",
    ],
  },
  {
    slug: "sunshine-state-showcase-u12",
    title: "U12s unbeaten at the Sunshine State Showcase",
    date: "2026-08-16",
    team: "u12-boys",
    tournament: "Sunshine State Showcase",
    excerpt:
      "Three matches, no defeats, and the first real sign that playing out from the back is becoming instinct.",
    body: [
      "The instruction going in was simple: play out from the back every time, including when it's uncomfortable.",
      "They did — and it cost a goal in the first match. It also produced the best twenty minutes this group has played, in the third.",
      "Unbeaten is a nice line for a report. The more useful one is that nobody kicked it long when the game got hard.",
    ],
  },
  {
    slug: "preseason-friendlies-recap",
    title: "What we learned from preseason",
    date: "2026-07-26",
    team: "club",
    tournament: "Preseason friendlies",
    excerpt:
      "Six friendlies across both squads before a competitive ball was kicked.",
    body: [
      "Friendlies exist to find problems while they're still cheap. Three came up repeatedly.",
      "Both groups defended the first pass well and the second pass poorly — the press triggered, then cover arrived late. U14 set-piece delivery needs dedicated time, not ten minutes tacked onto the end of a session.",
      "Most encouraging: fitness was not the limiting factor in any of the six. In August, in Florida, that is not nothing.",
    ],
  },
];
