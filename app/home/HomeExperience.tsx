"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TiltCard from "../components/TiltCard";

const experiences = [
  {
    role: "Data Analyst Intern",
    company: "Times Internet — The Economic Times",
    period: "Jan 2026 – Present",
    summary:
      "Engineered a complete BigQuery × Meta Ads integration — a single pipeline pulling every campaign, ad-set and creative insight straight into BigQuery, and a centralized MIS dashboard across 50+ creatives that lifted ROAS by ~3%.",
    tech: ["BigQuery", "SQL", "Python", "Looker", "GCP", "Meta API"],
    current: true,
  },
  {
    role: "Technical Engineer Intern",
    company: "GeeksforGeeks",
    period: "Oct 2025 – Jan 2026",
    summary:
      "Built automation tools for content and Instagram posts using Python and GenAI, and integrated Claude & GPT into the GfG Write Platform for automated generation, grammar correction and suggestions.",
    tech: ["Python", "GenAI", "Claude", "GPT", "Automation"],
    current: false,
  },
  {
    role: "Growth Consultant Intern",
    company: "Unacademy",
    period: "May 2024 – Jul 2024",
    summary:
      "Gathered and analysed data with Python and web-scraping to enhance prediction models, and ran performance testing on data systems to improve efficiency.",
    tech: ["Python", "Machine Learning", "Web Scraping"],
    current: false,
  },
];

const HomeExperience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
          Career
        </p>
        <h2 className="section-title">Experience</h2>
      </motion.div>

      <div className="relative mx-auto max-w-3xl">
        {/* vertical line */}
        <div className="absolute left-4 sm:left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-green-400/60 via-blue-500/60 to-violet-500/60" />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative pl-12 sm:pl-0 sm:flex ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* node */}
              <span className="absolute left-4 sm:left-1/2 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white dark:border-[#0B1120] bg-gradient-to-r from-green-400 to-blue-500 shadow" />

              <TiltCard intensity={6} className="w-full sm:w-[calc(50%-2rem)]">
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
                      {exp.period}
                      {exp.current && (
                        <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-green-600 dark:text-green-300 normal-case">
                          Current
                        </span>
                      )}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {exp.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-blue-100 dark:border-white/10 bg-gradient-to-r from-green-50 to-blue-50 dark:from-white/5 dark:to-white/5 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-green-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/experience"
          className="group inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-green-400 hover:underline"
        >
          View full experience & volunteering
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
};

export default HomeExperience;
