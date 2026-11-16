const REASONS = [
  {
    title: "Convenience",
    body: "A single-serve sachet that fits in a pocket, a laptop bag or a glovebox. Nothing to measure, nothing to wash.",
  },
  {
    title: "Flavour",
    body: "Multiple flavours, built to taste like a treat and not like a chore. Pick the one that matches your mood.",
  },
  {
    title: "Caffeine",
    body: "Everyday caffeinated energy for the moments your attention drops, in a portable format you can use anywhere.",
  },
];

/** Expanded, bold display style used for headings and numerals. */
const wide = "font-wide font-bold uppercase";

export default function WhyRush() {
  return (
    <section
      id="why-rush"
      aria-labelledby="why-rush-heading"
      className="relative isolate overflow-hidden bg-white px-4 py-20 font-body text-black sm:px-8 sm:py-28"
    >
      {/* blue glows */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_70%_at_0%_35%,rgba(13, 87, 172, 0.12),transparent_70%),radial-gradient(ellipse_35%_40%_at_100%_100%,rgba(16,110,220,0.08),transparent_70%)]"
      />

      <div className="mx-auto max-w-6xl text-center">
        <p className={`${wide} text-sm tracking-wide sm:text-base`}>Why Rush</p>

        <h2
          id="why-rush-heading"
          className={`${wide} mx-auto mt-10 max-w-5xl text-[clamp(1.8rem,4.2vw,3.4rem)] leading-[1.05] text-[#0b5ed7]`}
        >
          Energy for everyday moments, not workouts
        </h2>

        <p className="mx-auto mt-12 max-w-4xl text-base leading-relaxed sm:text-lg">
          Rush is made for people aged 18 to 30 who are busy, on the move and tired of the
          same three options. Chai takes a break. Coffee takes a queue. A cola can takes a
          fridge. A Rush sachet takes a pocket and a glass of water.
        </p>

        <ol className="mt-16 grid gap-14 sm:mt-20 md:grid-cols-3 md:gap-10">
          {REASONS.map((r, i) => (
            <li key={r.title} className="group flex flex-col items-center">
              <span
                aria-hidden
                className={`${wide} bg-gradient-to-b from-[#0b5ed7] from-25% to-transparent to-85% bg-clip-text text-[clamp(6.5rem,12vw,10rem)] font-extrabold leading-none text-transparent transition-transform duration-300 group-hover:-translate-y-1`}
              >
                {i + 1}
              </span>
              <h3
                className={`${wide} mt-8 text-lg tracking-wide text-rush-sky underline-offset-4 group-hover:underline sm:text-xl`}
              >
                {r.title}
              </h3>
              <p className="mt-5 max-w-[17rem] text-sm leading-snug text-black/75">
                {r.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
