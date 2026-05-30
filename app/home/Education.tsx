"use client";
import React from "react";
import Reveal from "../components/Reveal";
import Section from "./Section";

const education = [
  {
    date: "2022 — 2026",
    school: "Bharati Vidyapeeth's College of Engineering, GGSIPU",
    detail: "B.Tech, Electronics & Communication (Minor: Computer Science)",
    score: "GPA 9.0 / 10",
  },
  {
    date: "2020 — 2022",
    school: "Flora Dale Sr. Sec. School — CBSE",
    detail: "Science with Computer Science",
    score: "81%",
  },
  {
    date: "2017 — 2019",
    school: "G.S Modern School — CBSE",
    detail: "Secondary",
    score: "87%",
  },
];

const Education: React.FC = () => {
  return (
    <Section index="10" label="Education" id="education">
      <div>
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.06}>
            <div className="grid grid-cols-1 items-baseline gap-2 border-b hairline py-7 sm:grid-cols-12 sm:gap-6">
              <span className="mono text-sm ink-soft sm:col-span-3">{e.date}</span>
              <div className="sm:col-span-7">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{e.school}</h3>
                <p className="mt-1 text-sm ink-soft">{e.detail}</p>
              </div>
              <span className="mono text-sm sm:col-span-2 sm:text-right">{e.score}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Education;
