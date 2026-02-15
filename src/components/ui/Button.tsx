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
    "inline-flex items-center justify-center h-12 px-6 rounded-full text-sm font-medium transition-all duration-200";
  const variants = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800",
    secondary:
      "border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
