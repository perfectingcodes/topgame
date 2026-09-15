import { Crest } from "@/components/Logo";
import { Button, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy-900 px-5 py-24 pitch-lines sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_80%_at_50%_0%,rgba(49,169,224,0.16),transparent_60%)]"
      />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-7 text-center">
        <Crest className="h-24 w-auto opacity-90" />
        <Eyebrow className="justify-center">Out of play</Eyebrow>

        <p className="font-display text-8xl font-extrabold italic leading-none text-gold-500 sm:text-9xl">
          404
        </p>

        <h1 className="text-4xl leading-tight sm:text-5xl">That one sailed over the bar</h1>

        <p className="max-w-lg text-lg text-silver-400">
          The page you're after doesn't exist — or it moved. Let's get you back on the pitch.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/" size="lg">
            Back Home
          </Button>
          <Button href="/contact" size="lg" variant="ghost">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
