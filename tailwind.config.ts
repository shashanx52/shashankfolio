import type { Config } from "tailwindcss";

/**
 * The editorial tokens in app/globals.css are the source of truth. This file
 * only exposes them to Tailwind so components can write `text-step-3` or
 * `text-accent` instead of hand-rolling `text-[hsl(var(--accent))]` each time.
 */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* editorial palette */
        paper: {
          DEFAULT: "hsl(var(--paper))",
          raised: "hsl(var(--paper-raised))",
        },
        ink: {
          DEFAULT: "hsl(var(--ink))",
          soft: "hsl(var(--ink-soft))",
          faint: "hsl(var(--ink-faint))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          ink: "hsl(var(--accent-ink))",
          wash: "hsl(var(--accent-wash))",
        },
        rule: {
          DEFAULT: "hsl(var(--line))",
          strong: "hsl(var(--line-strong))",
        },

        /* Default border colour applied to every element by globals.css. */
        border: "hsl(var(--line))",
      },
      fontSize: {
        "step-s": "var(--step-s)",
        "step-0": "var(--step-0)",
        "step-1": "var(--step-1)",
        "step-2": "var(--step-2)",
        "step-3": "var(--step-3)",
        "step-4": "var(--step-4)",
        "step-5": "var(--step-5)",
        "step-6": "var(--step-6)",
        "step-d": "var(--step-d)",
      },
      spacing: {
        section: "var(--space-section)",
        gutter: "var(--gutter)",
      },
      maxWidth: {
        measure: "68ch",
      },
      transitionTimingFunction: {
        editorial: "var(--ease-out)",
      },
    },
  },
  plugins: [],
  /* daisyUI is gone — nothing on the site used its component classes, and its
     theme layer fought the tokens above. The data-theme attribute is still the
     switch, it is just read by our own CSS now. */
  darkMode: ["selector", '[data-theme="night"]'],
} satisfies Config;
