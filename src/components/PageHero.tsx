import type { ReactNode } from "react";
import { Eyebrow } from "./ui";
import { cn } from "@/lib/cn";

/** Shared masthead for every page except the homepage. */
export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy-900 px-5 pb-20 pt-16 pitch-lines sm:px-8 lg:pb-24 lg:pt-20",
        className,
      )}
    >
      {/* Floodlight wash + bolt streak, pulled from the crest's blue */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-40 h-[28rem] w-[28rem] rounded-full bg-electric-500/12 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-gold-500/8 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[0.9] sm:text-6xl lg:text-7xl">{title}</h1>
        {lede ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver-400 lg:text-xl">{lede}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
