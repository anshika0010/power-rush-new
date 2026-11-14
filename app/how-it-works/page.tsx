import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StillHaveQuestion from "@/components/StillHaveQuestion";
import ThreeSteps from "@/components/ThreeSteps";
import howItWorksImg from "@/public/Images/how-it-works-img.png";

export const metadata: Metadata = {
  title: "How it works — Power Rush",
  description:
    "Tear. Pour. Mix. Go. Rush is a single-serve powder sachet. All you need is a glass or bottle of water.",
};

const wide = "font-wide uppercase";

export default function HowItWorksPage() {
  return (
    <>
      <main className="relative flex-1 bg-black font-body text-white">
        <Navbar />

        {/* Hero: photo behind copy on desktop, photo then copy on mobile */}
        <section
          aria-labelledby="hiw-hero-heading"
          className="relative isolate w-full overflow-hidden lg:flex lg:aspect-[16/9] lg:max-h-[1000px] lg:min-h-[600px] lg:items-center"
        >
          <div className="relative aspect-[4/5] sm:aspect-video lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
            <Image
              src={howItWorksImg}
              alt="A hand tearing open a Power Rush Orange sachet"
              fill
              priority
              placeholder="blur"
              sizes="100vw"
              className="object-cover object-[52%_center] lg:object-center"
            />
            {/* left-side darkening so the copy reads over the white jacket (desktop) */}
            <div
              aria-hidden
              className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.6)_25%,rgba(0,0,0,0.15)_42%,transparent_55%)] lg:block"
            />
            {/* top shade behind the navbar */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/70 to-transparent"
            />
            {/* fade into the black page */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-black"
            />
          </div>

          <div className="relative mx-auto w-full max-w-[1440px] px-4 pb-6 sm:px-8 lg:pt-16 lg:pb-0">
            <div className="-mt-10 lg:mt-0 lg:max-w-[36%]">
              <p className={`${wide} text-sm font-bold text-rush-sky sm:text-base`}>How it works</p>
              <h1
                id="hiw-hero-heading"
                className={`${wide} mt-4 text-[clamp(2.4rem,4.6vw,4.25rem)] font-bold leading-[0.98]`}
              >
                Tear. Pour.
                <br />
                Mix. Go.
              </h1>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-white/90 sm:text-lg">
                Rush is a single-serve powder sachet. All you need is a glass or bottle of
                water.
              </p>
            </div>
          </div>
        </section>

        <ThreeSteps />
        <StillHaveQuestion />
      </main>
      <Footer />
    </>
  );
}
