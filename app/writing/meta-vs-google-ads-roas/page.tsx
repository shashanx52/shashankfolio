import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  /* The root layout's title template appends " — Shashank Jha", so the name is
     no longer spelled out here; it was rendering twice. */
  title: "Meta Ads vs Google Ads: Who Actually Wins on ROAS?",
  description:
    "Benchmarks, the attribution problem, and a decade of incrementality experiments — what actually decides whether Meta or Google delivers better ROAS.",
  alternates: { canonical: "/writing/meta-vs-google-ads-roas" },
  openGraph: {
    type: "article",
    title: "Meta Ads vs Google Ads: Who Actually Wins on ROAS?",
    description:
      "Benchmarks, the attribution problem, and a decade of incrementality experiments.",
  },
};

const DEK =
  "Everyone has an opinion. Far fewer have measured it properly. Here is what the benchmarks, the attribution problems, and a decade of incrementality experiments actually say.";

type Block = { h2: string } | { p: string };

const BODY: Block[] = [
  {
    p: `Ask ten marketers whether Meta or Google gives better ROAS and you will get ten confident answers, most of them screenshots from an ad dashboard. I have spent a lot of my working time inside those dashboards, reconciling spend, conversions and ROAS across Google and Meta campaigns, and then watching the blended number in the data warehouse refuse to match either platform. That gap, between what each platform claims and what actually happened, is the part nobody puts in the headline. It is also the part that matters most.`,
  },
  {
    p: `So let me reframe the question before trying to answer it. "Meta vs Google for ROAS" sounds like a race between two runners. It is closer to two different machines being scored by two biased referees who keep claiming the same goal. Once you see that, the useful answer is not hard to reach.`,
  },

  { h2: "What ROAS actually is, and what it hides" },
  {
    p: `ROAS is just the revenue attributed to your ads divided by what you spent on them. Spend ₹1,00,000, attribute ₹4,00,000 in sales, and your ROAS is 4x, or 400 percent. It is the most quoted number in performance marketing, mostly because it is the easiest one to calculate.`,
  },
  { p: `It is also one of the most misleading, for two reasons.` },
  {
    p: `The first is that ROAS measures revenue, not profit. A 4x return looks fine until you take out cost of goods, shipping, payment fees and overhead. The number that actually tells you whether an ad is worth running is your break-even ROAS, which is just 1 divided by your gross margin. A business on 25 percent margins needs 4x to break even. A software business on 90 percent margins is making money at 1.5x. There is no universal "good" ROAS, only good relative to your margin, which is why the "4:1 is healthy" rule you see everywhere is close to useless on its own.`,
  },
  {
    p: `The second reason is the word "attributed." It is doing a lot of quiet work in that sentence. Attribution is a modelling choice, not a fact, and the model you pick basically decides who wins the Meta versus Google argument before you have spent a rupee.`,
  },

  { h2: "The scoreboard everyone quotes" },
  {
    p: `Most comparisons start and end with benchmark ROAS, so let us start there too. Pulling together 2025 and 2026 data from several benchmark providers (Varos, Triple Whale, WordStream and others), a rough picture shows up. And it is rough, because the numbers move a lot depending on the source, the industry and the method.`,
  },
  {
    p: `Google tends to sit higher on headline ROAS. Median figures land around 3.3x to 3.5x, and Google Search on its own runs much hotter than that. One large 2025 dataset put Search at roughly 5.2x, against a small fraction of that for Display. In the same data, Search returned more than 40 times what Display did.`,
  },
  {
    p: `Meta sits lower on the headline, with all-industry medians around 1.9x to 2.2x, but the spread is huge. Meta retargeting often clears 5x to 10x, while cold prospecting sits closer to 1.8x to 3x. By category the order keeps flipping. Google usually wins on high-intent, considered purchases, while Meta, and Instagram in particular, can be excellent for visual and impulse categories. Fashion on Instagram has been measured as high as about 8.8x.`,
  },
  {
    p: `The floor is also moving. Average e-commerce ROAS fell about 4 percent year on year in 2025, to roughly 2.87x, mainly because costs keep rising. Meta's CPMs hit about $10.88 in the first quarter of 2025, up almost 19 percent from a year earlier. A ROAS target you set two years ago is probably wrong now.`,
  },
  {
    p: `Read quickly, the scoreboard says Google wins. If you stop reading there, which is what most of these comparisons do, that is the conclusion you take into your next budget meeting. Here is why it is half true at best.`,
  },

  { h2: "Why the scoreboard lies" },
  {
    p: `The first problem is that the two platforms sit at different points in the funnel. Google Search is demand capture. Someone types "running shoes size 10," the intent is already there, and the ad just steps in front of a purchase that was going to happen anyway. Meta is demand creation. Nobody opens Instagram planning to buy your product, so the ad has to build the want from nothing.`,
  },
  {
    p: `Capturing demand that already exists will almost always show a higher ROAS than creating new demand, because the buyer started out closer to checkout. So putting Google Search ROAS next to Meta prospecting ROAS does not tell you which platform is better. It tells you which stage of the funnel is nearer the cash register, which you already knew.`,
  },
  {
    p: `The second problem is bigger. Both referees are biased, and they both take credit for the same sale. Every ad platform has an incentive to claim conversions, and each one uses its own attribution to do it, so you get double counting. Add up the conversions Meta claims and the conversions Google claims, and the total often comes out higher than the number of sales you actually made.`,
  },
  {
    p: `This is not a small gap. Across public incrementality studies, platforms over-attribute by roughly 20 to 60 percent, and measured incremental ROAS usually comes in 30 to 60 percent below the platform-reported number. The measurement firm Haus, in case studies with brands like Bombas, True Classic and Liquid Death, found platform-reported ROAS overstating real incremental ROAS by 1.5x to 3x. The overstatement was widest exactly where the dashboards looked best, on brand search and retargeting, where the customer was usually going to convert anyway.`,
  },
  {
    p: `That is worth pausing on. The placements that produce the best-looking ROAS screenshots are often the ones taking credit for sales you would have got for free.`,
  },

  { h2: "The measurement problem, properly" },
  {
    p: `To compare anything honestly you have to know how the number is built, and the way it gets built broke in public over the last few years.`,
  },
  {
    p: `The default model almost everywhere is last-click, where whoever the user touched last gets all the credit. It is simple, it is the default in most analytics setups, and it quietly distorts everything. It ignores the whole journey before the last click, and it over-credits bottom-of-funnel channels like branded search while under-crediting the upper-funnel work, like Meta prospecting, that actually started the purchase. eMarketer has found that only about one in five marketers are confident in last-click attribution, and they are right to be nervous.`,
  },
  {
    p: `Then privacy changed the rules. Apple's App Tracking Transparency, which arrived with iOS 14.5 in April 2021, made apps ask permission to track, and most users said no. User-level signal collapsed. Meta, which depended on the pixel following people around the web, took the worst of it, with attribution accuracy estimated to have dropped 40 to 60 percent since. The industry's fix was server-side tracking: Meta's Conversions API, GA4 server-side tagging, careful event deduplication and consistent UTMs. That recovers some signal but never brings back the old, clean picture. The rules kept moving too. As of January 2026, Meta removed its 7-day-view and 28-day-view attribution windows entirely, which shifted reported numbers again.`,
  },
  {
    p: `So the attribution options today are really a stack of imperfect tools. Last-click and data-driven attribution are fast, granular and fine for daily optimisation, but they are correlational and biased by funnel position. Multi-touch attribution spreads credit across touchpoints, which is better in theory but increasingly unreliable without cookies. Media mix modelling works top-down by correlating spend with outcomes, which is privacy-proof and cross-channel but still correlation, so it can confuse seasonal demand with ad impact. And then there is incrementality testing, which is the one that actually asks the right question.`,
  },

  { h2: "The only question that matters" },
  {
    p: `Attribution asks which touchpoint came before the sale. Incrementality asks the harder question: if you had not run the ad, would the sale have happened anyway? That move, from correlation to causation, is the whole difference between guessing and measuring.`,
  },
  {
    p: `You test it with experiments. Hold out a random group, using geo holdouts that pause spend in matched regions, in-platform Conversion Lift studies on Meta and Google, or ghost ads that keep the auction realistic, then compare the exposed group against the control. The difference is the incremental lift, and incremental revenue over incremental spend gives you incremental ROAS.`,
  },
  {
    p: `This is where the two platforms stop looking the same, because we have about a decade of these experiments and some of them are famous.`,
  },
  {
    p: `The best known was run by eBay's own data scientists with researchers from UC Berkeley and the University of Chicago, and published in Econometrica in 2015. eBay turned off its branded search ads and watched what happened, and the answer was almost nothing. Around 99.5 percent of the paid clicks were simply picked up by eBay's organic listings instead, because the people typing "eBay" were always going to find eBay. Brand-keyword search ads had no measurable short-term benefit. The team then switched off non-brand search ads across 30 percent of US markets for 60 days. The effect on sales was small and statistically insignificant, and because the heavy buyers who would have purchased anyway used up most of the spend, the average return came out negative. eBay cut about $100 million a year in paid search after that.`,
  },
  {
    p: `It is not only search, and not only one company. Procter & Gamble, one of the biggest advertisers in the world, cut about $200 million of digital spend and reported no noticeable effect on the business. The pattern keeps repeating. A large part of what dashboards attribute is demand that was already there.`,
  },
  {
    p: `It is worth being fair to the other side, though. A later experiment on Edmunds.com found only about 50 percent organic substitution for branded search, not eBay's 99.5 percent. For a smaller brand whose competitors bid on its name, branded search can be genuinely incremental. So the lesson is not that branded search is always a waste. It is that you cannot know without testing.`,
  },

  { h2: "So who actually wins" },
  {
    p: `Now the question can be answered, because we have sorted out what we are measuring.`,
  },
  {
    p: `On platform-reported ROAS, Google usually wins. But a lot of that is because last-click attribution rewards whatever channel is closest to the purchase, and Google Search is demand capture, so part of that ROAS is really credit for demand that your brand, your Meta ads, or your organic presence created.`,
  },
  {
    p: `On incremental ROAS, the picture evens out. Google's brand search loses a lot of its shine because of the high substitution. Meta's upper-funnel prospecting often looks better than its dashboard suggested, because it was creating demand that later got attributed to whatever channel closed the sale. Neither platform is simply better than the other. They are doing different jobs, and a sensible advertiser pays both to do them.`,
  },
  {
    p: `So the practical version, the one I would actually give someone, is roughly this.`,
  },
  {
    p: `Use Google when you are capturing demand that already exists, like non-brand search for products people are actively looking for, or Shopping for purchase-ready queries. It is also the easier platform to start on, since good copy and a decent landing page can work without a design team.`,
  },
  {
    p: `Use Meta when you need to create demand, sell something visual, or bring back warm audiences. Its real strength now is creative. By 2026, creative quality is estimated to drive more than half of Meta's ad performance, and tools like Advantage+ Shopping, along with Google's Performance Max, use automation to find efficient pockets of demand. A brand putting out three video variants a week will beat one putting out a single variant a month, often by 2x to 4x over time.`,
  },
  {
    p: `And watch the campaign objective, which can matter more than the platform choice. Sales-optimised Meta campaigns have been measured returning about 835 percent more than traffic-optimised ones on the same platform. Optimise for purchases, not clicks, because the algorithm finds exactly what you ask it to.`,
  },
  {
    p: `Then stop choosing. The better answer is to run both and judge them on blended ROAS, or marketing efficiency ratio, which is just total revenue over total ad spend, instead of adding up two self-reported numbers that double count each other. Use platform attribution for daily optimisation, run incrementality tests to check what is actually causal, and use media mix modelling to split budget across channels based on marginal return rather than average. Even shifting 5 to 10 percent of spend based on tested insight can move the overall number a lot.`,
  },

  { h2: "The takeaway" },
  {
    p: `The honest answer to "Meta or Google for ROAS" is annoying as a one-liner but useful as a strategy. It depends on your funnel stage, your margins, your average order value, your customer lifetime value and how good your creative is, and you will not really know which is winning until you measure causation instead of correlation.`,
  },
  {
    p: `That is the part I find interesting, and it goes well past ad platforms. A number can look completely solid on a dashboard and still be wrong, not because anyone lied, but because the way it was measured decided the answer in advance. The job of anyone working with data is not to report the number. It is to ask what the number would look like if you had measured it honestly. Do that with ROAS and you stop arguing about which platform wins, and start spending against whatever actually drove the sale.`,
  },
];

