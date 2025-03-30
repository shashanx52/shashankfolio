"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start space-y-6 px-4"
        >
          <h1 className="mb-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl lg:leading-normal font-extrabold pb-5 leading-relaxed">
            <span>
              Hello, I&apos;m 
            </span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600"> 
              Shashank Jha{" "}<br/>
            </span>
            <TypeAnimation
              sequence={[
                "Software Developer",
                500,
                "Data Scientist",
                500,
                "Data Analyst",
                500,
                "Part-time Web Developer",
                500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500"
            />
          </h1>
          <TextAnimate animation="slideUp" by="word" className="text-base pb-2 sm:text-lg mb-6 lg:text-xl text-gray-600 dark:text-gray-300">
            Passionate Software Developer and Data Scientist, crafting innovative solutions through code and data analysis.
          </TextAnimate>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start">
            <Link href="/contact">
              <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                Contact Me
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
              </button>
            </Link>
            <Link href="/Shashank_Jha_Sde_Resume.pdf" download="Shashank_Jha_Sde_Resume.pdf">
              <button className="px-6 py-3 w-full sm:w-auto rounded-full border-2 border-green-500 text-green-500 dark:text-green-400 hover:bg-green-500 hover:text-white font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                </svg>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 p-10"
        >
          <div className="relative">
            <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-green-500 animate-pulse"></div>
              <Image
                src="/shashank-profile.svg"
                alt="Shashank Jha profile photo"
                className="rounded-full absolute inset-0 w-full h-full object-contain z-10"
                width={400}
                height={400}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

