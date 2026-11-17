const TIPS = [
  { title: "Serve it cold", body: "Use chilled water or pour over ice for a fresher taste." },
  {
    title: "Shake in a bottle",
    body: "A closed bottle dissolves the powder fastest. Seal it first, then shake.",
  },
  {
    title: "Keep a few handy",
    body: "One in your bag, one in your desk, one in your travel pouch. They are small and light.",
  },
  {
    title: "One sachet per serving",
    body: "Follow the serving guidance printed on the pack and do not mix more than one serving at a time.",
  },
];

const FACTS = [
  { label: "Format", value: "Single-serve powder sachet" },
  { label: "Core ingredient", value: "Caffeine" },
  { label: "Caffeine per sachet", value: "125 mg" },
  { label: "Flavours", value: "Mango, Lemon, Strawberry, Tangy Orange" },
];

export default function LittleTips() {
  return (
    <section
      aria-labelledby="little-tips-heading"
      className="bg-gray-200 px-4 py-20 font-body text-black sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="little-tips-heading"
          className="font-wide text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-rush-blue"
        >
          Little tips
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {TIPS.map((tip) => (
            <li
              key={tip.title}
              className="rounded-2xl border border-black/10 bg-white p-6 transition-colors hover:border-rush-blue/40"
            >
              <h3 className="font-wide text-lg font-bold text-rush-blue">{tip.title}</h3>
              <p className="mt-2 leading-relaxed text-black/75">{tip.body}</p>
            </li>
          ))}
        </ul>

        <dl className="mt-10 grid overflow-hidden rounded-2xl border border-black/10 bg-white sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((fact, i) => (
            <div
              key={fact.label}
              className={`p-5 ${i > 0 ? "border-t border-black/10" : ""} sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(even)]:border-l lg:border-t-0 lg:[&:not(:first-child)]:border-l`}
            >
              <dt className="font-wide text-xs font-bold uppercase tracking-[0.12em] text-rush-blue">
                {fact.label}
              </dt>
              <dd className="mt-2 font-semibold leading-relaxed">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <aside className="mt-8 rounded-2xl border-2 border-rush-blue bg-white p-6">
          <h3 className="font-wide text-lg font-bold text-rush-blue">Good to know</h3>
          <p className="mt-2 leading-relaxed text-black/75">
            Rush contains caffeine. It is not recommended for children, pregnant or
            breastfeeding women, or people who are sensitive to caffeine. If you are unsure,
            check with a doctor.
          </p>
        </aside>
      </div>
    </section>
  );
}
