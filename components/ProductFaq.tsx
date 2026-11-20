import { HOME_FAQS } from "@/lib/faqs";
import FaqAccordion, { type FaqItem } from "./FaqAccordion";

/** FAQ block on the flavour detail page. */
export default function ProductFaq({
  title = "FAQ",
  items = HOME_FAQS,
}: {
  title?: string;
  items?: FaqItem[];
}) {
  return (
    <section
      aria-labelledby="product-faq-heading"
      className="bg-white px-4 pt-16 pb-10 font-body text-gray-900 sm:px-8 sm:pt-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="product-faq-heading"
          className="font-wide text-base font-bold uppercase tracking-wide sm:text-lg"
        >
          {title}
        </h2>
        <div className="mt-8">
          <FaqAccordion items={items} defaultOpen={0} light />
        </div>
      </div>
    </section>
  );
}
