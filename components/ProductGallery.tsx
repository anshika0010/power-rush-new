import Image from "next/image";
import pocketShot from "@/public/Images/image-1.png";
import booksShot from "@/public/Images/image-2.jpg";

const SHOTS = [
  {
    src: pocketShot,
    alt: "A Power Rush sachet tucked into the front pocket of someone's jeans",
  },
  {
    src: booksShot,
    alt: "A Power Rush sachet resting on a stack of books on a wooden side table",
  },
];

/** Two square lifestyle shots, edge to edge, on the flavour detail page. */
export default function ProductGallery() {
  return (
    <section aria-label="Power Rush on the go" className="grid grid-cols-1 sm:grid-cols-2">
      {SHOTS.map((shot) => (
        <div key={shot.alt} className="relative aspect-square overflow-hidden">
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            placeholder="blur"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
          />
        </div>
      ))}
    </section>
  );
}
