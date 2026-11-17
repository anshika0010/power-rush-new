const AUDIENCES = [
  { title: "Students", body: "Study sessions, late assignments and exam preparation." },
  { title: "Office professionals", body: "Afternoon fatigue and long working hours." },
  { title: "Creators and gamers", body: "Long screen sessions that need steady attention." },
  { title: "Travellers", body: "Long journeys where convenience matters most." },
  { title: "Young adults", body: "Busy, on-the-go routines with no time to stop." },
  { title: "Night-shift workers", body: "Long shifts that run through the night." },
];

const wide = "font-wide uppercase";

export default function WhoItsFor() {
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

        <ul className="mt-14 divide-y divide-black/25 sm:mt-16">
          {AUDIENCES.map((a) => (
            <li key={a.title} className="group py-4 first:pt-0 sm:py-5">
              <h3
                className={`${wide} text-base font-medium text-gray-800 tracking-wide transition-colors group-hover:text-rush-sky sm:text-lg`}
              >
                {a.title}
              </h3>
              <p className="mt-1.5 text-sm text-gray-800">{a.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
