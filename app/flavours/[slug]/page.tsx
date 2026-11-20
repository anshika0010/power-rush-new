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
import ProductIntro from "@/components/ProductIntro";
import RelatedProducts, { RelatedProductsSkeleton } from "@/components/RelatedProducts";
import ThreeSteps from "@/components/ThreeSteps";
import { FLAVOUR_SEO, pageMetadata } from "@/lib/seo";
import { FLAVOURS, PRODUCT_DETAILS, getFlavour } from "@/lib/flavours";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return FLAVOURS.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const flavour = getFlavour((await params).slug);
  if (!flavour) return {};
  const seo = FLAVOUR_SEO[flavour.slug];
  return pageMetadata({
    path: `/flavours/${flavour.slug}`,
    title: seo?.title ?? `${flavour.name} | The Rush Performance`,
    description: seo?.description ?? flavour.description,
  });
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

/** Flavour-specific intro (visible H1) and accordion copy, or the shared copy. */
async function About({ params }: Props) {
  const flavour = await resolveFlavour(params);
  const c = flavour.content;
  return (
    <>
      {c && <ProductIntro name={flavour.name} intro={c.intro} />}
      <ProductAbout items={c?.details ?? PRODUCT_DETAILS} />
    </>
  );
}

async function Faq({ params }: Props) {
  const c = (await resolveFlavour(params)).content;
  return c ? <ProductFaq title={c.faqTitle} items={c.faqs} /> : <ProductFaq />;
}

async function Related({ params }: Props) {
  return <RelatedProducts currentSlug={(await resolveFlavour(params)).slug} />;
}

export default function FlavourDetailPage({ params }: Props) {
  return (
    <>
      <main className="relative flex-1 bg-white font-body text-gray-900">
        <Navbar />
        <Suspense fallback={<ProductHeroSkeleton />}>
          <Hero params={params} />
        </Suspense>
        <Suspense fallback={<div className="min-h-[420px] bg-gray-100" />}>
          <About params={params} />
        </Suspense>
        <ProductGallery />
        <ThreeSteps light />
        <Suspense fallback={null}>
          <Faq params={params} />
        </Suspense>
        <Suspense fallback={<RelatedProductsSkeleton />}>
          <Related params={params} />
        </Suspense>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
