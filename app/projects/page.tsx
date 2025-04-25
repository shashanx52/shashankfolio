'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar';
import Footer from '../Footer';

const projects = [
  {
    title: "Gofo Sentimental Analysis System",
    description: "A sentiment analysis system that analyzes customer feedback and reviews to provide insights into customer satisfaction and product performance.",
    image: "/projects/gofo.png",
    github: "https://github.com/shashanx52/GOOGLE-FORM-SENTIMENTAL-ANALYSIS",
    demo: "https://sentimental-analysis-system.streamlit.app/"
  },
  {
    title: "Brainded Games",
    description: "An interactive gaming platform designed to enhance cognitive abilities through engaging brain training exercises and puzzles.",
    image: "/projects/brainded.png",
    github: "https://github.com/shashanx52/braindedgames",
    demo: "https://braindedgame.netlify.app/"
  },
  {
    title: "AptitudeKab",
    description: "A comprehensive aptitude preparation platform offering practice tests, tutorials, and personalized learning paths.",
    image: "/projects/aptitudekab.png",
    github: "https://github.com/shashanx52/AptitudeKab",
    demo: "https://aptitudekab.netlify.app/"
  },
  {
    title: "Portfolio Website",
    description: "A dynamic portfolio website built with Next.js and Tailwind CSS, showcasing my skills, projects, and experiences.",
    image: "/projects/portfolio.png",
    github: "https://github.com/shashanx52/shashankfolio/",
    demo: "https://shashanx.netlify.app/"
  },
  {
    title: "SakhiG - Your Best Friend",
    description: "An AI-powered chatbot designed to provide emotional support and companionship, currently in development.",
    image: "/projects/sakhig.png",
    github: "https://github.com/shashanx52/SakhiG",
    demo: "https://sakhig.vercel.app"
  },
  {
    title: "Fraud Detection System",
    description: "An advanced machine learning system for detecting fraudulent transactions in real-time using pattern recognition.",
    image: "/projects/fraud.png",
    github: "https://github.com/shashanx52/Fraud-Detection-with-Machine-Learning",
    demo: "https://fraud-detection-ml.streamlit.app"
  }
];

export default function Projects() {
  const [imageLoadError, setImageLoadError] = useState<{[key: string]: boolean}>({});

  const handleImageError = (projectTitle: string) => {
    setImageLoadError(prev => ({...prev, [projectTitle]: true}));
  };

  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <section className="py-20 px-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r from-blue-500 to-green-500"
          >
            Projects
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-[#1a2333]/40 border border-gray-200 dark:border-gray-700/20 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="relative h-[250px] overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-opacity duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                    onError={() => handleImageError(project.title)}
                    style={{
                      opacity: imageLoadError[project.title] ? 0.5 : 1
                    }}
                  />
                  {imageLoadError[project.title] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400">Image not available</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm min-h-[3rem]">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-900 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm font-medium transition-colors duration-300"
                    >
                      GitHub
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Link>
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white text-sm font-medium transition-colors duration-300"
                      >
                        Live Demo
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        <div className="flex justify-center pb-8">
          <Link
            href="/"
            className="flex items-center text-sm transform hover:scale-105 transition duration-300 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left mr-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.5 8a.5.5 0 0 1-.5-.5H4.707l3.146-3.146a.5.5 0 1 1-.708-.708l-4 4a.5.5 0 0 1 0 .708l4 4a.5.5 0 1 1-.708-.708L4.707 8.5h6.293a.5.5 0 0 1 .5-.5z"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
