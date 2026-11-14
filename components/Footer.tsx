import Link from "next/link";
import { Logo } from "./Navbar";

const COLUMNS = [
  {
    title: "LINKS",
    links: [
      { label: "Flavours", href: "/flavours" },
      { label: "How it works", href: "/how-it-works" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Rush",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Newsletter", href: "/#newsletter" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black px-4 pt-14 pb-6 font-sans text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-[1.5fr_1fr_1fr_0.5fr]">
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-8 text-base font-medium uppercase tracking-wide">
              Chai se aage. Rush se shuru.
            </p>
            <p className="mt-4 max-w-xs text-[15px] leading-snug text-white/90">
              Single-serve caffeine drink sachets for everyday moments.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title} className="sm:text-center">
              <h2 className="font-wide text-base font-medium uppercase tracking-wide">{col.title}</h2>
              <ul className="mt-6 space-y-4">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[15px] text-white/90 transition-colors hover:text-rush-sky"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-white/30 pt-4 text-[11px] leading-relaxed text-white/60">
          <p>
            Contains caffeine. Not recommended for children, pregnant or breastfeeding women,
            or people sensitive to caffeine. Do not exceed the serving on the pack.
          </p>
          <p>© 2026 The Rush Performance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
