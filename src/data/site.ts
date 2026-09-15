/**
 * Single source of truth for club content.
 *
 * ⚠️ PLACEHOLDERS: every value marked `TODO` below is invented scaffolding so
 * the site renders complete. Replace with the club's real details before launch.
 */

export const club = {
  name: "Top Game Academy",
  shortName: "Top Game",
  tagline: "Cape Coral's home for developmental boys soccer",
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
  { value: "2", label: "Competitive squads", detail: "U12 & U14 boys" },
  { value: "3x", label: "Training sessions", detail: "Every week, year-round" },
  { value: "1:9", label: "Coach-to-player ratio", detail: "Small-group focus" },
  { value: "100%", label: "Licensed staff", detail: "USSF credentialed" },
] as const;

export const pillars = [
  {
    icon: "brain",
    title: "Decide Faster",
    body: "Every session is built around scanning, first touch away from pressure, and choosing the next pass before the ball arrives. We coach the moment before the moment.",
  },
  {
    icon: "zap",
    title: "Compete Harder",
    body: "Small-sided games with real stakes. Players learn to defend a lead, chase a deficit, and keep their shape when the game gets loud.",
  },
  {
    icon: "users",
    title: "Grow Together",
    body: "Two age groups, one standard. U12 trains alongside U14 so younger players see the level they're climbing toward every single week.",
  },
  {
    icon: "graduation-cap",
    title: "Play Beyond",
    body: "Development that travels — to middle school, high school, and club soccer at the next tier. We build players other programs want.",
  },
] as const;

export type Team = {
  slug: string;
  name: string;
  ageGroup: string;
  birthYears: string;
  league: string;
  season: string;
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
    season: "Fall 2026 – Spring 2027", // TODO
    coachId: "head-u12",
    accent: "electric",
    blurb:
      "The foundation years. U12 is where technique becomes instinct — we spend more minutes on the ball per session than any other group in the academy.",
    focus: [
      "Receiving on the half-turn",
      "1v1 attacking in wide areas",
      "Defending the first pass",
      "Playing out from the back in a 1-3-3-1",
    ],
    trainingDays: [
      { day: "Tuesday", time: "5:30 – 7:00 PM", location: "Field 3 — Sports Complex" },
      { day: "Thursday", time: "5:30 – 7:00 PM", location: "Field 3 — Sports Complex" },
      { day: "Saturday", time: "9:00 – 10:30 AM", location: "Field 1 — Sports Complex" },
    ],
    roster: { size: 14, note: "9v9 format — carrying 14 players for the season" },
  },
  {
    slug: "u14-boys",
    name: "U14 Boys",
    ageGroup: "U14",
    birthYears: "Born 2012–2013", // TODO: confirm against current seasonal year
    league: "Florida Youth Soccer — Competitive Division", // TODO
    season: "Fall 2026 – Spring 2027", // TODO
    coachId: "head-u14",
    accent: "gold",
    blurb:
      "The proving years. U14 moves to the full 11v11 game, where positional discipline and game management decide results as much as talent does.",
    focus: [
      "Full-field 11v11 shape and rotations",
      "Pressing triggers and rest defense",
      "Set-piece routines, attacking and defending",
      "Physical preparation and load management",
    ],
    trainingDays: [
      { day: "Monday", time: "6:00 – 7:45 PM", location: "Field 2 — Sports Complex" },
      { day: "Wednesday", time: "6:00 – 7:45 PM", location: "Field 2 — Sports Complex" },
      { day: "Saturday", time: "10:45 AM – 12:15 PM", location: "Field 1 — Sports Complex" },
    ],
    roster: { size: 18, note: "11v11 format — carrying 18 players for the season" },
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
    licenses: ["USSF B License", "United Soccer Coaches Advanced National"],
    bio: "Sets the academy curriculum across both age groups and oversees player evaluation. Fifteen years coaching youth soccer in Southwest Florida.",
    initials: "MR",
  },
  {
    id: "head-u12",
    name: "Coach Danny Oliveira",
    role: "Head Coach — U12 Boys",
    licenses: ["USSF C License", "Grassroots 9v9"],
    bio: "Former collegiate midfielder who runs the club's technical foundation program. Known for sessions where nobody stands in a line.",
    initials: "DO",
  },
  {
    id: "head-u14",
    name: "Coach Alex Whitfield",
    role: "Head Coach — U14 Boys",
    licenses: ["USSF C License", "Grassroots 11v11"],
    bio: "Leads the transition to the full-sided game and manages the U14 competitive schedule. Focused on game intelligence and set pieces.",
    initials: "AW",
  },
  {
    id: "keeper",
    name: "Coach Priya Raman",
    role: "Goalkeeping Coach",
    licenses: ["USSF Goalkeeping Level 2"],
    bio: "Runs dedicated keeper sessions for both squads, covering distribution, shot-stopping, and commanding the box.",
    initials: "PR",
  },
];

