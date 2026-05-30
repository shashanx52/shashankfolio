"use client";
import React from "react";
import Image from "next/image";

const logos = [
  { name: "BigQuery", icon: "/skillslogos/bigquery.svg" },
  { name: "SQL", icon: "/skillslogos/sql.svg" },
  { name: "Looker", icon: "/skillslogos/looker.svg" },
  { name: "Google Cloud", icon: "/skillslogos/gcp.svg" },
  { name: "Google Sheets", icon: "/skillslogos/googlesheets.svg" },
  { name: "n8n", icon: "/skillslogos/n8n.svg" },
  { name: "Python", icon: "/skillslogos/python.png" },
  { name: "Pandas", icon: "/skillslogos/panda.png" },
  { name: "Tableau", icon: "/skillslogos/tableu.png" },
  { name: "PostgreSQL", icon: "/skillslogos/postgre.png" },
  { name: "Git", icon: "/skillslogos/git.png" },
];

const TechMarquee: React.FC = () => {
  const row = [...logos, ...logos];
  return (
    <div className="marquee-mask relative w-full overflow-hidden py-4">
      <div className="animate-marquee flex w-max items-center gap-10 hover:[animation-play-state:paused]">
        {row.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex items-center gap-2 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
          >
            <Image
              src={logo.icon}
              alt={logo.name}
              width={26}
              height={26}
              className="object-contain"
            />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
