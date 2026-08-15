"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Section from "./Section";

type Role = {
  date: string;
  role: string;
  company: string;
  /** Earlier title in the same company, shown under the current one. */
  note?: string;
  current?: boolean;
  body: string;
  tags: string;
};

const roles: Role[] = [
  {
    date: "2026 — Now",
    role: "Product Analyst",
    company: "Times Internet — The Economic Times",
    note: "Previously AI & Product Intern",
    current: true,
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
      <ol className="list-none">
        {roles.map((r, i) => (
          <Reveal
            key={r.company}
            as="li"
            delay={i * 0.06}
            className="grid grid-cols-1 gap-2 border-b hairline py-8 sm:grid-cols-12 sm:gap-6"
          >
            <>
              <div className="mono flex items-baseline gap-2 text-sm ink-soft sm:col-span-3 sm:flex-col sm:gap-1">
                <span>{r.date}</span>
                {r.current ? <span className="tag-now">Current</span> : null}
              </div>
              <div className="sm:col-span-9">
                <h3 className="text-step-3 font-bold tracking-tight">{r.role}</h3>
                <p className="mt-0.5 text-base font-medium ink-soft">{r.company}</p>
                {r.note ? <p className="mono mt-1 text-xs ink-soft">{r.note}</p> : null}
                <p className="mt-3 max-w-2xl text-base leading-relaxed">{r.body}</p>
                <p className="mono mt-3 text-xs ink-soft">{r.tags}</p>
              </div>
            </>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <Link href="/experience" className="label link-underline mt-10 inline-flex items-center gap-2">
          Full experience &amp; volunteering <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </Reveal>
    </Section>
  );
};

export default Timeline;
