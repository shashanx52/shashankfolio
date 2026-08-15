/** @type {import('next').NextConfig} */

/*
  There used to be a next.config.ts alongside this file that assigned
  module.exports three separate times and then also `export default`. Whichever
  of the two Next picked, most of the intended settings were being thrown away —
  including the remote image host below. One config, one export.
*/
const nextConfig = {
  reactStrictMode: true,

  /* Lint runs as its own CI job (.github/workflows/ci.yml) so a warning cannot
     silently fail a Netlify deploy, but it is no longer ignored altogether. */
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.simpleicons.org' },
      /* Project cards render each repo's GitHub social preview. */
      { protocol: 'https', hostname: 'opengraph.githubassets.com' },
    ],
  },

  /* Ship only the icons actually imported instead of the whole lucide set. */
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  /* Set here rather than in a netlify.toml so they survive a host change and
     apply to server-rendered routes too. HSTS is deliberately absent — Netlify
     already sends it, and two copies of that header is worse than one.
     No CSP yet: the pre-paint theme script in app/layout.tsx is inline, and a
     statically exported page cannot carry a per-request nonce. */
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      /* /home served a duplicate of the home page (see app/home/Sections.tsx).
         Permanent so search engines collapse it into /. */
      { source: '/home', destination: '/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
