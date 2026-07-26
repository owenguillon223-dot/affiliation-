/** Brevo email capture form, embedded at the bottom of every blog article. */
export function NewsletterSignup() {
  return (
    <div className="mt-12 rounded-lg border border-brand-100 p-6 text-center">
      <h2 className="font-display text-xl font-bold text-brand-900">
        Get ADHD-friendly tips weekly
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-brand-700">
        Simple, practical ADHD strategies for mornings, tasks, and focus — straight to your
        inbox, no spam.
      </p>
      <iframe
        width="540"
        height="305"
        src="https://df00323d.sibforms.com/v2/serve/MUIFAAQt2Y0ngiOVEWn69ZIX2AO0q3S3vP4DAunRCvBGedHb7lYj0R4qH3VCUP7Ht52fdJNEm2lYbBz7FR35Wt9LKJO8sdQ8Z5BRSd5X2VxRvMRIMVlE3d2NM_5qV_cbWv-GrPnC5-iOcxhNg56MG-UoGXJcZfBbfAuAuQx7T2dqMDdLSBp9W_tJnaA0BrT_fESClc2H2yjyF3W9TQ=="
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        className="mx-auto mt-4 block max-w-full"
      />
    </div>
  );
}
