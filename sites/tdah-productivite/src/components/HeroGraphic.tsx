/** Soft overlapping-circle motif, pure SVG — no external image requests. */
export function HeroGraphic() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 320"
      className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-full max-w-2xl opacity-70"
    >
      <circle cx="130" cy="110" r="130" fill="#e6dff6" />
      <circle cx="280" cy="150" r="100" fill="#c9bdf0" opacity="0.65" />
      <circle cx="200" cy="250" r="120" fill="#b8a2e6" opacity="0.4" />
    </svg>
  );
}
