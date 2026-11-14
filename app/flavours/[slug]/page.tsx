import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import ProductGallery from "@/components/ProductGallery";
import ProductAbout from "@/components/ProductAbout";
import ProductFaq from "@/components/ProductFaq";
import ProductHero, { ProductHeroSkeleton } from "@/components/ProductHero";
import RelatedProducts, { RelatedProductsSkeleton } from "@/components/RelatedProducts";
import ThreeSteps from "@/components/ThreeSteps";
import { FLAVOURS, PRODUCT_DETAILS, getFlavour } from "@/lib/flavours";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return FLAVOURS.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const flavour = getFlavour((await params).slug);
  if (!flavour) return {};
  return {
    title: `${flavour.name} — Power Rush`,
    description: flavour.description,
  };
}

/*
 * With partialPrefetching on, the shared App Shell can't depend on `params`.
 * Everything that's the same for every flavour renders in the shell; only the
 * hero and related products read the slug, each behind its own <Suspense>.
 */
async function resolveFlavour(params: Props["params"]) {
  const flavour = getFlavour((await params).slug);
  if (!flavour) notFound();
  return flavour;
}

async function Hero({ params }: Props) {
  return <ProductHero flavour={await resolveFlavour(params)} />;
}

async function Related({ params }: Props) {
  return <RelatedProducts currentSlug={(await resolveFlavour(params)).slug} />;
}

export default function FlavourDetailPage({ params }: Props) {
  return (
    <>
      <main className="relative flex-1 bg-black font-body text-white">
        <Navbar />
        <Suspense fallback={<ProductHeroSkeleton />}>
          <Hero params={params} />
        </Suspense>
        <ProductAbout items={PRODUCT_DETAILS} />
        <ProductGallery />
        <ThreeSteps className="bg-[linear-gradient(100deg,#000_0%,#0b0c0e_35%,#2a2d31_75%,#3a3e43_100%)]" />
        <ProductFaq />
        <Suspense fallback={<RelatedProductsSkeleton />}>
          <Related params={params} />
        </Suspense>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
