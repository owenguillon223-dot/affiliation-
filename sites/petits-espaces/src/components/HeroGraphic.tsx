/** Stacked-cube storage motif, pure SVG — no external image requests. */
export function HeroGraphic() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 300"
      className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-full max-w-2xl opacity-70"
    >
      <rect x="40" y="40" width="110" height="90" fill="#e9e5da" />
      <rect x="170" y="90" width="90" height="140" fill="#c9bfa3" opacity="0.6" />
      <rect x="270" y="50" width="100" height="90" fill="#e9e5da" opacity="0.8" />
      <rect x="60" y="160" width="80" height="70" fill="#c9bfa3" opacity="0.5" />
    </svg>
  );
}
