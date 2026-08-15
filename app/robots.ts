import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://shashanx.in/sitemap.xml",
    host: "https://shashanx.in",
  };
}
