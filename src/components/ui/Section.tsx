import { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  children,
  id,
  label,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  label?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-neutral-100 py-24 md:py-28 ${className}`}>
      <Container>
        {label && (
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            {label}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
