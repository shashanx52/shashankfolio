import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";
import Motion from "./components/Motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE = "https://shashanx.in";
const DESCRIPTION =
  "Shashank Jha — Product Analyst at Times Internet (The Economic Times). Product and marketing analytics with BigQuery, SQL, Python, Google Ads and Meta Ads.";

export const metadata: Metadata = {
  /* Without metadataBase, every relative OG/canonical URL resolves against
     localhost in production and link previews break. */
  metadataBase: new URL(SITE),
  title: {
    default: "Shashank Jha — Product Analyst",
    template: "%s — Shashank Jha",
  },
  description: DESCRIPTION,
  applicationName: "Shashank Jha",
  authors: [{ name: "Shashank Jha", url: SITE }],
  creator: "Shashank Jha",
  keywords: [
    "Shashank Jha",
    "Product Analyst",
    "product analytics",
    "marketing analytics",
    "BigQuery",
    "SQL",
    "Looker",
    "Google Ads",
    "Meta Ads",
    "Times Internet",
    "The Economic Times",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Shashank Jha",
    title: "Shashank Jha — Product Analyst",
    description: DESCRIPTION,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashank Jha — Product Analyst",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/favicon/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/favicon/android-chrome-512x512.png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F1EA" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
};

/*
  Runs before first paint, so a dark-theme visitor never sees a flash of the
  warm paper background. It is also the single source of truth for which theme
  is active — BulbToggle reads the attribute this sets rather than keeping its
  own copy in state-on-mount.
*/
const themeScript = `
try {
  var t = localStorage.getItem('theme');
  if (t !== 'fantasy' && t !== 'night') {
    t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'fantasy';
  }
  document.documentElement.setAttribute('data-theme', t);
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Motion>
          <ScrollProgress />
          {children}
        </Motion>
      </body>
    </html>
  );
}
