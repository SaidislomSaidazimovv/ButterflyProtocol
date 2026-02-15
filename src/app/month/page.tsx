import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Global Butterfly Month",
};

const sectors = [
  "Technology",
  "Media",
  "Finance",
  "Governance",
  "Education",
  "Culture",
  "Healthcare",
  "Sports",
  "Entertainment",
  "Retail",
  "Legal",
  "Architecture",
  "Energy",
  "Transport",
  "Agriculture",
  "Philanthropy",
];

export default function MonthPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            May. Global Alignment.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-500">
            Every May, the Butterfly rises as a synchronized global moment. Not
            awareness. Acceleration.
          </p>
        </div>
      </Section>

      <Section label="The Activation" className="bg-neutral-50">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Cultural Ignition
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-neutral-700">
            <p>
              May 2026 is the cultural pre-launch — a socially engineered global
              activation built on a unified symbol, a ritual, and a coalition of
              partners across every major sector.
            </p>
            <p>
              The event is symbolic. The real activation is digital. This creates
              visibility, identity, and narrative ownership.
            </p>
          </div>
        </div>
      </Section>

      <Section label="16 Sectors">
        <h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          Cross-Sector Alignment
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-neutral-700">
          Global Butterfly Month coordinates activation across 16 sectors
          simultaneously.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-5">
          {sectors.map((sector) => (
            <Card key={sector} className="p-5! text-center">
              <p className="text-sm font-medium text-neutral-700">{sector}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-neutral-50">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-medium text-neutral-700">
            May 2026 builds leverage.
          </p>
          <p className="mt-2 text-lg font-medium text-neutral-700">
            May 2027 builds structure.
          </p>
        </div>
      </Section>
    </>
  );
}
