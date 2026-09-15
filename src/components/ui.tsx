import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Button                                                                     */
/* -------------------------------------------------------------------------- */

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  type?: "button" | "submit";
};

const VARIANTS = {
  primary:
    "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-[0_8px_30px_-10px] shadow-gold-500/60",
  secondary:
    "bg-electric-500 text-navy-950 hover:bg-electric-400 shadow-[0_8px_30px_-10px] shadow-electric-500/60",
  ghost:
    "bg-transparent text-white ring-2 ring-inset ring-white/25 hover:ring-electric-400 hover:text-electric-300",
} as const;

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
}: ButtonProps) {
  // The -8deg skew echoes the italic lettering and bolts in the crest.
  const classes = cn(
    "group inline-flex -skew-x-8 items-center justify-center font-display font-bold uppercase italic tracking-wide transition-all duration-200 active:translate-y-px",
    size === "lg" ? "px-8 py-3.5 text-lg" : "px-6 py-2.5 text-base",
    VARIANTS[variant],
    className,
  );
  const inner = <span className="skew-x-8">{children}</span>;

  if (!href) {
    return (
      <button type={type} className={classes}>
        {inner}
      </button>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {inner}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Eyebrow / headings                                                         */
/* -------------------------------------------------------------------------- */

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.3em] text-electric-400",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-electric-500" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed text-silver-400",
            align === "center" && "mx-auto",
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Badge                                                                      */
/* -------------------------------------------------------------------------- */

export function Badge({
  children,
  tone = "electric",
  className,
}: {
  children: ReactNode;
  tone?: "electric" | "gold" | "flare" | "muted";
  className?: string;
}) {
  const tones = {
    electric: "bg-electric-500/15 text-electric-300 ring-electric-500/35",
    gold: "bg-gold-500/15 text-gold-400 ring-gold-500/35",
    flare: "bg-flare-500/15 text-flare-400 ring-flare-500/40",
    muted: "bg-white/5 text-silver-400 ring-white/15",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.16em] ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reveal on scroll                                                           */
/* -------------------------------------------------------------------------- */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    io.observe(node);
    return () => io.disconnect();
  }, [visible]);

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section shell                                                              */
/* -------------------------------------------------------------------------- */

export function Section({
  children,
  className,
  id,
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "dark" | "darker" | "panel";
}) {
  const tones = {
    dark: "bg-navy-900",
    darker: "bg-navy-950",
    panel: "bg-navy-850",
  } as const;

  return (
    <section
      id={id}
      className={cn(
        "relative px-5 py-20 sm:px-8 lg:py-28",
        tones[tone],
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
