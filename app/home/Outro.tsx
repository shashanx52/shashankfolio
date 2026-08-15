"use client";
import React from "react";
import Link from "next/link";
import Reveal from "../components/Reveal";
import LocalTime from "../components/LocalTime";

const socials = [
  { label: "Email", href: "mailto:shashankjha.0052@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shashanx/" },
  { label: "GitHub", href: "https://github.com/shashanx52" },
  { label: "LeetCode", href: "https://leetcode.com/u/shashanx/" },
];

const Outro: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-24 border-t hairline py-20 sm:py-28">
      <Reveal>
        <p className="label mb-6">11 — Contact</p>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="display text-step-6">
          Let&apos;s build
          <br />
          something<span className="ink-soft">.</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-10 border-t hairline pt-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal>
            <p className="max-w-xl text-lg leading-relaxed ink-soft">
              Open to analytics roles, automation projects and genuinely hard data
              problems. The fastest way to reach me is email — I usually reply
              within a day.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="mailto:shashankjha.0052@gmail.com"
              className="mt-6 inline-block text-2xl sm:text-4xl font-bold tracking-tight link-underline"
            >
              shashankjha.0052@gmail.com
            </a>
          </Reveal>
        </div>

        <div className="md:col-span-5 md:justify-self-end">
          <Reveal delay={0.15}>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-10 border-b hairline pb-3 text-lg font-medium link-underline"
                  >
                    {s.label}
                    <span className="mono text-xs ink-soft">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-3">
        <span className="label">Noida, IN&nbsp;·&nbsp;<LocalTime /></span>
        <Link href="/Shashank_Jha_Resume.pdf" download="Shashank_Jha_Resume.pdf" className="label link-underline">
          Download CV ↓
        </Link>
      </div>
    </section>
  );
};

export default Outro;
