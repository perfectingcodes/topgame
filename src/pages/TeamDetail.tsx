import { Link, useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";

import PageHero from "@/components/PageHero";
import { Button, Reveal, Section } from "@/components/ui";
import NotFound from "./NotFound";
import { coaches, teams } from "@/data/site";
import { cn } from "@/lib/cn";

export default function TeamDetail() {
  const [, params] = useRoute("/teams/:slug");
  const team = teams.find((t) => t.slug === params?.slug);

  if (!team) return <NotFound />;

  const coach = coaches.find((c) => c.id === team.coachId);
  const isElectric = team.accent === "electric";
  const accentText = isElectric ? "text-electric-400" : "text-gold-400";

  return (
    <>
      <PageHero
        eyebrow="Our Teams"
        title={<>{team.name}</>}
        lede={team.blurb}
      ></PageHero>

      {/* Coach */}
      <Section tone="darker">
        {coach ? (
          <Reveal>
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-white/10 bg-navy-850 p-8 text-center">
              <span
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-xl font-display text-xl font-extrabold italic",
                  isElectric
                    ? "bg-electric-500 text-navy-950"
                    : "bg-gold-500 text-navy-950",
                )}
              >
                {coach.initials}
              </span>
              <div>
                <h2 className="text-2xl">{coach.name}</h2>
                <p className="mt-1 text-xs uppercase tracking-wider text-silver-500">
                  {coach.role}
                </p>
              </div>
              <p className="leading-relaxed text-silver-400">{coach.bio}</p>
              <Button href="/coaches" variant="ghost">
                Meet the Coaches
              </Button>
            </div>
          </Reveal>
        ) : null}
      </Section>

      <Section tone="panel">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl leading-tight sm:text-5xl">
            Interested in the{" "}
            <span className={accentText}>{team.ageGroup}</span> squad?
          </h2>
          <p className="max-w-xl text-lg text-silver-400">
            Tryouts run twice each summer, and we hold individual looks during
            the preseason block.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/tryouts" size="lg">
              Try Out
            </Button>
            <Link
              href="/teams"
              className="inline-flex items-center gap-2 px-4 py-2 font-display text-base font-bold uppercase italic tracking-wide text-silver-300 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All teams
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
