"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import Section from "./Section";

const articles = [
  {
    title: "Dirichlet's Integral",
    topic: "Engineering Maths",
    href: "https://www.geeksforgeeks.org/engineering-mathematics/dirichlets-integral/",
  },
  {
    title: "Rotation of Shapes",
    topic: "Aptitude",
    href: "https://www.geeksforgeeks.org/aptitude/rotation-of-shapes/",
  },
  {
    title: "Translation of Shapes",
    topic: "Aptitude",
    href: "https://www.geeksforgeeks.org/aptitude/translation-of-shapes/",
  },
  {
    title: "Puzzle — The Rabbit Population",
    topic: "Puzzle",
    href: "https://www.geeksforgeeks.org/aptitude/puzzle-the-rabbit-population/",
  },
  {
    title: "Puzzle — Number of Legs in Palace",
    topic: "Puzzle",
    href: "https://www.geeksforgeeks.org/aptitude/puzzle-number-of-legs-in-palace/",
  },
];

const Writing: React.FC = () => {
  return (
    <Section index="08" label="Writing">
      <Reveal>
        <p className="mb-8 max-w-xl text-xl sm:text-2xl font-medium leading-snug tracking-tight">
          Articles I&apos;ve published on{" "}
          <span className="ink-soft">GeeksforGeeks</span> — maths, aptitude and puzzles.
        </p>
      </Reveal>

      <div>
        {articles.map((a, i) => (
          <Reveal key={a.href} delay={i * 0.05}>
            <Link
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b hairline py-5"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl sm:text-3xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                  <span className="mono mr-3 align-middle text-xs ink-soft">{String(i + 1).padStart(2, "0")}</span>
                  {a.title}
                </h3>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="mono mt-2 pl-7 text-xs ink-soft">{a.topic}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Writing;
