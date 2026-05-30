"use client";
import React from "react";
import Reveal from "../components/Reveal";
import Section from "./Section";

const interests = [
  "Game design",
  "Poster & graphic design",
  "Writing & poetry",
  "Hackathons",
  "Mentoring",
  "Automating boring things",
];

const Offduty: React.FC = () => {
  return (
    <Section index="09" label="Off-duty">
      <Reveal>
        <p className="max-w-2xl text-xl sm:text-2xl font-medium leading-snug tracking-tight">
          When I&apos;m not in a query editor, I&apos;m usually designing something,
          writing, or breaking a problem for fun.
        </p>
      </Reveal>
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
        {interests.map((it, i) => (
          <Reveal key={it} delay={i * 0.05}>
            <span className="display text-3xl sm:text-4xl lg:text-5xl">
              {it}
              <span className="ink-soft">.</span>
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Offduty;
