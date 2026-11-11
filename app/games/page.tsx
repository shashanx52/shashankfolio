import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Reveal from "../components/Reveal";

const DESCRIPTION =
  "Games built by Shashank Jha — Auction Arena, an IPL-style mega auction and 5-over cricket game for up to 8 friends, and Brainded Games, twelve quick browser games. Free, no install.";

export const metadata: Metadata = {
  /* The root layout's title template appends " — Shashank Jha". */
  title: "Games",
  description: DESCRIPTION,
  alternates: { canonical: "/games" },
  openGraph: {
    type: "website",
    title: "Games — Shashank Jha",
    description: DESCRIPTION,
  },
};

const SITE = "https://shashanx.in";

type Game = {
  no: string;
  title: string;
  pitch: string;
  tags: string[];
  year: string;
  /* Where "Play" goes. External games open in a new tab; the on-site one
     is an anchor on the home page. */
  play: string;
  external: boolean;
  repo?: string;
  /* A short note under the card — used for the multiplayer walkthrough. */
  steps?: { heading: string; items: string[] };
  /* Decorative tile. Each is aria-hidden: it is artwork, not content. */
  glow: string;
  tile: React.ReactNode;
};

/*
  Tiles are drawn with the site's own tokens rather than screenshots, so they
  follow the theme switch and never go stale when a game's UI changes.
*/
const games: Game[] = [
  {
    no: "01",
    title: "Auction Arena",
    pitch:
      "An IPL-style mega auction for you and up to seven friends — bid on 228 real IPL 2025 players, build a squad, then play a 5-over match with your XI. Tap to bat, pick your bowlers.",
    tags: ["Multiplayer", "2–8 friends", "Mobile-first", "Next.js · Upstash"],
    year: "2026",
    play: "https://auction-arena-ipl.vercel.app",
    external: true,
    steps: {
      heading: "Play with friends",
      items: [
        "Create a room and pick your franchise.",
        "Share the 5-letter room code — friends join from their phones.",
        "Bid live, fill your squad, then play the 5-over match.",
      ],
    },
    glow:
      "radial-gradient(120% 110% at 100% 0%, hsl(var(--accent) / 0.38), transparent 62%), linear-gradient(160deg, hsl(var(--accent-wash)), hsl(var(--paper-raised)))",
    tile: (
      <>
        <span className="label absolute left-5 top-5">Lot 142 · Marquee</span>
        <span className="tag-now absolute right-5 top-5">Sold</span>
        <span className="display absolute bottom-4 left-5 text-step-4">
          ₹18.00 <span className="ink-soft">Cr</span>
        </span>
        <span className="display absolute -bottom-7 -right-2 text-[7.5rem] leading-none text-[hsl(var(--accent)/0.14)]">
          AA
        </span>
      </>
    ),
  },
  {
    no: "02",
    title: "Brainded Games",
    pitch:
      "Twelve quick browser games on one shelf — Word Guess, Hand Cricket, 2048, Snake, Tic Tac Toe, Speed Typer, Truth or Dare and more. No install, no sign-up.",
    tags: ["Solo & pass-the-phone", "12 mini-games", "Mobile", "React · TypeScript"],
    year: "2025",
    play: "https://braindedgame.netlify.app/",
    external: true,
    repo: "braindedgames",
    glow:
      "radial-gradient(110% 120% at 0% 100%, hsl(var(--accent) / 0.3), transparent 60%), linear-gradient(20deg, hsl(var(--accent-wash)), hsl(var(--paper-raised)))",
    tile: (
      <>
        <span className="label absolute left-5 top-5">Word Guess · 4 / 6</span>
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          {"BRAIN".split("").map((ch, i) => (
            <span
              key={i}
              className={`display flex h-11 w-11 items-center justify-center border text-2xl sm:h-12 sm:w-12 ${
                i === 0 || i === 3
                  ? "border-transparent bg-[hsl(var(--accent))] text-[hsl(var(--accent-ink))]"
                  : "hairline"
              }`}
            >
              {ch}
            </span>
          ))}
        </div>
      </>
    ),
  },
  {
    no: "03",
    title: "Quick Maths",
    pitch:
      "A 30-second mental-arithmetic sprint that lives on the home page. Four options, one right answer, and a best score that follows you around.",
    tags: ["Solo", "30 seconds", "On this site"],
    year: "2026",
    play: "/#play",
    external: false,
    glow:
      "radial-gradient(90% 90% at 50% 50%, hsl(var(--accent) / 0.22), transparent 70%), linear-gradient(180deg, hsl(var(--paper-raised)), hsl(var(--accent-wash)))",
    tile: (
      <>
        <span className="label absolute left-5 top-5">Round 1</span>
        <span className="mono absolute right-5 top-5 text-sm ink-accent">00:30</span>
        <span className="display absolute inset-0 flex items-center justify-center text-step-4">
          27 × 8 = <span className="ink-soft">?</span>
        </span>
      </>
    ),
  },
];

