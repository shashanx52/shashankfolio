'use client';
/*
  This file used to be app/home/page.tsx, which made it a *route* as well as a
  component: the entire home page was served a second time at /home, without a
  navbar or footer, competing with / in search results. Renaming it takes it out
  of the router; next.config.js redirects /home to / for anything already linked.
*/
import React from 'react';
import Hero from './Hero';
import Marquee from './Marquee';
import About from './About';
import Facts from './Facts';
import MathGame from './MathGame';
import Toolkit from './Toolkit';
import Work from './Work';
import Timeline from './Timeline';
import Recognition from './Recognition';
import Writing from './Writing';
import Offduty from './Offduty';
import Education from './Education';
import Outro from './Outro';

export default function Home() {
  return (
    <main id="main" className="mx-auto w-full max-w-7xl px-5 sm:px-10">
      <Hero />
      <Marquee />
      <About />
      <Facts />
      <MathGame />
      <Toolkit />
      <Work />
      <Timeline />
      <Recognition />
      <Writing />
      <Offduty />
      <Education />
      <Outro />
    </main>
  );
}
