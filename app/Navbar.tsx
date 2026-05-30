"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BulbToggle from "./components/BulbToggle";

const navLinks = [
  { label: "About", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-[hsl(var(--paper)/0.85)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
          </span>
          Shashank Jha<span className="ink-soft">©</span>
        </Link>

        <nav className="flex items-center gap-5 sm:gap-8">
          <ul className="hidden items-center gap-6 sm:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`label link-underline !tracking-[0.14em] transition-colors ${
                      active ? "!text-[hsl(var(--ink))]" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <BulbToggle />
        </nav>
      </div>
    </header>
  );
}
