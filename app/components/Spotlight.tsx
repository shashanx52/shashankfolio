"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Soft radial glow that trails the cursor, sitting just behind the
 * translucent content so it subtly lights up glass surfaces.
 */
const Spotlight: React.FC = () => {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 100, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 100, damping: 20, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ left: sx, top: sy, x: "-50%", y: "-50%" }}
      className="pointer-events-none fixed -z-[5] h-80 w-80 rounded-full bg-blue-500/20 blur-[90px]"
    />
  );
};

export default Spotlight;
