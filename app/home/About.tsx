"use client";
import React from "react";
import Image from "next/image";
import Reveal from "../components/Reveal";
import Section from "./Section";

const About: React.FC = () => {
  return (
    <Section index="01" label="About" id="about">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <Reveal>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug tracking-tight">
              I&apos;m a builder at heart who happens to love working with data —
              I care about the corners most people skip.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed ink-soft">
              I work across data and marketing at Times Internet (The Economic Times) —
              running performance analysis on Google Ads and Meta Ads, and building the
              pipelines and dashboards that turn spend, ROAS and creative data into clear
              decisions. Outside of work I tinker with ML side-projects, automation and
              the occasional game — and I&apos;d always rather delete a manual report than
              maintain one.
            </p>
          </Reveal>
        </div>

        <div className="sm:col-span-1">
          <Reveal delay={0.15}>
            <div className="group relative aspect-[4/5] w-full overflow-hidden border hairline">
              <Image
                src="/shashank.jpg"
                alt="Shashank Jha"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <a href="mailto:shashankjha.0052@gmail.com" className="mono text-sm link-underline">
                shashankjha.0052@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/shashanx/" target="_blank" rel="noopener noreferrer" className="mono text-sm link-underline">
                linkedin.com/in/shashanx
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default About;
