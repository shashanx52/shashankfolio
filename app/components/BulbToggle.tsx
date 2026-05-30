"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

/**
 * Pull-cord light switch that toggles the daisyUI theme.
 * Light theme ("fantasy") = bulb glowing; dark ("night") = bulb off.
 */
const BulbToggle: React.FC = () => {
  const [theme, setTheme] = useState("fantasy");
  const [mounted, setMounted] = useState(false);
  const cord = useAnimationControls();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const saved = localStorage.getItem("theme") || "fantasy";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
    document.body.setAttribute("data-theme", saved);
  }, [mounted]);

  const on = theme === "fantasy";

  const toggle = () => {
    cord
      .start({ y: 10, transition: { duration: 0.09 } })
      .then(() =>
        cord.start({ y: 0, transition: { type: "spring", stiffness: 700, damping: 14 } })
      );
    const next = on ? "night" : "fantasy";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    document.body.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  if (!mounted) return <div className="h-7 w-9" aria-hidden />;

  return (
    <div className="relative h-7 w-9">
      <button
        onClick={toggle}
        aria-label={on ? "Turn off the lights" : "Turn on the lights"}
        title="Pull the string"
        className="absolute -top-4 left-0 h-24 w-9 cursor-pointer outline-none"
      >
        <svg width="36" height="96" viewBox="0 0 36 96" fill="none" className="overflow-visible">
          <defs>
            <radialGradient id="bulbGlow" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#FFE9A8" />
              <stop offset="55%" stopColor="#FFC83D" />
              <stop offset="100%" stopColor="#F4A300" />
            </radialGradient>
          </defs>

          {/* hanging cord */}
          <line x1="18" y1="0" x2="18" y2="17" stroke="currentColor" strokeWidth="1.4" opacity="0.4" strokeLinecap="round" />

          {/* soft glow when on */}
          {on && (
            <circle cx="18" cy="30" r="20" fill="#FFC83D" opacity="0.16">
              <animate attributeName="opacity" values="0.10;0.20;0.10" dur="2.6s" repeatCount="indefinite" />
            </circle>
          )}

          {/* light rays when on */}
          {on && (
            <g stroke="#F4A300" strokeWidth="1.4" strokeLinecap="round" opacity="0.7">
              <line x1="18" y1="9" x2="18" y2="13.5" />
              <line x1="4.5" y1="30" x2="9" y2="30" />
              <line x1="27" y1="30" x2="31.5" y2="30" />
              <line x1="8.5" y1="19.5" x2="11.5" y2="22.5" />
              <line x1="27.5" y1="19.5" x2="24.5" y2="22.5" />
            </g>
          )}

          {/* glass bulb */}
          <circle
            cx="18"
            cy="30"
            r="11"
            fill={on ? "url(#bulbGlow)" : "currentColor"}
            fillOpacity={on ? 1 : 0.12}
            stroke="currentColor"
            strokeOpacity={on ? 0.35 : 0.55}
            strokeWidth="1.3"
          />
          {/* filament */}
          <path
            d="M14.5 31.5 Q16 26 18 31 Q20 26 21.5 31.5"
            fill="none"
            stroke={on ? "#9a5b00" : "currentColor"}
            strokeOpacity={on ? 0.9 : 0.4}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* screw base */}
          <path d="M13 40.5 L23 40.5 L21.5 47 L14.5 47 Z" fill="currentColor" opacity="0.55" />
          <line x1="13.6" y1="42.6" x2="22.4" y2="42.6" stroke="hsl(var(--paper))" strokeWidth="1" opacity="0.7" />
          <line x1="14.1" y1="44.7" x2="21.9" y2="44.7" stroke="hsl(var(--paper))" strokeWidth="1" opacity="0.7" />
          <circle cx="18" cy="49" r="1.6" fill="currentColor" opacity="0.55" />

          {/* pull string + knob */}
          <motion.g animate={cord}>
            <line x1="18" y1="50" x2="18" y2="74" stroke="currentColor" strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
            <circle cx="18" cy="79" r="4.5" fill="currentColor" />
            <circle cx="18" cy="79" r="6.5" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
          </motion.g>
        </svg>
      </button>
    </div>
  );
};

export default BulbToggle;
