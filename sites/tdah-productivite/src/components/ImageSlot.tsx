import Image from "next/image";

type Ratio = "video" | "square" | "portrait";

const RATIO_CLASS: Record<Ratio, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

/** Fixed-ratio photo slot — renders a styled placeholder until a real src is supplied. */
export function ImageSlot({
  src,
  alt,
  caption,
  credit,
  ratio = "video",
  className = "",
}: {
  src?: string;
  alt: string;
  caption: string;
  credit?: string;
  ratio?: Ratio;
  className?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-lg ${RATIO_CLASS[ratio]} ${className}`}>
        <Image src={src} alt={alt} fill className="object-cover" />
        {credit ? (
          <span className="absolute bottom-1.5 right-2 rounded bg-black/40 px-1.5 py-0.5 text-[10px] leading-none text-white/80">
            {credit}
          </span>
        ) : null}
      </div>
    );
  }
  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-brand-50 px-6 text-center text-sm text-brand-500 ${RATIO_CLASS[ratio]} ${className}`}
    >
      {caption}
    </div>
  );
}
