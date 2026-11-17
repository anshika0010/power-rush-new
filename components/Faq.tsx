import Link from "next/link";
import { HOME_FAQS } from "@/lib/faqs";
import FaqAccordion from "./FaqAccordion";

const wide = "font-wide uppercase";

/** Homepage FAQ teaser. The full list lives on /faq. */
export default function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative isolate overflow-hidden bg-gray-200 px-4 py-20 font-body text-white sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className={`${wide} text-lg font-bold text-black sm:text-xl`}>FAQ</p>
        <h2
          id="faq-heading"
          className={`${wide} mt-6 text-[clamp(2.2rem,5.5vw,4.25rem)] font-bold leading-[1.02] text-rush-sky`}
        >
          Frequently
          <br />
          asked questions
        </h2>

        <div className="mt-10 sm:mt-12">
          <FaqAccordion items={HOME_FAQS} defaultOpen={0} />
        </div>

        <Link
          href="/faq"
          className="mt-10 inline-block rounded-full border border-rush-sky/80 px-7 py-3 text-[15px] font-medium text-rush-sky transition hover:bg-rush-sky hover:text-white"
        >
          See all FAQs
        </Link>
      </div>
    </section>
  );
}
