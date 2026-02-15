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
      className={`text-[0.9rem] font-medium transition-colors duration-200 ${
        isActive
          ? "text-text-main"
          : "text-text-secondary hover:text-text-main"
      }`}
    >
      {children}
    </Link>
  );
}
