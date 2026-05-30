"use client";
import React from "react";
import Reveal from "../components/Reveal";

interface SectionProps {
  index: string;
  label: string;
  id?: string;
  children: React.ReactNode;
}

/** Editorial section: numbered mono label on the left, content on the right. */
const Section: React.FC<SectionProps> = ({ index, label, id, children }) => (
  <section id={id} className="scroll-mt-24 border-t hairline py-16 sm:py-24">
    <div className="grid grid-cols-1 gap-y-8 gap-x-10 md:grid-cols-12">
      <div className="md:col-span-3">
        <Reveal>
          <p className="label mb-1">{index}</p>
          <p className="label">{label}</p>
        </Reveal>
      </div>
      <div className="md:col-span-9">{children}</div>
    </div>
  </section>
);

export default Section;
