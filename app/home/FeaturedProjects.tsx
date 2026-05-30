"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import TiltCard from "../components/TiltCard";

const featured = [
  {
    title: "GoFo Sentiment Analysis",
    description:
      "Python + NLP sentiment system with Google Sheets API for real-time feedback analysis. Used by 20+ people.",
    image: "/projects/gofo.png",
    tech: ["Python", "NLP", "Streamlit"],
    github: "https://github.com/shashanx52/GOOGLE-FORM-SENTIMENTAL-ANALYSIS",
    demo: "https://sentimental-analysis-system.streamlit.app/",
  },
  {
    title: "Fraud Detection System",
    description:
      "Machine-learning system detecting fraudulent transactions in real time using pattern recognition.",
    image: "/projects/fraud.png",
    tech: ["Python", "ML", "Streamlit"],
    github: "https://github.com/shashanx52/Fraud-Detection-with-Machine-Learning",
    demo: "https://fraud-detection-ml.streamlit.app",
  },
  {
    title: "AptitudeKab",
    description:
      "Aptitude prep platform with practice tests, tutorials and personalized learning paths.",
    image: "/projects/aptitudekab.png",
    tech: ["React", "Tailwind", "Netlify"],
    github: "https://github.com/shashanx52/AptitudeKab",
    demo: "https://aptitudekab.netlify.app/",
  },
];

const FeaturedProjects: React.FC = () => {
  const [errored, setErrored] = useState<Record<string, boolean>>({});

  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
          Selected Work
        </p>
        <h2 className="section-title">Featured Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            viewport={{ once: true }}
          >
            <TiltCard intensity={9} glare={false} className="h-full">
              <div className="group glass h-full overflow-hidden rounded-2xl flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {errored[project.title] ? (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-green-400/20 via-blue-500/20 to-violet-500/20 text-sm text-gray-500 dark:text-gray-300">
                      {project.title}
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() =>
                        setErrored((p) => ({ ...p, [project.title]: true }))
                      }
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[11px] font-medium text-blue-700 dark:text-blue-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-gray-700 dark:bg-white/10 dark:hover:bg-white/20"
                    >
                      <Github className="h-3.5 w-3.5" /> Code
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 px-3 py-1.5 text-xs font-medium text-white transition hover:opacity-90"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live
                    </Link>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-green-400 hover:underline"
        >
          See all projects
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
