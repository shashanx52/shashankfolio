import type { MetadataRoute } from "next";

const SITE = "https://shashanx.in";

/** Every route on the site. Add new pages here when they ship. */
const routes: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/projects", priority: 0.8 },
  { path: "/experience", priority: 0.8 },
  { path: "/contact", priority: 0.6 },
  { path: "/writing/meta-vs-google-ads-roas", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${SITE}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
