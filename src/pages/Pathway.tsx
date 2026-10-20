import { ChevronDown } from "lucide-react";

import PageHero from "@/components/PageHero";
import { Button, Reveal, Section, SectionHeading } from "@/components/ui";
import { pathway } from "@/data/site";
import { cn } from "@/lib/cn";

/** Left inset added per band, as a percentage. Four bands taper 100% → 44%. */
const TAPER = 7;

/** Widest band is coolest, the payoff band is gold. */
const BAND_TONE = [
  "bg-electric-700/30 text-white",
  "bg-electric-600/40 text-white",
  "bg-electric-500/55 text-white",
  "bg-gold-500 text-navy-950",
];

export default function Pathway() {
  return (
    <>
      <PageHero
        eyebrow="Program"
        title={
          <>
            College
            <br />
            <span className="text-gold-500">Pathway</span>
          </>
        }
        lede={pathway.blurb}
      ></PageHero>

      {/* ------------------------------------------------------------------ */}
      {/*  The funnel                                                         */}
      {/* ------------------------------------------------------------------ */}
      <Section tone="darker">
        <Reveal>
          <SectionHeading
            eyebrow="The Funnel"
            title="From first touch to a college roster"
            lede="Four stages, each narrower than the last."
            align="center"
          />
        </Reveal>

        <ol className="mx-auto mt-14 flex max-w-5xl flex-col gap-3 lg:gap-0">
          {pathway.stages.map((stage, i) => {
            const isLast = i === pathway.stages.length - 1;

            return (
              <Reveal key={stage.age} delay={i * 110}>
                <li
                  className={cn(
                    "funnel-band flex flex-col items-center gap-2 py-9 text-center lg:py-11",
                    BAND_TONE[i],
                  )}
                  style={
                    {
                      "--t": `${i * TAPER}%`,
                      "--b": `${(i + 1) * TAPER}%`,
                    } as React.CSSProperties
                  }
                >
                  <p
                    className={cn(
                      "font-display text-xs font-bold uppercase tracking-[0.28em]",
                      isLast ? "text-navy-900/70" : "text-electric-300",
                    )}
                  >
                    {stage.age}
                  </p>

                  <h3
                    className={cn(
                      "text-3xl leading-none lg:text-4xl",
                      isLast && "text-navy-950",
                    )}
                  >
                    {stage.title}
                  </h3>

                  <p
                    className={cn(
                      "max-w-md text-sm leading-relaxed",
                      isLast ? "text-navy-900/80" : "text-silver-200/90",
                    )}
                  >
                    {stage.body}
                  </p>

                  <p
                    className={cn(
                      "mt-1 font-display text-[0.7rem] font-bold uppercase tracking-[0.2em]",
                      isLast ? "text-navy-900/60" : "text-silver-400",
                    )}
                  >
                    {stage.label}
                  </p>
                </li>

                {/* Stacked view has no taper to imply direction, so make it explicit. */}
                {!isLast ? (
                  <div
                    className="flex justify-center py-1 lg:hidden"
                    aria-hidden
                  >
                    <ChevronDown className="h-5 w-5 text-electric-500" />
                  </div>
                ) : null}
              </Reveal>
            );
          })}
        </ol>

        <Reveal delay={140}>
          <p className="mx-auto mt-12 max-w-2xl border-l-2 border-flare-500 pl-5 text-base leading-relaxed text-silver-400">
            {pathway.reality}
          </p>
        </Reveal>
      </Section>

      <Section tone="panel">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Want the full rundown?
          </h2>
          <p className="max-w-lg text-lg text-silver-400">
            The timeline, the costs, and an honest read on where your son sits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Book a Conversation
            </Button>
            <Button href="/teams" size="lg" variant="ghost">
              See the Teams
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
