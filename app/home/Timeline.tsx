"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Section from "./Section";

const roles = [
  {
    date: "2026 — Now",
    role: "Data Analyst Intern",
    company: "Times Internet — The Economic Times",
    body: "Built MIS dashboards across 50+ creatives and automated 100% of paid-marketing reporting into Google Sheets — cutting manual work ~70–80% and lifting ROAS ~3% across Google & Meta Ads.",
    tags: "BigQuery · SQL · Looker · GCP · Python · Automation",
  },
  {
    date: "2025 — 2026",
    role: "Technical Engineer Intern",
    company: "GeeksforGeeks",
    body: "Built Python + GenAI automation for content and social, and integrated Claude & GPT into the GfG Write Platform.",
    tags: "Python · GenAI · Claude · GPT",
  },
  {
    date: "2025",
    role: "Research & Development Intern",
    company: "ISRA India",
    body: "Contributed to applied research and development work — prototyping and analysis — during a hybrid internship in Delhi.",
    tags: "Research · R&D · Analysis",
  },
  {
    date: "2024 — 2025",
    role: "Freelancer — Data Research",
    company: "RWS Group",
    body: "Part-time data and market-research work over ~1.5 years, supporting research datasets, annotation and quality.",
    tags: "Data Research · Market Research",
  },
];

const Timeline: React.FC = () => {
  return (
    <Section index="06" label="Experience" id="experience">
      <div>
        {roles.map((r, i) => (
          <Reveal key={r.company} delay={i * 0.06}>
            <div className="grid grid-cols-1 gap-2 border-b hairline py-8 sm:grid-cols-12 sm:gap-6">
              <span className="mono text-sm ink-soft sm:col-span-3">{r.date}</span>
              <div className="sm:col-span-9">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{r.role}</h3>
                <p className="mt-0.5 text-base font-medium ink-soft">{r.company}</p>
                <p className="mt-3 max-w-2xl text-base leading-relaxed">{r.body}</p>
                <p className="mono mt-3 text-xs ink-soft">{r.tags}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <Link href="/experience" className="label link-underline mt-10 inline-flex items-center gap-2">
          Full experience & volunteering <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </Section>
  );
};

export default Timeline;
