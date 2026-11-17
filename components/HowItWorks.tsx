import Image from "next/image";
import rushpower from "@/public/Images/rushpower.webp";

const SPECS = [
  { label: "Format", value: "Single-serve powder sachet" },
  { label: "Preparation", value: "Mix with water" },
  { label: "Core ingredient", value: "Caffeine" },
  { label: "Caffeine per serving", value: "125 mg" },
];

/*
 * Step callouts. `top` places the text block on desktop (% of the photo).
 * The matching dot + arrow live in the SVG below, drawn in the photo's own
 * 1920×1080 pixel space so they stay pinned to the glass at any width.
 */
const STEPS = [
  {
    title: "Tear the sachet",
    body: "Open one Rush sachet at the notch. Keep it in your bag, desk or pocket until you need it.",
    top: "11%",
  },
  {
    title: "Pour into water",
    body: "Empty the sachet into a glass or bottle of water and stir or shake until it dissolves.",
    top: "49%",
  },
  {
    title: "Sip and go",
    body: "Drink it at your desk, on the bus or at the study table, and get back to your day.",
    top: "81%",
  },
];

const CONNECTORS = [
  { dot: [1013, 302], path: "M1013 302 H1340 L1378 268" },
  { dot: [975, 583], path: "M975 583 H1315" },
  { dot: [956, 880], path: "M956 880 H1292 L1322 904" },
];

const wide = "font-wide uppercase";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative isolate overflow-hidden bg-black py-16 font-body text-white sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        {/* Spec bar */}
        <dl className="grid grid-cols-2 gap-y-6 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-6 backdrop-blur lg:grid-cols-4 lg:gap-y-0 lg:px-0">
          {SPECS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center px-3 text-center ${
                i > 0 ? "lg:border-l lg:border-white/30" : ""
              } ${i % 2 === 1 ? "border-l border-white/30 lg:border-l" : ""}`}
            >
              <dt className="text-[15px] font-semibold sm:text-base">{s.label}</dt>
              <dd className="mt-1 text-xs text-white/75 sm:text-[13px]">{s.value}</dd>
            </div>
          ))}
        </dl>

        <p className={`${wide} mt-20 text-base font-bold tracking-wide sm:text-lg`}>How it works</p>
      </div>

      {/* Photo band with step callouts */}
      <div className="relative mx-auto mt-8 max-w-[1920px] lg:aspect-video">
        <h2
          id="how-it-works-heading"
          className={`${wide} relative z-10 px-4 text-[clamp(2rem,4.4vw,4.5rem)] font-semibold leading-[1.02] sm:px-8 lg:absolute lg:left-0 lg:top-[5%] lg:px-[2%] xl:left-[calc((100%-72rem)/2)] xl:px-8`}
        >
          Three steps
          <br />
          under a minute
        </h2>

        <div className="relative mt-8 aspect-video lg:absolute lg:inset-0 lg:mt-0 lg:aspect-auto">
          <Image
            src={rushpower}
            alt="A glass of Power Rush Strawberry drink next to a torn-open sachet"
            fill
            placeholder="blur"
            sizes="100vw"
            className="object-cover"
          />
          {/* fade the photo into the black section above/below */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,transparent_12%,transparent_85%,#000_100%)]"
          />

          {/* Dots + arrows (desktop) */}
          <svg
            aria-hidden
            viewBox="0 0 1920 1080"
            className="absolute inset-0 hidden h-full w-full lg:block"
          >
            <defs>
              <marker
                id="hiw-arrow"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M1 1 L9 5 L1 9" fill="none" stroke="#fff" strokeWidth="1.5" />
              </marker>
            </defs>
            {CONNECTORS.map((c) => (
              <g key={c.path}>
                <path
                  d={c.path}
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.5"
                  markerEnd="url(#hiw-arrow)"
                />
                <circle cx={c.dot[0]} cy={c.dot[1]} r="13" fill="#fff" />
              </g>
            ))}
          </svg>
        </div>

        <ol className="relative z-10 mt-10 grid gap-8 px-4 sm:grid-cols-3 sm:px-8 lg:absolute lg:inset-0 lg:mt-0 lg:block lg:px-0">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              style={{ top: s.top }}
              className="text-center sm:text-left lg:absolute lg:left-[70%] lg:w-[21%] lg:text-center"
            >
              <span className={`${wide} mb-2 block text-sm font-bold text-rush-sky lg:hidden`}>
                Step {i + 1}
              </span>
              <h3 className={`${wide} text-lg font-bold sm:text-xl lg:text-[clamp(1rem,1.45vw,1.75rem)]`}>
                {s.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-snug text-white/85 sm:mx-0 lg:mx-auto lg:text-[clamp(0.75rem,0.95vw,1.05rem)]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs leading-snug text-white/80 sm:px-8 sm:text-[13px] lg:mt-4">
        One sachet per serving. Always follow the serving guidance
        <br className="hidden sm:block" /> printed on the pack.
      </p>
    </section>
  );
}
