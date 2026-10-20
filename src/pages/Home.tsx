import { Link } from "wouter";
import {
  Brain,
  Zap,
  Users,
  GraduationCap,
  ArrowRight,
  MapPin,
  CalendarDays,
} from "lucide-react";

import { Crest } from "@/components/Logo";
import Photo from "@/components/Photo";
import {
  Badge,
  Button,
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { club, photoReel, pillars, stats, teams } from "@/data/site";
import { cn } from "@/lib/cn";

const PILLAR_ICONS = {
  brain: Brain,
  zap: Zap,
  users: Users,
  "graduation-cap": GraduationCap,
} as const;

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/*  Hero                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-navy-900 pitch-lines">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_75%_0%,rgba(49,169,224,0.20),transparent_60%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-[30rem] w-[30rem] rounded-full bg-gold-500/8 blur-3xl"
        />

        {/* Oversized crest watermark */}
        <Crest className="pointer-events-none absolute -right-24 top-1/2 hidden h-[34rem] w-auto -translate-y-1/2 opacity-[0.07] lg:block" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 pb-24 pt-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-32 lg:pt-28">
          <div className="flex flex-col items-start gap-7">
            <Badge tone="gold">
              <MapPin className="h-3 w-3" aria-hidden />
              {club.city}, Florida · U12 &amp; U14 Boys
            </Badge>

            <h1 className="text-6xl leading-[0.85] sm:text-7xl lg:text-[5.5rem]">
              <span className="block text-white">Develop.</span>
              <span className="block text-electric-400">Compete.</span>
              <span className="block text-gold-500">Belong.</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-silver-300 lg:text-xl">
              A development-first boys soccer club in {club.city}, founded and
              coached by Florida's Mr. Soccer.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/tryouts" size="lg">
                Book a Tryout
              </Button>
              <Button href="/teams" size="lg" variant="ghost">
                Meet the Teams
              </Button>
            </div>

            <p className="flex items-center gap-2 text-sm text-silver-500">
              <CalendarDays className="h-4 w-4 text-electric-500" aria-hidden />
              Training year-round in {club.city}
            </p>
          </div>

          {/* Crest showcase */}
          <div className="relative hidden justify-center lg:flex">
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 -m-12 rounded-full bg-electric-500/15 blur-3xl"
              />
              <Crest className="relative h-[21rem] w-auto drop-shadow-[0_25px_60px_rgba(7,16,29,0.85)]" />
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="relative border-t border-white/10 bg-navy-950/60 backdrop-blur-sm">
          <dl className="mx-auto grid w-full max-w-7xl grid-cols-2 divide-x divide-white/10 px-5 sm:px-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 px-2 py-7 first:pl-0 sm:px-6"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-4xl font-extrabold italic text-gold-500 lg:text-5xl">
                  {stat.value}
                </dd>
                <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
                  {stat.label}
                </p>
                <p className="text-xs text-silver-500">{stat.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Pillars                                                            */}
      {/* ------------------------------------------------------------------ */}
      <Section tone="darker">
        <Reveal>
          <SectionHeading
            eyebrow="The Approach"
            title={
              <>
                Four things we build,
                <br />
                <span className="text-electric-400">every single session</span>
              </>
            }
            lede="Every drill has a defender, a decision, and a consequence."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = PILLAR_ICONS[pillar.icon];
            // One pillar doubles as the entry point to the College Pathway page.
            const href = "href" in pillar ? pillar.href : undefined;
            const cardClass =
              "group relative flex h-full flex-col overflow-hidden border border-white/10 bg-navy-900 p-7 transition-colors duration-300 hover:border-electric-500/50";

            const content = (
              <>
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-electric-500 to-gold-500 transition-transform duration-300 group-hover:scale-x-100"
                />
                <Icon className="h-9 w-9 text-electric-500" aria-hidden />
                <h3 className="mt-5 text-2xl">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-silver-400">
                  {pillar.body}
                </p>
                {href ? (
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 font-display text-sm font-bold uppercase italic tracking-wide text-gold-400">
                    College Pathway
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                ) : null}
              </>
            );

            return (
              <Reveal key={pillar.title} delay={i * 90}>
                {href ? (
                  <Link href={href} className={cardClass}>
                    {content}
                  </Link>
                ) : (
                  <article className={cardClass}>{content}</article>
                )}
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/*  Photo reel                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section aria-label="The academy on match day" className="bg-navy-950">
        <ul className="grid grid-cols-2 gap-1 lg:grid-cols-4">
          {photoReel.map((photo, i) => (
            <li key={photo.src} className="aspect-[4/3]">
              <Photo
                photo={photo}
                className="h-full"
                sizes="(min-width: 1024px) 25vw, 50vw"
                imgClassName={
                  i % 2 === 0 ? "object-center" : "object-[50%_35%]"
                }
              />
            </li>
          ))}
        </ul>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Teams                                                              */}
      {/* ------------------------------------------------------------------ */}
      <Section tone="dark" className="pitch-lines">
        <Reveal>
          <SectionHeading
            eyebrow="Our Squads"
            title="Two teams. One standard."
            lede="U12 and U14 train back-to-back, so the younger group sees where they're headed."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {teams.map((team, i) => (
            <Reveal key={team.slug} delay={i * 120}>
              <Link
                href={`/teams/${team.slug}`}
                className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-navy-850 transition-all duration-300 hover:border-white/25"
              >
                <div
                  aria-hidden
                  className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    team.accent === "electric"
                      ? "bg-[radial-gradient(90%_70%_at_0%_0%,rgba(49,169,224,0.16),transparent_65%)]"
                      : "bg-[radial-gradient(90%_70%_at_0%_0%,rgba(253,200,47,0.14),transparent_65%)]",
                  )}
                />

                <div className="relative flex flex-1 flex-col gap-5 p-8 lg:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "font-display text-7xl font-extrabold italic leading-none lg:text-8xl",
                        team.accent === "electric"
                          ? "text-electric-500/25"
                          : "text-gold-500/25",
                      )}
                    >
                      {team.ageGroup}
                    </span>
                    <Badge
                      tone={team.accent === "electric" ? "electric" : "gold"}
                    >
                      {team.roster.size} players
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-3xl lg:text-4xl">{team.name}</h3>
                    <p className="mt-1 font-display text-sm font-semibold uppercase tracking-[0.18em] text-silver-500">
                      {team.birthYears}
                    </p>
                  </div>

                  <p className="text-base leading-relaxed text-silver-300">
                    {team.blurb}
                  </p>

                  <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                    {team.focus.slice(0, 3).map((f) => (
                      <li
                        key={f}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-silver-400 ring-1 ring-inset ring-white/10"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>

                  <span
                    className={cn(
                      "mt-3 inline-flex items-center gap-2 font-display text-base font-bold uppercase italic tracking-wide transition-colors",
                      team.accent === "electric"
                        ? "text-electric-400"
                        : "text-gold-400",
                    )}
                  >
                    View the squad
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/*  CTA                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-navy-900 px-5 py-24 sm:px-8 lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_100%_at_50%_100%,rgba(49,169,224,0.22),transparent_65%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-flare-500 via-electric-500 to-gold-500"
        />

        <Reveal className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-7 text-center">
          <Eyebrow className="justify-center">Tryouts Open</Eyebrow>
          <h2 className="text-5xl leading-[0.9] sm:text-6xl lg:text-7xl">
            Bring your boots.
            <br />
            <span className="text-gold-500">We'll bring the level.</span>
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-silver-300">
            Open to U12 and U14 boys. No prior academy experience required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/tryouts" size="lg">
              Tryout Dates
            </Button>
            <Button href="/contact" size="lg" variant="ghost">
              Ask a Question
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
