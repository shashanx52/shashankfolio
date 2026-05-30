"use client";
import React from "react";
import Reveal from "../components/Reveal";
import Section from "./Section";

const principles = [
  {
    n: "i",
    title: "Question before querying",
    body: "A clean query on the wrong question is just fast nonsense. I scope the decision first, then write the SQL.",
  },
  {
    n: "ii",
    title: "Automate the boring",
    body: "If a report is rebuilt by hand twice, it becomes a pipeline. Manual exports are a bug, not a process.",
  },
  {
    n: "iii",
    title: "Dashboards should argue",
    body: "Numbers aren't neutral. A good dashboard points somewhere — it earns a decision, not just a glance.",
  },
];

const Approach: React.FC = () => {
  return (
    <Section index="03" label="Approach">
      <div className="space-y-12">
        {principles.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.08}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
              <span className="mono text-sm ink-soft sm:col-span-1">{p.n}</span>
              <h3 className="display text-3xl sm:text-4xl lg:text-5xl sm:col-span-11">
                {p.title}
              </h3>
              <p className="max-w-2xl text-base leading-relaxed ink-soft sm:col-span-11 sm:col-start-2">
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Approach;
