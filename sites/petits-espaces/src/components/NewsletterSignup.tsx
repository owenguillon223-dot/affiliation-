/** Brevo email capture form, embedded at the bottom of every blog article. */
export function NewsletterSignup() {
  return (
    <div className="mt-12 rounded-lg border border-brand-100 p-6 text-center">
      <h2 className="font-display text-xl font-bold text-brand-900">
        Get renter-friendly storage ideas
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-brand-700">
        No-drill storage hacks, small-space tricks, and moving checklists for renters —
        straight to your inbox.
      </p>
      <iframe
        width="540"
        height="305"
        src="https://df00323d.sibforms.com/v2/serve/MUIFAOBXcg4i8Yp2Gda4gQI-as4lXWwkcJlxz4fyVfVhy_liv2G0rOOwagYEmiKnivffkBnr8XGbkNhFFFtY2xuOltL_XlOwUSS0niSEqZSAFNicLQskCEWSPFFod0qMoSH_US8EM-3OtDtN69R9pA0fB7T0PmRPAIxMKdctLkMHi_gLuQ7IHdpBzz4CDkFDuapwHvJqJsB_ekcIgA=="
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        className="mx-auto mt-4 block max-w-full"
      />
    </div>
  );
}