/*
  ItemList of VideoGame nodes, tied to the same Person the root layout
  declares, so the games are attributable to the author rather than floating.
*/
const gamesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE}/games#list`,
  name: "Games built by Shashank Jha",
  itemListElement: games
    .filter((g) => g.external)
    .map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "VideoGame",
        name: g.title,
        description: g.pitch,
        url: g.play,
        gamePlatform: "Web browser",
        applicationCategory: "Game",
        operatingSystem: "Any",
        author: { "@id": `${SITE}/#person` },
      },
    })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gamesSchema) }}
      />
      <Navbar />
      <main id="main" className="mx-auto w-full max-w-7xl px-5 sm:px-10">
        <section className="pt-10 pb-12 sm:pt-16 sm:pb-16">
          <Reveal>
            <p className="label mb-4">Playground — 2025 / 2026</p>
            <h1 className="display text-step-6">
              Games I&apos;ve <span className="ink-soft">built</span>
              <span className="ink-accent">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-xl font-medium leading-snug tracking-tight sm:text-2xl">
              Side projects for the group chat: a mega auction you can run with
              your friends, a shelf of quick browser games, and a maths drill
              for the odd spare minute. Everything runs in the browser — no
              install, no sign-up.
            </p>
          </Reveal>
        </section>

        <section aria-labelledby="games-heading" className="border-t hairline py-section">
          <Reveal>
            <h2 id="games-heading" className="label mb-8">
              Play now
            </h2>
          </Reveal>

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {games.map((g, i) => {
              const github = g.repo ? `https://github.com/shashanx52/${g.repo}` : null;
              const external = g.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <Reveal as="li" key={g.no} delay={i * 0.07} className="flex">
                  <article className="flex w-full flex-col border hairline bg-[hsl(var(--paper-raised))]">
                    <div
                      aria-hidden="true"
                      className="relative aspect-[2/1] overflow-hidden border-b hairline"
                      style={{ backgroundImage: g.glow }}
                    >
                      {g.tile}
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="mono text-xs ink-soft">{g.no}</span>
                        <span className="mono text-xs ink-soft">{g.year}</span>
                      </div>
                      <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                        {g.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed ink-soft">{g.pitch}</p>
                      <p className="mono mt-4 text-xs ink-soft">{g.tags.join(" · ")}</p>

                      {g.steps && (
                        <div className="mt-5 border-t hairline pt-4">
                          <p className="label mb-2">{g.steps.heading}</p>
                          <ol className="list-decimal space-y-1 pl-5 text-sm leading-relaxed ink-soft">
                            {g.steps.items.map((s) => (
                              <li key={s}>{s}</li>
                            ))}
                          </ol>
                        </div>
                      )}

                      <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-6">
                        <Link
                          href={g.play}
                          {...external}
                          className="inline-flex items-center gap-2 bg-[hsl(var(--accent))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--accent-ink))] transition-colors hover:bg-[hsl(var(--ink))] hover:text-[hsl(var(--paper))]"
                        >
                          Play
                          <span className="sr-only">
                            {" "}
                            {g.title}
                            {g.external ? " (opens in a new tab)" : ""}
                          </span>
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        {github && (
                          <Link
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="label link-underline inline-flex items-center gap-1.5"
                          >
                            Code <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </section>

        <div className="flex justify-center border-t hairline py-10">
          <Link href="/" className="label link-underline inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
