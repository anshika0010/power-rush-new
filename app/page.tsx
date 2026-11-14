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
        <Blog />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
