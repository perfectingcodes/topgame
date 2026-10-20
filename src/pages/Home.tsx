import { Link } from "wouter";
import {
  Instagram,
  Brain,
  Zap,
  Users,
  GraduationCap,
  ArrowRight,
  MapPin,
} from "lucide-react";

import Photo from "@/components/Photo";
import {
  Badge,
  Button,
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { club, photos, pillars, season, sponsors, teams } from "@/data/site";
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
      <section className="relative isolate overflow-hidden">
        <Photo
          photo={photos.attack}
          className="absolute inset-0 -z-10 h-full w-full rounded-none"
          sizes="100vw"
          imgClassName="object-[55%_45%]"
          priority
        />
        {/* Two overlays: a vertical scrim for text contrast, and a navy wash
            so the photo reads as part of the brand rather than a stock image. */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/35"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60"
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-7 px-5 pb-20 pt-24 sm:px-8 lg:pb-28 lg:pt-36">
          <Badge tone="gold">
            <MapPin className="h-3 w-3" aria-hidden />
            {club.city}, Florida · U12 &amp; U14 Boys
          </Badge>

          <h1 className="text-6xl leading-[0.85] sm:text-7xl lg:text-[5.75rem]">
            <span className="block text-white">Develop.</span>
            <span className="block text-electric-400">Compete.</span>
            <span className="block text-gold-500">Belong.</span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-silver-200 lg:text-xl">
            A development-first boys soccer club in {club.city}, founded and
            coached by Florida's Mr. Soccer.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href={club.social.instagram} size="lg">
              Follow the Season
            </Button>
            <Button href="/coaches" size="lg" variant="ghost">
              Meet Coach Leo
            </Button>
          </div>
        </div>

        {/* Sponsor strip on the photo's dark foot */}
        <div className="relative border-t border-white/10 bg-navy-950/85 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:gap-10">
            <p className="shrink-0 font-display text-xs font-bold uppercase tracking-[0.24em] text-silver-500">
              Backed by
            </p>
            <ul className="grid flex-1 grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4">
              {sponsors.map((sponsor) => (
                <li key={sponsor.name} className="flex justify-center">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    loading="lazy"
                    className="h-12 w-auto max-w-full object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
                  />
                </li>
              ))}
            </ul>
            <Link
              href="/sponsors"
              className="shrink-0 font-display text-xs font-bold uppercase tracking-[0.2em] text-electric-400 hover:text-electric-300"
            >
              Become a sponsor →
            </Link>
          </div>
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
              "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-900 p-7 transition-colors duration-300 hover:border-electric-500/50";

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
      {/*  Photo break — offset pair, text in the gutter                      */}
      {/* ------------------------------------------------------------------ */}
      <Section tone="panel">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <Photo
              photo={photos.celebrationTeam}
              className="aspect-[2/1] w-full"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </Reveal>

          <div className="flex flex-col gap-8 lg:col-span-5">
            <Reveal delay={90}>
              <Photo
                photo={photos.duel}
                className="aspect-[5/4] w-full lg:-ml-24 lg:w-[calc(100%+6rem)]"
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
            </Reveal>

            <Reveal delay={160}>
              <blockquote className="border-l-2 border-gold-500 pl-5">
                <p className="font-display text-2xl font-bold uppercase italic leading-tight text-white lg:text-3xl">
                  “If you don't work hard, you're not going to get where you
                  want to be.”
                </p>
                <footer className="mt-3 font-display text-xs font-bold uppercase tracking-[0.22em] text-gold-400">
                  — Coach Leo
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Section>

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
                className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-navy-850 transition-all duration-300 hover:border-white/25 rounded-2xl"
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
                  </div>

                  <div>
                    <h3 className="text-3xl lg:text-4xl">{team.name}</h3>
                  </div>

                  <p className="text-base leading-relaxed text-silver-300">
                    {team.blurb}
                  </p>

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
      {/*  Follow — the club posts constantly, so this is the live feed       */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative isolate overflow-hidden">
        <Photo
          photo={photos.duel}
          className="absolute inset-0 -z-10 h-full w-full rounded-none"
          sizes="100vw"
          imgClassName="object-[50%_45%]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-navy-950/88" />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-flare-500 via-electric-500 to-gold-500"
        />

        <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-7 px-5 py-24 text-center sm:px-8 lg:py-32">
          <Eyebrow className="justify-center">{season.status}</Eyebrow>

          <h2 className="text-5xl leading-[0.9] sm:text-6xl">
            Every match,
            <br />
            <span className="text-gold-500">as it happens</span>
          </h2>

          <p className="max-w-lg text-lg leading-relaxed text-silver-300">
            Highlights, goals and match days go up on Instagram first. It is the
            quickest way to see what a season here actually looks like.
          </p>

          <Button href={club.social.instagram} size="lg">
            <span className="inline-flex items-center gap-2">
              <Instagram className="h-5 w-5" aria-hidden />
              Follow {club.social.instagramHandle}
            </span>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
