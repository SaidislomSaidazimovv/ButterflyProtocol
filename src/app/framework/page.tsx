import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import StepList from "@/components/ui/StepList";
import ScriptSpec from "@/components/ui/ScriptSpec";

export const metadata: Metadata = {
  title: "The Framework",
};

const protocolSteps = [
  {
    number: "1",
    title: "Signal",
    description:
      "A person shows the Butterfly gesture — a universal, silent signal that they need support.",
  },
  {
    number: "2",
    title: "Script",
    description:
      "The responder follows a 30-second check-in script: Acknowledge, Release, Route.",
  },
  {
    number: "3",
    title: "Route",
    description:
      "Based on severity, the person is connected to a moment of support, a resource map, or crisis services.",
  },
  {
    number: "4",
    title: "Measure",
    description:
      "Aggregate, de-identified data tracks adoption and reach — never individual outcomes.",
  },
];

const scriptLines = [
  {
    label: "Acknowledge",
    action: "Name what you saw.",
    words: "I saw your signal. Thank you for showing it.",
  },
  {
    label: "Release",
    action: "Remove pressure.",
    words: "You don't have to explain anything unless you want to.",
  },
  {
    label: "Route",
    action: "Offer a path.",
    words: "Do you want a moment — or do you want a resource?",
  },
];

export default function FrameworkPage() {
  return (
    <>
      {/* Intro */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            The Butterfly Framework
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-500">
            A structured approach to emotional sustainability — from cultural
            language to deployable standard.
          </p>
        </div>
      </Section>

      {/* Part 1 — Cultural Map */}
      <Section label="Part 1" className="bg-neutral-50">
        <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          The Cultural Map
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-neutral-700">
          A universal language for life transitions. Not diagnosis. Not
          ideology. A shared human map.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-5 md:gap-10">
          {[
            { stage: "Egg", desc: "Potential" },
            { stage: "Caterpillar", desc: "Growth" },
            { stage: "Cocoon", desc: "Transformation" },
            { stage: "Metamorphosis", desc: "Becoming" },
            { stage: "Butterfly", desc: "Emergence" },
          ].map((s) => (
            <Card key={s.stage} className="text-center">
              <h3 className="text-sm font-semibold text-neutral-900">
                {s.stage}
              </h3>
              <p className="mt-1 text-xs text-neutral-400">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Part 2 — Emotional Sustainability */}
      <Section label="Part 2">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Emotional Sustainability
          </h2>
          <p className="text-sm font-medium text-neutral-400">
            The defense layer.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-neutral-700">
            Protect psychological safety, belonging, purpose, resilience, and
            hope. Reduce volatility. Prevent collapse.
          </p>
          <p className="mt-4 text-sm text-neutral-400">
            Applied across: Governments. Corporations. Education. Platforms.
          </p>
        </div>
      </Section>

      {/* Part 3 — Emotional Regeneration */}
      <Section label="Part 3" className="bg-neutral-50">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Emotional Regeneration
          </h2>
          <p className="text-sm font-medium text-neutral-400">
            The upgrade layer.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-neutral-700">
            Redesign digital environments, work structures, incentive systems,
            AI alignment, and community density. Sustainability stabilizes.
            Regeneration transforms.
          </p>
        </div>
      </Section>

      {/* Part 4 — The Protocol (CENTERPIECE) */}
      <Section id="protocol" label="Part 4">
        <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          The Butterfly Protocol
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-neutral-700">
          The operational expression of the framework. A 30-second check-in
          standard that gives people words for the moment they would otherwise
          freeze.
        </p>

        {/* Pipeline: Signal → Script → Route → Measure */}
        <div className="mt-14">
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            The Pipeline
          </h3>
          <StepList steps={protocolSteps} />
        </div>

        {/* The 30-Second Script */}
        <div className="mt-16">
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            The 30-Second Check-In Script
          </h3>
          <ScriptSpec lines={scriptLines} />

          {/* Response paths */}
          <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <h4 className="mb-4 text-sm font-semibold text-neutral-900">
              Response Paths
            </h4>
            <div className="space-y-3 text-sm leading-relaxed text-neutral-600">
              <p>
                <span className="font-medium text-neutral-700">If moment:</span>{" "}
                &ldquo;I&rsquo;m here. I&rsquo;ll check back at [time].&rdquo;
              </p>
              <p>
                <span className="font-medium text-neutral-700">
                  If resource:
                </span>{" "}
                &ldquo;Let&rsquo;s open the resource map together.&rdquo;
              </p>
              <p>
                <span className="font-medium text-neutral-700">
                  If emergency:
                </span>{" "}
                &ldquo;Let&rsquo;s contact crisis services together right
                now.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Guardrails */}
        <div className="mt-16">
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Guardrails &amp; Disclaimers
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 md:gap-10">
            <Card>
              <h4 className="text-sm font-semibold text-neutral-900">
                Evidence-Informed
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                The protocol draws on established behavioral science — surgical
                checklists, implementation intentions, dispatcher-assisted
                scripts — adapted for emotional check-ins. It is
                evidence-informed, not clinically validated.
              </p>
            </Card>
            <Card>
              <h4 className="text-sm font-semibold text-neutral-900">
                Not a Clinical Service
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                This protocol does not replace professional mental health care.
                It provides a structured first response — a bridge to
                professional resources, not a substitute for them.
              </p>
            </Card>
            <Card>
              <h4 className="text-sm font-semibold text-neutral-900">
                Privacy-First Measurement
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                All metrics are aggregate and de-identified. No personally
                identifiable information is collected. Measurement tracks
                adoption and reach, not individual outcomes.
              </p>
            </Card>
            <Card>
              <h4 className="text-sm font-semibold text-neutral-900">
                Version Status
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                Protocol V0.9 — Public Draft. Under clinical review. Version 1.0
                target: May 2026.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Category Statement */}
      <Section className="bg-neutral-50">
        <div className="mx-auto max-w-2xl text-center">
          <blockquote className="text-xl font-medium leading-relaxed text-neutral-700 italic sm:text-2xl">
            &ldquo;Emotional Sustainability is to the human system what
            environmental sustainability is to the planet.&rdquo;
          </blockquote>
        </div>
      </Section>
    </>
  );
}
