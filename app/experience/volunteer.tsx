'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import athenaLogo from "../components/volunteer/athena-logo.png";
import qaafilaLogo from "../components/volunteer/qaafila-logo.png";
import techshuttleLogo from "../components/volunteer/techshuttle-logo.png";
import fiverrLogo from "../components/volunteer/fiverr-logo.png";

const extracurricular = [
  {
    image: athenaLogo,
    title: 'Athena - The Gaming Society',
    designation: 'Design Head',
    description: 'A community of developers and designers coming together to build games and organize gaming events.'
  },
  {
    image: qaafilaLogo,
    title: 'Qaafila - The Literary Society',
    designation: 'Design Executive',
    description: 'A community of writers and poets coming together to write and share their stories. I made some of the posters for the events.'
  },
  {
    image: techshuttleLogo,
    title: 'Techshuttle - The Tech Club',
    designation: 'Design/Social Team Member',
    description: 'Empowering aspiring developers through collaboration, learning, and innovation.'
  },
  {
    image: fiverrLogo,
    title: 'Fiverr',
    designation: 'Design Freelancer',
    description: 'Designed logos, posters, and other graphics for clients.'
  }
];

export default function Extracurricular() {
  return (
    <section className="p-8 xl:mt-20">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-extrabold text-center mb-6"
      >
        Extracurricular Activities
      </motion.h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {extracurricular.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative p-6 bg-white border border-gray-300 rounded-2xl shadow-2xl dark:bg-gray-800 dark:border-gray-700 flex flex-col sm:flex-row"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className="w-full sm:w-1/4 h-40 sm:h-48 object-contain rounded-xl mb-4 sm:mb-0 sm:mr-4"
            />
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <h6 className="mb-1 text-lg font-semibold text-indigo-600 dark:text-lime-400">
                {item.designation}
              </h6>
              <p className="font-normal text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
