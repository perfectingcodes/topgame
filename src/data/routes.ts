import { articles, club, teams } from "./site";

export type RouteMeta = {
  path: string;
  title: string;
  description: string;
};

const suffix = `${club.name} | ${club.city}, ${club.state}`;

/** Every prerenderable URL, with the <head> copy that ships in its HTML. */
export const routes: RouteMeta[] = [
  {
    path: "/",
    title: `${club.name} — Boys Soccer in Cape Coral, FL`,
    description: `${club.name} develops U12 and U14 boys soccer players in Cape Coral, Florida. Year-round training, licensed coaches, and competitive league play.`,
  },
  {
    path: "/about",
    title: `About the Academy | ${suffix}`,
    description: `How ${club.name} trains, what we believe, and why we built a development-first boys soccer club in Cape Coral.`,
  },
  {
    path: "/teams",
    title: `Our Teams | ${suffix}`,
    description: `Meet the ${club.name} U12 and U14 boys squads — training schedules, playing style, and coaching staff.`,
  },
  ...teams.map((team) => ({
    path: `/teams/${team.slug}`,
    title: `${team.name} | ${suffix}`,
    description: `${team.name} at ${club.name}: ${team.blurb}`,
  })),
  {
    path: "/pathway",
    title: `College Pathway | ${suffix}`,
    description: `${club.name}'s College Pathway program — player profiles, academic guidance, and showcase planning for boys aiming at college soccer.`,
  },
  {
    path: "/news",
    title: `Tournament Reports | ${suffix}`,
    description: `Match and tournament write-ups from ${club.name}'s U12 and U14 boys squads.`,
  },
  ...articles.map((article) => ({
    path: `/news/${article.slug}`,
    title: `${article.title} | ${club.name}`,
    description: article.excerpt,
  })),
  {
    path: "/sponsors",
    title: `Sponsors & Partners | ${suffix}`,
    description: `The local businesses backing ${club.name}, and how your business can support youth soccer in ${club.city}.`,
  },
  {
    path: "/schedule",
    title: `Schedule & Fixtures | ${suffix}`,
    description: `Weekly training times and the upcoming fixture list for ${club.name}'s U12 and U14 boys teams.`,
  },
  {
    path: "/coaches",
    title: `Coaching Staff | ${suffix}`,
    description: `The licensed coaching staff behind ${club.name} in Cape Coral, Florida.`,
  },
  {
    path: "/tryouts",
    title: `Tryouts & Registration | ${suffix}`,
    description: `Tryout dates, what to bring, and how players are evaluated at ${club.name}. Open to all U12 and U14 boys in Southwest Florida.`,
  },
  {
    path: "/contact",
    title: `Contact Us | ${suffix}`,
    description: `Get in touch with ${club.name} in Cape Coral, FL about tryouts, registration, or joining the academy.`,
  },
];

export const routeByPath = new Map(routes.map((r) => [r.path, r]));
