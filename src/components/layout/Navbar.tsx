"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#foundation", label: "The Foundation" },
  { href: "#protocol", label: "The Protocol" },
  { href: "#accord", label: "The Accord" },
  { href: "#governance", label: "Governance" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-1000 border-b border-surface-border bg-white/95 backdrop-blur-[10px]">
      <div className="mx-auto flex h-16 max-w-300 items-center justify-between px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/Onetopia_Logo_Glowing2.png"
            alt="Butterfly Foundation"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-[1.1rem] font-bold tracking-tight text-text-main">
            Butterfly Foundation
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.9rem] font-medium text-text-secondary transition-colors duration-200 hover:text-text-main"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#governance"
            className="inline-flex items-center justify-center rounded-lg border border-surface-border bg-white px-4 py-2 text-[0.85rem] font-semibold text-text-main transition-all duration-200 hover:border-text-main hover:bg-surface"
          >
            Partner Access
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary hover:bg-surface lg:hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-surface-border bg-white px-8 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[0.9rem] font-medium text-text-secondary transition-colors duration-200 hover:text-text-main"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#governance"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center justify-center rounded-lg border border-surface-border bg-white px-4 py-2 text-[0.85rem] font-semibold text-text-main transition-all duration-200 hover:border-text-main hover:bg-surface"
            >
              Partner Access
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
