import { Instagram } from "lucide-react";

import Photo from "./Photo";
import { Reveal } from "./ui";
import { club, instagramPosts, photoGrid } from "@/data/site";

/**
 * Pulls the shortcode out of a post/reel URL. Accepts a bare shortcode too, so
 * whoever maintains the list can paste whichever form they have.
 */
function shortcode(entry: string) {
  const match = entry.match(/instagram\.com\/(?:p|reel|tv)\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : entry.replace(/\/+$/, "");
}

export default function InstagramFeed() {
  const posts = instagramPosts.map(shortcode).filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-navy-950 px-5 py-20 sm:px-8 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(49,169,224,0.12),transparent_65%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-4">
              <span
                aria-hidden
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500 via-flare-500 to-electric-500 text-navy-950"
              >
                <Instagram className="h-7 w-7" />
              </span>
              <div>
                <h2 className="text-3xl leading-none lg:text-4xl">
                  {club.social.instagramHandle}
                </h2>
                <p className="mt-1.5 text-sm text-silver-400">
                  Match days, goals and the work behind them.
                </p>
              </div>
            </div>

            <a
              href={club.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center font-display text-sm font-bold uppercase tracking-[0.2em] text-electric-400 transition-colors hover:text-electric-300 sm:min-h-0"
            >
              View profile →
            </a>
          </div>
        </Reveal>

        {posts.length > 0 ? (
          /* Real embeds. Instagram serves these without an API key, and each
             iframe is lazy so the page isn't held up by six of them. */
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((code, i) => (
              <Reveal key={code} delay={i * 70}>
                <li className="overflow-hidden rounded-2xl border border-white/10 bg-white">
                  <iframe
                    src={`https://www.instagram.com/p/${code}/embed`}
                    title={`${club.name} on Instagram`}
                    loading="lazy"
                    scrolling="no"
                    allowTransparency
                    className="h-[520px] w-full"
                  />
                </li>
              </Reveal>
            ))}
          </ul>
        ) : (
          /* No posts wired up yet, so show the club's own photos rather than
             fake post chrome. These are presented as photos, not as posts. */
          <>
            <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {photoGrid.map((photo, i) => (
                <Reveal key={photo.src} delay={i * 70}>
                  <li>
                    <a
                      href={club.social.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative block"
                    >
                      <Photo
                        photo={photo}
                        className="aspect-square w-full"
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        imgClassName="transition-transform duration-500 group-hover:scale-105"
                      />
                      <span
                        aria-hidden
                        className="absolute inset-0 flex items-center justify-center rounded-2xl bg-navy-950/0 opacity-0 transition-all duration-300 group-hover:bg-navy-950/55 group-hover:opacity-100"
                      >
                        <Instagram className="h-8 w-8 text-white" />
                      </span>
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={200}>
              <p className="mt-6 text-sm text-silver-500">
                Photos from the academy. Follow{" "}
                <a
                  href={club.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-electric-400 hover:underline"
                >
                  {club.social.instagramHandle}
                </a>{" "}
                for match days as they happen.
              </p>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
