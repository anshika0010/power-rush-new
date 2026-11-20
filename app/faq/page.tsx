import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import { FAQ_GROUPS } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/faq",
  title: "The Rush Performance FAQ | Caffeine, Ingredients and How to Use It",
  description:
    "How much caffeine does Power Rush contain per serving? 125 mg. Read FAQs on ingredients, how adults should use it, safety and where to buy Power Rush online.",
});

const wide = "font-wide uppercase";

export default function FaqPage() {
  return (
    <>
      <main className="relative flex-1 bg-gray-400  font-body text-white">
        <Navbar />

        {/* Hero */}
        <section className="relative isolate bg-black overflow-hidden px-4 pt-36 pb-16 text-center sm:px-8 sm:pt-40 sm:pb-24">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_75%_at_5%_15%,rgba(16,110,220,0.6),transparent_70%)]"
          />
          <p
            aria-hidden
            className={`${wide} select-none bg-gradient-to-b from-[#1a8cff] from-20% to-transparent to-90% bg-clip-text text-[clamp(7rem,26vw,22rem)] font-extrabold leading-[0.8] text-transparent`}
          >
            FAQ
          </p>
          <h1
            className={`${wide} relative mx-auto -mt-[clamp(0.5rem,2vw,2rem)] max-w-4xl text-[clamp(2rem,5.5vw,4.25rem)] font-bold leading-[1.02] text-rush-sky`}
          >
            Frequently
            <br />
            asked questions
          </h1>
          <p className="relative mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Short, direct answers to the questions we get most often. If yours is not here,{" "}
            <Link
              href="/contact"
              className="text-rush-sky underline underline-offset-4 hover:text-white"
            >
              send us a message
            </Link>
            .
          </p>
        </section>

        {/* Groups */}
        <div className="mx-auto max-w-6xl space-y-16  px-4 pb-24 sm:px-8 sm:pb-28">
          {FAQ_GROUPS.map((group, gi) => (
            <section key={group.title} aria-labelledby={`faq-group-${gi}`}>
              <h2
                id={`faq-group-${gi}`}
                className={`${wide} mb-8 text-base font-bold tracking-wide sm:text-lg`}
              >
                {group.title}
              </h2>
              <FaqAccordion items={group.items} defaultOpen={gi === 0 ? 0 : null} />
            </section>
          ))}
        </div>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
