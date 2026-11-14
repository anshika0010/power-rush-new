"use client";

import { useId, useState } from "react";

export type FaqItem = { q: string; a: string };

const wide = "font-wide uppercase";

/** Gradient-bar accordion. One item open at a time. */
export default function FaqAccordion({
  items,
  defaultOpen = null,
}: {
  items: FaqItem[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();
  const toggle = (i: number) => setOpen((cur) => (cur === i ? null : i));

  return (
    <ul className="space-y-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <li
            key={item.q}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 font-body text-white sm:gap-8"
          >
            {/* Gradient bar: question + answer */}
            <div className="bg-[linear-gradient(90deg,#08345f_0%,#0b72d6_30%,#08447f_60%,rgba(0,0,0,0)_100%)] lg:w-[78%]">
              <h3>
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                  className={`${wide} block w-full px-5 py-4 text-left text-xs font-medium tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-rush-sky sm:px-6 sm:text-[13px]`}
                >
                  {item.q}
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-3xl px-5 pb-4 text-[13px] leading-snug text-white/85 sm:px-6">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>

            {/* Square toggle (mouse shortcut; the question button is the accessible control) */}
            <button
              type="button"
              tabIndex={-1}
              aria-hidden
              onClick={() => toggle(i)}
              className="grid size-9 shrink-0 place-items-center bg-rush-sky text-white transition-colors hover:bg-[#3ab0ff] sm:size-10"
            >
              <svg
                viewBox="0 0 24 24"
                className={`size-6 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 4v16M4 12h16" />
              </svg>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
