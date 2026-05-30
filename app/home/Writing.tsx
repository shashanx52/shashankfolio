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
              className="group grid grid-cols-12 items-baseline gap-3 border-b hairline py-6"
            >
              <span className="mono col-span-2 text-xs ink-soft sm:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="col-span-10 text-2xl sm:text-3xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:col-span-7">
                {a.title}
              </h3>
              <span className="mono col-span-7 col-start-3 text-xs ink-soft sm:col-span-3 sm:col-start-auto">
                {a.topic}
              </span>
              <span className="col-span-2 flex justify-end sm:col-span-1">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Writing;
