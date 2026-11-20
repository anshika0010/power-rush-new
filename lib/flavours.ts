import type { StaticImageData } from "next/image";
import lemon from "@/public/Images/lemon.webp";
import lemonHero from "@/public/Images/product-deatil-lemon-hero.webp";
import mangoHero from "@/public/Images/product-deatil-mango-hero.webp";
import orangeHero from "@/public/Images/product-deatil-tangy-orange-hero.webp";
import mango from "@/public/Images/mango.webp";
import strawberryHero from "@/public/Images/product-deatil-strawberry-hero.webp";
import strawberry from "@/public/Images/strawberry.webp";
import tangyOrange from "@/public/Images/tangy-orange.webp";
import type { FaqItem } from "@/components/FaqAccordion";
import {
  LEMON_CONTENT,
  MANGO_CONTENT,
  ORANGE_CONTENT,
  STRAWBERRY_CONTENT,
} from "@/lib/flavour-content";

export type Flavour = {
  slug: string;
  name: string;
  fruit: string;
  description: string;
  image: StaticImageData;
  /** Wide 16:9 shot for the product detail hero. Falls back to `image`. */
  heroImage?: StaticImageData;
  /** Flavour-specific page copy. Flavours without it use the shared copy. */
  content?: FlavourContent;
};

export type FlavourContent = {
  /** Answer-first intro shown under the hero, with the visible H1. */
  intro: string;
  details: ProductDetail[];
  faqTitle: string;
  faqs: FaqItem[];
};

export const FLAVOURS: Flavour[] = [
  {
    slug: "mango",
    name: "Mango Rush",
    fruit: "mango",
    description: "Juicy, ripe and tropical. A sweet, smooth lift for a slow afternoon.",
    image: mango,
    heroImage: mangoHero,
    content: MANGO_CONTENT,
  },
  {
    slug: "strawberry",
    name: "Strawberry Rush",
    fruit: "strawberry",
    description: "Bright, berry-sweet and easy to sip. A fresh pick-me-up any time of day.",
    image: strawberry,
    heroImage: strawberryHero,
    content: STRAWBERRY_CONTENT,
  },
  {
    slug: "orange",
    name: "Orange Rush",
    fruit: "orange",
    description: "Tangy, zesty and full of citrus. A sharp kick for a busy morning.",
    image: tangyOrange,
    heroImage: orangeHero,
    content: ORANGE_CONTENT,
  },
  {
    slug: "lemon",
    name: "Lemon Rush",
    fruit: "lemon",
    description: "Crisp, clean and refreshing. A cool, sour-sweet boost to reset your day.",
    image: lemon,
    heroImage: lemonHero,
    content: LEMON_CONTENT,
  },
];

export function getFlavour(slug: string) {
  return FLAVOURS.find((f) => f.slug === slug);
}

export type ProductBullet = string | { lead: string; text: string };

/** One accordion section on the flavour page. Any combination of the parts is allowed. */
export type ProductDetail = {
  title: string;
  paragraphs?: string[];
  bullets?: ProductBullet[];
  /** Two-column label/value table. */
  facts?: [label: string, value: string][];
};

/** Shared copy for flavours that don't have their own `content` yet. */
export const PRODUCT_DETAILS: ProductDetail[] = [
  {
    title: "Description",
    paragraphs: [
      "Power Rush is a performance drink mix combining Creatine Monohydrate, Caffeine, Taurine and B-Complex in a convenient single-serve sachet. Designed to support energy, focus and performance, so you can push harder and get more out of your day.",
    ],
  },
  {
    title: "Key benefits",
    bullets: [
      "125 mg caffeine per serving for a fixed, predictable boost.",
      "3 g creatine monohydrate and 500 mg taurine in every serving.",
      "B-Complex vitamins to round out the formula.",
      "No sugar. Sweetened with sucralose.",
    ],
  },
  {
    title: "Why choose Power Rush?",
    bullets: [
      "Quick and portable: no kettle, no queue, just add water.",
      "A light sachet that fits in any bag, for the office, study table or road.",
      "The same dose every time, printed on the pack.",
    ],
  },
  {
    title: "What to avoid",
    bullets: [
      "More than one serving a day.",
      "Having it close to bedtime.",
      "Use by children, pregnant or breastfeeding women, or people sensitive to caffeine.",
      "Relying on it to stay awake while driving. If you feel sleepy, stop and rest.",
    ],
  },
];
