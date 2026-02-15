interface ScriptLine {
  label: string;
  action: string;
  words: string;
}

export default function ScriptSpec({ lines }: { lines: ScriptLine[] }) {
  return (
    <div className="relative rounded-xl border border-surface-border bg-surface p-12">
      <span className="absolute -top-3 left-12 rounded bg-text-main px-4 py-0.5 text-[0.8rem] font-semibold uppercase text-white">
        The 30-Second Script
      </span>
      <div className="space-y-6">
        {lines.map((line) => (
          <div key={line.label} className="border-l-[3px] border-surface-border pl-6">
            <span className="mb-1 block font-mono text-[0.85rem] uppercase text-text-tertiary">
              {line.label}
            </span>
            <p className="text-[1.4rem] font-medium leading-relaxed text-text-main">
              &ldquo;{line.words}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
