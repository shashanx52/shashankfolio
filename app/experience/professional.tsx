'use client'
import React from 'react';
import { motion } from "framer-motion";

export default function Professional() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="w-full flex justify-center"
      >
        <h2 className="mt-3 mb-2 text-3xl font-extrabold text-center p-5 text-gray-800 dark:text-white">
          Professional Experience
        </h2>
      </motion.div>
      <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-white shadow-lg border border-gray-100 dark:bg-[#1A2333]/40 dark:border-gray-700/20 backdrop-blur-sm">
        {[{
          title: "Web and Content Development Intern",
          company: "Anyboli Labs (Remote), Gurugram , India",
          date: "Jul 2024",
          description: "Worked on the development of a website for a client using HTML, CSS, and JavaScript. Also, created content for the website to make it more engaging and informative.",
          color: "text-blue-600 dark:text-[#98FB98]"
        }, {
          title: "Growth Consultant Intern",
          company: "Unacademy (Hybrid), Delhi , India",
          date: "May, 2024",
          description: "Worked on sentiment analysis of the data to improve the customer retention rate. and also worked on offline bussiness model",
          color: "text-blue-600 dark:text-[#98FB98]"
        }, {
          title: "Data Research (Freelancing)",
          company: "RWS Group (Remote), Austria",
          date: "Oct, 2023",
          description: "Researched and analyzed data to provide insights for a client in the pharmaceutical industry.",
          color: "text-blue-600 dark:text-[#98FB98]"
        }, {
          title: "Graphic Designer Intern",
          company: "CricketEnthusiast26 (Remote), USA",
          date: "May, 2019",
          description: "Leveraged Figma and Canva to craft visually compelling, trend-driven designs, improving social media engagement.",
          color: "text-blue-600 dark:text-[#98FB98]"
        }].map(({ title, company, date, description, color }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 sm:pl-32 py-6 group hover:bg-gray-50 dark:hover:bg-[#1E293B]/30 rounded-xl transition-all duration-300"
          >
            <div className={`font-medium text-xl ${color} mb-1`}>{title}</div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-200 dark:before:bg-[#4A5568] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 dark:after:bg-[#4A5568] after:border-4 after:box-content after:border-white dark:after:border-[#1A2333] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-800 dark:text-[#63B3ED] bg-blue-50 dark:bg-[#2D3748]/80 backdrop-blur-sm rounded-full">{date}</time>
              <div className="text-lg font-medium text-gray-800 dark:text-white">{company}</div>
            </div>
            <div className="text-gray-600 dark:text-[#A0AEC0]">{description}</div>
          </motion.div>
        ))}
      </div>
    </>
  );
}