import { HOME_FAQS } from "@/lib/faqs";
import FaqAccordion from "./FaqAccordion";

/** FAQ block on the flavour detail page. */
export default function ProductFaq() {
  return (
    <section
      aria-labelledby="product-faq-heading"
      className="bg-black px-4 pt-16 pb-10 font-body text-white sm:px-8 sm:pt-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="product-faq-heading"
          className="font-wide text-base font-bold uppercase tracking-wide sm:text-lg"
        >
          FAQ
        </h2>
        <div className="mt-8">
          <FaqAccordion items={HOME_FAQS} defaultOpen={0} />
        </div>
      </div>
    </section>
  );
}
