"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import LocalTime from "../components/LocalTime";

const roles = [
  "Product Analyst",
  "Marketing & Ads Data",
  "BigQuery & SQL",
  "Automation Builder",
];

const Hero: React.FC = () => {
  return (
    <section id="home" className="scroll-mt-24 pt-10 sm:pt-16 pb-12">
      {/* status row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap items-center justify-between gap-3 border-b hairline pb-4"
      >
        <span className="label flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
          </span>
          Available for roles
        </span>
        <span className="label">
          Noida, IN&nbsp;·&nbsp;<LocalTime />
        </span>
      </motion.div>

      {/* giant name specimen */}
      <div className="py-8 sm:py-14">
        <p className="label mb-6">Specimen №001 — Product &amp; Data</p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="display text-step-d"
        >
          Shashank
          <br />
          <span className="ink-soft">Jha</span>
        </motion.h1>
      </div>

      {/* roles + statement */}
      <div className="grid grid-cols-1 gap-8 border-t hairline pt-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <ul className="space-y-1">
            {roles.map((r, i) => (
              <motion.li
                key={r}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="mono text-sm sm:text-base"
              >
                {r}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl font-medium leading-snug tracking-tight"
          >
            I like building things that make decisions easier —{" "}
            <span className="ink-soft">
              clean systems, useful dashboards, and automation that quietly handles the boring work.
            </span>{" "}
            Currently a Product Analyst at The Economic Times.
          </motion.p>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="label mt-12 inline-flex items-center gap-2 hover:opacity-60"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" /> Scroll to explore
      </motion.a>
    </section>
  );
};

export default Hero;
