"use client";
import NumberTicker from "@/components/ui/number-ticker";
import React from "react";
import { motion } from "framer-motion";
import TiltCard from "../components/TiltCard";

const stats = [
  { value: 10, suffix: "+", label: "Projects", accent: "from-green-400 to-emerald-500" },
  { value: 1, prefix: "0–", label: "Experience (Years)", accent: "from-blue-400 to-cyan-500" },
  { value: 16, suffix: "", label: "Education (Years)", accent: "from-violet-400 to-purple-500" },
  { value: 5, suffix: "+", label: "Certifications", accent: "from-amber-400 to-orange-500" },
];

const DataCount = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <TiltCard intensity={12} className="h-full">
            <div className="group relative h-full overflow-hidden rounded-2xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-[#1A2333]/60 backdrop-blur-xl shadow-xl shadow-blue-500/5 p-6 flex flex-col items-center justify-center text-center transition-colors">
              <div className={`absolute -top-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br ${stat.accent} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`} />
              <h2 className={`text-4xl sm:text-5xl font-extrabold flex flex-row items-center text-transparent bg-clip-text bg-gradient-to-r ${stat.accent}`}>
                {stat.prefix}
                <NumberTicker value={stat.value} />
                {stat.suffix}
              </h2>
              <p className="mt-2 text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300">
                {stat.label}
              </p>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  );
};

export default DataCount;
