"use client";

import { getImageProps } from "next/image";
import Link from "next/link";
import heroImg from "@/public/Images/hero-image.webp";
import heroImgPhone from "@/public/Images/hero-img-phn.webp";
import { useEffect, useRef, useState } from "react";
import { FLAVOURS, type Flavour } from "@/components/Pouch";

type Phase = "idle" | "charging" | "done";

const MOMENTS = [
  {
    label: "3 PM slump",
    scene: "3:00 PM, your desk",
    empty: "3 PM. Energy = 0%.",
    full: "3 PM? Sorted. Back in the meeting like it's 10 AM.",
  },
  {
    label: "Study session",
    scene: "11:40 PM, study table",
    empty: "Chapter 7 of 12. Energy = 0%.",
    full: "Syllabus, bring it on. Five more chapters, easy.",
  },
  {
    label: "Long workday",
    scene: "7:30 PM, still at work",
    empty: "Hour 10. Energy = 0%.",
    full: "Second wind unlocked. Inbox, you're next.",
  },
  {
    label: "Travel",
    scene: "5:00 AM, highway dhaba",
    empty: "Kilometre 340. Energy = 0%.",
    full: "Road ready. Windows down, playlist up.",
  },
  {
    label: "Screen time",
    scene: "1:00 AM, tab no. 23",
    empty: "One more episode. Energy = 0%.",
    full: "Eyes open, brain on. Ship it tonight.",
  },
];

const STEPS = ["Tearing the sachet…", "Pouring into water…", "Stir, stir, stir…", "Kicking in…"];
const FLAVOUR_ORDER: Flavour[] = ["mango", "orange", "strawberry", "lemon"];
const CHARGE_MS = 2200;

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/*
 * Background photo, art-directed: phones get the tall shot, larger screens the
 * wide one (one <picture>, so each device downloads only what it shows).
 * A blur + dark overlay sits on top so the copy and card stay readable.
 */
