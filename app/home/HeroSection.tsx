"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion";
import Link from "next/link";
import TiltCard from "../components/TiltCard";

const floatingBadges = [
  { name: "BigQuery", icon: "/skillslogos/bigquery.svg", className: "top-2 -left-2 sm:left-0" },
  { name: "SQL", icon: "/skillslogos/sql.svg", className: "top-1/4 -right-3 sm:-right-6" },
  { name: "Python", icon: "/skillslogos/python.png", className: "bottom-6 -left-4 sm:-left-8" },
  { name: "Looker", icon: "/skillslogos/looker.svg", className: "bottom-0 right-2 sm:right-6" },
];

const HeroSection = () => {
  return (
    <section className="lg:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-8">
        {/* ---------- Left: intro ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="relative rounded-3xl border border-white/40 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl shadow-2xl shadow-blue-500/5 p-6 sm:p-8 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for data roles
            </span>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl lg:leading-normal font-extrabold leading-relaxed">
              <span className="text-gray-900 dark:text-white">Hello, I&apos;m</span>
              <br />
              <span className="animate-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-violet-500">
                Shashank Jha
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Data Analyst @ Economic Times",
                  1200,
                  "BigQuery & SQL Developer",
                  1200,
                  "Marketing Data Analyst",
                  1200,
                  "Automation Engineer",
                  1200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl sm:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500"
              />
            </h1>

            <TextAnimate
              animation="slideUp"
              by="word"
              className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300"
            >
              Data Analyst at Times Internet (The Economic Times), turning marketing
              data into decisions with BigQuery, SQL, Python and automation.
            </TextAnimate>

            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link href="/contact">
                <button className="group px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-medium shadow-lg shadow-blue-500/25 transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Contact Me
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                </button>
              </Link>
              <Link href="/Shashank_Jha_Resume.pdf" download="Shashank_Jha_Resume.pdf">
                <button className="px-6 py-3 w-full sm:w-auto rounded-full border-2 border-green-500/70 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white font-medium backdrop-blur-sm transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Download CV
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ---------- Right: 3D avatar ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="col-span-5 place-self-center mt-6 sm:mt-0"
        >
          <TiltCard intensity={14} glare={false} className="animate-float-y">
            <div className="relative w-[260px] h-[260px] lg:w-[380px] lg:h-[380px] [transform-style:preserve-3d]">
              {/* rotating conic ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #22c55e, #3b82f6, #8b5cf6, #22c55e)",
                  filter: "blur(14px)",
                  opacity: 0.55,
                }}
              />
              {/* inner glow ring */}
              <div className="absolute inset-3 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-violet-500 opacity-90" />
              {/* portrait */}
              <div className="absolute inset-[10px] rounded-full overflow-hidden bg-white dark:bg-[#0B1120] [transform:translateZ(40px)]">
                <Image
                  src="/shashank-profile.svg"
                  alt="Shashank Jha profile photo"
                  fill
                  className="object-contain"
                  sizes="380px"
                  priority
                />
              </div>

              {/* floating tech badges */}
              {floatingBadges.map((badge, i) => (
                <motion.div
                  key={badge.name}
                  className={`absolute ${badge.className} [transform:translateZ(70px)]`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-1.5 rounded-xl border border-white/50 dark:border-white/10 bg-white/80 dark:bg-[#1A2333]/80 backdrop-blur-md px-2.5 py-1.5 shadow-lg">
                    <Image src={badge.icon} alt={badge.name} width={18} height={18} className="object-contain" />
                    <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-200">{badge.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
