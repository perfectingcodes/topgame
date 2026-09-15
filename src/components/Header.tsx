import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

import Logo from "./Logo";
import { Button } from "./ui";
import { cn } from "@/lib/cn";
import { club } from "@/data/site";

const NAV = [
  { href: "/about", label: "Academy" },
  { href: "/teams", label: "Teams" },
  { href: "/pathway", label: "Pathway" },
  { href: "/coaches", label: "Coaches" },
  { href: "/schedule", label: "Schedule" },
  { href: "/news", label: "Reports" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on navigation, and don't let the page scroll behind it.
  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    location === href || location.startsWith(`${href}/`);

  return (
    <>
      {/* Announcement strip */}
      <div className="relative z-50 bg-flare-500 px-4 py-1.5 text-center">
        <Link
          href="/tryouts"
          className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white hover:text-gold-300 sm:text-sm"
        >
          <span className="sm:hidden">Tryouts open — U12 &amp; U14 boys →</span>
          <span className="hidden sm:inline">
            Tryouts are open for U12 &amp; U14 boys — claim your spot →
          </span>
        </Link>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          open
            ? "bg-navy-950"
            : scrolled
              ? "bg-navy-950/92 shadow-lg shadow-navy-950/50 backdrop-blur-md"
              : "bg-navy-950/60 backdrop-blur-sm",
        )}
      >
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-electric-500/60 to-transparent"
        />

        <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" aria-label={`${club.name} home`}>
            <Logo />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-0.5 xl:flex"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 font-display text-[0.9rem] font-bold uppercase tracking-[0.1em] transition-colors",
                  isActive(item.href)
                    ? "text-gold-400"
                    : "text-silver-300 hover:text-white",
                )}
              >
                {item.label}
                {isActive(item.href) ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 -skew-x-12 bg-gold-500"
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href={`tel:${club.phoneHref}`}
              className="hidden items-center gap-2 text-sm font-semibold text-silver-300 transition-colors hover:text-electric-300 2xl:flex"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {club.phone}
            </a>
            <Button href="/tryouts">Try Out</Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-md p-2 text-white transition-colors hover:bg-white/10 xl:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-72px)] overflow-y-auto border-b border-white/10 bg-navy-950 shadow-2xl shadow-navy-950/80 xl:hidden"
            >
              <nav aria-label="Mobile" className="flex flex-col px-5 py-4">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "border-b border-white/5 py-4 font-display text-2xl font-bold uppercase italic tracking-tight transition-colors",
                      isActive(item.href)
                        ? "text-gold-400"
                        : "text-white hover:text-electric-300",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-6">
                  <Button href="/tryouts" size="lg" className="w-full">
                    Try Out
                  </Button>
                  <a
                    href={`tel:${club.phoneHref}`}
                    className="flex items-center justify-center gap-2 py-2 font-semibold text-silver-300"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    {club.phone}
                  </a>
                </div>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
