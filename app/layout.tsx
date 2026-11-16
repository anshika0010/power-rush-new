import type { Metadata } from "next";
import { Archivo_Black, Geist, Geist_Mono, Lexend } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
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
  // Search engine / site ownership verification tags
  verification: {
    google: "g1gWWjPZaSoYPz2Ces8g60TyxT4Mid3xYALIXyYngJw",
    yandex: "10b8e297eebb5ccd",
    other: {
      "msvalidate.01": "8F066BCCD6CEA1B6489C7F5A52B9AA8C",
      "p:domain_verify": "81692373126fd627ec642c3ac957674f",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${archivoBlack.variable} ${tactic.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}

        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-522ZLQCC"
          strategy="afterInteractive"
        />
        <Script id="gtm-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
      </body>
    </html>
  );
}
