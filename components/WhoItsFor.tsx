"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import creatorsImg from "@/public/Images/creator-and-gamer.webp";
import youngAdultsImg from "@/public/Images/image-1.webp";
import nightShiftImg from "@/public/Images/night-shift-worker.webp";
import officeImg from "@/public/Images/office-professional.webp";
import studentsImg from "@/public/Images/students.webp";
import travellerImg from "@/public/Images/traveller.webp";

type Audience = { title: string; body: string; image: StaticImageData; alt: string };

const AUDIENCES: Audience[] = [
  {
    title: "Students",
    body: "Study sessions, late assignments and exam preparation.",
    image: studentsImg,
    alt: "A student laughing on a sofa with a laptop and a stack of books",
  },
  {
    title: "Office professionals",
    body: "Afternoon fatigue and long working hours.",
    image: officeImg,
    alt: "An office professional at work",
  },
  {
    title: "Creators and gamers",
    body: "Long screen sessions that need steady attention.",
    image: creatorsImg,
    alt: "A creator and gamer at their screen setup",
  },
  {
    title: "Travellers",
    body: "Long journeys where convenience matters most.",
    image: travellerImg,
    alt: "A traveller on the move",
  },
  {
    title: "Young adults",
    body: "Busy, on-the-go routines with no time to stop.",
    image: youngAdultsImg,
    alt: "A Power Rush sachet tucked into a jeans pocket",
  },
  {
    title: "Night-shift workers",
    body: "Long shifts that run through the night.",
    image: nightShiftImg,
    alt: "A night-shift worker during a late shift",
  },
];

const wide = "font-wide uppercase";

export default function WhoItsFor() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="who-its-for"
      aria-labelledby="who-its-for-heading"
      className="relative isolate overflow-hidden bg-gray-200 px-4 py-20 font-body text-white sm:px-8 sm:py-24"
    >
      {/* blue glows: left edge and top-right corner */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_55%_at_0%_70%,rgba(16,110,220,0.5),transparent_70%),radial-gradient(ellipse_35%_35%_at_100%_0%,rgba(16,110,220,0.35),transparent_70%)]"
      />

      <div className="mx-auto max-w-6xl">
        <h2
          id="who-its-for-heading"
          className={`${wide} max-w-5xl text-[clamp(2.2rem,5.5vw,4.25rem)] font-bold leading-[1.02] text-rush-sky`}
        >
          Made for people who keep going
        </h2>
        <p className="mt-8 max-w-2xl text-base text-gray-800 leading-relaxed sm:text-lg">
          Rush is built for Gen Z and working youth between 18 and 30. If your day is full
          and your routine is on the move, this is for you.
        </p>

        <div className="mt-14 grid gap-12 sm:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start lg:gap-16">
          <ul className="divide-y divide-black/25">
            {AUDIENCES.map((a, i) => {
              const isActive = i === active;
              return (
                <li key={a.title} className="first:[&>button]:pt-0">
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group block w-full py-4 text-left outline-none sm:py-5"
                  >
                    <h3
                      className={`${wide} text-base font-medium tracking-wide transition-colors group-hover:text-rush-sky group-focus-visible:text-rush-sky sm:text-lg ${
                        isActive ? "text-rush-sky" : "text-gray-800"
                      }`}
                    >
                      {a.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-gray-800">{a.body}</p>
                  </button>

                  {/* Mobile/tablet: no hover, so the tapped row shows its image inline */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${
                      isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900 sm:aspect-[16/10]">
                        <Image
                          src={a.image}
                          alt={a.alt}
                          fill
                          placeholder="blur"
                          sizes="(min-width: 640px) 90vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Desktop: hovered row's image on the right, crossfading */}
          <div className="relative hidden aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_30px_60px_-20px_rgba(5,22,138,0.45)] lg:sticky lg:top-24 lg:block">
            {AUDIENCES.map((a, i) => (
              <Image
                key={a.title}
                src={a.image}
                alt={i === active ? a.alt : ""}
                aria-hidden={i !== active}
                fill
                placeholder="blur"
                sizes="(min-width: 1152px) 500px, 42vw"
                className={`object-cover transition-[opacity,transform] duration-500 ease-out ${
                  i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pt-16 pb-6"
            >
              <p className={`${wide} text-sm font-bold tracking-wide text-white`}>
                {AUDIENCES[active].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
