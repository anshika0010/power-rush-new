import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import logo from "@/public/Images/logo.png";

export const metadata: Metadata = {
  title: "Contact us — Power Rush",
  description:
    "Have a question, need assistance, or want to know more about our products? Get in touch with the Rush team.",
};

export default function ContactPage() {
  return (
    <>
      <main className="relative flex-1 overflow-hidden bg-black font-body text-white">
        <Navbar />

        {/* Header */}
        <section className="px-4 pt-36 pb-48 text-center sm:px-8 sm:pt-40 lg:pb-56">
          <h1 className="font-wide text-[clamp(2.75rem,8vw,6rem)] font-bold uppercase leading-none text-rush-sky">
            Contact us
          </h1>
          <p className="mt-4 font-wide text-sm font-bold uppercase tracking-wide sm:text-base">
            We&rsquo;d love to hear from you!
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75">
            Have a question, need assistance, or want to know more about our products?
            We&rsquo;re here to help. Reach out to us and our team will get back to you as
            soon as possible.
          </p>
        </section>

        {/* Form panel with the sideways logo sliding behind it */}
        <section aria-label="Send us a message" className="relative isolate">
          {/* Sideways logo: top half sits above the panel, bottom half shows blurred through it */}
          <div
            aria-hidden
            className="absolute left-1/2 top-0 -z-10 h-[300px] w-[114px] -translate-x-1/2 -translate-y-[45%] lg:h-[440px] lg:w-[167px]"
          >
            <Image
              src={logo}
              alt=""
              sizes="440px"
              className="absolute left-1/2 top-1/2 w-[300px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90 lg:w-[440px]"
            />
          </div>

          <div className="bg-[linear-gradient(110deg,rgba(14,15,18,0.72)_0%,rgba(22,25,30,0.62)_45%,rgba(70,80,92,0.6)_100%)] px-4 py-14 backdrop-blur-md sm:px-8 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
