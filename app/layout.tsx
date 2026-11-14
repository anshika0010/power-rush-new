import type { Metadata } from "next";
import { Archivo_Black, Geist, Geist_Mono, Lexend } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

// Heading font (from public/fonts). Only an upright Medium is available,
// so bold headings use the browser's synthesized bold, which matches the designs.
const tactic = localFont({
  src: "../public/fonts/tacticsansexd-med.otf",
  variable: "--font-tactic",
 
  display: "swap",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Power Rush — Your Everyday Performance",
  description:
    "One sachet. One glass of water. Rush is a single-serve caffeine drink mix.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${archivoBlack.variable} ${tactic.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
