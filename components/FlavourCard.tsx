import Image from "next/image";
import Link from "next/link";
import type { Flavour } from "@/lib/flavours";

const wide = "font-wide uppercase";

/** Product card: photo, name and short description, linking to the flavour page. */
export default function FlavourCard({ flavour, sizes }: { flavour: Flavour; sizes: string }) {
  return (
    <Link
      href={`/flavours/${flavour.slug}`}
      className="group block outline-none focus-visible:ring-2 focus-visible:ring-rush-sky"
    >
      <div className="relative aspect-[1856/2304] w-full overflow-hidden bg-neutral-900 ring-1 ring-transparent transition group-hover:ring-rush-sky">
        <Image
          src={flavour.image}
          alt={`Power Rush ${flavour.name} drink mix sachet with fresh ${flavour.fruit}`}
          fill
          placeholder="blur"
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <h3 className={`${wide} mt-4 text-sm font-bold tracking-wide`}>{flavour.name}</h3>
      <p className="mt-2 max-w-[30ch] text-sm leading-snug text-white/70">{flavour.description}</p>
    </Link>
  );
}
