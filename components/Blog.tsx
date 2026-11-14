import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import heroImg from "@/public/Images/hero-img.jpg";
import mango from "@/public/Images/mango.jpg";
import rushpower from "@/public/Images/rushpower.jpg";
import tangyOrange from "@/public/Images/tangy-orange.jpg";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: StaticImageData;
  imageAlt: string;
};

// TODO: swap in real article photos/links once the blog exists.
const POSTS: Post[] = [
  {
    slug: "beat-the-3pm-slump",
    title: "How to beat the 3 PM slump at your desk",
    excerpt:
      "Simple habits for the hour when your focus fades, from water and light to a quick caffeine drink.",
    image: rushpower,
    imageAlt: "A glass of Power Rush Strawberry next to an open sachet",
  },
  {
    slug: "study-session-kit",
    title: "The study session kit: what to keep in your bag",
    excerpt:
      "A short list for long library days and exam weeks, built around portable and low-effort items.",
    image: heroImg,
    imageAlt: "Power Rush sachets in four flavours on blue steps",
  },
  {
    slug: "long-road-trip",
    title: "Long road trip? Pack your energy light",
    excerpt:
      "Ideas for staying alert on trains, buses and highways without carrying cans or a flask.",
    image: tangyOrange,
    imageAlt: "Power Rush Tangy Orange sachet with fresh oranges",
  },
  {
    slug: "beat-the-3pm-slump-mango",
    title: "How to beat the 3 PM slump at your desk",
    excerpt:
      "Simple habits for the hour when your focus fades, from water and light to a quick caffeine drink.",
    image: mango,
    imageAlt: "Power Rush Mango sachet with fresh mango",
  },
];

const wide = "font-wide uppercase";

export default function Blog() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="relative isolate overflow-hidden bg-black px-4 py-20 font-body text-white sm:px-8 sm:py-24"
    >
      {/* blue glow, top-left */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_55%_at_5%_0%,rgba(16,110,220,0.5),transparent_70%)]"
      />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="blog-heading"
            className={`${wide} text-[clamp(2.2rem,5.5vw,4.25rem)] font-bold leading-[1.02] text-rush-sky`}
          >
            Energy tips
            <br />
            for your day
          </h2>
          <Link
            href="/blog"
            className="self-start rounded-full border border-rush-sky/80 px-7 py-3 text-[15px] font-medium text-rush-sky transition hover:bg-rush-sky hover:text-white sm:mb-2 sm:self-auto"
          >
            View all articles
          </Link>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:mt-16 lg:grid-cols-4">
          {POSTS.map((p) => (
            <li key={p.slug}>
              <Link
                href="/blog"
                className="group flex h-full flex-col border-2 border-transparent p-1 outline-none transition-colors hover:border-[#1a7dff] focus-visible:border-[#1a7dff]"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-neutral-900">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1152px) 280px, (min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className={`${wide} mt-5 text-[15px] font-semibold leading-tight`}>
                  {p.title}
                </h3>
                <p className="mt-3 text-[13px] leading-snug text-white/60">{p.excerpt}</p>
                <span
                  className={`${wide} mt-auto pt-4 text-sm font-medium text-rush-sky underline-offset-4 group-hover:underline`}
                >
                  Read more…
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
