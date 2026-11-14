import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import lemon from "@/public/Images/lemon.png";
import mango from "@/public/Images/mango.jpg";
import strawberry from "@/public/Images/strawberry.jpg";
import tangyOrange from "@/public/Images/tangy-orange.jpg";

// `slug` matches lib/flavours.ts, so each card opens /flavours/<slug>.
const FLAVOURS: { name: string; slug: string; image: StaticImageData }[] = [
  { name: "Tangy Orange", slug: "orange", image: tangyOrange },
  { name: "Lemon", slug: "lemon", image: lemon },
  { name: "Strawberry", slug: "strawberry", image: strawberry },
  { name: "Mango", slug: "mango", image: mango },
];

/*
 * Cards sit in a 4-col grid with a 2% gap, so each card is 23.5% wide and
 * its centre is at 11.75%, 37.25%, 62.75%, 88.25%. The strings use the same
 * numbers so the lines land exactly on each card's pin.
 */
const CARD_CENTRES = [11.75, 37.25, 62.75, 88.25];

const wide = "font-wide font-bold uppercase";

function Pin({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`block size-5 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ff8a8a_0%,#e81616_45%,#8a0000_100%)] shadow-[0_3px_6px_rgba(0,0,0,0.6)] ${className}`}
    />
  );
}

export default function Flavours() {
  return (
    <section
      id="flavours"
      aria-labelledby="flavours-heading"
      className="relative isolate overflow-hidden bg-black px-4 py-20 font-body text-white sm:px-8 sm:py-24"
    >
      {/* blue glows */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_55%_at_100%_10%,rgba(16,110,220,0.5),transparent_70%),radial-gradient(ellipse_40%_45%_at_0%_100%,rgba(16,110,220,0.4),transparent_70%)]"
      />

      <div className="mx-auto max-w-6xl">
        <h2
          id="flavours-heading"
          className={`${wide} text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] text-rush-sky`}
        >
          Pick a flavour,
          <br />
          tear, pour, go
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
          Every Rush flavour comes as a single-serve powder sachet. Mix it with water and
          drink it chilled or at room temperature.
        </p>

        {/* Card row bleeds wider than the heading on large screens for bigger cards */}
        <div className="relative mt-12 lg:mt-8 xl:-mx-12 2xl:-mx-24">
          {/* Strings from a central pin down to each card (desktop) */}
          <div aria-hidden className="relative hidden h-40 lg:block">
            <svg
              className="absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {CARD_CENTRES.map((x) => (
                <line
                  key={x}
                  x1="50"
                  y1="12"
                  x2={x}
                  y2="100"
                  stroke="rgba(255,255,255,0.55)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>
            <div className="absolute left-1/2 top-[12%] -translate-x-1/2 -translate-y-1/2">
              <Pin className="size-6" />
              <Pin className="absolute -right-2 -top-2 size-5" />
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4 lg:gap-x-[2%]">
            {FLAVOURS.map((f) => (
              <li key={f.name} className="group flex flex-col items-center">
                <Link
                  href={`/flavours/${f.slug}`}
                  aria-label={`View ${f.name} Rush`}
                  className="relative block w-full origin-top outline-none transition-transform duration-500 ease-out focus-visible:ring-2 focus-visible:ring-rush-sky motion-safe:group-hover:rotate-[1.5deg]"
                >
                  <Pin className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2" />
                  <div className="relative aspect-[1856/2304] w-full overflow-hidden bg-neutral-900 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                    <Image
                      src={f.image}
                      alt={`Power Rush ${f.name} drink mix sachet with fresh ${f.name.replace("Tangy ", "").toLowerCase()}`}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1536px) 316px, (min-width: 1280px) 295px, (min-width: 1024px) 23vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </Link>

                <Link
                  href="#newsletter"
                  aria-label={`Notify me when ${f.name} is available`}
                  className="mt-6 rounded-full bg-[#1a7dff] px-8 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(26,125,255,0.35)] transition hover:-translate-y-0.5 hover:bg-[#3a91ff] sm:px-10"
                >
                  Notify me
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
