import { Link, useRoute } from "wouter";
import { Users, ArrowLeft } from "lucide-react";

import PageHero from "@/components/PageHero";
import {
  Badge,
  Button,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import NotFound from "./NotFound";
import { coaches, teams } from "@/data/site";
import { cn } from "@/lib/cn";

export default function TeamDetail() {
  const [, params] = useRoute("/teams/:slug");
  const team = teams.find((t) => t.slug === params?.slug);

  if (!team) return <NotFound />;

  const coach = coaches.find((c) => c.id === team.coachId);
  const isElectric = team.accent === "electric";
  const accentText = isElectric ? "text-electric-400" : "text-gold-400";

  return (
    <>
      <PageHero
        eyebrow="Our Teams"
        title={
          <>
            {team.name}
            <span className={cn("block", accentText)}>{team.birthYears}</span>
          </>
        }
        lede={team.blurb}
      >
        <Badge tone={isElectric ? "electric" : "gold"}>
          <Users className="h-3 w-3" aria-hidden />
          {team.roster.note}
        </Badge>
      </PageHero>

      {/* Focus + coach */}
      <Section tone="darker">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Season Focus"
              title="What we're working on"
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {team.focus.map((f) => (
                <li
                  key={f}
                  className="border-l-2 border-white/15 py-1 pl-4 text-silver-300"
                >
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          {coach ? (
            <Reveal delay={100}>
              <div className="border border-white/10 bg-navy-850 p-8">
                <h2 className="font-display text-sm font-bold uppercase tracking-[0.24em] text-electric-400">
                  Coached by
                </h2>
                <div className="mt-6 flex gap-4">
                  <span
                    className={cn(
                      "flex h-14 w-14 shrink-0 items-center justify-center font-display text-lg font-extrabold italic",
                      isElectric
                        ? "bg-electric-500 text-navy-950"
                        : "bg-gold-500 text-navy-950",
                    )}
                  >
                    {coach.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-xl font-bold uppercase italic text-white">
                      {coach.name}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-silver-500">
                      {coach.role}
                    </p>
                  </div>
                </div>
                <p className="mt-5 leading-relaxed text-silver-400">
                  {coach.bio}
                </p>
                <Button href="/about" variant="ghost" className="mt-7 w-full">
                  His Story
                </Button>
              </div>
            </Reveal>
          ) : null}
        </div>
      </Section>

      <Section tone="panel">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Interested in the{" "}
            <span className={accentText}>{team.ageGroup}</span> squad?
          </h2>
          <p className="max-w-xl text-lg text-silver-400">
            Tryouts run twice each summer, and we hold individual looks during
            the preseason block.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/tryouts" size="lg">
              Try Out
            </Button>
            <Link
              href="/teams"
              className="inline-flex items-center gap-2 px-4 py-2 font-display text-base font-bold uppercase italic tracking-wide text-silver-300 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All teams
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
