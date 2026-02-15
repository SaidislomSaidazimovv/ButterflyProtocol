interface ScriptLine {
  label: string;
  action: string;
  words: string;
}

export default function ScriptSpec({ lines }: { lines: ScriptLine[] }) {
  return (
    <div className="space-y-0 divide-y divide-neutral-100 rounded-2xl border border-neutral-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      {lines.map((line) => (
        <div key={line.label} className="px-8 py-6">
          <div className="mb-1.5 flex items-center gap-3">
            <span className="rounded-md bg-neutral-900 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
              {line.label}
            </span>
            <span className="text-sm font-medium text-neutral-900">
              {line.action}
            </span>
          </div>
          <p className="text-lg leading-relaxed text-neutral-600 italic">
            &ldquo;{line.words}&rdquo;
          </p>
        </div>
      ))}
    </div>
  );
}
