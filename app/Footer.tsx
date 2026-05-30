import React from 'react';
import Link from 'next/link';

const links = [
  { label: 'About', href: '/' },
  { label: 'Work', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
];

const Footer = () => {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="label">© 2026 Shashank Jha — All rights reserved</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="label link-underline">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
