import { BadgeCheck } from "lucide-react";

import PageHero from "@/components/PageHero";
import { Button, Reveal, Section, SectionHeading } from "@/components/ui";
import { coaches, club } from "@/data/site";

export default function Coaches() {
  return (
    <>
      <PageHero
        eyebrow="Coaching Staff"
        title={
          <>
            Licensed coaches.
            <br />
            <span className="text-electric-400">Named players.</span>
          </>
        }
        lede={`Every session at ${club.name} is led by a licensed, background-checked coach. Nobody runs a drill they haven't been trained to teach.`}
      />

      <Section tone="darker">
        <div className="grid gap-6 md:grid-cols-2">
          {coaches.map((coach, i) => (
            <Reveal key={coach.id} delay={i * 90}>
              <article className="group relative flex h-full gap-6 overflow-hidden border border-white/10 bg-navy-900 p-7 transition-colors hover:border-electric-500/45">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-electric-500 to-gold-500 transition-transform duration-300 group-hover:scale-x-100"
                />

                <span
                  aria-hidden
                  className="flex h-20 w-20 shrink-0 items-center justify-center bg-gradient-to-br from-electric-500 to-electric-700 font-display text-2xl font-extrabold italic text-navy-950"
                >
                  {coach.initials}
                </span>

                <div className="flex min-w-0 flex-col gap-2">
                  <h2 className="text-2xl">{coach.name}</h2>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
                    {coach.role}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-silver-400">{coach.bio}</p>

                  <ul className="mt-3 flex flex-wrap gap-2">
                    {coach.licenses.map((license) => (
                      <li
                        key={license}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs text-silver-300 ring-1 ring-inset ring-white/10"
                      >
                        <BadgeCheck className="h-3.5 w-3.5 text-electric-400" aria-hidden />
                        {license}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark" className="pitch-lines">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Standards"
              title="What a licence actually means here"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-silver-300">
              <p>
                Every coach on staff holds a current U.S. Soccer Federation licence for the format
                they coach, plus SafeSport certification and a completed background screening.
              </p>
              <p>
                Beyond the paperwork, staff meet weekly to review session plans against the academy
                curriculum. Nobody improvises a training night, and nobody repeats last week because
                it was easier.
              </p>
              <p>
                If you ever want to know why your son is working on something specific, ask his
                coach. You'll get a real answer.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="panel">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl leading-tight sm:text-5xl">Coach with us</h2>
          <p className="max-w-xl text-lg text-silver-400">
            We're always open to licensed coaches who want to work in a development-first environment.
            Send us your background and let's talk.
          </p>
          <Button href={`mailto:${club.email}?subject=Coaching%20enquiry`} size="lg" variant="secondary">
            Email the Academy
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
