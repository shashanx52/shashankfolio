"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import BulbToggle from "./components/BulbToggle";

const navLinks = [
  { label: "About", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

const MENU_ID = "primary-menu";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  /* Close on navigation. Without this the panel stays open over the new page,
     because the App Router keeps this component mounted across routes. */
  useEffect(() => setOpen(false), [pathname]);

  /* Escape closes it, and the page behind stops scrolling while it is open. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-[hsl(var(--paper)/0.82)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-10">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--accent))] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--accent))]" />
          </span>
          Shashank Jha<span className="ink-soft">©</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          {/* Desktop and mobile each need their own list, but only one is ever
              in the accessibility tree: this one is display:none below `sm`,
              and the panel below carries `hidden` until it is opened. */}
          <nav aria-label="Primary" className="hidden sm:block">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`label link-underline !tracking-[0.14em] transition-colors ${
                        active
                          ? "!text-[hsl(var(--accent))]"
                          : "hover:!text-[hsl(var(--ink))]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <BulbToggle />

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={MENU_ID}
            className="flex h-9 w-9 items-center justify-center sm:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        id={MENU_ID}
        aria-label="Primary"
        hidden={!open}
        className="border-t hairline bg-[hsl(var(--paper))] sm:hidden"
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-5">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href} className="border-b hairline last:border-b-0">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`block py-4 text-step-2 font-bold tracking-tight transition-colors ${
                    active ? "text-[hsl(var(--accent))]" : "ink-soft"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
