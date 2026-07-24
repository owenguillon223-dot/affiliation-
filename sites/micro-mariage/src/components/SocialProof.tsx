/** Testimonial grid with an intentional empty state until real reader quotes exist. */
export function SocialProof() {
  return (
    <section className="mt-20">
      <h2 className="font-display text-2xl font-semibold italic text-brand-900">
        What couples say
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 rounded-lg border border-brand-100 p-6 text-center"
          >
            <span aria-hidden="true" className="text-3xl leading-none text-brand-300">
              &ldquo;
            </span>
            <p className="text-sm text-brand-500">
              Couples' stories are on the way — check back soon.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
