import PageHero from "@/components/PageHero";
import { Button, Reveal, Section, SectionHeading } from "@/components/ui";
import { club, values } from "@/data/site";

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
        lede="Southwest Florida is full of talented boys whose development was limited by geography, not ability. We brought the environment to them."
      />

      {/* Story */}
      <Section tone="darker">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="It started with a car ride"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-silver-300">
              <p>
                Ask any soccer family in {club.city} and you'll hear the same
                thing — three evenings a week driving north so their son could
                train at the level he was capable of.
              </p>
              <p>
                We started {club.name} to end that drive, and we kept it small
                on purpose. Two age groups, and a roster where every player gets
                coached by name.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section tone="dark" className="pitch-lines">
        <Reveal>
          <SectionHeading
            eyebrow="What We Believe"
            title="What we hold to"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 80}>
              <article className="h-full border-l-2 border-electric-500 bg-navy-850 p-7">
                <h2 className="text-2xl">{value.title}</h2>
                <p className="mt-2.5 leading-relaxed text-silver-400">
                  {value.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="panel">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Come see a session
          </h2>
          <p className="max-w-lg text-lg text-silver-400">
            Families are welcome at any training night. No appointment needed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/teams" size="lg">
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
