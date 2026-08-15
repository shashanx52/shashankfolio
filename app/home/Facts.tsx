"use client";
import React from "react";
import Reveal from "../components/Reveal";
import Section from "./Section";

const facts = [
  { k: "Role", v: "Product Analyst" },
  { k: "Currently", v: "The Economic Times (Times Internet)" },
  { k: "Discipline", v: "Product & Marketing Analytics" },
  { k: "Core stack", v: "BigQuery · SQL · Python" },
  { k: "Marketing", v: "Google Ads · Meta Ads · ROAS" },
  { k: "Education", v: "B.Tech ECE, GGSIPU — 9.0/10" },
  { k: "Based in", v: "Noida, India" },
];

const Facts: React.FC = () => {
  return (
    <Section index="02" label="Quick Facts">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
        {facts.map((f, i) => (
          <Reveal key={f.k} delay={i * 0.05}>
            <div className="flex items-baseline justify-between gap-4 border-b hairline py-5">
              <span className="label">{f.k}</span>
              <span className="text-right text-base sm:text-lg font-medium tracking-tight">
                {f.v}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Facts;
