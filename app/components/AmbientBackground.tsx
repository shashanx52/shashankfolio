"use client";
import React from "react";

/**
 * Site-wide decorative background: softly animated aurora gradient blobs
 * layered behind a subtle dotted grid. Purely decorative and non-interactive.
 */
const AmbientBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-50/40 dark:to-[#0B1120]/60" />

      {/* aurora blobs */}
      <div className="animate-blob-1 absolute -top-32 -left-24 h-[34rem] w-[34rem] rounded-full bg-green-400/30 blur-[120px] dark:bg-emerald-500/25" />
      <div className="animate-blob-2 absolute top-1/3 -right-24 h-[36rem] w-[36rem] rounded-full bg-blue-500/30 blur-[130px] dark:bg-blue-600/25" />
      <div className="animate-blob-3 absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-violet-500/25 blur-[120px] dark:bg-violet-600/20" />

      {/* dotted grid */}
      <div className="bg-grid absolute inset-0 opacity-70 dark:opacity-50" />
    </div>
  );
};

export default AmbientBackground;
