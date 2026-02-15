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
    <section id={id} className={`border-b border-surface-border py-24 ${className}`}>
      <Container>
        {label && (
          <p className="mb-4 font-mono text-[0.85rem] font-medium uppercase tracking-[0.05em] text-text-tertiary">
            {label}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
