interface Step {
  number: string;
  title: string;
  description: string;
}

export default function StepList({ steps }: { steps: Step[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <div
          key={step.number}
          className="rounded-lg border border-surface-border bg-white p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ccc] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
        >
          <div className="mb-6 flex items-start justify-between border-b border-surface-border pb-4">
            <span className="font-mono text-2xl font-bold text-surface-border">
              0{step.number}
            </span>
            <span className="text-right text-[1.1rem] font-semibold text-text-main">
              {step.title}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-text-secondary">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
