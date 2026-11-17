import Link from "next/link";

export default function StillHaveQuestion() {
  return (
    <section
      aria-labelledby="still-question-heading"
      className="relative isolate overflow-hidden bg-[#0a5cff] px-4 py-16 font-sans text-white sm:px-8 sm:py-20"
    >
      {/* soft glow behind the button */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_30%_45%_at_80%_50%,rgba(120,170,255,0.45),transparent_70%)]"
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2
            id="still-question-heading"
            className="font-wide font-bold leading-[0.95]"
          >
            <span className="block text-[clamp(1.9rem,8.5vw,5rem)]">STILL</span>
            <span className="block whitespace-nowrap text-[clamp(1.9rem,8.5vw,5rem)]">HAVE A</span>
            <span className="block text-[clamp(2.2rem,11vw,6.75rem)]">QUESTION?</span>
          </h2>
          <p className="mt-6 max-w-sm text-base leading-snug sm:text-lg">
            Join the newsletter and reply to any email. We read every message.
          </p>
        </div>

        <Link
          href="/#newsletter"
          className="self-start rounded-full bg-black px-8 py-3.5 text-[15px] font-medium shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:bg-neutral-900 lg:mr-[8%] lg:self-auto"
        >
          Get early access
        </Link>
      </div>
    </section>
  );
}
