import type { Metadata } from "next";

export const SITE_URL = "https://www.therushperformance.com";
export const SITE_NAME = "The Rush Performance";

/** Logo served from /public, so the URL stays stable across builds. */
const SHARE_IMAGE = {
  url: "/Images/logo.webp",
  alt: "The Rush Performance blog – Energy and productivity tips",
};

export const SITE_KEYWORDS = [
  "energy tips",
  "everyday energy tips",
  "caffeine energy drink",
  "energy tips for work",
  "energy for studying",
  "energy drinks for travel",
  "caffeine tips",
  "daily energy solutions",
  "stay focused and energized",
  "energy and productivity",
  "caffeine guide",
  "Power Rush",
  "The Rush Performance blog",
];

type PageSeo = {
  /** Path from the site root, e.g. "/flavours/mango". Used for canonical + og:url. */
  path: string;
  title: string;
  description: string;
  /** og/twitter description when it differs from the meta description. */
  socialDescription?: string;
  /** og/twitter image override (absolute URL or path from site root). */
  image?: string;
  type?: "website" | "article";
};

/**
 * Full metadata for a page. Next.js replaces (not merges) a parent's
 * openGraph/twitter objects, so every page builds the complete set here.
 */
export function pageMetadata({
  path,
  title,
  description,
  socialDescription,
  image,
  type = "website",
}: PageSeo): Metadata {
  const social = socialDescription ?? description;
  // Absolute URL so the home page keeps its trailing slash.
  const url = `${SITE_URL}${path}`;
  const images = [image ? { url: image, alt: title } : SHARE_IMAGE];

  return {
    title,
    description,
    keywords: SITE_KEYWORDS,
    authors: [{ name: SITE_NAME }],
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type,
      locale: "en_US",
      siteName: SITE_NAME,
      url,
      title,
      description: social,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: social,
      images,
    },
    other: {
      bingbot: "index, follow",
      language: "English",
      "revisit-after": "7 days",
    },
  };
}

/** Per-flavour SEO copy, keyed by flavour slug. */
export const FLAVOUR_SEO: Record<string, { title: string; description: string }> = {
  mango: {
    title: "Mango Rush | Mango Performance Drink Mix | The Rush Performance",
    description:
      "Power Rush Mango is a smooth caffeine drink powder in a portable single serving sachet. 125 mg caffeine, mix with water. Join the list to order online and save.",
  },
  strawberry: {
    title: "Strawberry Rush | Berry Performance Drink Mix | The Rush Performance",
    description:
      "Power Rush Strawberry is a fruity caffeine drink powder in a portable single serving sachet. 125 mg caffeine, just add water. Get notified at launch to order online.",
  },
  orange: {
    title: "Orange Rush | Orange Performance Drink Mix | The Rush Performance",
    description:
      "Power Rush Tangy Orange: a portable caffeine drink in a single serving sachet with 125 mg caffeine. Mix with water and go. Get notified to order online.",
  },
  lemon: {
    title: "Lemon Rush | Lemon Performance Drink Mix | The Rush Performance",
    description:
      "Buy Power Rush Lemon caffeine drink powder online. A single serving sachet with 125 mg caffeine that mixes in water. Order now or join the list for early offers.",
  },
};
