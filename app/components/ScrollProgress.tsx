"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/** Thin ink progress bar pinned to the top of the viewport. */
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-[hsl(var(--ink))]"
    />
  );
};

export default ScrollProgress;
