import { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-surface-border bg-white p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ccc] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] ${className}`}
    >
      {children}
    </div>
  );
}
