import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    name: "The Signal",
    subtitle: "Input",
    descriptor:
      "A non-verbal API for empathy. The Butterfly Gesture creates a visible signal in high-noise environments.",
  },
  {
    number: "02",
    name: "The Script",
    subtitle: "Process",
    descriptor:
      "The 30-Second Response. A cognitive script to bypass the \u201cbystander freeze\u201d and validate safety without liability.",
  },
  {
    number: "03",
    name: "The Route",
    subtitle: "Network",
    descriptor:
      "Frictionless handoff. Connecting the signal directly to validated institutional support (988 / EAP / Crisis Lines).",
  },
  {
    number: "04",
    name: "The Index",
    subtitle: "Output",
    descriptor:
      "Measurable emotional infrastructure. Anonymous, open-source data proving the protocol works at scale.",
  },
];

const deploymentTargets = [
  {
    sector: "Workplace",
    description: "Corporate EAP integration and employee resilience protocols.",
  },
  {
    sector: "Education",
    description:
      "Campus-wide adoption from K\u201312 through higher education.",
  },
  {
    sector: "Government",
    description:
      "Policy-level integration into public health and crisis infrastructure.",
  },
  {
    sector: "Platforms",
    description:
      "Digital-native deployment across social, gaming, and AI interfaces.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="bg-linear-to-b from-white to-[#fcfcfc] pt-32 pb-24"
      >
        <Container>
          {/* OLD: mx-auto max-w-3xl text-center */}
          <div className="max-w-3xl text-left">
            <p className="mb-4 font-mono text-[0.85rem] font-medium uppercase tracking-[0.05em] text-text-tertiary">
              Protocol V1.0 &middot; Public Draft
            </p>

            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-tight text-text-main">
              The Global Standard for Emotional Infrastructure.
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-text-secondary">
              We are deploying the operating system for human resilience. A
              universal, open-source protocol to bridge the gap between &ldquo;I
              see you&rdquo; and &ldquo;Here is help.&rdquo;
            </p>

            {/* OLD: justify-center */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">
              <Button href="#protocol">View the Specification</Button>
              <Button href="#accord" variant="secondary">
                Adoption Roadmap
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 1: The Missing Layer */}
      <Section id="foundation" label="The Foundation">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-[clamp(2rem,4vw,3rem)] font-semibold text-text-main">
            Intelligence is scaling. Stability is not.
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
            <p>
              The world built systems for finance (SWIFT). The world built
              systems for information (TCP/IP). But we never built a system for
              emotional stability.
            </p>
            <p className="border-l-[3px] border-surface-border pl-6 font-medium text-text-main">
              Without a standard, compassion remains random.
              <br />
              With a standard, compassion becomes infrastructure.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 2: The Architecture */}
      <Section id="protocol" label="The Protocol" className="bg-surface">
        {/* Rasmga o‘xshab title */}
        <h2 className="text-left text-[clamp(2.2rem,4.5vw,3.2rem)] font-semibold tracking-tight text-text-main">
          Four Steps. One Standard.
        </h2>

        {/* 4 cards (02 active, qolganlari faded) */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => {
            const isActive = step.number === "02" || idx === 1;
            const isFaded = !isActive;

            return (
              <Card
                key={step.number}
                className={[
                  "rounded-2xl border bg-white p-8",
                  isActive
                    ? "border-zinc-400 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.45)]"
                    : "border-surface-border shadow-sm",
                  isFaded ? "opacity-55" : "",
                ].join(" ")}
              >
                {/* Header: 01 chapda, o‘ngda name+subtitle */}
                <div className="flex items-start justify-between">
                  <span
                    className={[
                      "font-mono text-2xl font-semibold",
                      isFaded ? "text-surface-border" : "text-text-main",
                    ].join(" ")}
                  >
                    {step.number}
                  </span>

                  <div className="text-right">
                    <div className="text-sm font-semibold tracking-wide text-text-main">
                      {step.name}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.12em] text-text-tertiary">
                      {step.subtitle}
                    </div>
                  </div>
                </div>

                <div className="mt-6 h-px w-full bg-surface-border" />

                {/* Body: rasmga o‘xshab bold prefix qo‘shamiz */}
                <p className="mt-6 text-sm leading-relaxed text-text-secondary">
                  <span className="font-semibold text-text-main">
                    {step.number === "01"
                      ? "The Trigger:"
                      : step.number === "02"
                        ? "The Action:"
                        : step.number === "03"
                          ? "The Handoff:"
                          : "The Output:"}{" "}
                  </span>
                  {step.descriptor}
                </p>

                {/* Rasmda bor qo‘shimcha line-lar */}
                {step.number === "02" ? (
                  <p className="mt-6 text-xs font-semibold tracking-wide text-text-main">
                    ↓ SEE FULL SCRIPT BELOW
                  </p>
                ) : null}

                {step.number === "01" ? (
                  <p className="mt-6 text-xs leading-relaxed text-text-tertiary">
                    <span className="font-semibold text-text-tertiary">
                      Assess First:
                    </span>{" "}
                    Is there immediate physical danger? Is privacy available? If
                    safe, proceed.
                  </p>
                ) : null}

                {step.number === "03" ? (
                  <p className="mt-6 text-xs leading-relaxed text-text-tertiary">
                    <span className="font-semibold text-text-tertiary">
                      Targets:
                    </span>{" "}
                    988, Crisis Text Line, or Employee Assistance Program (EAP).
                  </p>
                ) : null}
              </Card>
            );
          })}
        </div>

        {/* THE 30-SECOND SCRIPT block (rasmda pastda) */}
        <div className="mt-10">
          <div className="inline-flex items-center rounded-md bg-zinc-950 px-3 py-1 text-xs font-semibold tracking-wide text-white">
            THE 30-SECOND SCRIPT
          </div>

          <div className="mt-4 rounded-2xl border border-surface-border bg-white p-8 shadow-sm">
            <div className="space-y-10">
              <ScriptRow
                index="1"
                title="ACKNOWLEDGE"
                quote={`"I noticed something. I wanted to check in."`}
              />
              <ScriptRow
                index="2"
                title="RELIEVE PRESSURE"
                quote={`"You don't have to explain anything right now."`}
              />
              <ScriptRow
                index="3"
                title="OFFER OPTIONS (NEVER BINARY)"
                quote={`"What would help right now? I can stay with you, I can find someone, or I can share a resource. Whatever you need."`}
              />

              <div className="rounded-xl border border-surface-border bg-zinc-50 p-6">
                <div className="flex gap-4">
                  <div className="w-1 rounded-full bg-red-500" />
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-red-600">
                      IF IMMEDIATE CRISIS
                    </div>
                    <div className="mt-3 text-sm font-semibold leading-relaxed text-text-main">
                      "I'm going to stay with you. We're going to call 988
                      together right now."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 3: The Accord — Deployment */}
      <Section id="accord" label="The Accord">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-[clamp(2rem,4vw,3rem)] font-semibold text-text-main">
            Commitment at Scale
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-text-secondary">
            <p>
              The Butterfly Accord aligns Governments. Corporations.
              Institutions.
            </p>
            <p>
              Emotional Sustainability becomes measurable. Accountable.
              Integrated.
            </p>
            <p className="font-medium text-text-main">
              Not a pledge. A framework.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {deploymentTargets.map((target) => (
            <Card key={target.sector}>
              <h3 className="text-[1.1rem] font-semibold text-text-main">
                {target.sector}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {target.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Section 4: Governance */}
      <Section id="governance" className="bg-surface">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-mono text-[0.85rem] font-medium uppercase tracking-[0.05em] text-text-tertiary">
            Governance
          </p>
          <h2 className="mb-6 text-[clamp(2rem,4vw,3rem)] font-semibold text-text-main">
            Architects of the Next Global Standard
          </h2>
          <p className="text-lg leading-relaxed text-text-secondary">
            The Butterfly Foundation is established in Geneva, Switzerland with
            independent board oversight, transparent capital allocation, and a
            long-term institutional mandate.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            We are inviting a limited number of founding partners to help shape
            the institutional framework for Emotional Sustainability.
          </p>
          <div className="mt-8">
            <Button href="#governance" variant="secondary">
              Request Strategic Briefing
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

function ScriptRow({
  index,
  title,
  quote,
}: {
  index: string;
  title: string;
  quote: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-1 rounded-full bg-surface-border" />
      <div>
        <div className="text-xs tracking-wide text-text-tertiary">
          {index}. <span className="font-semibold">{title}</span>
        </div>
        <div className="mt-3 text-lg font-semibold leading-snug text-text-main">
          {quote}
        </div>
      </div>
    </div>
  );
}
