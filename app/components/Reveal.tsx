"use client";
import React from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /**
   * Element to render. Needed because a <div> between <ol> and <li> is invalid
   * markup and drops the list out of the accessibility tree — lists of roles
   * pass `as="li"` so the wrapper *is* the list item.
   */
  as?: "div" | "li";
}

/** Minimal fade-and-rise reveal used across editorial sections. */
const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
  delay = 0,
  y = 24,
  as = "div",
}) => {
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
