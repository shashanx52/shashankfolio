"use client";
import React from "react";
import Reveal from "../components/Reveal";
import Section from "./Section";

const awards = [
  {
    standing: "Finalist",
    detail: "Top 250 of 43,000 teams",
    event: "TVS Credit E.P.I.C 6.0 IT Challenge — solo participant",
  },
  {
    standing: "3rd Place",
    detail: "ECE Department",
    event: "Projectathon 5.0, BVCOE",
  },
  {
    standing: "Top 1,000",
    detail: "of 50,000 teams",
    event: "HackOn with Amazon — qualified for Round 3",
  },
  {
    standing: "Semi-Finalist",
    detail: "Electronics Innovation",
    event: "AtomQuest by Atomberg",
  },
  {
    standing: "Design Lead",
    detail: "led 10+ executives",
    event: "Athena — The Gaming Society",
  },
];

const Recognition: React.FC = () => {
  return (
    <Section index="07" label="Recognition">
      <div>
        {awards.map((a, i) => (
          <Reveal key={a.event} delay={i * 0.05}>
            <div className="grid grid-cols-1 items-baseline gap-2 border-b hairline py-7 sm:grid-cols-12 sm:gap-6">
              <div className="sm:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{a.standing}</h3>
                <p className="mono mt-1 text-xs ink-soft">{a.detail}</p>
              </div>
              <p className="text-base leading-relaxed sm:col-span-8">{a.event}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Recognition;
