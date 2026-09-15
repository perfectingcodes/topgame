import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Clock } from "lucide-react";

import PageHero from "@/components/PageHero";
import { Button, Reveal, Section, SectionHeading } from "@/components/ui";
import { club, teams } from "@/data/site";
import { cn } from "@/lib/cn";

const FIELD =
  "w-full border border-white/15 bg-navy-950 px-4 py-3 text-white placeholder:text-silver-500 transition-colors focus:border-electric-500 focus:outline-none";
const LABEL = "font-display text-xs font-bold uppercase tracking-[0.2em] text-silver-400";

const TOPICS = [
  "Tryouts & registration",
  "Team or schedule question",
  "Fees & financial assistance",
  "Coaching enquiry",
  "Sponsorship",
  "Something else",
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's talk
            <br />
            <span className="text-electric-400">soccer</span>
          </>
        }
        lede={`Questions about tryouts, fees, or whether your son is ready? We answer every message — usually same day.`}
      />

      <Section tone="darker">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Details */}
          <Reveal>
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-3xl">Reach the academy</h2>
                <ul className="mt-6 flex flex-col gap-5">
                  <li>
                    <a
                      href={`tel:${club.phoneHref}`}
                      className="group flex items-start gap-4 text-silver-300 transition-colors hover:text-white"
                    >
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-electric-500" aria-hidden />
                      <span>
                        <span className={cn(LABEL, "block")}>Phone</span>
                        <span className="text-lg font-semibold text-white group-hover:text-electric-300">
                          {club.phone}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${club.email}`}
                      className="group flex items-start gap-4 text-silver-300 transition-colors hover:text-white"
                    >
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-electric-500" aria-hidden />
                      <span>
                        <span className={cn(LABEL, "block")}>Email</span>
                        <span className="text-lg font-semibold text-white group-hover:text-electric-300">
                          {club.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-electric-500" aria-hidden />
                    <span>
                      <span className={cn(LABEL, "block")}>Home ground</span>
                      <address className="text-lg font-semibold not-italic leading-snug text-white">
                        {club.address.line1}
                        <br />
                        {club.address.line2}
                        <br />
                        {club.address.city}, {club.address.state} {club.address.zip}
                      </address>
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.24em] text-gold-400">
                  Find us on the pitch
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {teams.map((team) => (
                    <li key={team.slug} className="flex items-start gap-3 text-sm text-silver-300">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-silver-500" aria-hidden />
                      <span>
                        <span className="font-semibold text-white">{team.name}</span> —{" "}
                        {team.trainingDays.map((d) => d.day.slice(0, 3)).join(", ")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <a
                  href={club.social.instagram}
                  aria-label={`${club.name} on Instagram`}
                  className="flex items-center gap-2 border border-white/15 px-4 py-2.5 text-sm font-semibold text-silver-300 transition-colors hover:border-electric-500 hover:text-electric-300"
                >
                  <Instagram className="h-4 w-4" aria-hidden />
                  Instagram
                </a>
                <a
                  href={club.social.facebook}
                  aria-label={`${club.name} on Facebook`}
                  className="flex items-center gap-2 border border-white/15 px-4 py-2.5 text-sm font-semibold text-silver-300 transition-colors hover:border-electric-500 hover:text-electric-300"
                >
                  <Facebook className="h-4 w-4" aria-hidden />
                  Facebook
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      {/* Map */}
      <Section tone="dark" className="pitch-lines">
        <Reveal>
          <SectionHeading
            eyebrow="Getting Here"
            title="Home ground"
            lede={`${club.address.line1} — parking is free, and the academy fields are on the north side of the complex.`}
          />
        </Reveal>

        <Reveal delay={100}>
          {/* TODO: swap for an embedded map once the exact field address is confirmed. */}
          <div className="mt-10 aspect-[16/8] w-full overflow-hidden border border-white/10">
            <iframe
              title={`Map showing ${club.name} in ${club.city}, ${club.state}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[35%]"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${club.address.line2}, ${club.address.city}, ${club.address.state} ${club.address.zip}`,
              )}&output=embed`}
            />
          </div>
        </Reveal>
      </Section>
    </>
  );
}

/* -------------------------------------------------------------------------- */

/**
 * TODO: wire to a real form endpoint. Falls back to a prefilled mailto so no
 * message is silently lost in the meantime.
 */
function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "—"}`,
      `Topic: ${data.get("topic")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");

    window.location.href = `mailto:${club.email}?subject=${encodeURIComponent(
      `Website enquiry — ${data.get("topic")}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 border border-white/10 bg-navy-900 p-7 lg:p-9">
      <h2 className="text-3xl">Send a message</h2>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={LABEL}>Your name *</span>
          <input required name="name" autoComplete="name" className={FIELD} placeholder="First and last" />
        </label>

        <label className="flex flex-col gap-2">
          <span className={LABEL}>Email *</span>
          <input required type="email" name="email" autoComplete="email" className={FIELD} placeholder="you@email.com" />
        </label>

        <label className="flex flex-col gap-2">
          <span className={LABEL}>Phone</span>
          <input type="tel" name="phone" autoComplete="tel" className={FIELD} placeholder="Optional" />
        </label>

        <label className="flex flex-col gap-2">
          <span className={LABEL}>Topic *</span>
          <select required name="topic" defaultValue={TOPICS[0]} className={FIELD}>
            {TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className={LABEL}>Message *</span>
        <textarea
          required
          name="message"
          rows={6}
          className={cn(FIELD, "resize-y")}
          placeholder="Tell us about your son, his experience, and what you're looking for…"
        />
      </label>

      <Button type="submit" size="lg" variant="secondary" className="w-full">
        Send Message
      </Button>

      <p aria-live="polite" className="text-sm text-silver-500">
        {sent
          ? "Your email app should have opened with your message ready to send."
          : "We reply to every message, usually within one business day."}
      </p>
    </form>
  );
}
