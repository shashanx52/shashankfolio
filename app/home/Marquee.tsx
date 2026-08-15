"use client";
import React from "react";

const words = [
  "Product & Marketing",
  "BigQuery",
  "SQL",
  "Automation",
  "Dashboards",
  "Python",
  "Looker",
  "Machine Learning",
  "n8n",
];

const Marquee: React.FC = () => {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y hairline py-5">
      <div className="animate-marquee flex w-max items-center gap-8">
        {row.map((w, i) => (
          <span key={`${w}-${i}`} className="flex items-center gap-8">
            <span className="display text-2xl sm:text-3xl whitespace-nowrap">{w}</span>
            <span className="ink-soft text-2xl">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
