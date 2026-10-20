import { Trophy, Quote } from "lucide-react";

import PageHero from "@/components/PageHero";
import { Button, Reveal, Section, SectionHeading } from "@/components/ui";
import Photo from "@/components/Photo";
import { founder, photos } from "@/data/site";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Meet our founder"
        title={
          <>
            Coach
            <br />
            <span className="text-gold-500">Leo</span>
          </>
        }
        lede={
          <>
            {founder.headline}{" "}
            <span className="text-white">{founder.tagline}</span>
          </>
        }
      />

      {/* Stat line */}
      <section className="border-y border-white/10 bg-navy-950 px-5 sm:px-8">
        <dl className="mx-auto flex w-full max-w-7xl flex-col divide-y divide-white/10 sm:flex-row sm:divide-x sm:divide-y-0">
          {founder.line.map((stat) => (
            <div
              key={stat.label}
              className="flex items-baseline gap-3 py-6 sm:flex-1 sm:flex-col sm:gap-1 sm:px-8 sm:py-8 sm:first:pl-0"
            >
              <dd className="font-display text-4xl font-extrabold italic leading-none text-gold-500 sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
        <p className="mx-auto w-full max-w-7xl pb-7 font-display text-sm font-bold uppercase tracking-[0.2em] text-electric-400 sm:pb-8">
          {founder.standardLine}
        </p>
      </section>

      {/* Story */}
      <Section tone="darker">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <Photo
              photo={photos.coachLeo}
              className="aspect-[4/5] w-full lg:sticky lg:top-28"
              sizes="(min-width: 1024px) 38vw, 100vw"
              priority
            />
          </Reveal>

          <div className="flex flex-col gap-6">
            {founder.story.map((paragraph, i) => (
              <Reveal key={i} delay={i * 70}>
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

            <Reveal delay={240}>
              <figure className="my-2 border-l-2 border-gold-500 pl-6">
                <Quote className="mb-3 h-6 w-6 text-gold-500" aria-hidden />
                <blockquote className="font-display text-2xl font-bold uppercase italic leading-tight text-white sm:text-3xl">
                  “{founder.quote.text}”
                </blockquote>
                <figcaption className="mt-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-silver-500">
                  — {founder.quote.source}
                </figcaption>
              </figure>
            </Reveal>

            {founder.storyAfterQuote.map((paragraph, i) => (
              <Reveal key={i} delay={i * 70}>
                <p className="text-lg leading-relaxed text-silver-400">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Photo break */}
      <Reveal>
        <Photo
          photo={photos.celebrationCoach}
          className="aspect-[21/9] w-full"
          sizes="100vw"
        />
      </Reveal>

      {/* Honors & records */}
      <Section tone="dark" className="pitch-lines">
        <Reveal>
          <SectionHeading eyebrow="Honors & Records" title="The résumé" />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <ul className="flex flex-col divide-y divide-white/10">
              {founder.honors.map((honor) => (
                <li
                  key={honor}
                  className="flex items-start gap-3.5 py-4 first:pt-0"
                >
                  <Trophy
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold-500"
                    aria-hidden
                  />
                  <span className="text-silver-200">{honor}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="border border-white/10 bg-navy-850 p-7">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.24em] text-electric-400">
                Mariner High School records
              </h3>
              <dl className="mt-6 flex flex-col divide-y divide-white/10">
                {founder.records.map((record) => (
                  <div
                    key={record.label}
                    className="flex items-baseline justify-between gap-4 py-3 first:pt-0"
                  >
                    <dt className="text-sm text-silver-400">{record.label}</dt>
                    <dd className="font-display text-2xl font-extrabold italic leading-none text-gold-500">
                      {record.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* The standard */}
      <Section tone="darker">
        <Reveal>
          <SectionHeading
            eyebrow="The Standard"
            title="What that means for your son"
            lede="Leo has gone from local player to state championship contender to Division I athlete. The academy is built to give Southwest Florida players the same path."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {founder.standard.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="h-full border-l-2 border-electric-500 bg-navy-900 p-7">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-2.5 leading-relaxed text-silver-400">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Closing quote */}
      <section className="relative overflow-hidden bg-navy-900 px-5 py-24 sm:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_100%_at_50%_0%,rgba(253,200,47,0.12),transparent_65%)]"
        />
        <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
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
