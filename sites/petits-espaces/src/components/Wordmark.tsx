import { SITE_NAME } from "@/lib/seo";

/** Site mark (solid diamond) + wordmark, used in the header and as the favicon shape. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[10px] ${className}`}>
      <span aria-hidden="true" className="h-4 w-4 rotate-45 bg-brand-600" />
      <span className="font-display text-lg font-bold text-brand-900">{SITE_NAME}</span>
    </span>
  );
}
