import { SITE_NAME } from "@/lib/seo";

/** Site mark (solid circle) + wordmark, used in the header and as the favicon shape. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[10px] ${className}`}>
      <span aria-hidden="true" className="h-[18px] w-[18px] rounded-full bg-brand-600" />
      <span className="font-display text-lg font-bold text-brand-900">{SITE_NAME}</span>
    </span>
  );
}
