/** Visible H1 + answer-first intro under the hero, for flavours with their own copy. */
export default function ProductIntro({ name, intro }: { name: string; intro: string }) {
  return (
    <section
      aria-labelledby="product-intro-heading"
      className="bg-white px-4 pt-14 pb-4 font-body text-gray-900 sm:px-8 sm:pt-20"
    >
      <div className="mx-auto max-w-3xl">
        <h1
          id="product-intro-heading"
          className="font-wide text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[1.02] text-rush-blue"
        >
          {name}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-gray-700 sm:text-lg">{intro}</p>
      </div>
    </section>
  );
}
