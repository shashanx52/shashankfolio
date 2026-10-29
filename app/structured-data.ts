/*
  Schema.org JSON-LD for the site.

  This is the only machine-readable description of who Shashank Jha is, so it
  is what Google, AI Overviews and answer engines (ChatGPT Search, Perplexity,
  Claude) resolve name and handle queries against. Everything here must be
  verifiable from the visible page content — nothing aspirational.

  One @graph with stable @id values rather than three loose blocks: the @ids
  let WebSite and ProfilePage point at the *same* Person node instead of
  declaring three unrelated people.
*/

export const SITE = "https://shashanx.in";

const PERSON_ID = `${SITE}/#person`;
const WEBSITE_ID = `${SITE}/#website`;

/* The handles are the whole point of alternateName: "shashanx" is the string
   people actually search, but it appears nowhere in prose — only inside URLs,
   where it is not a name signal. */
const PROFILES = [
  "https://www.linkedin.com/in/shashanx/",
  "https://github.com/shashanx52",
  "https://leetcode.com/u/shashanx/",
];

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Shashank Jha",
  alternateName: ["shashanx", "shashanx52", "Shashank"],
  description:
    "Shashank Jha is a Product Analyst at Times Internet (The Economic Times) in Noida, India, working on product and marketing analytics with BigQuery, SQL, Python, Google Ads and Meta Ads.",
  url: SITE,
  mainEntityOfPage: { "@id": WEBSITE_ID },
  image: { "@type": "ImageObject", url: `${SITE}/shashank.jpg`, width: 960, height: 1280 },
  jobTitle: "Product Analyst",
  email: "mailto:shashankjha.0052@gmail.com",
  worksFor: {
    "@type": "Organization",
    name: "Times Internet",
    alternateName: "The Economic Times",
    url: "https://timesinternet.in",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Bharati Vidyapeeth's College of Engineering, GGSIPU",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Product analytics",
    "Marketing analytics",
    "BigQuery",
    "SQL",
    "Python",
    "Google Ads",
    "Meta Ads",
    "ROAS analysis",
    "Data pipelines",
    "Marketing automation",
  ],
  sameAs: PROFILES,
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE,
  name: "Shashank Jha",
  description:
    "Portfolio of Shashank Jha — Product Analyst at Times Internet (The Economic Times).",
  inLanguage: "en-IN",
  publisher: { "@id": PERSON_ID },
};

/* ProfilePage (not WebPage) is the type Google documents for "this page is
   about one person", which is what a portfolio homepage is. */
const profilePage = {
  "@type": "ProfilePage",
  "@id": `${SITE}/#profilepage`,
  url: SITE,
  name: "Shashank Jha — Product Analyst",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": PERSON_ID },
  mainEntity: { "@id": PERSON_ID },
  inLanguage: "en-IN",
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [person, website, profilePage],
};
