import Image from "next/image";
import type { Flavour } from "@/lib/flavours";

/** Full-bleed product shot at the top of a flavour detail page. */
export default function ProductHero({ flavour }: { flavour: Flavour }) {
  const image = flavour.heroImage ?? flavour.image;

  return (
    <section
      aria-labelledby={flavour.content ? undefined : "product-hero-heading"}
      aria-label={flavour.content ? `${flavour.name} product photo` : undefined}
      className="relative isolate overflow-hidden bg-black pt-20 sm:pt-0"
    >
      {/* Flavours with an intro show a visible H1 in <ProductIntro> instead. */}
      {!flavour.content && (
        <h1 id="product-hero-heading" className="sr-only">
          {flavour.name}
        </h1>
      )}

      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:max-h-[900px]">
        <Image
          src={image}
          alt={`Power Rush ${flavour.name} drink mix sachet with fresh ${flavour.fruit}`}
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* top shade so the navbar reads over the photo */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent"
        />
      </div>
    </section>
  );
}

/** Same footprint as the hero, so nothing jumps when it streams in. */
export function ProductHeroSkeleton() {
  return (
    <div
      aria-hidden
      className="mt-20 aspect-[4/3] w-full animate-pulse sm:mt-0 bg-[linear-gradient(180deg,#0a1a3d_0%,#1c3266_60%,#2b4a85_100%)] sm:aspect-[16/9] lg:max-h-[900px]"
    />
  );
}
