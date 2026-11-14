import { getImageProps } from "next/image";
import Link from "next/link";
import heroImg from "@/public/Images/hero-img.jpg";
import heroImgPhone from "@/public/Images/hero-img-phn.jpg";

const HERO_ALT = "Power Rush drink mix pouches in Strawberry, Mango, Lemon and Tangy Orange";

/*
 * Art-directed hero photo: phones get the tall shot, larger screens the wide one.
 * A single <picture> means each device downloads only the image it shows.
 */
function HeroPicture() {
  const common = { alt: HERO_ALT, sizes: "100vw", quality: 80 };
  const {
    props: { srcSet: wideSrcSet },
  } = getImageProps({ ...common, src: heroImg });
  const {
    props: { srcSet: tallSrcSet, ...rest },
  } = getImageProps({ ...common, src: heroImgPhone, priority: true });

  return (
    <div
      className={[
        "relative -z-10 w-full",
        // phones: tall shot sits in the flow; its dark top slides up under the copy
        "-mt-[70vw] aspect-[1580/3160]",
        // tablet: wide shot below the copy, cropped towards the pouches
        "sm:mt-10 sm:aspect-[4/3]",
        // desktop: full-bleed background behind the copy
        "lg:absolute lg:inset-0 lg:mt-0 lg:aspect-auto lg:h-full",
      ].join(" ")}
    >
      <picture>
        <source media="(min-width: 640px)" srcSet={wideSrcSet} />
        <source media="(max-width: 639px)" srcSet={tallSrcSet} />
        {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
        <img
          {...rest}
          className="absolute inset-0 h-full w-full object-cover object-bottom sm:object-[72%_center] lg:object-right"
        />
      </picture>
      {/* tablet: blend the photo's top into the section colour */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 hidden h-1/4 bg-gradient-to-b from-rush-deep to-transparent sm:block lg:hidden"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate w-full overflow-hidden bg-black sm:bg-rush-deep lg:flex lg:aspect-[16/9] lg:max-h-[1080px] lg:flex-col lg:justify-center"
    >
      <div className="mx-auto flex w-full max-w-[1740px] flex-col px-4 pt-32 sm:px-8 lg:pt-20">
        {/* Copy */}
        <div className="relative z-10 max-w-xl lg:max-w-[34%]">
          <h1 className="font-wide text-[clamp(1.9rem,2.8vw,3.1rem)] font-bold leading-[0.98] text-white">
            <span className="block whitespace-nowrap">CHAI SE AAGE</span>
            <span className="block whitespace-nowrap">RUSH SE SHURU</span>
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/85 sm:text-base">
            One sachet. One glass of water. Rush is a single-serve caffeine drink for the
            afternoon slump, the late-night syllabus and the long road. No kettle, no
            queue, no can.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#flavours"
              className="rounded-full bg-rush-sky px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_10px_30px_rgba(30,164,255,0.35)] transition hover:-translate-y-0.5 hover:bg-[#3ab0ff]"
            >
              Pick your flavour
            </Link>
            <Link
              href="#rush-moments"
              className="rounded-full border border-white/60 px-7 py-3.5 text-[15px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              See rush moments
            </Link>
          </div>
        </div>
      </div>

      <HeroPicture />
    </section>
  );
}
