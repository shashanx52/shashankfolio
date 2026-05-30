"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Mail, Download } from "lucide-react";

const socials = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/shashanx/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/shashanx52", label: "GitHub" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/shashanx/", label: "LeetCode" },
  { icon: Mail, href: "mailto:shashankjha.0052@gmail.com", label: "Email" },
];

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl glass p-10 sm:p-14 text-center"
      >
        {/* glow accents */}
        <div className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full bg-green-400/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-violet-500/30 blur-3xl" />

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-3">
          Let&apos;s connect
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
          Have data that needs{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-violet-500">
            answers?
          </span>
        </h2>
        <p className="mx-auto max-w-xl text-gray-600 dark:text-gray-300 mb-8">
          I&apos;m always open to discussing analytics roles, automation projects,
          or interesting data problems. Let&apos;s talk.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link href="/contact">
            <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 px-7 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:-translate-y-0.5">
              <Mail className="h-4 w-4" /> Get in touch
            </button>
          </Link>
          <Link href="/Shashank_Jha_Resume.pdf" download="Shashank_Jha_Resume.pdf">
            <button className="flex items-center gap-2 rounded-full border-2 border-green-500/70 px-7 py-3 font-medium text-green-600 dark:text-green-400 backdrop-blur-sm transition-all hover:scale-105 hover:-translate-y-0.5 hover:bg-green-500 hover:text-white">
              <Download className="h-4 w-4" /> Download CV
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-5">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-gray-500 transition-all hover:scale-125 hover:text-blue-500 dark:text-gray-400 dark:hover:text-green-400"
              >
                <Icon className="h-6 w-6" />
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
