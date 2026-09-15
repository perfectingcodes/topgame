import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { club } from "@/data/site";

/** Drop the real crest here and every logo on the site upgrades automatically. */
const CREST_SRC = "/brand/logo.png";

/**
 * Renders a vector crest built from the club logo's geometry — navy shield,
 * electric bolts, gold panels, silver ball. If `public/brand/logo.png` exists
 * it quietly swaps in the real artwork once it has loaded (no broken-image
 * flash, and the SVG still ships in the prerendered HTML).
 */
export function Crest({ className }: { className?: string }) {
  const [artwork, setArtwork] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setArtwork(CREST_SRC);
    img.src = CREST_SRC;
  }, []);

  if (artwork) {
    return (
      <img
        src={artwork}
        alt={`${club.name} crest`}
        className={cn("object-contain", className)}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 80 72"
      role="img"
      aria-label={`${club.name} crest`}
      className={cn(className)}
    >
      {/* Lightning bolts flanking the shield */}
      <g fill="var(--color-electric-500)">
        <path d="M22 13 L1 31 H11 L5 49 L27 28 H17 Z" />
        <path d="M58 13 L79 31 H69 L75 49 L53 28 H63 Z" />
      </g>

      {/* Red outer edge */}
      <path
        d="M40 1 L69 11 V38 C69 55 55.5 65.5 40 71.5 C24.5 65.5 11 55 11 38 V11 Z"
        fill="var(--color-flare-500)"
      />
      {/* Gold side panels */}
      <path
        d="M40 4.5 L66 13.2 V38 C66 53.5 53.5 63 40 68.4 C26.5 63 14 53.5 14 38 V13.2 Z"
        fill="var(--color-gold-500)"
      />
      {/* Electric inner frame */}
      <path
        d="M40 8 L63 15.4 V38 C63 52 52 60.5 40 65.4 C28 60.5 17 52 17 38 V15.4 Z"
        fill="var(--color-electric-500)"
      />
      {/* Navy face */}
      <path
        d="M40 11.5 L60 17.6 V38 C60 50.5 50.5 58 40 62.4 C29.5 58 20 50.5 20 38 V17.6 Z"
        fill="var(--color-navy-800)"
      />

      {/* Ball */}
      <circle cx="40" cy="30" r="13.5" fill="var(--color-silver-100)" />
      <g fill="var(--color-navy-900)">
        <path d="M40 22.6 l5.7 4.2 -2.2 6.7 h-7 l-2.2 -6.7 Z" />
        <path d="M40 17.2 a12.8 12.8 0 0 0 -7.5 2.4 l2.7 3.5 4.8 -3.5 Z" />
        <path d="M40 17.2 a12.8 12.8 0 0 1 7.5 2.4 l-2.7 3.5 -4.8 -3.5 Z" />
        <path d="M28 25.5 a12.8 12.8 0 0 0 -0.8 7.2 l4.2 -0.4 0.5 -5.7 Z" />
        <path d="M52 25.5 a12.8 12.8 0 0 1 0.8 7.2 l-4.2 -0.4 -0.5 -5.7 Z" />
        <path d="M33.5 38.7 l-3.4 2.3 a12.8 12.8 0 0 0 6.3 3.6 l0.9 -4.1 Z" />
        <path d="M46.5 38.7 l3.4 2.3 a12.8 12.8 0 0 1 -6.3 3.6 l-0.9 -4.1 Z" />
      </g>

      {/* Wordmark banner */}
      <path
        d="M21 44.5 L59 44.5 L55.5 56 L24.5 56 Z"
        fill="var(--color-silver-100)"
      />
      <path
        d="M24 47 L56 47 L54 53.5 L26 53.5 Z"
        fill="var(--color-navy-800)"
      />
    </svg>
  );
}

/** Crest plus wordmark, used in the header and footer. */
export default function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Crest className={compact ? "h-9 w-auto" : "h-11 w-auto"} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold italic uppercase tracking-tight text-white sm:text-[1.4rem]">
          Top Game
        </span>
        <span className="font-display text-[0.62rem] font-bold uppercase tracking-[0.34em] text-electric-400">
          Academy
        </span>
      </span>
    </span>
  );
}
