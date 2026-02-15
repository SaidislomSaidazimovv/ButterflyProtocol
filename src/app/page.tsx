import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[70vh] items-center bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-5xl">🦋</p>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-6xl">
              Emotional Sustainability.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-neutral-500">
              Building the global infrastructure for emotional stability and
              regeneration in the age of accelerating intelligence.
            </p>
            <div className="mt-10">
              <Button href="/framework">Explore the Framework</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* The Missing Infrastructure */}
      <Section label="The Challenge">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            The Missing Infrastructure
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-neutral-700">
            <p>
              The world built systems for finance. The world built systems for
              climate. It never built a system for emotional stability.
            </p>
            <p>
              AI is accelerating. Social cohesion is weakening. Volatility is
              rising. Human infrastructure must evolve.
            </p>
          </div>
        </div>
      </Section>

      {/* Three Pillars */}
      <Section label="What We Are Building" className="bg-neutral-50">
        <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          Three Layers
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3 md:gap-10">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Cultural Layer
            </p>
            <h3 className="mt-3 text-lg font-semibold text-neutral-900">
              The Butterfly Movement
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              A universal language for the emotional stages of life.
            </p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Stability Layer
            </p>
            <h3 className="mt-3 text-lg font-semibold text-neutral-900">
              Emotional Sustainability
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              Protect what makes us human.
            </p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Upgrade Layer
            </p>
            <h3 className="mt-3 text-lg font-semibold text-neutral-900">
              Emotional Regeneration
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              Redesign systems to increase human capacity.
            </p>
          </Card>
        </div>
      </Section>

      {/* The Stack */}
      <Section label="From Symbol to System">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            The Architecture
          </h2>
          <ul className="mt-8 space-y-4">
            {[
              "The Butterfly Movement",
              "Global Butterfly Month (May)",
              "The Butterfly Protocol",
              "The Butterfly Index",
              "The Butterfly Accord",
              "The Geneva Foundation",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-lg text-neutral-700"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-neutral-400">
            Culture. Measurement. Commitment. Execution.
          </p>
        </div>
      </Section>

      {/* Founding Partners */}
      <Section className="bg-neutral-50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Architects of the Next Global Standard
          </h2>
          <p className="text-lg leading-relaxed text-neutral-500">
            We are inviting a limited number of founding partners to help shape
            the institutional framework for Emotional Sustainability.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="secondary">
              Request Strategic Briefing
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
