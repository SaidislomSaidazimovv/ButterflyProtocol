"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors duration-200 ${
        isActive
          ? "text-neutral-900"
          : "text-neutral-500 hover:text-neutral-800"
      }`}
    >
      {children}
    </Link>
  );
}
