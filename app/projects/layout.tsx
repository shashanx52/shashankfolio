import type { Metadata } from "next";

/*
  page.tsx is a client component, and a client component cannot export
  metadata — so the route's <title> and description live here instead. Without
  this, every page on the site shared the home page's title.
*/
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Shashank Jha — AI and ML platforms, automation pipelines, dashboards and web apps built with Python, n8n, BigQuery and TypeScript.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
