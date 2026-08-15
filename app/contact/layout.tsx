import type { Metadata } from "next";

/* See app/projects/layout.tsx — the page itself is a client component. */
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Shashank Jha — open to product and marketing analytics roles, automation projects and hard data problems.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
