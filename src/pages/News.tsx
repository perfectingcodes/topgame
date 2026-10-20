import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

import PageHero from "@/components/PageHero";
import { Badge, Button, Reveal, Section } from "@/components/ui";
import { articles, teams } from "@/data/site";
import { formatDate } from "@/lib/cn";

/** Resolves an article's `team` field to a display label. */
export function teamLabel(slug: string) {
  return teams.find((t) => t.slug === slug)?.name ?? "Academy";
}

export default function News() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        eyebrow="Reports"
        title={
          <>
            From the
            <br />
            <span className="text-electric-400">tournaments</span>
          </>
        }
        lede="What went well, what didn't, and what goes into the next training block."
      />

      <Section tone="darker">
        {sorted.length === 0 ? (
          <Reveal>
            <div className="border border-white/10 bg-navy-900 p-10 text-center">
              <h2 className="text-3xl">First reports coming soon</h2>
              <p className="mx-auto mt-3 max-w-md leading-relaxed text-silver-400">
                We write these up after each tournament. Check back once the
                squads have played their opening weekends.
              </p>
              <Button href="/tryouts" className="mt-7">
                Try Out
              </Button>
            </div>
          </Reveal>
        ) : null}

        <ul className="flex flex-col gap-4">
          {sorted.map((article, i) => (
            <Reveal key={article.slug} delay={i * 80}>
              <li>
                <Link
                  href={`/news/${article.slug}`}
                  className="group flex flex-col gap-4 border border-white/10 bg-navy-900 p-7 transition-colors hover:border-electric-500/50 lg:p-9"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge tone="electric">{teamLabel(article.team)}</Badge>
                    <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-silver-500">
                      {formatDate(article.date)} · {article.tournament}
                    </span>
                  </div>

                  <h2 className="max-w-3xl text-3xl leading-tight transition-colors group-hover:text-electric-300 lg:text-4xl">
                    {article.title}
                  </h2>

                  <p className="max-w-2xl leading-relaxed text-silver-400">
                    {article.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase italic tracking-wide text-gold-400">
                    Read the report
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
