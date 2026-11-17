const wide = "font-wide uppercase";

/** Hero for the /flavours page. */
export default function FlavoursHero() {
  return (
    <section
      aria-labelledby="flavours-hero-heading"
      className="relative px-4 pt-36 pb-12  bg-black mb-6 text-center sm:px-8 sm:pt-40 sm:pb-16"
    >
      <h1
        id="flavours-hero-heading"
        className={`${wide} mx-auto max-w-4xl text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.02] text-rush-sky`}
      >
        A little boost for your everyday.
      </h1>

      <p className={`${wide} mt-8 text-[clamp(1.4rem,2.6vw,2rem)] leading-none text-white`}>
        Power Rush
      </p>

      <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-[15px]">
        Whether it&apos;s a busy morning, a long day at work or time for yourself, POWER RUSH
        is made to add a little extra to your everyday routine. Easy to enjoy, easy to carry
        and ready whenever you need a boost.
      </p>
    </section>
  );
}
