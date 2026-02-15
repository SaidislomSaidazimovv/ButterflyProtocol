import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "The Butterfly Index",
};

const metrics = [
  {
    title: "Workplace Well-Being",
    description:
      "Protocol adoption rates, utilization of support resources, and aggregate engagement metrics across corporate environments.",
  },
  {
    title: "Youth Stability",
    description:
      "Deployment in educational settings. Adoption by schools, universities, and youth organizations. Aggregate check-in reach.",
  },
  {
    title: "Digital Health",
    description:
      "Integration with digital platforms. Protocol accessibility, resource routing effectiveness, and platform-level adoption.",
  },
  {
    title: "Institutional Resilience",
    description:
      "Government and institutional signatory progress. Accord compliance, policy integration, and cross-sector coordination.",
  },
];

export default function IndexPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-tight text-text-main">
            Measure What Matters
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-text-secondary">
            Emotional stability must become visible. The Butterfly Index tracks
            adoption, reach, and implementation across sectors — making progress
            measurable without compromising privacy.
          </p>
        </div>
      </Section>

      <Section label="Domains" className="bg-surface">
        <div className="grid gap-8 sm:grid-cols-2">
          {metrics.map((m) => (
            <Card key={m.title}>
              <h3 className="text-base font-semibold text-text-main">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {m.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-[clamp(2rem,4vw,3rem)] font-semibold text-text-main">
            Methodology
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-text-secondary">
            <p>
              Built on the RE-AIM framework: Reach, Effectiveness, Adoption,
              Implementation, Maintenance. Year 1 metrics focus on Reach, Adoption,
              and Implementation Fidelity. Effectiveness claims require independent
              evaluation in Year 2 and beyond.
            </p>
            <p>
              All data is aggregate and de-identified. Privacy-safe measurement
              using established frameworks ensures compliance without compromising
              the integrity of the Index.
            </p>
          </div>
          <p className="mt-6 text-sm text-text-tertiary">
            Progress made measurable.
          </p>
        </div>
      </Section>
    </>
  );
}
