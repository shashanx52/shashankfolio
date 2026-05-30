'use client'
import React from 'react';
import Reveal from '../components/Reveal';

const experiences = [
  {
    date: "Jan 2026 — Present",
    title: "Data Analyst Intern",
    company: "Times Internet — The Economic Times",
    location: "Noida · On-site",
    description:
      "Built a centralized MIS dashboard covering 50+ video creatives and multiple ad sets for daily tracking of spend, plays, ROAS and creative efficiency. Automated 100% of paid-marketing and performance reporting into Google Sheets, cutting manual effort ~70–80%, and ran optimisation across Google & Meta Ads that lifted ROAS ~3%.",
    tech: "BigQuery · SQL · Looker · GCP · Python · Google Sheets · Automation",
  },
  {
    date: "Oct 2025 — Jan 2026",
    title: "Technical Engineer Intern",
    company: "GeeksforGeeks",
    location: "Noida · On-site",
    description:
      "Built automation tools to generate content and Instagram posts using Python and GenAI, and integrated Claude and GPT into the GeeksforGeeks Write Platform for automated text generation, grammar correction and content suggestions.",
    tech: "Python · GenAI · Claude · GPT · Automation",
  },
  {
    date: "Jun 2025 — Aug 2025",
    title: "Research & Development Intern",
    company: "ISRA India",
    location: "Delhi · Hybrid",
    description:
      "Contributed to applied research and development work during a hybrid internship, supporting prototyping and analysis.",
    tech: "Research · R&D · Analysis",
  },
  {
    date: "Mar 2024 — Oct 2025",
    title: "Freelancer — Data Research",
    company: "RWS Group",
    location: "Remote · Part-time",
    description:
      "Part-time data and market-research work over ~1.5 years, supporting research datasets, annotation and quality across projects.",
    tech: "Data Research · Market Research",
  },
  {
    date: "Jul 2024 — Sep 2024",
    title: "Web Development Intern",
    company: "Anyboli",
    location: "Gurugram · Remote",
    description:
      "Built and maintained web features as a remote development intern, working across the front-end stack.",
    tech: "HTML · CSS · JavaScript · Web",
  },
  {
    date: "Jun 2024 — Jul 2024",
    title: "Growth Consultant Intern",
    company: "Unacademy",
    location: "Delhi · Hybrid",
    description:
      "Gathered and analysed data using Python and web-scraping to enhance prediction models, ran performance testing on data systems, and contributed to sentiment analysis and team-leadership work.",
    tech: "Python · Machine Learning · Sentiment Analysis · Research",
  },
];

export default function Professional() {
  return (
    <section className="border-t hairline py-16 sm:py-24">
      <Reveal>
        <p className="label mb-4">Career — Resume</p>
        <h1 className="display text-[14vw] leading-[0.86] sm:text-[10vw] lg:text-[9rem]">
          Experience
        </h1>
      </Reveal>

      <div className="mt-12">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.06}>
            <article className="grid grid-cols-1 gap-3 border-t hairline py-9 sm:grid-cols-12 sm:gap-6">
              <span className="mono text-sm ink-soft sm:col-span-3">{exp.date}</span>
              <div className="sm:col-span-9">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{exp.title}</h2>
                <p className="mt-1 text-base font-medium ink-soft">
                  {exp.company} — {exp.location}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed">{exp.description}</p>
                <p className="mono mt-4 text-xs ink-soft">{exp.tech}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
