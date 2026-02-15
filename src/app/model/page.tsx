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
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-tight text-text-main">
            Governance &amp; Structure
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-text-secondary">
            The Butterfly Foundation is established in Geneva, Switzerland. It
            operates with institutional discipline, transparent capital
            allocation, and a long-term mandate.
          </p>
        </div>
      </Section>

      <Section label="Principles" className="bg-surface">
        <div className="grid gap-8 sm:grid-cols-3">
          <Card>
            <h3 className="text-base font-semibold text-text-main">
              Independent Oversight
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              Board-level governance with published policies, gift acceptance
              criteria, and clinical review on all materials.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-semibold text-text-main">
              Transparent Allocation
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              Capital directed toward protocol deployment, research
              partnerships, and sector-specific toolkits. Financials published
              annually.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-semibold text-text-main">
              Long-Term Mandate
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              Built for decades, not cycles. The Foundation standardizes
              Emotional Sustainability globally through sustained institutional
              architecture.
            </p>
          </Card>
        </div>
      </Section>

      <Section label="Phased Approach">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-[clamp(2rem,4vw,3rem)] font-semibold text-text-main">
            Three Phases
          </h2>
          <div className="mt-8 space-y-10">
            <div className="border-l-[3px] border-surface-border pl-6">
              <p className="font-mono text-[0.85rem] font-medium uppercase tracking-[0.05em] text-text-tertiary">
                Phase I — May 2026
              </p>
              <h3 className="mt-2 text-base font-semibold text-text-main">
                Cultural Pre-Launch
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                Global Butterfly Challenge activation. Unified symbol and
                ritual. Influencer coalition. Legal and medical oversight.
              </p>
            </div>
            <div className="border-l-[3px] border-surface-border pl-6">
              <p className="font-mono text-[0.85rem] font-medium uppercase tracking-[0.05em] text-text-tertiary">
                Phase II — September 2026
              </p>
              <h3 className="mt-2 text-base font-semibold text-text-main">
                Institutional Presentation
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                Emotional Sustainability and Regeneration frameworks presented.
                Butterfly Accord proposed. Recognition sought, not control.
              </p>
            </div>
            <div className="border-l-[3px] border-surface-border pl-6">
              <p className="font-mono text-[0.85rem] font-medium uppercase tracking-[0.05em] text-text-tertiary">
                Phase III — May 2027
              </p>
              <h3 className="mt-2 text-base font-semibold text-text-main">
                Official Institutional Launch
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                Global festival. Government signatories. Corporate adoption.
                Full operational platform rollout.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-text-secondary">
            Purpose: To standardize Emotional Sustainability globally.
          </p>
        </div>
      </Section>
    </>
  );
}
