interface Step {
  number: string;
  title: string;
  description: string;
}

export default function StepList({ steps }: { steps: Step[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-10">
      {steps.map((step) => (
        <div key={step.number} className="relative pl-10">
          <span className="absolute left-0 top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white">
            {step.number}
          </span>
          <h3 className="text-base font-semibold text-neutral-900">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
