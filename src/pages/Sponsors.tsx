import { Check } from "lucide-react";

import PageHero from "@/components/PageHero";
import {
  Badge,
  Button,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { club, sponsors, sponsorTiers } from "@/data/site";
import { cn } from "@/lib/cn";

const TIER_LABEL = {
  headline: "Headline Partner",
  club: "Club Partner",
  community: "Community Partner",
} as const;

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

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((sponsor, i) => (
            <Reveal key={sponsor.name} delay={i * 60}>
              <li
                className={cn(
                  "flex h-full flex-col items-center justify-center gap-4 border bg-navy-900 p-7 text-center",
                  sponsor.tier === "headline"
                    ? "border-gold-500/50"
                    : "border-white/10",
                )}
              >
                {sponsor.logo ? (
                  // The mark is purple on white, so it keeps a light card rather
                  // than being knocked out against the navy.
                  <span className="flex w-full items-center justify-center rounded bg-white px-5 py-4">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      loading="lazy"
                      className="h-14 w-auto object-contain"
                    />
                  </span>
                ) : (
                  <p className="font-display text-2xl font-extrabold uppercase italic text-white">
                    {sponsor.name}
                  </p>
                )}

                {sponsor.tier || sponsor.note ? (
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-silver-500">
                    {[sponsor.tier && TIER_LABEL[sponsor.tier], sponsor.note]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                ) : null}
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Tiers */}
      <Section tone="dark" className="pitch-lines">
        <Reveal>
          <SectionHeading
            eyebrow="Get Involved"
            title="Sponsorship packages"
            lede="Your logo in front of two squads, their families, and every match-day crowd."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {sponsorTiers.map((tier, i) => {
            const featured = i === 0;
            return (
              <Reveal key={tier.name} delay={i * 90}>
                <article
                  className={cn(
                    "flex h-full flex-col gap-5 border p-8",
                    featured
                      ? "border-gold-500/60 bg-navy-850"
                      : "border-white/10 bg-navy-900",
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-3xl">{tier.name}</h3>
                    {featured ? <Badge tone="gold">Most visible</Badge> : null}
                  </div>

                  <p className="font-display text-lg font-bold uppercase italic text-electric-400">
                    {tier.price}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {tier.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-silver-300"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold-500"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-sm text-silver-500">
            Packages are flexible — if none of these fit, tell us what would.
          </p>
        </Reveal>
      </Section>

      <Section tone="panel">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Sponsor the academy
          </h2>
          <p className="max-w-lg text-lg text-silver-400">
            Local business, local kids. Send us a note.
          </p>
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
