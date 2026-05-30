"use client";
import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, Trophy, Play } from "lucide-react";
import Reveal from "../components/Reveal";
import Section from "./Section";

type Question = { text: string; answer: number; options: number[] };
type Phase = "idle" | "play" | "over";

const ROUND = 30; // seconds

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

function makeQuestion(): Question {
  const ops = ["+", "−", "×"] as const;
  const op = ops[rand(0, 2)];
  let a: number, b: number, answer: number;
  if (op === "×") {
    a = rand(2, 12);
    b = rand(2, 12);
    answer = a * b;
  } else if (op === "+") {
    a = rand(10, 60);
    b = rand(10, 60);
    answer = a + b;
  } else {
    a = rand(20, 90);
    b = rand(1, a);
    answer = a - b;
  }
  const opts = new Set<number>([answer]);
  while (opts.size < 4) {
    const cand = answer + rand(1, 9) * (Math.random() < 0.5 ? -1 : 1);
    if (cand >= 0) opts.add(cand);
  }
  return { text: `${a} ${op} ${b}`, answer, options: shuffle([...opts]) };
}

const MathGame: React.FC = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [q, setQ] = useState<Question | null>(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [time, setTime] = useState(ROUND);
  const [flash, setFlash] = useState<"none" | "right" | "wrong">("none");

  useEffect(() => {
    const saved = Number(localStorage.getItem("mathBest") || 0);
    if (saved) setBest(saved);
  }, []);

  // countdown
  useEffect(() => {
    if (phase !== "play") return;
    if (time <= 0) {
      setPhase("over");
      setBest((b) => {
        const nb = Math.max(b, score);
        localStorage.setItem("mathBest", String(nb));
        return nb;
      });
      return;
    }
    const id = window.setTimeout(() => setTime((t) => t - 1), 1000);
    return () => window.clearTimeout(id);
  }, [phase, time, score]);

  const start = () => {
    setScore(0);
    setTime(ROUND);
    setQ(makeQuestion());
    setPhase("play");
  };

  const answer = useCallback(
    (opt: number) => {
      if (!q || phase !== "play") return;
      const correct = opt === q.answer;
      if (correct) setScore((s) => s + 1);
      setFlash(correct ? "right" : "wrong");
      window.setTimeout(() => setFlash("none"), 220);
      setQ(makeQuestion());
    },
    [q, phase]
  );

  return (
    <Section index="03" label="Play">
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="max-w-xl text-xl sm:text-2xl font-medium leading-snug tracking-tight">
            Quick maths — how many can you crack in {ROUND} seconds?
          </p>
          <span className="label inline-flex items-center gap-1.5">
            <Trophy className="h-4 w-4" /> Best {best}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 border hairline">
          <AnimatePresence mode="wait">
            {phase === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center gap-6 px-6 py-16"
              >
                <p className="display text-4xl sm:text-6xl">7 × 8 = ?</p>
                <button
                  onClick={start}
                  className="inline-flex items-center gap-2 border hairline px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-[hsl(var(--ink))] hover:text-[hsl(var(--paper))]"
                >
                  <Play className="h-4 w-4" /> Start
                </button>
              </motion.div>
            )}

            {phase === "play" && q && (
              <motion.div
                key="play"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="px-6 py-10"
              >
                <div className="flex items-center justify-between">
                  <span className="label inline-flex items-center gap-1.5">
                    <Timer className="h-4 w-4" /> {String(time).padStart(2, "0")}s
                  </span>
                  <span className="label">Score {score}</span>
                </div>

                {/* progress bar */}
                <div className="mt-3 h-[2px] w-full bg-[hsl(var(--line))]">
                  <motion.div
                    className="h-full bg-[hsl(var(--ink))]"
                    animate={{ width: `${(time / ROUND) * 100}%` }}
                    transition={{ ease: "linear" }}
                  />
                </div>

                <motion.div
                  animate={
                    flash === "wrong"
                      ? { x: [0, -8, 8, -4, 0] }
                      : flash === "right"
                      ? { scale: [1, 1.06, 1] }
                      : {}
                  }
                  transition={{ duration: 0.22 }}
                  className="py-10 text-center"
                >
                  <p className="display text-5xl sm:text-7xl">{q.text}</p>
                </motion.div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => answer(opt)}
                      className="border hairline py-4 text-xl font-bold tabular-nums transition-colors hover:bg-[hsl(var(--ink))] hover:text-[hsl(var(--paper))]"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {phase === "over" && (
              <motion.div
                key="over"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center"
              >
                <p className="label">Time!</p>
                <p className="display text-6xl sm:text-8xl">{score}</p>
                <p className="ink-soft">
                  {score >= best && score > 0 ? "New best — nice." : `Best so far: ${best}`}
                </p>
                <button
                  onClick={start}
                  className="mt-2 inline-flex items-center gap-2 border hairline px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-[hsl(var(--ink))] hover:text-[hsl(var(--paper))]"
                >
                  <Play className="h-4 w-4" /> Play again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </Section>
  );
};

export default MathGame;
