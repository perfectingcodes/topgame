import { Quote } from "lucide-react";

import Photo from "@/components/Photo";
import {
  Button,
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { founder, photos } from "@/data/site";

export default function About() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/*  Hero — portrait-led, coaching first                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-navy-900">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_15%_0%,rgba(49,169,224,0.16),transparent_62%)]"
        />

        <div className="relative mx-auto grid w-full max-w-7xl items-end gap-10 px-5 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-20">
          <div className="flex flex-col gap-6 pb-4 lg:pb-20">
            <Eyebrow>Meet our founder</Eyebrow>

            <h1 className="text-6xl leading-[0.86] sm:text-7xl lg:text-[5.25rem]">
              Coach
              <span className="block text-gold-500">Leo</span>
            </h1>

            <p className="max-w-xl text-xl leading-relaxed text-silver-200 lg:text-2xl">
              {founder.coaching.lede}
            </p>

            <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-electric-400">
              {founder.headline}{" "}
              <span className="text-silver-500">{founder.tagline}</span>
            </p>
          </div>

          {/* Portrait bleeds down into the section below it. */}
          <Photo
            photo={photos.coachLeo}
            className="aspect-[4/5] w-full lg:-mb-16"
            sizes="(min-width: 1024px) 46vw, 100vw"
            priority
          />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Developing players — the focus of the page                         */}
      {/* ------------------------------------------------------------------ */}
      <Section tone="darker" className="lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="The work"
              title={
                <>
                  Developing
                  <br />
                  players
                </>
              }
            />
          </Reveal>

          <div className="flex flex-col gap-6">
            {founder.coaching.body.map((paragraph, i) => (
              <Reveal key={i} delay={i * 80}>
                <p
                  className={
                    i === 0
                      ? "text-xl leading-relaxed text-silver-200"
                      : "text-lg leading-relaxed text-silver-400"
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}

            {/* Renders only once the club supplies a real coaching record. */}
            {founder.coaching.proof.length > 0 ? (
              <Reveal delay={160}>
                <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-4">
                  {founder.coaching.proof.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-1 bg-navy-900 p-5"
                    >
                      <dd className="font-display text-3xl font-extrabold italic leading-none text-gold-500">
                        {item.value}
                      </dd>
                      <dt className="text-xs uppercase tracking-wider text-silver-500">
                        {item.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ) : null}
          </div>
        </div>

        {/* The standard, as editorial rows rather than cards. */}
        <ul className="mt-16 flex flex-col border-t border-white/10">
          {founder.standard.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <li className="grid gap-3 border-b border-white/10 py-7 lg:grid-cols-[5rem_1fr_1.3fr] lg:items-baseline lg:gap-8">
                <span
                  aria-hidden
                  className="font-display text-2xl font-extrabold italic leading-none text-electric-500/50"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl">{item.title}</h3>
                <p className="leading-relaxed text-silver-400">{item.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/*  Playing career — credential, kept deliberately brief               */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-navy-900 px-5 py-20 pitch-lines sm:px-8 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            <div>
              <Eyebrow>Before all that</Eyebrow>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-300">
                {founder.playing.summary}
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-silver-500">
                {founder.playing.closer}
              </p>

              <ul className="mt-8 flex flex-wrap gap-2">
                {founder.honors.map((honor) => (
                  <li
                    key={honor}
                    className="rounded-full bg-white/5 px-3.5 py-1.5 text-xs text-silver-400 ring-1 ring-inset ring-white/10"
                  >
                    {honor}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <dl className="grid grid-cols-2 gap-px overflow-hidden bg-white/10 ring-1 ring-white/10">
                {founder.records.map((record) => (
                  <div
                    key={record.label}
                    className="flex flex-col gap-1 bg-navy-850 p-6"
                  >
                    <dd className="font-display text-3xl font-extrabold italic leading-none text-gold-500">
                      {record.value}
                    </dd>
                    <dt className="text-xs uppercase tracking-wider text-silver-500">
                      {record.label}
                    </dt>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs uppercase tracking-wider text-silver-500">
                Mariner High School records
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Closing quote over a photo                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative isolate overflow-hidden">
        <Photo
          photo={photos.celebrationCoach}
          className="absolute inset-0 -z-10 h-full w-full"
          sizes="100vw"
          imgClassName="object-[50%_35%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/90 to-navy-950/70"
        />

        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 py-28 text-center sm:px-8 lg:py-36">
          <Quote className="h-7 w-7 text-gold-500" aria-hidden />
          <blockquote className="text-4xl leading-[1.05] text-white sm:text-5xl">
            “{founder.closing.text}”
          </blockquote>
          <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-gold-400">
            — {founder.closing.source}
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Button href="/tryouts" size="lg">
              Try Out
            </Button>
            <Button href="/pathway" size="lg" variant="ghost">
              College Pathway
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
