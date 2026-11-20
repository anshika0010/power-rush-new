import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import BlogList, { BlogListSkeleton } from "@/components/BlogList";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import { getBlogSummaries } from "@/lib/blogs";
import blogHeroImg from "@/public/Images/blog-hero-img.webp";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/blog",
  title: "Energy Tips for Work, Study & Travel | The Rush Performance",
  description:
    "Explore practical energy tips for work, study, travel and screen time. Discover everyday caffeine insights and stay switched on with Power Rush.",
});

async function Articles() {
  return <BlogList blogs={await getBlogSummaries()} />;
}

export default function BlogPage() {
  return (
    <>
      <main className="relative flex-1 bg-black font-body text-white">
        <Navbar />

        {/* Hero: photo behind copy on desktop, photo then copy on mobile */}
        <section
          aria-labelledby="blog-hero-heading"
          className="relative isolate w-full overflow-hidden lg:flex lg:aspect-[1920/911] lg:max-h-[900px] lg:min-h-[560px] lg:items-center"
        >
          <div className="relative aspect-[4/3] sm:aspect-video lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
            <Image
              src={blogHeroImg}
              alt="A hand holding a Power Rush Orange sachet at a desk with a computer and keyboard"
              fill
              priority
              placeholder="blur"
              sizes="100vw"
              className="object-cover object-[35%_center] lg:object-center"
            />
            {/* right-side darkening so the copy reads over the bright desk (desktop) */}
            <div
              aria-hidden
              className="absolute inset-0 hidden bg-[linear-gradient(270deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.55)_28%,rgba(0,0,0,0.12)_48%,transparent_60%)] lg:block"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/70 to-transparent"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-black"
            />
          </div>

          <div className="relative mx-auto w-full max-w-[1440px] px-4 pb-4 sm:px-8 lg:flex lg:justify-end lg:pt-16 lg:pb-0">
            <div className="-mt-8 lg:mt-0 lg:max-w-[46%] lg:text-right">
              <p className="font-wide text-sm font-bold uppercase text-rush-sky sm:text-base">Blog</p>
              <h1
                id="blog-hero-heading"
                className="mt-3 font-wide text-[clamp(2.4rem,4.6vw,4.25rem)] font-bold uppercase leading-[0.98]"
              >
                Energy tips
                <br />
                for your day
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/90 sm:text-lg lg:ml-auto">
                Practical reads on staying switched on at work, at the study table, on the
                road and on the screen.
              </p>
            </div>
          </div>
        </section>

        <Suspense fallback={<BlogListSkeleton />}>
          <Articles />
        </Suspense>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
