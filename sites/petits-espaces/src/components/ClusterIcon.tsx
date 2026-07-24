export type ClusterIconLayout = "a" | "b" | "c";

type Shape = "circle" | "diamond" | "rect";
type Tone = "mid" | "dark";

const CONFIG: Record<ClusterIconLayout, Array<{ shape: Shape; tone: Tone; className: string }>> = {
  a: [
    { shape: "circle", tone: "mid", className: "h-7 w-7 top-2 left-2" },
    { shape: "diamond", tone: "dark", className: "h-5 w-5 bottom-2 right-2" },
  ],
  b: [
    { shape: "rect", tone: "mid", className: "h-6 w-8 top-3 left-2" },
    { shape: "circle", tone: "dark", className: "h-5 w-5 bottom-2 right-3" },
  ],
  c: [
    { shape: "diamond", tone: "mid", className: "h-7 w-7 top-2 right-3" },
    { shape: "rect", tone: "dark", className: "h-5 w-7 bottom-3 left-2" },
  ],
};

function shapeClass(shape: Shape) {
  if (shape === "circle") return "rounded-full";
  if (shape === "diamond") return "rotate-45";
  return "rounded-sm";
}

function toneClass(tone: Tone) {
  return tone === "mid" ? "bg-brand-600" : "bg-brand-900";
}

/** Cluster icon: two overlapping geometric shapes on a light tile — no icon library needed. */
export function ClusterIcon({
  layout,
  className = "",
}: {
  layout: ClusterIconLayout;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-14 w-14 shrink-0 rounded-md bg-brand-100 ${className}`}
    >
      {CONFIG[layout].map((s, i) => (
        <span
          key={i}
          className={`absolute ${s.className} ${shapeClass(s.shape)} ${toneClass(s.tone)}`}
        />
      ))}
    </div>
  );
}
