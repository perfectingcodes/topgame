import { useMemo, useState } from "react";
import { Clock, MapPin } from "lucide-react";

import PageHero from "@/components/PageHero";
import {
  Badge,
  Button,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { fixtures, teams } from "@/data/site";
import { cn, formatDate } from "@/lib/cn";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

type Filter = "all" | (typeof teams)[number]["slug"];

export default function Schedule() {
  const [filter, setFilter] = useState<Filter>("all");

  // Flatten every squad's training days into a Mon–Sun grid.
  const week = useMemo(
    () =>
      DAYS.map((day) => ({
        day,
        sessions: teams.flatMap((team) =>
          team.trainingDays
            .filter((s) => s.day === day)
            .map((s) => ({ ...s, team })),
        ),
      })),
    [],
  );

  const visibleFixtures = useMemo(
    () =>
      filter === "all" ? fixtures : fixtures.filter((f) => f.team === filter),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Schedule"
        title={
          <>
            Training &amp;
            <br />
            <span className="text-electric-400">fixtures</span>
          </>
        }
        lede="Both squads train three evenings a week with a shared Saturday block. Fixtures run across Lee and Collier counties."
      />

      {/* Weekly grid */}
      <Section tone="darker">
        <Reveal>
          <SectionHeading
            eyebrow="Every Week"
            title="Training timetable"
            lede="Sessions run year-round. Weather cancellations are posted to Instagram and emailed to families by 3:00 PM."
          />
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {week.map((entry, i) => {
            const isRest = entry.sessions.length === 0;
            return (
              <Reveal key={entry.day} delay={i * 60}>
                <div
                  className={cn(
                    "flex h-full flex-col gap-4 border p-5",
                    isRest
                      ? "border-white/5 bg-navy-900/40"
                      : "border-white/10 bg-navy-900",
                  )}
                >
                  <h3
                    className={cn(
                      "font-display text-lg font-bold uppercase italic tracking-wide",
                      isRest ? "text-silver-500" : "text-gold-400",
                    )}
                  >
                    {entry.day}
                  </h3>

                  {isRest ? (
                    <p className="text-sm text-silver-500">
                      Rest &amp; recovery
                    </p>
                  ) : (
                    <ul className="flex flex-col gap-4">
                      {entry.sessions.map((session) => (
                        <li
                          key={`${session.team.slug}-${session.time}`}
                          className="flex flex-col gap-1.5"
                        >
                          <Badge
                            tone={
                              session.team.accent === "electric"
                                ? "electric"
                                : "gold"
                            }
                          >
                            {session.team.name}
                          </Badge>
                          <p className="flex items-center gap-2 text-sm font-semibold text-white">
                            <Clock
                              className="h-3.5 w-3.5 shrink-0 text-silver-500"
                              aria-hidden
                            />
                            {session.time}
                          </p>
                          <p className="flex items-start gap-2 text-xs text-silver-500">
                            <MapPin
                              className="mt-0.5 h-3.5 w-3.5 shrink-0"
                              aria-hidden
                            />
                            {session.location}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Fixtures */}
      <Section tone="dark" className="pitch-lines">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading eyebrow="Match Days" title="Upcoming fixtures" />
          </Reveal>

          <Reveal>
            <div
              role="group"
              aria-label="Filter fixtures by team"
              className="flex flex-wrap gap-2"
            >
              {([{ slug: "all", name: "All teams" }, ...teams] as const).map(
                (option) => {
                  const active = filter === option.slug;
                  return (
                    <button
                      key={option.slug}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setFilter(option.slug as Filter)}
                      className={cn(
                        "-skew-x-8 px-5 py-2 font-display text-sm font-bold uppercase italic tracking-wide transition-colors",
                        active
                          ? "bg-electric-500 text-navy-950"
                          : "bg-white/5 text-silver-300 ring-1 ring-inset ring-white/15 hover:text-white",
                      )}
                    >
                      <span className="skew-x-8 block">{option.name}</span>
                    </button>
                  );
                },
              )}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[46rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/15">
                {["Date", "Time", "Team", "Opponent", "Venue", ""].map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="px-4 py-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-silver-500"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleFixtures.map((fx) => {
                const team = teams.find((t) => t.slug === fx.team);
                return (
                  <tr
                    key={`${fx.date}-${fx.team}-${fx.opponent}`}
                    className="border-b border-white/8 transition-colors hover:bg-white/[0.03]"
                  >
                    <td className="whitespace-nowrap px-4 py-4 font-display text-base font-bold uppercase italic text-white">
                      {formatDate(fx.date)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-silver-300">
                      {fx.time}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <Badge
                        tone={team?.accent === "electric" ? "electric" : "gold"}
                      >
                        {team?.ageGroup}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 font-semibold text-white">
                      {fx.opponent}
                    </td>
                    <td className="px-4 py-4 text-sm text-silver-400">
                      {fx.venue}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <Badge tone={fx.home ? "electric" : "muted"}>
                        {fx.home ? "Home" : "Away"}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {visibleFixtures.length === 0 ? (
          <p className="mt-8 text-silver-400">
            No fixtures listed for this team yet.
          </p>
        ) : null}

        <p className="mt-8 text-sm text-silver-500">
          Fixtures are subject to league rescheduling. Confirm kickoff times
          with your coach the week of the match.
        </p>
      </Section>

      <Section tone="panel">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Want to watch a session first?
          </h2>
          <p className="max-w-xl text-lg text-silver-400">
            Families are welcome at any training night. Come stand on the
            touchline and see how we work.
          </p>
          <Button href="/contact" size="lg">
            Let Us Know You're Coming
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
