"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard";
import type { Blog } from "@/lib/blog-utils";

const ALL = "All";

/** Category filter + article grid for /blog. Categories come from the blogs themselves. */
export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const [active, setActive] = useState<string>(ALL);

  const categories = useMemo(() => {
    const names = new Set<string>();
    for (const b of blogs) if (b.categoryId?.name) names.add(b.categoryId.name);
    return [ALL, ...names];
  }, [blogs]);

  const visible =
    active === ALL ? blogs : blogs.filter((b) => b.categoryId?.name === active);

  return (
    <section
      aria-labelledby="blog-list-heading"
      className="relative isolate overflow-hidden bg-gray-200 px-4 pt-10 pb-24 font-body text-white sm:px-8 sm:pb-28"
    >
      <h2 id="blog-list-heading" className="sr-only">
        Articles
      </h2>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_50%_at_0%_45%,rgba(16,110,220,0.45),transparent_70%)]"
      />

      <div className="mx-auto max-w-6xl">
        {categories.length > 2 && (
          <div
            role="group"
            aria-label="Filter articles by topic"
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {categories.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-4 py-1.5 font-wide text-[11px] font-bold uppercase tracking-wide transition-colors sm:px-5 sm:text-xs ${
                    isActive
                      ? "border-rush-sky bg-rush-sky text-white"
                      : "border-rush-sky/70 text-gray-800 hover:bg-rush-sky/15"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        )}

        {visible.length > 0 ? (
          <ul
            aria-live="polite"
            className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((b) => (
              <li key={b._id}>
                <BlogCard blog={b} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f14] px-6 py-16 text-center sm:mt-14 sm:py-24">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(30,164,255,0.18),transparent_70%)]"
            />
            <p className="font-wide text-xs font-bold uppercase tracking-[0.2em] text-rush-sky sm:text-sm">
              {active === ALL ? "Energy tips" : active}
            </p>
            <p className="mt-4 font-wide text-[clamp(2.25rem,6vw,4.5rem)] font-bold uppercase leading-none">
              Coming soon
            </p>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/75">
              We&apos;re writing new Rush reads right now. Join the newsletter and we&apos;ll
              let you know when they go live.
            </p>
            <Link
              href="/#newsletter"
              className="mt-8 inline-block rounded-full bg-rush-sky px-7 py-3 text-[15px] font-medium text-white shadow-[0_10px_30px_rgba(30,164,255,0.35)] transition hover:-translate-y-0.5 hover:bg-[#3ab0ff]"
            >
              Notify me
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function BlogListSkeleton() {
  return (
    <section className="bg-gray-200 px-4 pt-10 pb-24 sm:px-8 sm:pb-28">
      <ul className="mx-auto mt-12 grid max-w-6xl gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }, (_, i) => (
          <li key={i} className="animate-pulse p-1">
            <div className="aspect-[16/10] rounded-lg bg-gray-300" />
            <div className="mt-5 h-4 w-3/4 rounded bg-gray-300" />
            <div className="mt-3 h-3 w-full rounded bg-gray-300" />
            <div className="mt-2 h-3 w-2/3 rounded bg-gray-300" />
          </li>
        ))}
      </ul>
    </section>
  );
}
