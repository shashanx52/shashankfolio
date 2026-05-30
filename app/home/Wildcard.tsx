"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dices } from "lucide-react";
import Reveal from "../components/Reveal";
import Section from "./Section";

const facts = [
  "I once led a team of 10+ at a gaming society.",
  "Top 250 of 43,000 teams — and I entered solo.",
  "I write poetry when I'm not writing SQL.",
  "I've shipped 10+ browser games for fun.",
  "I'd rather delete a manual report than maintain one.",
  "I designed posters long before I designed dashboards.",
  "Made it to round 3 of HackOn with Amazon.",
  "Best debugging fuel? A cup of chai.",
  "I think automation is just being lazy, productively.",
];

const Wildcard: React.FC = () => {
  const [i, setI] = useState(0);
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);
    let n = i;
    while (n === i && facts.length > 1) n = Math.floor(Math.random() * facts.length);
    setI(n);
    window.setTimeout(() => setRolling(false), 500);
  };

  return (
    <Section index="03" label="Wildcard">
      <Reveal>
        <p className="label mb-8">Roll the dice — a random fact about me</p>

        <div className="flex min-h-[8rem] items-start sm:min-h-[10rem]">
          <AnimatePresence mode="wait">
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="display max-w-4xl text-3xl sm:text-5xl lg:text-6xl"
            >
              {facts[i]}
            </motion.p>
          </AnimatePresence>
        </div>

        <button
          onClick={roll}
          className="mt-10 inline-flex items-center gap-3 border hairline px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-[hsl(var(--ink))] hover:text-[hsl(var(--paper))]"
        >
          <motion.span
            animate={rolling ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Dices className="h-5 w-5" />
          </motion.span>
          Roll again
        </button>
      </Reveal>
    </Section>
  );
};

export default Wildcard;
