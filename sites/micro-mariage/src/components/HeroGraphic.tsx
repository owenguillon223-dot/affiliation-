/** Minimal arch-and-petals motif, pure SVG — no external image requests. */
export function HeroGraphic() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 300"
      className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-full max-w-2xl opacity-70"
    >
      <path
        d="M100,270 L100,150 A100,100 0 0 1 300,150 L300,270"
        stroke="#e0b6a9"
        strokeWidth="6"
        fill="none"
      />
      <circle cx="200" cy="70" r="7" fill="#c17f68" opacity="0.7" />
      <circle cx="165" cy="90" r="5" fill="#e0b6a9" opacity="0.7" />
      <circle cx="235" cy="90" r="5" fill="#e0b6a9" opacity="0.7" />
      <circle cx="140" cy="120" r="4" fill="#c17f68" opacity="0.5" />
      <circle cx="260" cy="120" r="4" fill="#c17f68" opacity="0.5" />
    </svg>
  );
}
