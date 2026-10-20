import { Link, useRoute } from "wouter";
import { Clock, MapPin, Users, ArrowLeft } from "lucide-react";

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
  const keeperCoach = coaches.find((c) => c.id === "keeper");
  const director = coaches.find((c) => c.id === "director");
  const isElectric = team.accent === "electric";
  const accentText = isElectric ? "text-electric-400" : "text-gold-400";

  return (
    <>
      <PageHero
        eyebrow={`${team.league}`}
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

      {/* Training + staff */}
      <Section tone="darker">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading eyebrow="Weekly Rhythm" title="Training" />
            </Reveal>

            <ul className="mt-10 flex flex-col gap-4">
              {team.trainingDays.map((session, i) => (
                <Reveal key={session.day} delay={i * 80}>
                  <li className="flex flex-wrap items-center gap-x-8 gap-y-3 border border-white/10 bg-navy-900 p-6">
                    <p
                      className={cn(
                        "w-28 font-display text-2xl font-extrabold uppercase italic",
                        accentText,
                      )}
                    >
                      {session.day}
                    </p>
                    <p className="flex items-center gap-2 font-semibold text-white">
                      <Clock className="h-4 w-4 text-silver-500" aria-hidden />
                      {session.time}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-silver-400">
                      <MapPin
                        className="h-4 w-4 shrink-0 text-silver-500"
                        aria-hidden
                      />
                      {session.location}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120}>
              <div className="mt-10">
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.24em] text-gold-400">
                  What we're working on
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {team.focus.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 border-l-2 border-white/15 py-1 pl-4 text-silver-300"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Staff */}
          <Reveal delay={100}>
            <div className="border border-white/10 bg-navy-850 p-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.24em] text-electric-400">
                Team Staff
              </h3>

              <ul className="mt-6 flex flex-col divide-y divide-white/10">
                {[coach, keeperCoach, director]
                  .filter(Boolean)
                  .map((person) => (
                    <li
                      key={person!.id}
                      className="flex gap-4 py-5 first:pt-0 last:pb-0"
                    >
                      <span
                        className={cn(
                          "flex h-12 w-12 shrink-0 items-center justify-center font-display text-base font-extrabold italic",
                          person!.id === team.coachId
                            ? isElectric
                              ? "bg-electric-500 text-navy-950"
                              : "bg-gold-500 text-navy-950"
                            : "bg-white/10 text-white",
                        )}
                      >
                        {person!.initials}
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold text-white">
                          {person!.name}
                        </p>
                        <p className="text-xs uppercase tracking-wider text-silver-500">
                          {person!.role}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-silver-400">
                          {person!.bio}
                        </p>
                      </div>
                    </li>
                  ))}
              </ul>

              <Button href="/coaches" variant="ghost" className="mt-7 w-full">
                All Coaches
              </Button>
            </div>
          </Reveal>
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
