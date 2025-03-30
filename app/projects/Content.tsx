"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "GoFo Sentimental Analysis system",
    img: "/skillslogos/python.png",
    desc: "Developed a sentiment analysis application using Python, NLP, and the Vader Sentiment library. Integrated Google Sheets API for real-time data retrieval and used Pandas for data processing. Now utilized by over 20+ users for real-time sentiment analysis of feedback.",
    liveLink: "LIVE_LINK_HERE",
    githubLink: "GITHUB_LINK_HERE",
    tech: ["Python", "NLP", "Google API", "Pandas", "Streamlit"]
  },
  {
    title: "BraindedGames",
    img: "/skillslogos/js.png",
    desc: "Built & deployed a gaming platform with 10+ games using TypeScript & React. Optimized performance for 2x faster load times and smooth single player gaming. Managed 100% of development from game logic to Netlify deployment.",
    liveLink: "LIVE_LINK_HERE",
    githubLink: "GITHUB_LINK_HERE",
    tech: ["TypeScript", "React", "Tailwind CSS", "Netlify"]
  }
];

export default function Content() {
  return (
    <div className="pb-10 flex flex-col items-center w-full font-caveat">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center"
      >
        <h2 className="mb-8 text-3xl xl:text-4xl font-extrabold text-center p-5">
          Projects
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="card bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <figure className="relative w-full h-56">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-75"></div>
              <Image 
                src={project.img} 
                alt={project.title} 
                fill
                className="mix-blend-overlay object-cover"
                priority
              />
            </figure>
            <div className="card-body p-6">
              <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-auto">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0"
                >
                  Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="ml-2">
                    <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                  </svg>
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
                >
                  GitHub
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="ml-2">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
