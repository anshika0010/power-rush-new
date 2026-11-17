import { FLAVOURS } from "@/lib/flavours";
import FlavourCard from "./FlavourCard";

/** The other flavours, shown under a flavour's detail page. */
export default function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const related = FLAVOURS.filter((f) => f.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section
      aria-labelledby="related-heading"
      className="bg-white px-4 pt-10 pb-24 font-body text-gray-900 sm:px-8 sm:pb-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="related-heading"
          className="font-wide text-base font-bold uppercase tracking-wide sm:text-lg"
        >
          Related product
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-x-4 gap-y-10 min-[480px]:grid-cols-2 sm:mt-12 lg:grid-cols-3 lg:gap-x-6">
          {related.map((f) => (
            <li key={f.slug}>
              <FlavourCard
                flavour={f}
                sizes="(min-width: 1152px) 370px, (min-width: 1024px) 32vw, (min-width: 480px) 50vw, 100vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Placeholder with the same layout as the related products grid. */
export function RelatedProductsSkeleton() {
  return (
    <div aria-hidden className="bg-white px-4 pt-10 pb-24 sm:px-8 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="h-5 w-48 bg-black/10" />
        <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-10 min-[480px]:grid-cols-2 sm:mt-12 lg:grid-cols-3 lg:gap-x-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-[1856/2304] w-full bg-black/[0.06]" />
              <div className="mt-4 h-4 w-32 bg-black/10" />
              <div className="mt-3 h-3 w-56 max-w-full bg-black/[0.07]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
