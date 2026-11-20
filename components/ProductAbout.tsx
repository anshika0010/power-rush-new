"use client";

import { useId, useState } from "react";
import type { ProductDetail } from "@/lib/flavours";

const wide = "font-wide uppercase";

/** Product info accordion (Description, Key benefits, …). One item open at a time. */
export default function ProductAbout({
  items,
  defaultOpen = 0,
}: {
  items: ProductDetail[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <section
      aria-label="About this product"
      className="relative isolate bg-gray-100 px-4 py-14 sm:px-8 sm:py-20"
    >
      <ul className="mx-auto max-w-3xl space-y-4 sm:space-y-6">
        {items.map((item, i) => {
          const isOpen = open === i;
          const btnId = `${baseId}-t${i}`;
          const panelId = `${baseId}-p${i}`;
          return (
            <li key={item.title}>
              <h2>
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen((cur) => (cur === i ? null : i))}
                  className="flex w-full items-center justify-between gap-6 py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-rush-blue"
                >
                  <span
                    className={`${wide} text-[15px] tracking-wide text-gray-900 sm:text-lg`}
                  >
                    {item.title}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden
                    className={`size-4 shrink-0 text-gray-900 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  >
                    <path d="M12 4v16M4 12h16" />
                  </svg>
                </button>
              </h2>

              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="max-w-2xl space-y-3 pt-2 pb-2 text-sm leading-relaxed text-gray-700 sm:text-[15px]">
                    {item.paragraphs?.map((para) => <p key={para}>{para}</p>)}

                    {item.bullets && (
                      <ul className="list-disc space-y-1.5 pl-5 marker:text-rush-blue">
                        {item.bullets.map((b) =>
                          typeof b === "string" ? (
                            <li key={b}>{b}</li>
                          ) : (
                            <li key={b.lead}>
                              <strong className="font-semibold text-gray-900">{b.lead}</strong>{" "}
                              {b.text}
                            </li>
                          ),
                        )}
                      </ul>
                    )}

                    {item.facts && (
                      <table className="w-full max-w-lg border-collapse text-left">
                        <caption className="sr-only">{item.title}</caption>
                        <tbody>
                          {item.facts.map(([label, value]) => (
                            <tr key={label} className="border-b border-gray-300 last:border-0">
                              <th
                                scope="row"
                                className="py-2 pr-6 align-top font-semibold text-gray-900"
                              >
                                {label}
                              </th>
                              <td className="py-2">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
