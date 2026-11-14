"use client";

import { useId, useState, type FormEvent } from "react";

const label = "block font-wide text-[11px] font-medium uppercase tracking-wide text-white/90";
const field =
  "mt-2 w-full border-0 border-b border-white/40 bg-transparent px-0 py-2 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-rush-sky";

/** Two-column contact form. The middle grid column is left empty for the logo behind it. */
export default function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // TODO: send `data` to the contact inbox / API route before launch.
    void data;
    setStatus("sent");
    e.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Contact form"
      className="grid gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(140px,0.55fr)_minmax(0,1.1fr)]"
    >
      {/* Left column */}
      <div className="space-y-8">
        <div>
          <label htmlFor={`${id}-first`} className={label}>First name</label>
          <input id={`${id}-first`} name="firstName" required autoComplete="given-name" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-last`} className={label}>Last name</label>
          <input id={`${id}-last`} name="lastName" required autoComplete="family-name" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={label}>Email</label>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <label htmlFor={`${id}-consent`} className="flex cursor-pointer items-start gap-4 pt-2 text-xs leading-snug text-white/85">
          <input
            id={`${id}-consent`}
            name="consent"
            type="checkbox"
            required
            className="mt-0.5 size-3.5 shrink-0 cursor-pointer accent-rush-sky"
          />
          <span className="max-w-[12rem]">I give permission to contact me at this email address.</span>
        </label>
      </div>

      {/* Middle column intentionally empty (logo sits behind it) */}
      <div aria-hidden className="hidden lg:block" />

      {/* Right column */}
      <div className="flex flex-col">
        <label htmlFor={`${id}-message`} className={label}>Type your message here</label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={5}
          className={`${field} resize-none`}
        />

        <p className="mt-8 text-xs leading-snug text-white/75">
          For information on how to unsubscribe, please review our privacy policy.
        </p>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p role="status" className="text-sm text-rush-sky">
            {status === "sent" && "Thanks! We'll get back to you soon."}
          </p>
          <button
            type="submit"
            className="group inline-flex items-center gap-2 border border-rush-sky/70 px-3 py-1 font-wide text-xs font-medium uppercase tracking-wide text-rush-sky transition-colors hover:bg-rush-sky hover:text-white"
          >
            Send
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="size-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}