const SOURCES: { title: string; meta: string; url: string }[] = [
  {
    title:
      "Consumer Heterogeneity and Paid Search Effectiveness: A Large-Scale Field Experiment",
    meta: "Blake, Nosko and Tadelis (2015), Econometrica — the eBay experiment",
    url: "https://onlinelibrary.wiley.com/doi/abs/10.3982/ECTA12423",
  },
  {
    title: "Does Advertising Actually Work? (Part 2: Digital)",
    meta: "Freakonomics — eBay and P&G experiments",
    url: "https://freakonomics.com/podcast/does-advertising-actually-work-part-2-digital-ep-441/",
  },
  {
    title: "An experiment to estimate the effectiveness of branded search ads",
    meta: "CEPR / VoxEU — Edmunds.com counter-study",
    url: "https://cepr.org/voxeu/columns/experiment-estimate-effectiveness-branded-search-ads",
  },
  {
    title: "ROAS Benchmarks by Industry",
    meta: "rule1.ai — Triple Whale 35,000+ brand dataset",
    url: "https://rule1.ai/articles/roas-benchmarks",
  },
  {
    title: "ROAS Benchmarks by Industry 2026: Google and Meta",
    meta: "Ryze AI",
    url: "https://get-ryze.ai/blog/roas-benchmarks-by-industry-2026-google-meta",
  },
  {
    title: "Average eCommerce ROAS",
    meta: "Upcounting",
    url: "https://upcounting.com/blog/average-ecommerce-roas",
  },
  {
    title: "What Is a Good ROAS for Ecommerce?",
    meta: "Billo — Varos and Billo video-ads data",
    url: "https://billo.app/blog/what-is-a-good-roas/",
  },
  {
    title: "Meta Ads vs Google Ads 2026: Decision Framework",
    meta: "AdLibrary",
    url: "https://adlibrary.com/posts/meta-ads-vs-google-ads-2026",
  },
  {
    title: "What is incrementality testing?",
    meta: "Eightx — Haus and Recast case studies",
    url: "https://eightx.co/blog/what-is-incrementality-testing",
  },
  {
    title: "Incrementality vs. Attribution vs. MMM: A Decision Tree",
    meta: "Measured",
    url: "https://measured.com/faq/incrementality-attribution-mmm-decision-tree/",
  },
  {
    title: "Meta Ads Attribution in 2026",
    meta: "DOJO AI — iOS 14.5, CAPI, attribution-window changes",
    url: "https://dojoai.com/blog/meta-ads-attribution-2026-changes-fixes",
  },
  {
    title: "Last-Click Attribution Is Broken",
    meta: "nine.am — eMarketer confidence figure",
    url: "https://nine.am/insights/last-click-attribution-problem",
  },
];

