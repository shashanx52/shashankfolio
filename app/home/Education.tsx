"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Education: React.FC = () => {
  return (
    <div className="mt-20 relative">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-2xl lg:text-2xl xl:text-3xl font-extrabold text-center lg:text-left p-2 flex justify-center text-black dark:text-[#3B82F6]"
      >
        Education
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col grid-cols-9 p-2 mx-auto md:grid"
      >
        {/* Bachelor's Degree */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex md:contents flex-row-reverse"
        >
          <div className="relative p-6 my-4 bg-white dark:bg-[#1A2333]/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg shadow-lg col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto w-full md:w-[400px]">
            <span className="absolute text-sm -top-5 left-2 whitespace-nowrap text-gray-600 dark:text-[#94A3B8]">Bachelor</span>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src="/college.svg"
                  alt="GGSIPU Logo"
                  fill
                  className="rounded-lg object-contain"
                  sizes="64px"
                  priority
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Bachelor of Technology (B.Tech)</h3>
                <p className="text-lg text-gray-700 dark:text-[#94A3B8]">Guru Gobind Singh Indraprastha University (GGSIPU)</p>
                <div className="text-gray-600 dark:text-[#94A3B8] space-y-1">
                  <p>Major: Electronics And Communication</p>
                  <p>Minor: Computer Science</p>
                  <p>GPA: 8.73/10</p>
                  <p>2022 - 2026</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gradient-to-b from-green-400 via-blue-500 to-green-400"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white dark:bg-[#0B1120] border-4 border-green-500 dark:border-green-400 rounded-full top-1/2"></div>
          </div>
        </motion.div>

        {/* 12th Standard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex md:contents"
        >
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gradient-to-b from-green-400 via-blue-500 to-green-400"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white dark:bg-[#0B1120] border-4 border-green-500 dark:border-green-400 rounded-full top-1/2"></div>
          </div>
          <div className="relative p-6 my-4 bg-white dark:bg-[#1A2333]/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg shadow-lg col-start-6 col-end-10 mr-auto w-full md:w-[400px]">
            <span className="absolute text-sm -top-5 left-2 whitespace-nowrap text-gray-600 dark:text-[#94A3B8]">High School</span>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src="/highschool.svg"
                  alt="Flora Dale Sr Sec School Logo"
                  fill
                  className="rounded-lg object-contain"
                  sizes="64px"
                  priority
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">12th Standard</h3>
                <p className="text-lg text-gray-700 dark:text-[#94A3B8]">Flora Dale Sr Sec School | CBSE</p>
                <div className="text-gray-600 dark:text-[#94A3B8] space-y-1">
                  <p>Science with Computer Science</p>
                  <p>GPA: 8.4/10</p>
                  <p>2019 - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 10th Standard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex md:contents flex-row-reverse"
        >
          <div className="relative p-6 my-4 bg-white dark:bg-[#1A2333]/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-lg shadow-lg col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto w-full md:w-[400px]">
            <span className="absolute text-sm -top-5 left-2 whitespace-nowrap text-gray-600 dark:text-[#94A3B8]">Matric</span>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src="/gsmodernschool.png"
                  alt="G.S Modern School Logo"
                  fill
                  className="rounded-lg object-contain"
                  sizes="64px"
                  priority
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">10th Standard</h3>
                <p className="text-lg text-gray-700 dark:text-[#94A3B8]">G.S Modern School | CBSE</p>
                <div className="text-gray-600 dark:text-[#94A3B8] space-y-1">
                  <p>Percentage: 87/100</p>
                  <p>2017 - 2019</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gradient-to-b from-green-400 via-blue-500 to-green-400"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white dark:bg-[#0B1120] border-4 border-green-500 dark:border-green-400 rounded-full top-1/2"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;