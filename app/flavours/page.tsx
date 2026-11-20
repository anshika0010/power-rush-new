import type { Metadata } from "next";
import FlavoursHero from "@/components/FlavoursHero";
import FlavoursProducts from "@/components/FlavoursProducts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/flavours",
  title: "Power Rush Flavours | Lemon, Orange, Strawberry, Mango Drink Mix",
  description:
    "Explore The Rush Performance flavours - lemon, orange, strawberry and mango caffeine drink powder in single serving sachets. Buy online or get notified when your flavour lands.",
  socialDescription:
    "Explore Power Rush flavours: lemon, orange, strawberry and mango caffeine drink powder in single serving sachets. Buy online or get notified when your flavour lands.",
});

export default function FlavoursPage() {
  return (
    <>
      <main className="relative flex-1 bg-black font-body text-white">
        <Navbar />

        {/* Dark charcoal backdrop with a soft lift in the middle, as in the design */}
        <div className="relative isolate overflow-hidden bg-gray-200">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_55%,rgba(255,255,255,0.06),transparent_70%)]"
          />
          <FlavoursHero />
          <FlavoursProducts />
        </div>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