export default function Page() {
  return (
    <>
      <main className="mx-auto min-h-screen max-w-7xl px-5 sm:px-10">
        <Navbar />

        <article className="mx-auto max-w-3xl border-t hairline py-14 sm:py-20">
          {/* Header */}
          <Reveal>
            <p className="label mb-5">Essay · Marketing</p>
            <h1 className="text-3xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
              Meta Ads vs Google Ads: Who Actually Wins on ROAS?
            </h1>
            <p className="mt-5 text-lg italic leading-relaxed ink-soft sm:text-xl">
              {DEK}
            </p>
            <p className="mono mt-6 text-xs ink-soft">Shashank Jha · June 2026</p>
          </Reveal>

          {/* Body */}
          <Reveal delay={0.05}>
            <div className="mt-12">
              {BODY.map((block, i) =>
                "h2" in block ? (
                  <h2
                    key={i}
                    className="mb-3 mt-12 text-xl font-bold tracking-tight sm:text-2xl"
                  >
                    {block.h2}
                  </h2>
                ) : (
                  <p
                    key={i}
                    className="mb-5 text-[1.0625rem] leading-[1.75] tracking-[-0.003em]"
                  >
                    {block.p}
                  </p>
                ),
              )}
            </div>
          </Reveal>

          {/* Sources */}
          <section className="mt-16 border-t hairline pt-10">
            <h2 className="label mb-6">Sources and further reading</h2>
            <ol className="space-y-4">
              {SOURCES.map((s, i) => (
                <li key={s.url} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mono shrink-0 text-xs ink-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <Link
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline font-medium italic"
                    >
                      {s.title}
                    </Link>
                    <span className="ink-soft"> — {s.meta}.</span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-2xl text-sm italic leading-relaxed ink-soft">
              Benchmark figures are directional and vary by source, industry,
              geography and method. Treat them as reference points, not targets,
              and check against your own data before acting.
            </p>
          </section>
        </article>

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
