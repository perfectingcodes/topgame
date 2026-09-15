import { Link, useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";

import PageHero from "@/components/PageHero";
import { Badge, Button, Reveal, Section } from "@/components/ui";
import NotFound from "./NotFound";
import { teamLabel } from "./News";
import { articles } from "@/data/site";
import { formatDate } from "@/lib/cn";

export default function Article() {
  const [, params] = useRoute("/news/:slug");
  const article = articles.find((a) => a.slug === params?.slug);

  if (!article) return <NotFound />;

  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <PageHero eyebrow={article.tournament} title={article.title}>
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="electric">{teamLabel(article.team)}</Badge>
          <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-silver-500">
            {formatDate(article.date)}
          </span>
        </div>
      </PageHero>

      <Section tone="darker">
        <Reveal>
          <article className="mx-auto flex max-w-3xl flex-col gap-6">
            {article.body.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-xl leading-relaxed text-silver-200"
                    : "text-lg leading-relaxed text-silver-400"
                }
              >
                {paragraph}
              </p>
            ))}
          </article>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 flex max-w-3xl">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 font-display text-base font-bold uppercase italic tracking-wide text-silver-300 transition-colors hover:text-electric-300"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All reports
            </Link>
          </div>
        </Reveal>
      </Section>

      {others.length > 0 ? (
        <Section tone="panel">
          <h2 className="text-3xl">More reports</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 80}>
                <li className="h-full">
                  <Link
                    href={`/news/${other.slug}`}
                    className="group flex h-full flex-col gap-3 border border-white/10 bg-navy-900 p-6 transition-colors hover:border-electric-500/50"
                  >
                    <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-silver-500">
                      {formatDate(other.date)} · {other.tournament}
                    </span>
                    <h3 className="text-xl leading-tight transition-colors group-hover:text-electric-300">
                      {other.title}
                    </h3>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-10">
            <Button href="/schedule" variant="ghost">
              Upcoming Fixtures
            </Button>
          </div>
        </Section>
      ) : null}
    </>
  );
}
