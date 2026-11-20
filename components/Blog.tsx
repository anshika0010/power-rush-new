import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getBlogSummaries } from "@/lib/blogs";

const wide = "font-wide uppercase";

/** Home page "Energy tips" section: the latest four blogs from the API. */
export default async function Blog() {
  const posts = (await getBlogSummaries()).slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="relative isolate overflow-hidden bg-gray-200 px-4 py-20 font-body text-white sm:px-8 sm:py-24"
    >
      {/* blue glow, top-left */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_55%_at_5%_0%,rgba(16,110,220,0.5),transparent_70%)]"
      />

      <div className="mx-auto max-w-7xl">
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

        <ul className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p._id}>
              <BlogCard blog={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
