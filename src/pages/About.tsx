import { Target, HeartHandshake, TrendingUp, ShieldCheck } from "lucide-react";

import PageHero from "@/components/PageHero";
import { Button, Reveal, Section, SectionHeading } from "@/components/ui";
import { club, values, stats } from "@/data/site";

const CURRICULUM = [
  {
    phase: "Block 1",
    window: "Preseason",
    title: "Foundations",
    body: "Technical reset. Every player rebuilds first touch, passing weight, and body shape under low pressure before we add opponents.",
  },
  {
    phase: "Block 2",
    window: "Early season",
    title: "Units",
    body: "Players learn their line — back four, midfield three, front three — through repeated small-group patterns against live defenders.",
  },
  {
    phase: "Block 3",
    window: "Mid season",
    title: "Full Picture",
    body: "Team shape in and out of possession, pressing triggers, transition moments, and the set-piece routines we take into competition.",
  },
  {
    phase: "Block 4",
    window: "Late season",
    title: "Game Management",
    body: "Closing out results, adapting shape mid-match, and taking real responsibility for decisions on the field without waiting for the sideline.",
  },
];

const COMMITMENTS = [
  { icon: Target, title: "Honest evaluations", body: "Written player feedback twice a season — strengths, gaps, and a concrete plan." },
  { icon: TrendingUp, title: "Real minutes", body: "Rotation that develops players rather than protecting a scoreline." },
  { icon: ShieldCheck, title: "Safe environment", body: "Background-checked, SafeSport-trained staff at every session." },
  { icon: HeartHandshake, title: "No politics", body: "Selection is on merit and effort. Nothing else moves the needle." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="The Academy"
        title={
          <>
            Built in Cape Coral,
            <br />
            <span className="text-electric-400">for Cape Coral</span>
          </>
        }
        lede={`${club.name} exists because Southwest Florida is full of talented boys whose development was limited by geography, not ability. We brought the environment to them.`}
      />

      {/* Story */}
      <Section tone="darker">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Our Story" title="It started with a car ride" />
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-silver-300">
              <p>
                Ask any soccer family in {club.city} and you'll hear the same story — three evenings
                a week spent on Pine Island Road, driving north so their son could train at the level
                he was capable of. Homework in the back seat. Dinner at nine.
              </p>
              <p>
                We started {club.name} to end that drive. Not a watered-down local alternative, but a
                genuine development academy with licensed staff, a written curriculum, and standards
                that hold up against anything in Lee County.
              </p>
              <p>
                We deliberately stayed small. Two age groups, {stats[2].value} coach-to-player ratio,
                and a roster where every player gets coached by name — because a hundred kids spread
                across eight teams is a business model, not a development plan.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section tone="dark" className="pitch-lines">
        <Reveal>
          <SectionHeading
            eyebrow="Our Principles"
            title="What we hold ourselves to"
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 80}>
              <article className="h-full border-l-2 border-electric-500 bg-navy-850 p-8">
                <h3 className="text-2xl">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-silver-400">{value.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Curriculum */}
      <Section tone="darker">
        <Reveal>
          <SectionHeading
            eyebrow="The Curriculum"
            title="A season with a plan"
            lede="Four blocks, written in advance, shared with families. Players always know what they're working on and why it matters."
          />
        </Reveal>

        <ol className="mt-14 grid gap-6 lg:grid-cols-4">
          {CURRICULUM.map((block, i) => (
            <Reveal key={block.phase} delay={i * 90}>
              <li className="relative flex h-full flex-col gap-3 border border-white/10 bg-navy-900 p-7">
                <span
                  aria-hidden
                  className="absolute right-5 top-4 font-display text-6xl font-extrabold italic leading-none text-white/[0.06]"
                >
                  {i + 1}
                </span>
                <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-gold-500">
                  {block.phase} · {block.window}
                </p>
                <h3 className="text-2xl">{block.title}</h3>
                <p className="text-sm leading-relaxed text-silver-400">{block.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Commitments */}
      <Section tone="panel">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our Promise"
              title={
                <>
                  Four things
                  <br />
                  we guarantee
                </>
              }
              lede="Everything else is negotiable. These aren't."
            />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {COMMITMENTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <article className="flex h-full flex-col gap-3 border border-white/10 bg-navy-900 p-6">
                  <item.icon className="h-8 w-8 text-gold-500" aria-hidden />
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-silver-400">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="darker" className="text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <SectionHeading
            align="center"
            eyebrow="Next Step"
            title="Come see a session"
            lede="Families are welcome to watch any training night before committing. No appointment needed — just find us on the pitch."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/schedule" size="lg">
              Training Times
            </Button>
            <Button href="/contact" size="lg" variant="ghost">
              Get in Touch
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
