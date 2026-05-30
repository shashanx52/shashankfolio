'use client';
import React from 'react';
import Image from 'next/image';
import Reveal from '../components/Reveal';
import type { StaticImageData } from "next/image";
import athenaLogo from "../components/volunteer/athena-logo.png";
import qaafilaLogo from "../components/volunteer/qaafila-logo.png";
import techshuttleLogo from "../components/volunteer/techshuttle-logo.png";
import fiverrLogo from "../components/volunteer/fiverr-logo.png";

type Item = {
  image?: StaticImageData;
  title: string;
  designation: string;
  description: string;
};

const extracurricular: Item[] = [
  {
    image: athenaLogo,
    title: 'Athena — The Gaming Society',
    designation: 'Design Head',
    description: 'Led a team of 10+ executives. A community of developers and designers building games and organizing events.'
  },
  {
    title: 'ProLift',
    designation: 'Mentor — Freelance',
    description: 'Mentored learners remotely (May–Oct 2024), guiding them through projects and skill-building.'
  },
  {
    image: qaafilaLogo,
    title: 'Qaafila — The Literary Society',
    designation: 'Design Executive',
    description: 'A community of writers and poets sharing their stories. I designed posters for the events.'
  },
  {
    image: techshuttleLogo,
    title: 'Techshuttle — The Tech Club',
    designation: 'Design / Social Team',
    description: 'Empowering aspiring developers through collaboration, learning, and innovation.'
  },
  {
    image: fiverrLogo,
    title: 'Fiverr',
    designation: 'Design Freelancer',
    description: 'Designed logos, posters, and other graphics for clients.'
  }
];

export default function Extracurricular() {
  return (
    <section className="border-t hairline py-16 sm:py-24">
      <Reveal>
        <p className="label mb-4">Beyond Work</p>
        <h2 className="display text-4xl sm:text-5xl lg:text-6xl">Extracurricular &amp; Design</h2>
      </Reveal>

      <div className="mt-12">
        {extracurricular.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <article className="grid grid-cols-1 items-center gap-4 border-t hairline py-7 sm:grid-cols-12">
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden border hairline sm:col-span-1">
                {item.image ? (
                  <Image src={item.image} alt={item.title} fill className="object-contain p-1.5" sizes="64px" />
                ) : (
                  <span className="mono text-sm ink-soft">
                    {item.title.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <div className="sm:col-span-8 sm:pl-2">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed ink-soft">{item.description}</p>
              </div>
              <span className="mono text-xs ink-soft sm:col-span-3 sm:text-right">{item.designation}</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
