import { Link } from "wouter";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

import Logo from "./Logo";
import { club, teams } from "@/data/site";

const COLUMNS = [
  {
    title: "Academy",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/coaches", label: "Coaching Staff" },
      { href: "/pathway", label: "College Pathway" },
      { href: "/tryouts", label: "Tryouts" },
    ],
  },
  {
    title: "Teams",
    links: [
      { href: "/teams", label: "All Teams" },
      ...teams.map((t) => ({ href: `/teams/${t.slug}`, label: t.name })),
      { href: "/news", label: "Tournament Reports" },
      { href: "/sponsors", label: "Sponsors" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-950 pitch-lines">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-flare-500 via-electric-500 to-gold-500"
      />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-5">
          <Link href="/" aria-label={`${club.name} home`}>
            <Logo />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-silver-400">
            {club.tagline}. Developing U12 and U14 boys in {club.city},{" "}
            {club.state} — technically sharp, tactically sound, and ready for
            whatever comes next.
          </p>
          <div className="flex gap-3">
            <a
              href={club.social.instagram}
              aria-label={`${club.name} on Instagram`}
              className="rounded-md border border-white/15 p-2.5 text-silver-300 transition-colors hover:border-electric-500 hover:text-electric-300"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={club.social.facebook}
              aria-label={`${club.name} on Facebook`}
              className="rounded-md border border-white/15 p-2.5 text-silver-300 transition-colors hover:border-electric-500 hover:text-electric-300"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <nav
            key={col.title}
            aria-label={col.title}
            className="flex flex-col gap-4"
          >
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.24em] text-gold-400">
              {col.title}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver-300 transition-colors hover:text-electric-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.24em] text-gold-400">
            Get in Touch
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-silver-300">
            <li>
              <a
                href={`tel:${club.phoneHref}`}
                className="flex items-center gap-2.5 hover:text-electric-300"
              >
                <Phone
                  className="h-4 w-4 shrink-0 text-electric-500"
                  aria-hidden
                />
                {club.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${club.email}`}
                className="flex items-center gap-2.5 hover:text-electric-300"
              >
                <Mail
                  className="h-4 w-4 shrink-0 text-electric-500"
                  aria-hidden
                />
                {club.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-electric-500"
                aria-hidden
              />
              <address className="not-italic leading-relaxed">
                {club.address.line1}
                <br />
                {club.address.line2}
                <br />
                {club.address.city}, {club.address.state} {club.address.zip}
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-silver-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {club.name}. All rights reserved.
          </p>
          <p className="font-display uppercase tracking-[0.2em]">
            {club.city}, {club.state} · Est. {club.founded}
          </p>
        </div>
      </div>
    </footer>
  );
}
