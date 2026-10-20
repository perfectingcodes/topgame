import { Link } from "wouter";
import { ArrowRight, Users } from "lucide-react";

import PageHero from "@/components/PageHero";
import { Badge, Button, Reveal, Section } from "@/components/ui";
import Photo from "@/components/Photo";
import { coaches, photos, teams } from "@/data/site";
import { cn } from "@/lib/cn";

export default function Teams() {
  return (
    <>
      <PageHero
        eyebrow="Our Teams"
        title={
          <>
            Two squads,
            <br />
            <span className="text-gold-500">one academy standard</span>
          </>
        }
        lede="Both squads train three times a week. Same curriculum, scaled to the age group."
      />

      <Photo
        photo={photos.celebrationCoach}
        className="aspect-[21/9] w-full"
        sizes="100vw"
        imgClassName="object-[50%_38%]"
      />

      <Section tone="darker">
        <div className="flex flex-col gap-10">
          {teams.map((team, i) => {
            const coach = coaches.find((c) => c.id === team.coachId);
            const isElectric = team.accent === "electric";

            return (
              <Reveal key={team.slug} delay={i * 100}>
                <article className="relative overflow-hidden border border-white/10 bg-navy-900">
                  <div
                    aria-hidden
                    className={cn(
                      "absolute inset-y-0 left-0 w-1",
                      isElectric ? "bg-electric-500" : "bg-gold-500",
                    )}
                  />

                  <div className="grid gap-8 p-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14 lg:p-12">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge tone={isElectric ? "electric" : "gold"}>
                          {team.birthYears}
                        </Badge>
                        <Badge tone="muted">
                          <Users className="h-3 w-3" aria-hidden />
                          {team.roster.size} players
                        </Badge>
                      </div>

                      <div>
                        <h2 className="text-5xl leading-none lg:text-6xl">
                          {team.name}
                        </h2>
                      </div>

                      <p className="max-w-xl text-lg leading-relaxed text-silver-300">
                        {team.blurb}
                      </p>

                      <div>
                        <h3 className="font-display text-sm font-bold uppercase tracking-[0.24em] text-gold-400">
                          Season Focus
                        </h3>
                        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                          {team.focus.map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-2.5 text-sm text-silver-300"
                            >
                              <span
                                aria-hidden
                                className={cn(
                                  "mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45",
                                  isElectric
                                    ? "bg-electric-500"
                                    : "bg-gold-500",
                                )}
                              />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={`/teams/${team.slug}`}
                        className={cn(
                          "group mt-2 inline-flex w-fit items-center gap-2 font-display text-lg font-bold uppercase italic tracking-wide transition-colors",
                          isElectric
                            ? "text-electric-400 hover:text-electric-300"
                            : "text-gold-400 hover:text-gold-300",
                        )}
                      >
                        Full team page
                        <ArrowRight
                          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden
                        />
                      </Link>
                    </div>

                    {/* Coach card */}
                    {coach ? (
                      <div className="flex flex-col justify-center gap-4 border border-white/10 bg-navy-850 p-7">
                        <h3 className="font-display text-sm font-bold uppercase tracking-[0.24em] text-electric-400">
                          Coached by
                        </h3>
                        <div className="flex items-center gap-4">
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
                        <p className="text-sm leading-relaxed text-silver-400">
                          {coach.bio}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="panel" className="text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Think your son belongs on one of these teams?
          </h2>
          <p className="max-w-lg text-lg text-silver-400">
            Open to every U12 and U14 boy in Southwest Florida.
          </p>
          <Button href="/tryouts" size="lg">
            See Tryout Dates
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
