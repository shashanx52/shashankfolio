'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Reveal from '../components/Reveal';

const OG = (repo: string) =>
  `https://opengraph.githubassets.com/1/shashanx52/${repo}`;

type Project = {
  no: string;
  title: string;
  description: string;
  tech: string;
  year: string;
  repo?: string;
  demo?: string;
  demoLabel?: string;
};

const projects: Project[] = [
  {
    no: "01",
    title: "Mpox Intelligence Hub",
    description: "An AI platform for Mpox detection and global case forecasting — combining a CNN image classifier with classical ML and time-series modelling.",
    repo: "mpox-intelligence-hub",
    tech: "Python · CNN · ML · Time-Series",
    year: "2025",
  },
  {
    no: "02",
    title: "Website Monitoring & Reporting",
    description: "An end-to-end website-monitoring workflow in n8n: real-time uptime checks, downtime alerts and automated weekly email reports via the Google Sheets and Gmail APIs. Function nodes compute response times and emit structured JSON logs with uptime %, response time and downtime insights.",
    tech: "n8n · Google Sheets API · Gmail API · Automation",
    year: "2025",
    demo: "https://www.youtube.com/watch?v=gHrEv0Cl5Mw&feature=youtu.be",
    demoLabel: "Watch",
  },
  {
    no: "03",
    title: "GoFo Sentiment Analysis",
    description: "Analyses Google Form responses for sentiment using Python and NLP, with a Google Sheets feed for real-time scoring. Used by 20+ people.",
    repo: "GOOGLE-FORM-SENTIMENTAL-ANALYSIS",
    tech: "Python · NLP · Streamlit",
    year: "2025",
    demo: "https://sentimental-analysis-system.streamlit.app/",
  },
  {
    no: "04",
    title: "Fraud Detection System",
    description: "A machine-learning model that flags fraudulent transactions in real time using pattern recognition on transaction features.",
    repo: "Fraud-Detection-with-Machine-Learning",
    tech: "Python · Scikit-learn · Streamlit",
    year: "2025",
    demo: "https://fraud-detection-ml.streamlit.app",
  },
  {
    no: "05",
    title: "Stock Trading + Backtesting",
    description: "Builds and backtests algorithmic trading strategies on historical market data to measure performance before going live.",
    repo: "Stock_Trading_with_Backtesting",
    tech: "Python · Pandas · Backtesting",
    year: "2025",
  },
  {
    no: "06",
    title: "Stroke Prediction System",
    description: "A health-risk model that predicts stroke likelihood from patient features, built end-to-end with a clean UI.",
    repo: "Stroke-prediction-system-jinx",
    tech: "Python · Machine Learning",
    year: "2024",
  },
  {
    no: "07",
    title: "Ocean Protector — SIH",
    description: "A Smart India Hackathon project: an ocean-cleanup game where a diver collects trash while dodging obstacles, built for INCOIS.",
    repo: "SIH-Incois-Ocean-protector-TEAM-JINX",
    tech: "Python · Game · Hackathon",
    year: "2024",
  },
  {
    no: "08",
    title: "AptitudeKab",
    description: "An aptitude-prep platform with practice tests, tutorials and personalized learning paths for students.",
    repo: "AptitudeKab",
    tech: "JavaScript · React · Netlify",
    year: "2024",
    demo: "https://aptitudekab.netlify.app/",
  },
  {
    no: "09",
    title: "Brainded Games",
    description: "A gaming platform with 10+ brain-training games built in TypeScript and React, tuned for fast loads.",
    repo: "braindedgames",
    tech: "TypeScript · React · Netlify",
    year: "2024",
    demo: "https://braindedgame.netlify.app/",
  },
];

export default function Projects() {
  return (
    <>
      <main className="mx-auto min-h-screen max-w-7xl px-5 sm:px-10">
        <Navbar />

        <section className="border-t hairline py-16 sm:py-24">
          <Reveal>
            <p className="label mb-4">Selected Work — 2024 / 2025</p>
            <h1 className="display text-[14vw] leading-[0.86] sm:text-[10vw] lg:text-[9rem]">
              Projects
            </h1>
          </Reveal>
        </section>

        <section className="pb-16">
          {projects.map((p, i) => {
            const github = p.repo ? `https://github.com/shashanx52/${p.repo}` : null;
            const primary = p.demo || github;
            return (
              <Reveal key={p.no} delay={(i % 2) * 0.05}>
                <article className="grid grid-cols-1 gap-6 border-t hairline py-10 md:grid-cols-12">
                  <div className="md:col-span-5">
                    {p.repo ? (
                      <Link href={primary!} target="_blank" rel="noopener noreferrer" className="group block">
                        <div className="relative aspect-[2/1] w-full overflow-hidden border hairline">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={OG(p.repo)}
                            alt={p.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </Link>
                    ) : (
                      <div className="flex aspect-[2/1] w-full flex-col justify-between border hairline p-5">
                        <span className="mono text-xs ink-soft">{p.tech.split(" · ")[0]}</span>
                        <span className="display text-2xl sm:text-3xl">{p.title}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col md:col-span-7">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="mono text-sm ink-soft">{p.no}</span>
                      <span className="mono text-xs ink-soft">{p.year}</span>
                    </div>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">{p.title}</h2>
                    <p className="mt-3 max-w-xl text-base leading-relaxed ink-soft">{p.description}</p>
                    <p className="mono mt-4 text-xs ink-soft">{p.tech}</p>
                    <div className="mt-6 flex gap-6">
                      {p.demo && (
                        <Link href={p.demo} target="_blank" rel="noopener noreferrer" className="label link-underline inline-flex items-center gap-1.5">
                          {p.demoLabel ?? "Live"} <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      )}
                      {github && (
                        <Link href={github} target="_blank" rel="noopener noreferrer" className="label link-underline inline-flex items-center gap-1.5">
                          Code <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      )}
                      {!p.demo && !github && (
                        <span className="label">Walkthrough on request</span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </section>

        <div className="flex justify-center border-t hairline py-10">
          <Link href="/" className="label link-underline inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
