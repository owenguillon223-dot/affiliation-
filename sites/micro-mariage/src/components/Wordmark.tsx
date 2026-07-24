import { SITE_NAME } from "@/lib/seo";

/** Site mark (ringed circle) + wordmark, used in the header and as the favicon shape. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[10px] ${className}`}>
      <span aria-hidden="true" className="h-[18px] w-[18px] rounded-full border-[3px] border-brand-600" />
      <span className="font-display text-lg font-bold italic text-brand-900">{SITE_NAME}</span>
    </span>
  );
}
