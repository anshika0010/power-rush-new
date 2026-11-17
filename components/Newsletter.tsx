"use client";

import { useId, useState, type FormEvent } from "react";

const ROLES = [
  "Student",
  "Office professional",
  "Creator or gamer",
  "Traveller",
  "Young adult",
  "Night-shift worker",
  "Other",
];

export default function Newsletter() {
  const id = useId();
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // TODO: send `data` to the newsletter provider / API route.
    void data;
    setStatus("done");
    e.currentTarget.reset();
  }

  const field =
    "w-full rounded-md bg-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/70 outline-none transition focus:bg-white/20 focus:ring-2 focus:ring-white/70";
  const label = "mb-2 block text-[11px] font-medium uppercase tracking-wide";

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="bg-[#0a5cff] px-4 py-16 font-sans text-white sm:px-8 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="font-wide text-base font-bold tracking-wide sm:text-lg">NEWSLETTER</p>
          <h2
            id="newsletter-heading"
            className="mt-4 font-wide text-[clamp(2.1rem,11vw,5rem)] font-bold leading-[0.95] sm:text-[clamp(2.75rem,6vw,5rem)]"
          >
            <span className="block">START</span>
            <span className="block whitespace-nowrap">YOUR RUSH</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-snug sm:text-lg">
            Join the Rush community for launch news, new flavours and early offers. No
            spam, only the good stuff.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white/10 p-6 sm:p-8"
          aria-describedby={`${id}-status`}
        >
          <label htmlFor={`${id}-email`} className={label}>
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={field}
          />

          <label htmlFor={`${id}-role`} className={`${label} mt-6`}>
            I am a
          </label>
          <div className="relative">
            <select
              id={`${id}-role`}
              name="role"
              defaultValue={ROLES[0]}
              className={`${field} cursor-pointer appearance-none pr-10`}
            >
              {ROLES.map((r) => (
                <option key={r} value={r} className="bg-[#0a5cff]">
                  {r}
                </option>
              ))}
            </select>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-black py-4 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Join Rush
          </button>

          <p id={`${id}-status`} role="status" className="mt-4 min-h-5 text-center text-sm">
            {status === "done" && "You're in! Watch your inbox for Rush news."}
          </p>
        </form>
      </div>
    </section>
  );
}
