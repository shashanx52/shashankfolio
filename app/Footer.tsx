import React from 'react';
import Link from 'next/link';

const pages = [
  { label: 'About', href: '/' },
  { label: 'Work', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
];

const elsewhere = [
  { label: 'Email', href: 'mailto:shashankjha.0052@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shashanx/' },
  { label: 'GitHub', href: 'https://github.com/shashanx52' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/shashanx/' },
];

const Footer = () => {
  /* Evaluated at build time — no more editing the year by hand each January. */
  const year = new Date().getFullYear();

  return (
    <footer className="border-t hairline">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-12">
          <div className="sm:col-span-6">
            <p className="display text-step-3">
              Shashank Jha<span className="ink-accent">.</span>
            </p>
            <p className="mt-2 max-w-sm text-base ink-soft">
              Product Analyst at Times Internet — The Economic Times. Open to
              analytics roles and hard data problems.
            </p>
          </div>

          <nav className="sm:col-span-3" aria-label="Pages">
            <h2 className="label mb-4">Pages</h2>
            <ul className="flex flex-col gap-2">
              {pages.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-underline text-base">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="sm:col-span-3" aria-label="Elsewhere">
            <h2 className="label mb-4">Elsewhere</h2>
            <ul className="flex flex-col gap-2">
              {elsewhere.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={l.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="link-underline text-base"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label">© {year} Shashank Jha — All rights reserved</p>
          <p className="label">Noida, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
