"use client";

import Link from "next/link";
import { useState } from "react";

const CATEGORIES = ["All", "Office", "Study", "Travel", "Screen time", "Everyday"] as const;
type Category = (typeof CATEGORIES)[number];

/** Category filter + "coming soon" placeholder shown where article cards will go. */
export default function BlogComingSoon() {
  const [active, setActive] = useState<Category>("All");

  return (
    <section
      aria-labelledby="blog-coming-soon-heading"
      className="relative isolate overflow-hidden bg-gray-200 px-4 pt-10 pb-24 font-body text-white sm:px-8 sm:pb-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_50%_at_0%_45%,rgba(16,110,220,0.45),transparent_70%)]"
      />

      <div className="mx-auto max-w-6xl">
        {/* Filters */}
        <div
          role="group"
          aria-label="Filter articles by topic"
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {CATEGORIES.map((c) => {
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
                    : "border-rush-sky/70 text-white hover:bg-rush-sky/15"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Coming soon panel (in place of article cards) */}
        <div
          aria-live="polite"
          className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f14] px-6 py-16 text-center sm:mt-14 sm:py-24"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(30,164,255,0.18),transparent_70%)]"
          />
          <p className="font-wide text-xs font-bold uppercase tracking-[0.2em] text-rush-sky sm:text-sm">
            {active === "All" ? "Energy tips" : active}
          </p>
          <h2
            id="blog-coming-soon-heading"
            className="mt-4 font-wide text-[clamp(2.25rem,6vw,4.5rem)] font-bold uppercase leading-none"
          >
            Coming soon
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/75">
            {active === "All"
              ? "We're writing the first Rush reads right now. Join the newsletter and we'll let you know when they go live."
              : `${active} reads are on the way. Join the newsletter and we'll let you know when they go live.`}
          </p>
          <Link
            href="/#newsletter"
            className="mt-8 inline-block rounded-full bg-rush-sky px-7 py-3 text-[15px] font-medium text-white shadow-[0_10px_30px_rgba(30,164,255,0.35)] transition hover:-translate-y-0.5 hover:bg-[#3ab0ff]"
          >
            Notify me
          </Link>
        </div>
      </div>
    </section>
  );
}
