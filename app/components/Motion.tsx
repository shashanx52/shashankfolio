"use client";
import React from "react";
import { MotionConfig } from "framer-motion";

/**
 * One place to honour the OS "reduce motion" setting for every Framer Motion
 * animation on the site. With `reducedMotion="user"`, transform and layout
 * animations are dropped for those visitors while opacity still cross-fades —
 * so reveal-on-scroll content stays visible instead of never animating in.
 */
export default function Motion({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
