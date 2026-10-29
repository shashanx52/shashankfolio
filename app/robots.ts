import type { MetadataRoute } from "next";

/*
  Everything is allowed, deliberately and explicitly.

  The AI crawlers are spelled out rather than left to the wildcard because the
  training-vs-search distinction is easy to get wrong later: blocking GPTBot or
  ClaudeBot only opts out of *model training* and costs nothing in search, but
  blocking OAI-SearchBot, Claude-SearchBot or PerplexityBot removes this site
  from those engines' answers entirely. Being cited in AI answers is the point
  of this site, so those three stay allowed — if a future "block the AI
  scrapers" pass happens, it should have to delete these lines on purpose.
*/
const AI_SEARCH_CRAWLERS = [
  "OAI-SearchBot", // ChatGPT Search citations
  "ChatGPT-User", // user-triggered browsing
  "Claude-SearchBot", // Claude search citations
  "PerplexityBot", // Perplexity index
  "Google-Extended", // Gemini grounding
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_SEARCH_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://shashanx.in/sitemap.xml",
    host: "https://shashanx.in",
  };
}
