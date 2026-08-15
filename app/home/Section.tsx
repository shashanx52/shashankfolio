"use client";
import React from "react";
import Reveal from "../components/Reveal";

interface SectionProps {
  index: string;
  label: string;
  id?: string;
  children: React.ReactNode;
}

/**
 * Editorial section: numbered mono label on the left, content on the right.
 *
 * The label is a real <h2> rather than a styled <p>, so the page has a proper
 * heading outline for screen readers and for the h3s the sections render
 * inside themselves. On desktop it sticks while its section scrolls past —
 * you always know which chapter you are in.
 */
const Section: React.FC<SectionProps> = ({ index, label, id, children }) => (
  <section id={id} className="scroll-mt-24 border-t hairline py-section">
    <div className="grid grid-cols-1 gap-y-8 gap-x-10 md:grid-cols-12">
      {/* The sticky element must be a child of the stretched grid cell, not of
          Reveal — Reveal is only as tall as the label, which would leave the
          sticky box no distance to travel. */}
      <div className="md:col-span-3">
        <div className="md:sticky md:top-24">
          <Reveal>
            <p className="label mb-1 !text-[hsl(var(--ink-faint))]">{index}</p>
            <h2 className="label">{label}</h2>
          </Reveal>
        </div>
      </div>
      <div className="md:col-span-9">{children}</div>
    </div>
  </section>
);

export default Section;
