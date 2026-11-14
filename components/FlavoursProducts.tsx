"use client";

import { useMemo, useState } from "react";
import { FLAVOURS } from "@/lib/flavours";
import FlavourCard from "./FlavourCard";

const wide = "font-wide uppercase";

/** Searchable, filterable product grid for the /flavours page. */
export default function FlavoursProducts() {
  const [query, setQuery] = useState("");
  const [flavour, setFlavour] = useState("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FLAVOURS.filter(
      (f) =>
        (flavour === "all" || f.slug === flavour) &&
        (!q || f.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q)),
    );
  }, [query, flavour]);

  return (
    <section
      aria-labelledby="flavours-products-heading"
      className="mx-auto max-w-[1440px] px-4 pb-24 sm:px-8 sm:pb-28"
    >
      <h2 id="flavours-products-heading" className="sr-only">
        All flavours
      </h2>

      {/* Search + filter */}
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
        <label className="relative flex-1">
          <span className="sr-only">Search flavours</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className={`${wide} h-11 w-full rounded-sm bg-white/[0.07] pr-12 pl-6 text-xs tracking-wide text-white placeholder:text-white/80 outline-none transition focus:bg-white/10 focus:ring-1 focus:ring-rush-sky`}
          />
          <SearchIcon className="pointer-events-none absolute top-1/2 right-5 size-4 -translate-y-1/2 text-white/80" />
        </label>

        <label className="relative sm:w-[32%] sm:max-w-[300px]">
          <span className="sr-only">Filter by flavour</span>
          <select
            value={flavour}
            onChange={(e) => setFlavour(e.target.value)}
            className={`${wide} h-11 w-full cursor-pointer appearance-none rounded-sm bg-white/[0.12] pr-12 pl-4 text-xs tracking-wide text-white outline-none transition focus:ring-1 focus:ring-rush-sky`}
          >
            <option value="all" className="bg-neutral-900">
              Flavours
            </option>
            {FLAVOURS.map((f) => (
              <option key={f.slug} value={f.slug} className="bg-neutral-900">
                {f.name}
              </option>
            ))}
          </select>
          <ChevronIcon className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-white" />
        </label>
      </div>

      {/* Grid */}
      {results.length > 0 ? (
        <ul className="mt-12 grid grid-cols-1 gap-x-4 gap-y-10 min-[480px]:grid-cols-2 sm:mt-16 lg:grid-cols-4">
          {results.map((f) => (
            <li key={f.slug}>
              <FlavourCard
                flavour={f}
                sizes="(min-width: 1440px) 340px, (min-width: 1024px) 24vw, (min-width: 480px) 50vw, 100vw"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-16 text-center text-white/70" role="status">
          No flavours match &ldquo;{query}&rdquo;.
        </p>
      )}
    </section>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden className={className}>
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
