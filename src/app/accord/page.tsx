import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "The Butterfly Accord",
};

export default function AccordPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Commitment at Scale
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-500">
            The Butterfly Accord aligns governments, corporations, and
            institutions around a shared commitment to emotional sustainability.
          </p>
        </div>
      </Section>

      <Section label="The Framework" className="bg-neutral-50">
        <div className="grid gap-8 sm:grid-cols-3 md:gap-10">
          <Card>
            <h3 className="text-base font-semibold text-neutral-900">
              Measurable
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              Every commitment is tied to published deliverables and a
              measurement framework. Accountability, not aspiration.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-semibold text-neutral-900">
              Accountable
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              Signatories publish annual progress against their commitments.
              Transparency is the default.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-semibold text-neutral-900">
              Integrated
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              Emotional Sustainability becomes part of ESG reporting, workplace
              policy, and institutional governance — not a separate initiative.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Not a Pledge. A Framework.
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-neutral-700">
            <p>
              The Accord moves beyond symbolic pledges. It provides a structured
              framework for deploying the Butterfly Protocol within each
              signatory&rsquo;s sector — with published commitments, public
              updates, and independent measurement.
            </p>
            <p>
              Founding signatories help define the standard. Late adopters follow
              it.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
