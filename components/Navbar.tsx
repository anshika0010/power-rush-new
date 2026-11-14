"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/Images/logo.png";

const NAV_LINKS = [
  { label: "Flavours", href: "/flavours" },
  { label: "How it works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Logo() {
  return (
    <Link href="/" className="inline-block shrink-0">
      <Image
        src={logo}
        alt="Power Rush — Your Everyday Performance"
        priority
        sizes="160px"
        className="h-auto w-[150px] sm:w-[175px]"
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-[1740px] items-center justify-between gap-6 px-4 py-5 sm:px-8">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1.5 backdrop-blur-md lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-full px-4 py-2 text-[13px] text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#newsletter"
          className="hidden rounded-full border border-white/10 bg-white/[0.06] px-9 py-3.5 text-[13px] text-white/90 backdrop-blur-md transition-colors hover:bg-white/15 lg:inline-block"
        >
          Newsletter
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md lg:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 rounded bg-white transition-all ${
                open ? "top-[5px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 rounded bg-white transition-all ${
                open ? "top-[5px] -rotate-45" : "top-2.5"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`mx-4 overflow-hidden rounded-3xl border border-white/10 bg-rush-deep/90 backdrop-blur-xl transition-all duration-300 sm:mx-8 lg:hidden ${
          open ? "max-h-[480px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-[15px] text-white/90 hover:bg-white/10"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Link
              href="/#newsletter"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-white/10 px-4 py-3 text-center text-[15px] hover:bg-white/15"
            >
              Newsletter
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
