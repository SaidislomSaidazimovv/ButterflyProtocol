import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center py-4 px-8 rounded-lg text-base font-semibold transition-all duration-200";
  const variants = {
    primary: "bg-text-main text-white border border-text-main hover:bg-[#333]",
    secondary:
      "border border-surface-border bg-white text-text-main hover:border-text-main hover:bg-surface",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
