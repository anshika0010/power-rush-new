import type { StaticImageData } from "next/image";
import lemon from "@/public/Images/lemon.png";
import lemonHero from "@/public/Images/product-deatil-lemon-hero.jpg";
import mangoHero from "@/public/Images/product-deatil-mango-hero.jpg";
import orangeHero from "@/public/Images/product-deatil-tangy-orange-hero.jpg";
import mango from "@/public/Images/mango.jpg";
import strawberryHero from "@/public/Images/product-deatil-strawberry-hero.jpg";
import strawberry from "@/public/Images/strawberry.jpg";
import tangyOrange from "@/public/Images/tangy-orange.jpg";

export type Flavour = {
  slug: string;
  name: string;
  fruit: string;
  description: string;
  image: StaticImageData;
  /** Wide 16:9 shot for the product detail hero. Falls back to `image`. */
  heroImage?: StaticImageData;
};

export const FLAVOURS: Flavour[] = [
  {
    slug: "mango",
    name: "Mango Rush",
    fruit: "mango",
    description: "Juicy, ripe and tropical. A sweet, smooth lift for a slow afternoon.",
    image: mango,
    heroImage: mangoHero,
  },
  {
    slug: "strawberry",
    name: "Strawberry Rush",
    fruit: "strawberry",
    description: "Bright, berry-sweet and easy to sip. A fresh pick-me-up any time of day.",
    image: strawberry,
    heroImage: strawberryHero,
  },
  {
    slug: "orange",
    name: "Orange Rush",
    fruit: "orange",
    description: "Tangy, zesty and full of citrus. A sharp kick for a busy morning.",
    image: tangyOrange,
    heroImage: orangeHero,
  },
  {
    slug: "lemon",
    name: "Lemon Rush",
    fruit: "lemon",
    description: "Crisp, clean and refreshing. A cool, sour-sweet boost to reset your day.",
    image: lemon,
    heroImage: lemonHero,
  },
];

export function getFlavour(slug: string) {
  return FLAVOURS.find((f) => f.slug === slug);
}

export type ProductDetail = { title: string; body: string | string[] };

/** Same formula in every flavour, so the detail copy is shared. */
export const PRODUCT_DETAILS: ProductDetail[] = [
  {
    title: "Description",
    body: "Power Rush is a performance drink mix combining Creatine Monohydrate, Caffeine, Taurine and B-Complex in a convenient single-serve sachet. Designed to support energy, focus and performance, so you can push harder and get more out of your day.",
  },
  {
    title: "Key benefits",
    body: [
      "125 mg caffeine per serving for a fixed, predictable boost.",
      "3 g creatine monohydrate and 500 mg taurine in every serving.",
      "B-Complex vitamins to round out the formula.",
      "No sugar. Sweetened with sucralose.",
    ],
  },
  {
    title: "Why choose Power Rush?",
    body: [
      "Quick and portable: no kettle, no queue, just add water.",
      "A light sachet that fits in any bag, for the office, study table or road.",
      "The same dose every time, printed on the pack.",
    ],
  },
  {
    title: "What to avoid",
    body: [
      "More than one serving a day.",
      "Having it close to bedtime.",
      "Use by children, pregnant or breastfeeding women, or people sensitive to caffeine.",
      "Relying on it to stay awake while driving. If you feel sleepy, stop and rest.",
    ],
  },
];
