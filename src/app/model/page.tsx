import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Institutional Model",
};

export default function ModelPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Governance &amp; Structure
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-500">
            The Butterfly Foundation is established in Geneva, Switzerland. It
            operates with institutional discipline, transparent capital
            allocation, and a long-term mandate.
          </p>
        </div>
      </Section>

      <Section label="Principles" className="bg-neutral-50">
        <div className="grid gap-8 sm:grid-cols-3 md:gap-10">
          <Card>
            <h3 className="text-base font-semibold text-neutral-900">
              Independent Oversight
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              Board-level governance with published policies, gift acceptance
              criteria, and clinical review on all materials.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-semibold text-neutral-900">
              Transparent Allocation
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              Capital directed toward protocol deployment, research
              partnerships, and sector-specific toolkits. Financials published
              annually.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-semibold text-neutral-900">
              Long-Term Mandate
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              Built for decades, not cycles. The Foundation standardizes
              Emotional Sustainability globally through sustained institutional
              architecture.
            </p>
          </Card>
        </div>
      </Section>

      <Section label="Phased Approach">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Three Phases
          </h2>
          <div className="mt-8 space-y-10">
            <div className="border-l-2 border-neutral-200 pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Phase I — May 2026
              </p>
              <h3 className="mt-2 text-base font-semibold text-neutral-900">
                Cultural Pre-Launch
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                Global Butterfly Challenge activation. Unified symbol and
                ritual. Influencer coalition. Legal and medical oversight.
              </p>
            </div>
            <div className="border-l-2 border-neutral-200 pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Phase II — September 2026
              </p>
              <h3 className="mt-2 text-base font-semibold text-neutral-900">
                Institutional Presentation
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                Emotional Sustainability and Regeneration frameworks presented.
                Butterfly Accord proposed. Recognition sought, not control.
              </p>
            </div>
            <div className="border-l-2 border-neutral-200 pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Phase III — May 2027
              </p>
              <h3 className="mt-2 text-base font-semibold text-neutral-900">
                Official Institutional Launch
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                Global festival. Government signatories. Corporate adoption.
                Full operational platform rollout.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-50">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-neutral-700">
            Purpose: To standardize Emotional Sustainability globally.
          </p>
        </div>
      </Section>
    </>
  );
}
