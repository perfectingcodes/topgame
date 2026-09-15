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
    href: "/pathway",
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
      {
        day: "Tuesday",
        time: "5:30 – 7:00 PM",
        location: "Field 3 — Sports Complex",
      },
      {
        day: "Thursday",
        time: "5:30 – 7:00 PM",
        location: "Field 3 — Sports Complex",
      },
      {
        day: "Saturday",
        time: "9:00 – 10:30 AM",
        location: "Field 1 — Sports Complex",
      },
    ],
    roster: {
      size: 14,
      note: "9v9 format — carrying 14 players for the season",
    },
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
      {
        day: "Monday",
        time: "6:00 – 7:45 PM",
        location: "Field 2 — Sports Complex",
      },
      {
        day: "Wednesday",
        time: "6:00 – 7:45 PM",
        location: "Field 2 — Sports Complex",
      },
      {
        day: "Saturday",
        time: "10:45 AM – 12:15 PM",
        location: "Field 1 — Sports Complex",
      },
    ],
    roster: {
      size: 18,
      note: "11v11 format — carrying 18 players for the season",
    },
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
  {
    date: "2026-09-19",
    time: "9:00 AM",
    team: "u12-boys",
    opponent: "Fort Myers United",
    venue: "Cape Coral Sports Complex",
    home: true,
    competition: "League",
  },
  {
    date: "2026-09-19",
    time: "11:00 AM",
    team: "u14-boys",
    opponent: "Fort Myers United",
    venue: "Cape Coral Sports Complex",
    home: true,
    competition: "League",
  },
  {
    date: "2026-09-26",
    time: "10:00 AM",
    team: "u14-boys",
    opponent: "Naples SC",
    venue: "North Collier Regional Park",
    home: false,
    competition: "League",
  },
  {
    date: "2026-10-03",
    time: "9:00 AM",
    team: "u12-boys",
    opponent: "Estero Strikers",
    venue: "Estero Community Park",
    home: false,
    competition: "League",
  },
  {
    date: "2026-10-10",
    time: "10:30 AM",
    team: "u12-boys",
    opponent: "Bonita Springs FC",
    venue: "Cape Coral Sports Complex",
    home: true,
    competition: "League",
  },
  {
    date: "2026-10-10",
    time: "12:30 PM",
    team: "u14-boys",
    opponent: "Bonita Springs FC",
    venue: "Cape Coral Sports Complex",
    home: true,
    competition: "League",
  },
  {
    date: "2026-10-17",
    time: "8:30 AM",
    team: "u14-boys",
    opponent: "Punta Gorda Rovers",
    venue: "Cape Coral Sports Complex",
    home: true,
    competition: "Cup",
  },
  {
    date: "2026-10-24",
    time: "9:00 AM",
    team: "u12-boys",
    opponent: "Lehigh Acres YSC",
    venue: "Veterans Park",
    home: false,
    competition: "League",
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
      location: "Field 3 — Cape Coral Sports Complex",
    },
    {
      date: "2026-06-09",
      time: "6:00 – 7:45 PM",
      group: "U14 Boys",
      location: "Field 2 — Cape Coral Sports Complex",
    },
    {
      date: "2026-06-15",
      time: "6:00 – 7:30 PM",
      group: "U12 Boys — second look",
      location: "Field 3 — Cape Coral Sports Complex",
    },
    {
      date: "2026-06-16",
      time: "6:00 – 7:45 PM",
      group: "U14 Boys — second look",
      location: "Field 2 — Cape Coral Sports Complex",
    },
  ],
  bring: [
    "Cleats, shin guards, and both a light and dark shirt",
    "Two full water bottles — Florida evenings are no joke",
    "Completed medical release form (emailed after you register)",
    "A ball, size 4 for U12 and size 5 for U14",
  ],
  evaluated: [
    {
      title: "Technical",
      body: "First touch under pressure, passing range, and ability to beat a defender 1v1.",
    },
    {
      title: "Tactical",
      body: "Scanning, positioning off the ball, and decision speed in small-sided games.",
    },
    {
      title: "Physical",
      body: "Movement quality, repeat sprint ability, and recovery between reps.",
    },
    {
      title: "Character",
      body: "Coachability, response to mistakes, and how a player treats teammates.",
    },
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

/* -------------------------------------------------------------------------- */
/*  College Pathway                                                            */
/* -------------------------------------------------------------------------- */

export const pathway = {
  blurb:
    "Most players don't get recruited because nobody ever showed them how it works. The College Pathway is our answer — a structured track that starts at U12 and follows a player through high school.",
  // TODO: confirm these match what the club actually delivers before publishing.
  pillars: [
    {
      title: "Player Profile",
      body: "Every U14 player gets a maintained profile — position, measurables, academic standing, and a highlight reel cut from real match footage, not training clips.",
    },
    {
      title: "Academic Guidance",
      body: "Eligibility is where most families get caught out. We walk through NCAA and NAIA academic requirements early, while grades can still be moved.",
    },
    {
      title: "Exposure",
      body: "Targeted showcase and ID camp selection. We'd rather send a player to two events that fit than eight that don't.",
    },
    {
      title: "Family Education",
      body: "Honest sessions on divisions, timelines, scholarships, and what college soccer actually costs — so decisions get made on facts.",
    },
  ],
  /** Ordered widest-to-narrowest — the page renders these as a funnel. */
  stages: [
    {
      age: "U12",
      label: "Everyone starts here",
      title: "Foundation",
      body: "Technique and habits. No recruiting talk — just building a player worth recruiting later.",
    },
    {
      age: "U14",
      label: "The ones who do the work",
      title: "Profile",
      body: "Video capture begins, the player profile is built, and families get their first eligibility walkthrough.",
    },
    {
      age: "High school",
      label: "The ones who keep showing up",
      title: "Exposure",
      body: "Showcase planning and coach outreach, continuing even after a player ages out of the academy.",
    },
    {
      age: "College",
      label: "Where the funnel leads",
      title: "Commitment",
      body: "A player with film, grades, a target list, and a family who understands the process.",
    },
  ],
  /**
   * The funnel narrows for real. Saying so plainly is deliberate — the club's
   * voice elsewhere is honest evaluation, and implying guaranteed placement
   * would be both untrue and the thing every other academy does.
   */
  reality:
    "A funnel narrows, and this one is no exception. Most players who start at U12 will not play college soccer — that is true here and everywhere else. What we control is that nobody gets to seventeen and discovers the door was closed at fourteen because no one told them how it worked.",
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
      "Logo on both squads' match kit",
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
    title: "U14s reach Gulf Coast Cup semi-final in first season",
    date: "2026-08-30",
    team: "u14-boys",
    tournament: "Gulf Coast Cup",
    excerpt:
      "Four matches in two days, one penalty shootout, and a squad that looked nothing like the group that started preseason.",
    body: [
      "The U14s went into the Gulf Coast Cup as the least experienced side in their bracket and came out of it in the final four — a result that says more about the group's application than the scoreline in any one match.",
      "Saturday's opening two fixtures were about surviving the heat as much as the opposition. The shape held, the press stayed disciplined into the second half, and both games were seen out without conceding late.",
      "Sunday's quarter-final went to penalties after ninety minutes that could have gone either way. The semi-final was a step too far against a side that has been together three years, but the gap was narrower than the result suggested.",
      "The takeaway for the coaching staff was rest defence — three of the goals conceded across the weekend came from our own attacking transitions. That goes straight into the next training block.",
    ],
  },
  {
    slug: "sunshine-state-showcase-u12",
    title: "U12s unbeaten at the Sunshine State Showcase",
    date: "2026-08-16",
    team: "u12-boys",
    tournament: "Sunshine State Showcase",
    excerpt:
      "Three matches, no defeats, and the first real evidence that playing out from the back is becoming instinct rather than instruction.",
    body: [
      "Showcase weekends aren't scored on trophies, which suits a U12 group still building habits. The instruction going in was simple: play out from the back every time, including when it's uncomfortable.",
      "They did — and it cost them a goal in the first match. It also produced the best twenty minutes of football the group has played, in the third.",
      "Across three matches the side kept the ball through pressure more often than it gave it away, and the goalkeeper's distribution was a genuine weapon rather than a reset button.",
      "Unbeaten is a nice line for a report. The more useful line is that nobody kicked it long when the game got hard.",
    ],
  },
  {
    slug: "preseason-friendlies-recap",
    title: "What we learned from preseason",
    date: "2026-07-26",
    team: "club",
    tournament: "Preseason friendlies",
    excerpt:
      "Six friendlies across both squads before a competitive ball was kicked. Here's what the staff took from them.",
    body: [
      "Preseason friendlies exist to find problems while they're still cheap. Across six matches between the two squads, three came up repeatedly.",
      "First, both groups defended the first pass well and the second pass poorly — the press triggered correctly, then the cover arrived late. That's now a standing item in the Tuesday session.",
      "Second, the U14s' set-piece delivery was inconsistent enough to be worth dedicated time rather than the ten minutes tacked onto the end of a session.",
      "Third, and most encouraging: fitness was not the limiting factor in any of the six. In August, in Florida, that is not nothing.",
    ],
  },
];
