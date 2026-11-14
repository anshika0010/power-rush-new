export type Flavour = "strawberry" | "mango" | "lemon" | "orange";

type FlavourStyle = {
  name: string;
  panel: string; // bottom panel colour
  ink: string; // text colour on the panel
  mark: string; // colour of the double-slash brand mark
};

export const FLAVOURS: Record<Flavour, FlavourStyle> = {
  strawberry: { name: "Strawberry", panel: "#f03a3a", ink: "#ffffff", mark: "#f03a3a" },
  mango: { name: "Mango", panel: "#ffc61a", ink: "#16257f", mark: "#ffc61a" },
  lemon: { name: "Lemon", panel: "#ffde26", ink: "#16257f", mark: "#ffde26" },
  orange: { name: "Tangy Orange", panel: "#ff7a1a", ink: "#16257f", mark: "#f03a3a" },
};

const longestWord = (s: string) => Math.max(...s.split(" ").map((w) => w.length));

/** Wedge segments for a citrus slice, in a 100×100 viewBox. */
function citrusWedges(count: number, inner: number, outer: number, gapDeg: number) {
  const step = 360 / count;
  const pt = (r: number, a: number) =>
    `${(50 + r * Math.cos(a)).toFixed(2)} ${(50 + r * Math.sin(a)).toFixed(2)}`;
  return Array.from({ length: count }, (_, i) => {
    const a1 = ((i * step + gapDeg / 2) * Math.PI) / 180;
    const a2 = (((i + 1) * step - gapDeg / 2) * Math.PI) / 180;
    return `M${pt(inner, (a1 + a2) / 2)} L${pt(outer, a1)} A${outer} ${outer} 0 0 1 ${pt(outer, a2)} Z`;
  });
}

function FruitArt({ flavour }: { flavour: Flavour }) {
  const common = {
    viewBox: "0 0 100 100",
    fill: "none",
    stroke: "#fff",
    strokeWidth: 3.5,
    strokeLinejoin: "round" as const,
    strokeLinecap: "round" as const,
    className: "h-full w-full",
    "aria-hidden": true,
  };

  if (flavour === "lemon" || flavour === "orange") {
    const wedges = citrusWedges(flavour === "lemon" ? 9 : 10, 5, 37, 9);
    return (
      <svg {...common}>
        <circle cx="50" cy="50" r="47" />
        {wedges.map((d) => (
          <path key={d} d={d} fill="#fff" stroke="none" />
        ))}
      </svg>
    );
  }

  if (flavour === "strawberry") {
    const seeds = [
      [36, 42], [50, 40], [64, 42], [30, 54], [44, 54], [58, 54], [70, 54],
      [38, 66], [52, 66], [64, 65], [45, 78], [57, 77],
    ];
    return (
      <svg {...common}>
        <path d="M50 94 C24 80 10 54 18 38 C25 25 40 26 50 31 C60 26 75 25 82 38 C90 54 76 80 50 94 Z" />
        <path d="M50 31 L38 20 L46 22 L44 10 L52 20 L62 11 L60 23 L70 21 Z" fill="#fff" />
        {seeds.map(([x, y]) => (
          <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="2" ry="3" fill="#fff" stroke="none" />
        ))}
      </svg>
    );
  }

  // mango
  return (
    <svg {...common}>
      <path d="M30 34 C52 14 90 30 86 62 C83 88 48 98 26 78 C10 63 14 46 30 34 Z" />
      <path d="M42 26 C38 18 40 12 44 8" />
      <path d="M44 22 C54 6 76 4 90 10 C78 22 60 28 44 22 Z" />
      <path d="M48 20 C60 15 72 12 84 11" />
      <path d="M40 74 C50 80 64 78 72 68" strokeWidth="2.5" />
    </svg>
  );
}

function BrandMark({ color, className = "" }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 60 20" className={className} aria-hidden>
      <path d="M10 1 H26 L18 19 H2 Z" fill={color} />
      <path d="M34 1 H50 L42 19 H26 Z" fill={color} />
    </svg>
  );
}

/**
 * Drawn product pouch. Scales with its container width (container query
 * units), so just set a width on the wrapper.
 */
export default function Pouch({ flavour }: { flavour: Flavour }) {
  const f = FLAVOURS[flavour];

  return (
    <div className="@container relative aspect-[0.64] w-full">
      <div
        className="absolute inset-0 overflow-hidden rounded-t-[5cqw] rounded-b-[3cqw] bg-rush-navy"
        role="img"
        aria-label={`Power Rush ${f.name} drink mix pouch`}
      >
        {/* heat-seal crimp at the top */}
        <div className="h-[4cqw] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.10)_0_1.5cqw,transparent_1.5cqw_3cqw)]" />

        {/* brand */}
        <div className="pt-[9cqw] text-center font-display text-[18cqw] leading-[0.82] text-white">
          POWER
          <br />
          RUSH
        </div>
        <p className="mt-[3cqw] text-center text-[4cqw] font-bold tracking-[0.14em] text-white">
          EVERYDAY PERFORMANCE
        </p>
        <BrandMark color={f.mark} className="mx-auto mt-[5cqw] w-[24cqw]" />

        {/* flavour panel */}
        <div
          className="absolute inset-x-0 bottom-0 h-[47%] overflow-hidden px-[8cqw] pt-[6cqw]"
          style={{ backgroundColor: f.panel, color: f.ink }}
        >
          <div className="absolute -right-[10cqw] top-[2cqw] w-[52cqw] opacity-95">
            <FruitArt flavour={flavour} />
          </div>

          <div className="relative">
            <p className="text-[4cqw] font-bold tracking-[0.08em]">DRINK MIX</p>
            <p
              className="mt-[1.5cqw] max-w-[62%] font-display uppercase leading-[0.92]"
              style={{ fontSize: longestWord(f.name) > 7 ? "8.5cqw" : "11cqw" }}
            >
              {f.name}
            </p>
            <div className="mt-[3cqw] h-[0.6cqw] w-[38cqw]" style={{ backgroundColor: f.ink }} />
            <p className="mt-[4cqw] font-display text-[10cqw] leading-none">5</p>
            <p className="text-[3.6cqw] font-bold tracking-[0.06em]">SERVINGS</p>
            <p className="mt-[3cqw] text-[2.6cqw] font-semibold leading-snug">
              PER SERVING: 3 g CREATINE · 125 mg CAFFEINE · 500 mg TAURINE · B-COMPLEX
            </p>
          </div>
        </div>

        {/* gloss */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,transparent_15%,rgba(255,255,255,0.16)_32%,transparent_45%,transparent_75%,rgba(0,0,0,0.18)_100%)]" />
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_0.6cqw_rgba(255,255,255,0.08),inset_0_-4cqw_6cqw_rgba(0,0,0,0.15)]" />
      </div>
    </div>
  );
}
