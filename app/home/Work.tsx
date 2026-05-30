"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Section from "./Section";

const OG = (repo: string) =>
  `https://opengraph.githubassets.com/1/shashanx52/${repo}`;

const work = [
  {
    no: "01",
    title: "Mpox Intelligence Hub",
    disciplines: "CNN · ML · Time-Series",
    year: "2025",
    image: OG("mpox-intelligence-hub"),
    href: "https://github.com/shashanx52/mpox-intelligence-hub",
  },
  {
    no: "02",
    title: "GoFo Sentiment Analysis",
    disciplines: "Python · NLP · Streamlit",
    year: "2025",
    image: OG("GOOGLE-FORM-SENTIMENTAL-ANALYSIS"),
    href: "https://github.com/shashanx52/GOOGLE-FORM-SENTIMENTAL-ANALYSIS",
  },
  {
    no: "03",
    title: "Fraud Detection System",
    disciplines: "Machine Learning · Python",
    year: "2025",
    image: OG("Fraud-Detection-with-Machine-Learning"),
    href: "https://github.com/shashanx52/Fraud-Detection-with-Machine-Learning",
  },
  {
    no: "04",
    title: "Stock Trading + Backtesting",
    disciplines: "Python · Pandas · Quant",
    year: "2025",
    image: OG("Stock_Trading_with_Backtesting"),
    href: "https://github.com/shashanx52/Stock_Trading_with_Backtesting",
  },
];

const Work: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Section index="05" label="Selected Work">
      <div className="relative">
        {work.map((p, i) => (
          <Reveal key={p.no} delay={i * 0.05}>
            <Link
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(p.no)}
              onMouseLeave={() => setHovered(null)}
              className="group grid grid-cols-12 items-center gap-4 border-b hairline py-7 transition-colors"
            >
              <span className="mono col-span-2 text-sm ink-soft sm:col-span-1">{p.no}</span>
              <div className="col-span-10 sm:col-span-6">
                <h3 className="display text-3xl sm:text-4xl lg:text-5xl transition-transform duration-300 group-hover:translate-x-2">
                  {p.title}
                </h3>
              </div>
              <span className="mono col-span-7 col-start-3 text-xs ink-soft sm:col-span-3 sm:col-start-auto">
                {p.disciplines}
              </span>
              <div className="col-span-5 flex items-center justify-end gap-3 sm:col-span-2">
                <span className="mono text-xs ink-soft">{p.year}</span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          </Reveal>
        ))}

        {/* floating hover preview (desktop) */}
        <div className="pointer-events-none absolute right-4 top-1/2 hidden lg:block">
          {work.map((p) => (
            <div
              key={p.no}
              className={`absolute -translate-y-1/2 transition-all duration-300 ${
                hovered === p.no ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-36 w-64 border hairline object-cover shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>

      <Reveal>
        <Link href="/projects" className="label link-underline mt-10 inline-flex items-center gap-2">
          All projects <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </Section>
  );
};

export default Work;
