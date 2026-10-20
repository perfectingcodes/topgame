import PageHero from "@/components/PageHero";
import { Button, Reveal, Section, SectionHeading } from "@/components/ui";
import { club, sponsors } from "@/data/site";

export default function Sponsors() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title={
          <>
            Backed by
            <br />
            <span className="text-electric-400">local business</span>
          </>
        }
        lede="Every sponsor keeps fees down and the scholarship fund open."
      />

      {/* Current sponsors */}
      <Section tone="darker">
        <Reveal>
          <SectionHeading
            eyebrow={sponsors.length ? "Thank You" : "Open"}
            title={sponsors.length ? "Our sponsors" : "Be our first partner"}
            lede={
              sponsors.length
                ? undefined
                : "We're a new academy and our sponsor board is empty. The first business on it gets the most visible spot we have."
            }
          />
        </Reveal>

        <ul className="mt-12 grid items-center gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sponsors.map((sponsor, i) => (
            <Reveal key={sponsor.name} delay={i * 60}>
              <li className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-navy-900 p-7 text-center">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  loading="lazy"
                  className="h-20 w-auto max-w-full object-contain"
                />
                {sponsor.note ? (
                  <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-silver-500">
                    {sponsor.note}
                  </p>
                ) : null}
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="dark" className="pitch-lines">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Get Involved"
            title="Sponsor the academy"
            lede="Your business in front of two squads, their families, and every match-day crowd. Tell us what you have in mind and we'll build something around it."
            align="center"
          />
          <Button
            href={`mailto:${club.email}?subject=Sponsorship%20enquiry`}
            size="lg"
          >
            Email About Sponsorship
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
