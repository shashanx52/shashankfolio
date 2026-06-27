import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Does Advertising Actually Work? — Shashank Jha",
  description:
    "A curated reading list on ad effectiveness, ROAS benchmarks, incrementality and attribution — anchored on the large-scale field experiments that separated correlation from causation.",
};

type Ref = { title: string; source: string; url: string };

const GROUPS: { label: string; intro?: string; refs: Ref[] }[] = [
  {
    label: "Do ads actually cause the sales?",
    intro:
      "The field experiments that separated correlation from causation — and the studies that pushed back.",
    refs: [
      {
        title:
          "Consumer Heterogeneity and Paid Search Effectiveness: A Large-Scale Field Experiment",
        source: "Blake, Nosko & Tadelis — Econometrica (2015) · the eBay experiment",
        url: "https://doi.org/10.3982/ECTA12423",
      },
      {
        title: "Does Advertising Actually Work? (Part 2: Digital)",
        source: "Freakonomics — the eBay and P&G experiments",
        url: "https://freakonomics.com/podcast/does-advertising-actually-work-part-2-digital-ep-441/",
      },
      {
        title: "An experiment to estimate the effectiveness of branded search ads",
        source: "CEPR / VoxEU — the Edmunds.com counter-study",
        url: "https://cepr.org/voxeu/columns/experiment-estimate-effectiveness-branded-search-ads",
      },
    ],
  },
  {
    label: "What a “good” ROAS looks like",
    intro: "Benchmarks are useful context, but directional — never a target.",
    refs: [
      {
        title: "ROAS Benchmarks by Industry",
        source: "rule1.ai — Triple Whale 35,000+ brand dataset",
        url: "https://rule1.ai/articles/roas-benchmarks",
      },
      {
        title: "ROAS Benchmarks by Industry 2026: Google and Meta",
        source: "Ryze AI",
        url: "https://get-ryze.ai/blog/roas-benchmarks-by-industry-2026-google-meta",
      },
      {
        title: "Average eCommerce ROAS",
        source: "Upcounting",
        url: "https://upcounting.com/blog/average-ecommerce-roas",
      },
      {
        title: "What Is a Good ROAS for Ecommerce?",
        source: "Billo — Varos and Billo video-ads data",
        url: "https://billo.app/blog/what-is-a-good-roas/",
      },
    ],
  },
  {
    label: "Channels, incrementality & attribution",
    intro:
      "Which channel, and — more importantly — which numbers you should trust in the first place.",
    refs: [
      {
        title: "Meta Ads vs Google Ads 2026: Decision Framework",
        source: "AdLibrary",
        url: "https://adlibrary.com/posts/meta-ads-vs-google-ads-2026",
      },
      {
        title: "What is incrementality testing?",
        source: "Eightx — Haus and Recast case studies",
        url: "https://eightx.co/blog/what-is-incrementality-testing",
      },
      {
        title: "Incrementality vs. Attribution vs. MMM: A Decision Tree",
        source: "Measured",
        url: "https://measured.com/faq/incrementality-attribution-mmm-decision-tree/",
      },
      {
        title: "Meta Ads Attribution in 2026",
        source: "DOJO AI — iOS 14.5, CAPI, attribution-window changes",
        url: "https://dojoai.com/blog/meta-ads-attribution-2026-changes-fixes",
      },
      {
        title: "Last-Click Attribution Is Broken",
        source: "nine.am — the eMarketer confidence figure",
        url: "https://nine.am/insights/last-click-attribution-problem",
      },
    ],
  },
];

export default function Page() {
  let n = 0;
  return (
    <>
      <main className="mx-auto min-h-screen max-w-7xl px-5 sm:px-10">
        <Navbar />

        {/* Header */}
        <header className="border-t hairline py-16 sm:py-24">
          <div className="grid grid-cols-1 gap-y-8 gap-x-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <Reveal>
                <p className="label mb-1">Writing</p>
                <p className="label">Essay · Marketing</p>
              </Reveal>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                  Does advertising actually work?
                </h1>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed ink-soft">
                  A running collection of the sources I lean on when someone asks
                  whether the ad spend is really working — and what a{" "}
                  &ldquo;good&rdquo; return even looks like. It starts where the
                  honest version of this conversation usually does: the
                  large-scale field experiments (eBay, P&amp;G) that separated
                  correlation from causation, and the branded-search studies that
                  pushed back.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed ink-soft">
                  From there it moves to ROAS benchmarks (useful, but directional),
                  the Meta-vs-Google channel question, and the measurement stack —
                  incrementality, attribution and MMM — that decides which numbers
                  you should trust in the first place.
                </p>
              </Reveal>
            </div>
          </div>
        </header>

        {/* Grouped sources */}
        {GROUPS.map((group) => (
          <section
            key={group.label}
            className="border-t hairline py-14 sm:py-20"
          >
            <div className="grid grid-cols-1 gap-y-8 gap-x-10 md:grid-cols-12">
              <div className="md:col-span-3">
                <Reveal>
                  <p className="label mb-2">{group.label}</p>
                  {group.intro && (
                    <p className="max-w-xs text-sm leading-relaxed ink-soft">
                      {group.intro}
                    </p>
                  )}
                </Reveal>
              </div>

              <div className="md:col-span-9">
                {group.refs.map((ref, i) => {
                  n += 1;
                  return (
                    <Reveal key={ref.url} delay={i * 0.04}>
                      <Link
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block border-b hairline py-5 first:border-t-0"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-lg font-bold leading-snug tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-2xl">
                            <span className="mono mr-3 align-middle text-xs ink-soft">
                              {String(n).padStart(2, "0")}
                            </span>
                            {ref.title}
                          </h3>
                          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                        <p className="mono mt-2 pl-7 text-xs ink-soft">
                          {ref.source}
                        </p>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* Disclaimer */}
        <section className="border-t hairline py-12">
          <div className="grid grid-cols-1 gap-x-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="label">Note</p>
            </div>
            <div className="md:col-span-9">
              <p className="max-w-2xl text-sm italic leading-relaxed ink-soft">
                Benchmark figures are directional and vary by source, industry,
                geography and method. Treat them as reference points, not targets,
                and check against your own data before acting.
              </p>
            </div>
          </div>
        </section>

        {/* Back */}
        <div className="flex justify-center border-t hairline py-10">
          <Link
            href="/#writing"
            className="label link-underline inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Writing
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
