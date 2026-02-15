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
      className={`rounded-2xl border border-neutral-200 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_14px_40px_rgba(0,0,0,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}
