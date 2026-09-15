import PageHero from "@/components/PageHero";
import {
  Badge,
  Button,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { pathway } from "@/data/site";

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
      >
        <Badge tone="gold">Included for every U14 player</Badge>
      </PageHero>

      {/* What's included */}
      <Section tone="darker">
        <Reveal>
          <SectionHeading eyebrow="What's Included" title="Four moving parts" />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {pathway.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 80}>
              <article className="flex h-full gap-5 border border-white/10 bg-navy-900 p-7">
                <span
                  aria-hidden
                  className="font-display text-2xl font-extrabold italic leading-none text-electric-500/60"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl">{pillar.title}</h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-silver-400">
                    {pillar.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Stages */}
      <Section tone="dark" className="pitch-lines">
        <Reveal>
          <SectionHeading
            eyebrow="The Track"
            title="It starts earlier than you think"
            lede="By the time most families start thinking about recruiting, the useful window is half gone."
          />
        </Reveal>

        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {pathway.stages.map((stage, i) => (
            <Reveal key={stage.age} delay={i * 90}>
              <li className="flex h-full flex-col gap-3 border-t-2 border-gold-500 bg-navy-850 p-7">
                <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-gold-400">
                  {stage.age}
                </p>
                <h3 className="text-2xl">{stage.title}</h3>
                <p className="text-sm leading-relaxed text-silver-400">
                  {stage.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="panel">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Want the full rundown?
          </h2>
          <p className="max-w-xl text-lg text-silver-400">
            We'll walk your family through the timeline, the costs, and an
            honest read on where your son currently sits. No pitch.
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