function HeroBackground() {
  const common = {
    alt: "",
    sizes: "100vw",
    quality: 80,
    priority: true,
  };
  const { props: wide } = getImageProps({ ...common, src: heroImg });
  const {
    props: { srcSet: tallSrcSet, ...rest },
  } = getImageProps({ ...common, src: heroImgPhone });
  // srcSet is undefined when images are served unoptimised; fall back to the URL.
  const wideSrcSet = wide.srcSet ?? wide.src;
  const tallSet = tallSrcSet ?? rest.src;

  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <picture>
        <source media="(min-width: 640px)" srcSet={wideSrcSet} />
        <source media="(max-width: 639px)" srcSet={tallSet} />
        {/* eslint-disable-next-line jsx-a11y/alt-text -- decorative, alt="" */}
        <img {...rest} className="absolute inset-0 h-full w-full object-cover object-center lg:object-right" />
      </picture>
      {/* blur + darken */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[3px]" />
      {/* extra shade behind the headline side */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 lg:bg-gradient-to-r lg:from-black/70 lg:via-black/35 lg:to-black/10" />
    </div>
  );
}

export default function Hero() {
  const [moment, setMoment] = useState(0);
  const [flavour, setFlavour] = useState<Flavour>("mango");
  const [phase, setPhase] = useState<Phase>("idle");
  const [charge, setCharge] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => () => {
    if (raf.current) cancelAnimationFrame(raf.current);
  }, []);

  const reset = () => {
    if (raf.current) cancelAnimationFrame(raf.current);
    setPhase("idle");
    setCharge(0);
  };

  const rush = () => {
    if (phase === "charging") return;
    if (phase === "done") return reset();
    setPhase("charging");
    let start: number | null = null;
    const tick = (now: number) => {
      start ??= now;
      const t = Math.min((now - start) / CHARGE_MS, 1);
      setCharge(Math.round(easeOut(t) * 100));
      if (t < 1) raf.current = requestAnimationFrame(tick);
      else setPhase("done");
    };
    raf.current = requestAnimationFrame(tick);
  };

  const pickMoment = (i: number) => {
    setMoment(i);
    reset();
  };

  const m = MOMENTS[moment];
  const f = FLAVOURS[flavour];
  const charging = phase === "charging";
  const done = phase === "done";
  const status = charging
    ? STEPS[Math.min(Math.floor(charge / 25), STEPS.length - 1)]
    : done
      ? m.full
      : m.empty;

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-rush-deep font-body text-white"
    >
      <HeroBackground />
      <div
        aria-hidden
        className="absolute -right-32 -top-20 -z-10 size-[460px] rounded-full opacity-30 blur-[120px] transition-colors duration-700"
        style={{ backgroundColor: done ? f.panel : "#1ea4ff" }}
      />

      <div className="mx-auto grid max-w-[1740px] gap-14 px-4 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16 lg:pb-28 lg:pt-40">
        {/* Copy */}
        <div>
          <p className="font-wide text-[11px] font-bold uppercase tracking-[0.16em] text-white/75 sm:text-xs">
            Caffeine drink sachet · Mix with water
          </p>
          <h1 className="mt-4 font-wide text-[clamp(1.3rem,2.6vw,2.6rem)] font-bold leading-[1.02] tracking-tight">
            <span className="block sm:whitespace-nowrap">Upgrade yourself</span>
            <span
              className="block bg-clip-text text-transparent sm:whitespace-nowrap"
              style={{
                backgroundImage: `linear-gradient(90deg, #ffd21f ${charge}%, #ffffff ${charge}%)`,
              }}
            >
             From Coffee.
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg lg:mt-14">
            One sachet. One glass of water. Rush is a single-serve caffeine drink for the
            afternoon slump, the late-night syllabus and the long road. No kettle, no queue,
            no can.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="#flavours"
              className="rounded-full bg-rush-yellow px-7 py-3.5 text-[15px] font-semibold text-[#15123d] shadow-[0_10px_30px_rgba(255,210,31,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ffdc4d]"
            >
              Pick your flavour
            </Link>
            <Link
              href="#rush-moments"
              className="rounded-full border-2 border-white/80 px-7 py-3 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              See Rush moments
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Pick your moment">
            {MOMENTS.map((item, i) => (
              <button
                key={item.label}
                type="button"
                onClick={() => pickMoment(i)}
                aria-pressed={i === moment}
                className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition ${
                  i === moment
                    ? "border-white bg-white text-[#2f27c8]"
                    : "border-white/50 text-white hover:border-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive energy card */}
        <div className="relative mx-auto w-full max-w-[490px] lg:mx-0 lg:justify-self-end">
          <div
            className={`relative rounded-[28px] bg-[#1f1d47] p-6 shadow-[0_30px_80px_rgba(10,6,60,0.55)] transition-shadow duration-700 sm:p-8 ${
              done ? "ring-2 ring-white/20" : ""
            }`}
            style={done ? { boxShadow: `0 30px 90px ${f.panel}55` } : undefined}
          >
            <div className="flex items-end justify-between gap-4">
              <p className="pb-2 font-wide text-[11px] font-bold uppercase tracking-[0.14em] text-white/70 sm:text-xs">
                {m.scene}
              </p>
              <p
                className="font-wide text-5xl font-bold leading-none tabular-nums sm:text-6xl"
                aria-hidden
              >
                {charge}%
              </p>
            </div>

            {/* battery */}
            <div className="mt-6 flex items-center gap-1.5">
              <div
                className="relative h-16 flex-1 rounded-2xl border-[3px] border-white/90 p-1.5 sm:h-[72px]"
                role="progressbar"
                aria-label="Energy"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={charge}
              >
                <div
                  className="relative h-full overflow-hidden rounded-[10px]"
                  style={{
                    width: `${charge}%`,
                    backgroundColor: f.panel,
                    boxShadow: charge > 0 ? `0 0 24px ${f.panel}aa` : undefined,
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent motion-safe:animate-[rush-shine_1.4s_ease-in-out_infinite]"
                  />
                </div>
                {done && (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden
                    className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2 motion-safe:animate-[rush-pop_0.5s_ease-out_both]"
                    style={{ fill: f.ink }}
                  >
                    <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
                  </svg>
                )}
              </div>
              <div
                className="h-6 w-2 rounded-r-md transition-colors duration-500"
                style={{ backgroundColor: done ? f.panel : "rgba(255,255,255,0.9)" }}
              />
            </div>

            <p className="mt-5 min-h-[3rem] text-[15px] text-white/75" aria-live="polite">
              {status}
            </p>

            {/* flavour picker */}
            <div className="mt-2 flex items-center gap-3">
              <span className="text-xs text-white/60">Flavour</span>
              <div className="flex gap-2" role="group" aria-label="Pick a flavour">
                {FLAVOUR_ORDER.map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFlavour(key)}
                    aria-pressed={key === flavour}
                    aria-label={FLAVOURS[key].name}
                    title={FLAVOURS[key].name}
                    className={`size-6 rounded-full transition hover:scale-110 ${
                      key === flavour ? "ring-2 ring-white ring-offset-2 ring-offset-[#1f1d47]" : ""
                    }`}
                    style={{ backgroundColor: FLAVOURS[key].panel }}
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-white/85">{f.name}</span>
            </div>

            <button
              type="button"
              onClick={rush}
              disabled={charging}
              className="mt-6 w-full rounded-full py-3.5 text-[15px] font-semibold text-[#15123d] transition hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-wait disabled:opacity-80 disabled:hover:translate-y-0"
              style={done ? { backgroundColor: f.panel, color: f.ink } : { backgroundColor: "#968cff" }}
            >
              {charging ? "Rushing…" : done ? "Run it back ↺" : "Rush it"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
