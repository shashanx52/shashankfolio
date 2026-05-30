"use client";
import React from "react";
import Reveal from "../components/Reveal";
import Section from "./Section";

const toolkit = [
  { cat: "Marketing & Ads", items: ["Google Ads", "Meta Ads", "Performance Marketing", "ROAS & Attribution", "MIS Reporting"] },
  { cat: "Data & Cloud", items: ["BigQuery", "SQL", "Looker", "Tableau", "Google Cloud", "Google Sheets"] },
  { cat: "Languages", items: ["Python", "C", "SQL", "HTML", "CSS"] },
  { cat: "Libraries", items: ["Pandas", "Plotly", "Matplotlib", "Scikit-learn", "Streamlit", "Flask"] },
  { cat: "Automation & Tools", items: ["n8n", "Make", "APIs", "Git", "Figma", "Canva", "Notion"] },
];

const Toolkit: React.FC = () => {
  return (
    <Section index="04" label="Toolkit">
      <div className="space-y-px">
        {toolkit.map((row, i) => (
          <Reveal key={row.cat} delay={i * 0.06}>
            <div className="grid grid-cols-1 items-baseline gap-2 border-b hairline py-6 sm:grid-cols-4">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{row.cat}</h3>
              <p className="mono text-sm leading-relaxed ink-soft sm:col-span-3">
                {row.items.join("  ·  ")}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Toolkit;
