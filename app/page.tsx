import type { Metadata } from "next";
import { Suspense } from "react";
import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import Flavours from "@/components/Flavours";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import RushMoments from "@/components/RushMoments";
import WhoItsFor from "@/components/WhoItsFor";
import WhyRush from "@/components/WhyRush";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: "Power Rush | Performance Drink Mix Sachets, Just Add Water",
  description:
    "The Rush Performance is a single-serve drink mix with 125 mg caffeine, 3 g creatine and 500 mg taurine. No sugar. Tear, pour, shake, go. Join the list for offers.",
  socialDescription:
    "Power Rush is a single-serve drink mix with 125 mg caffeine, 3 g creatine and 500 mg taurine. No sugar. Tear, pour, shake, go. Join the list for offers.",
});

export default function Home() {
  return (
    <>
      <main className="relative flex-1">
        <Navbar />
        <Hero />
        <WhyRush />
        <Flavours />
        <HowItWorks />
        <RushMoments />
        <WhoItsFor />
        <Suspense fallback={null}>
          <Blog />
        </Suspense>
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
