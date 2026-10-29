import type { MetadataRoute } from "next";

const SITE = "https://shashanx.in";

/*
  Every route on the site. Add new pages here when they ship.

  lastModified is a declared date per route, not `new Date()`. Stamping the
  build time on every URL told Google the whole site changed on every deploy,
  which is the fastest way to get lastmod ignored altogether. Update the date
  on a row when that page's content actually changes.
*/
const routes: Array<{ path: string; priority: number; lastModified: string }> = [
  { path: "/", priority: 1, lastModified: "2026-08-15" },
  { path: "/projects", priority: 0.8, lastModified: "2026-08-15" },
  { path: "/experience", priority: 0.8, lastModified: "2026-08-15" },
  { path: "/contact", priority: 0.6, lastModified: "2026-08-15" },
  { path: "/writing/meta-vs-google-ads-roas", priority: 0.6, lastModified: "2026-08-15" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, lastModified }) => ({
    url: `${SITE}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency: "monthly",
    priority,
  }));
}
