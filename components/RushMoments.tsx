const MOMENTS = [
  {
    quote: "3 PM. Energy = 0%.",
    body: "The meeting ran long and the chai trolley is two floors away. Keep a sachet in your drawer and a glass of water on your desk.",
  },
  {
    quote: "The syllabus isn't finished. But your energy is.",
    body: "Late assignments and exam weeks call for focus that doesn't need a kettle or a trip to the canteen.",
  },
  {
    quote: "Your to-do list is still going. So are you.",
    body: "From the first email to the last call, a flavoured caffeine drink keeps the second half of the day moving.",
  },
  {
    quote: "Long road? Take your Rush with you.",
    body: "Trains, buses, flights and highways. A sachet weighs almost nothing and just needs a bottle of water.",
  },
  {
    quote: "Low battery? Time to Rush.",
    body: "Editing, streaming, gaming or coding. Reload without leaving your chair.",
  },
  {
    quote: "When your energy drops, Rush it.",
    body: "Some days just run long. Rush is there for the moments that don't have a name.",
  },
];

const wide = "font-wide uppercase";

export default function RushMoments() {
  return (
    <section
      id="rush-moments"
      aria-labelledby="rush-moments-heading"
      className="relative isolate overflow-hidden bg-black px-4 py-20 font-body text-white sm:px-8 sm:py-24"
    >
      {/* blue glow on the right */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_60%_at_95%_40%,rgba(16,110,220,0.55),transparent_70%)]"
      />

      <div className="mx-auto max-w-6xl">
        <h2
          id="rush-moments-heading"
          className={`${wide} font-bold text-[clamp(2.2rem,5.5vw,4.25rem)] leading-[1.02] text-rush-sky`}
        >
          When your
          <br />
          energy drops
          <br />
          Rush it
        </h2>
        <p className="mt-8 max-w-md text-base leading-relaxed sm:text-lg">
          Six everyday moments where tea, coffee or a cola can are the default. This is
          where Rush steps in.
        </p>

        <ol className="mt-14 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-16 lg:grid-cols-4">
          {MOMENTS.map((m, i) => (
            <li
              key={m.quote}
              className="group flex min-h-[9.5rem] flex-col border border-transparent bg-[#1a1a1a] p-5 transition duration-300 hover:-translate-y-1 hover:border-rush-sky/40 hover:bg-[#1e1f24]"
            >
              <span className={`${wide} text-sm font-medium text-white/50`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className={`${wide} mt-5 text-[15px] font-medium leading-tight text-white/85 transition-colors group-hover:text-white`}
              >
                &ldquo;{m.quote}&rdquo;
              </h3>
              <p className="mt-3 text-xs leading-snug text-white/55">{m.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
