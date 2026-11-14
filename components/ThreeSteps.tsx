import type { ReactNode } from "react";

const wide = "font-wide uppercase";

function SachetIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
      {/* torn-off strip */}
      <path d="M17 6 H47 V11 L41 13 L35 10 L29 13 L23 10 L17 12 Z" fill="#fff" transform="rotate(-8 32 10)" />
      {/* sachet body with jagged torn edge */}
      <path d="M16 20 L22 17 L28 20 L34 17 L40 20 L48 18 V58 H16 Z" fill="#fff" />
      <path d="M22 32 H42 M22 39 H36" stroke="#000" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function GlassIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
      <path d="M12 8 H52 L47 58 H17 Z" fill="#fff" />
      <path d="M17.5 13 H46.5 L44.8 30 H19.2 Z" fill="#000" />
      <path d="M40 4 L37 30" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
      <path d="M38 4 L14 36 H30 L24 60 L50 26 H34 Z" fill="#fff" />
    </svg>
  );
}

const STEPS: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Tear the sachet",
    body: "Open one Rush sachet at the notch. Keep it in your bag, desk or pocket until you need it.",
    icon: <SachetIcon />,
  },
  {
    title: "Pour into water",
    body: "Empty the sachet into a glass or bottle of water and stir or shake until it dissolves.",
    icon: <GlassIcon />,
  },
  {
    title: "Sip and go",
    body: "Drink it at your desk, on the bus or at the study table, and get back to your day.",
    icon: <BoltIcon />,
  },
];

/** `className` overrides the section background (defaults to black). */
export default function ThreeSteps({ className = "bg-black" }: { className?: string }) {
  return (
    <section
      id="steps"
      aria-labelledby="steps-heading"
      className={`${className} px-4 py-20 font-body text-white sm:px-8 sm:py-24`}
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className={`${wide} text-sm font-bold tracking-wide sm:text-base`}>How it works</p>
        <h2
          id="steps-heading"
          className={`${wide} mt-4 font-bold leading-[1.02] text-rush-sky`}
        >
          <span className="block text-[clamp(1.6rem,3.6vw,2.75rem)]">Three steps.</span>
          <span className="block text-[clamp(2rem,4.8vw,3.75rem)]">Under a minute.</span>
        </h2>

        <ol className="mt-16 grid gap-14 sm:grid-cols-3 sm:gap-8">
          {STEPS.map((s, i) => (
            <li key={s.title} className="group flex flex-col items-center">
              <div className="size-24 transition-transform duration-300 group-hover:-translate-y-1 sm:size-28">
                {s.icon}
              </div>
              <h3 className={`${wide} mt-10 text-base font-bold text-rush-sky sm:text-lg`}>
                <span className="sr-only">Step {i + 1}: </span>
                {s.title}
              </h3>
              <p className="mt-4 max-w-[16rem] text-sm leading-snug text-white/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