export type Fixture = {
  date: string; // ISO date
  time: string;
  team: string; // team slug
  opponent: string;
  venue: string;
  home: boolean;
  competition: string;
};

// TODO: replace with the real fixture list, or wire this to the league feed.
export const fixtures: Fixture[] = [
  { date: "2026-09-19", time: "9:00 AM", team: "u12-boys", opponent: "Fort Myers United", venue: "Cape Coral Sports Complex", home: true, competition: "League" },
  { date: "2026-09-19", time: "11:00 AM", team: "u14-boys", opponent: "Fort Myers United", venue: "Cape Coral Sports Complex", home: true, competition: "League" },
  { date: "2026-09-26", time: "10:00 AM", team: "u14-boys", opponent: "Naples SC", venue: "North Collier Regional Park", home: false, competition: "League" },
  { date: "2026-10-03", time: "9:00 AM", team: "u12-boys", opponent: "Estero Strikers", venue: "Estero Community Park", home: false, competition: "League" },
  { date: "2026-10-10", time: "10:30 AM", team: "u12-boys", opponent: "Bonita Springs FC", venue: "Cape Coral Sports Complex", home: true, competition: "League" },
  { date: "2026-10-10", time: "12:30 PM", team: "u14-boys", opponent: "Bonita Springs FC", venue: "Cape Coral Sports Complex", home: true, competition: "League" },
  { date: "2026-10-17", time: "8:30 AM", team: "u14-boys", opponent: "Punta Gorda Rovers", venue: "Cape Coral Sports Complex", home: true, competition: "Cup" },
  { date: "2026-10-24", time: "9:00 AM", team: "u12-boys", opponent: "Lehigh Acres YSC", venue: "Veterans Park", home: false, competition: "League" },
];

export const tryouts = {
  // TODO: confirm dates, pricing, and registration link
  window: "Open tryouts — Summer 2026",
  sessions: [
    { date: "2026-06-08", time: "6:00 – 7:30 PM", group: "U12 Boys", location: "Field 3 — Cape Coral Sports Complex" },
    { date: "2026-06-09", time: "6:00 – 7:45 PM", group: "U14 Boys", location: "Field 2 — Cape Coral Sports Complex" },
    { date: "2026-06-15", time: "6:00 – 7:30 PM", group: "U12 Boys — second look", location: "Field 3 — Cape Coral Sports Complex" },
    { date: "2026-06-16", time: "6:00 – 7:45 PM", group: "U14 Boys — second look", location: "Field 2 — Cape Coral Sports Complex" },
  ],
  bring: [
    "Cleats, shin guards, and both a light and dark shirt",
    "Two full water bottles — Florida evenings are no joke",
    "Completed medical release form (emailed after you register)",
    "A ball, size 4 for U12 and size 5 for U14",
  ],
  evaluated: [
    { title: "Technical", body: "First touch under pressure, passing range, and ability to beat a defender 1v1." },
    { title: "Tactical", body: "Scanning, positioning off the ball, and decision speed in small-sided games." },
    { title: "Physical", body: "Movement quality, repeat sprint ability, and recovery between reps." },
    { title: "Character", body: "Coachability, response to mistakes, and how a player treats teammates." },
  ],
  fee: "$0 to try out", // TODO
  seasonFee: "$TBD per season", // TODO: real season fee + what it covers
} as const;

export const faqs = [
  {
    q: "Who can try out?",
    a: "Any boy in the U12 or U14 age groups, regardless of current club. You do not need prior academy experience — bring your best effort and we'll evaluate from there.",
  },
  {
    q: "How much travel is involved?",
    a: "Most fixtures are within Lee and Collier counties — Fort Myers, Estero, Bonita Springs, and Naples. Expect a handful of longer trips per season for cup competition.", // TODO: confirm
  },
  {
    q: "What does the season fee cover?",
    a: "Coaching, field time, league registration, and referee fees. Uniform kits are ordered separately. Contact us for the current fee schedule and available payment plans.", // TODO
  },
  {
    q: "Do you offer financial assistance?",
    a: "Yes. We keep a limited scholarship fund so cost never decides who plays. Reach out privately and we'll handle it discreetly.", // TODO: confirm this is true
  },
  {
    q: "What if my son misses tryouts?",
    a: "Get in touch anyway. We hold roster spots open where we can and run individual looks during the preseason block.",
  },
] as const;

export const values = [
  {
    title: "Development over trophies",
    body: "We measure a season by how much better every player got, not by what's on the shelf. Minutes are earned, but nobody develops from the bench.",
  },
  {
    title: "The standard is the standard",
    body: "Same expectations for U12 and U14 — on time, prepared, and fully engaged. Habits built at twelve are the ones that show up at eighteen.",
  },
  {
    title: "Parents are partners",
    body: "Open communication, honest evaluations, and no politics. You'll always know where your son stands and what he's working on.",
  },
  {
    title: "Cape Coral first",
    body: "This is a local club for local families. We want the best players in our city to have somewhere to develop without a two-hour round trip.",
  },
] as const;
