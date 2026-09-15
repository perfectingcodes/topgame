import { useState } from "react";
import { Clock, MapPin, CheckCircle2, ChevronDown } from "lucide-react";

import PageHero from "@/components/PageHero";
import {
  Badge,
  Button,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { club, faqs, tryouts, teams } from "@/data/site";
import { cn, formatDate } from "@/lib/cn";

export default function Tryouts() {
  return (
    <>
      <PageHero
        eyebrow={tryouts.window}
        title={
          <>
            Earn your
            <br />
            <span className="text-gold-500">spot</span>
          </>
        }
        lede="Open tryouts for U12 and U14 boys. No current club required, no invitation needed — register, show up, and compete."
      >
        <div className="flex flex-wrap gap-3">
          <Badge tone="flare">{tryouts.fee}</Badge>
          <Badge tone="muted">All skill levels evaluated</Badge>
        </div>
      </PageHero>

      {/* Sessions */}
      <Section tone="darker">
        <Reveal>
          <SectionHeading
            eyebrow="Dates"
            title="Tryout sessions"
            lede="Two looks per age group. Attend both if you can — the second session is where we make most decisions."
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {tryouts.sessions.map((session, i) => {
            const isU14 = session.group.startsWith("U14");
            return (
              <Reveal key={`${session.date}-${session.group}`} delay={i * 80}>
                <li
                  className={cn(
                    "flex h-full flex-col gap-4 border-l-2 bg-navy-900 p-7",
                    isU14 ? "border-gold-500" : "border-electric-500",
                  )}
                >
                  <Badge tone={isU14 ? "gold" : "electric"}>
                    {session.group}
                  </Badge>

                  <p className="font-display text-3xl font-extrabold uppercase italic leading-none text-white">
                    {formatDate(session.date)}
                  </p>

                  <div className="flex flex-col gap-2 text-sm text-silver-300">
                    <p className="flex items-center gap-2.5">
                      <Clock
                        className="h-4 w-4 shrink-0 text-silver-500"
                        aria-hidden
                      />
                      {session.time}
                    </p>
                    <p className="flex items-start gap-2.5">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0 text-silver-500"
                        aria-hidden
                      />
                      {session.location}
                    </p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      {/* Bring + evaluation */}
      <Section tone="dark" className="pitch-lines">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <SectionHeading eyebrow="Checklist" title="What to bring" />
              <ul className="mt-8 flex flex-col gap-4">
                {tryouts.bring.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-silver-300"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-electric-500"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <SectionHeading eyebrow="Evaluation" title="How we assess" />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {tryouts.evaluated.map((item) => (
                  <li
                    key={item.title}
                    className="border border-white/10 bg-navy-850 p-5"
                  >
                    <h3 className="text-xl text-gold-400">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-silver-400">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Registration */}
      <Section tone="darker">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Register"
                title="Save a spot"
                lede="Send us your details and we'll confirm your tryout slot along with the medical release form."
              />
              <div className="mt-8 flex flex-col gap-3 text-sm text-silver-400">
                <p>
                  <span className="font-display uppercase tracking-[0.18em] text-gold-400">
                    Tryout cost:
                  </span>{" "}
                  {tryouts.fee}
                </p>
                <p>
                  <span className="font-display uppercase tracking-[0.18em] text-gold-400">
                    Season fee:
                  </span>{" "}
                  {tryouts.seasonFee}
                </p>
                <p>
                  Prefer to talk it through? Call{" "}
                  <a
                    href={`tel:${club.phoneHref}`}
                    className="text-electric-400 hover:underline"
                  >
                    {club.phone}
                  </a>
                  .
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <TryoutForm />
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="panel">
        <Reveal>
          <SectionHeading
            eyebrow="Questions"
            title="Before you ask"
            align="center"
          />
        </Reveal>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <details className="group border border-white/10 bg-navy-900 open:border-electric-500/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-display text-lg font-bold uppercase italic text-white marker:content-none">
                  {faq.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-electric-400 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-silver-400">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

/* -------------------------------------------------------------------------- */

const FIELD =
  "w-full border border-white/15 bg-navy-950 px-4 py-3 text-white placeholder:text-silver-500 transition-colors focus:border-electric-500 focus:outline-none";
const LABEL =
  "font-display text-xs font-bold uppercase tracking-[0.2em] text-silver-400";

/**
 * Registration form.
 *
 * TODO: point this at a real backend (Formspree, Netlify Forms, or the club's
 * registration platform). Until then it opens the family's mail client with a
 * prefilled message so no enquiry is silently dropped.
 */
function TryoutForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const body = [
      `Player name: ${data.get("player")}`,
      `Date of birth: ${data.get("dob")}`,
      `Age group: ${data.get("group")}`,
      `Position: ${data.get("position") || "—"}`,
      `Current club: ${data.get("currentClub") || "—"}`,
      "",
      `Parent/guardian: ${data.get("parent")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      "",
      `Notes: ${data.get("notes") || "—"}`,
    ].join("\n");

    window.location.href = `mailto:${club.email}?subject=${encodeURIComponent(
      `Tryout registration — ${data.get("player")}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 border border-white/10 bg-navy-900 p-7 lg:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={LABEL}>Player name *</span>
          <input
            required
            name="player"
            autoComplete="off"
            className={FIELD}
            placeholder="First and last"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={LABEL}>Date of birth *</span>
          <input
            required
            type="date"
            name="dob"
            className={cn(FIELD, "[color-scheme:dark]")}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={LABEL}>Age group *</span>
          <select required name="group" defaultValue="" className={FIELD}>
            <option value="" disabled>
              Select a squad
            </option>
            {teams.map((team) => (
              <option key={team.slug} value={team.name}>
                {team.name} ({team.birthYears})
              </option>
            ))}
            <option value="Not sure">Not sure yet</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className={LABEL}>Preferred position</span>
          <input
            name="position"
            className={FIELD}
            placeholder="e.g. Centre-mid"
          />
        </label>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className={LABEL}>Current club (if any)</span>
          <input
            name="currentClub"
            className={FIELD}
            placeholder="Leave blank if unattached"
          />
        </label>
      </div>

      <hr className="border-white/10" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={LABEL}>Parent / guardian *</span>
          <input
            required
            name="parent"
            autoComplete="name"
            className={FIELD}
            placeholder="Your name"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={LABEL}>Email *</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className={FIELD}
            placeholder="you@email.com"
          />
        </label>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className={LABEL}>Phone *</span>
          <input
            required
            type="tel"
            name="phone"
            autoComplete="tel"
            className={FIELD}
            placeholder="(239) 555-0100"
          />
        </label>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className={LABEL}>Anything we should know?</span>
          <textarea
            name="notes"
            rows={4}
            className={cn(FIELD, "resize-y")}
            placeholder="Injuries, scheduling conflicts, questions…"
          />
        </label>
      </div>

      <Button type="submit" size="lg" className="mt-1 w-full">
        Register for Tryouts
      </Button>

      <p aria-live="polite" className="text-sm text-silver-500">
        {sent
          ? "Your email app should have opened with the details filled in — hit send and we'll confirm your slot within 48 hours."
          : "We'll confirm your tryout slot by email within 48 hours."}
      </p>
    </form>
  );
}
