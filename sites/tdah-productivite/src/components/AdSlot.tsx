"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

type Position = "top" | "article-top" | "article-bottom" | "sticky-mobile";

const SLOT_ENV: Record<Position, string | undefined> = {
  top: process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOP,
  "article-top": process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_TOP,
  "article-bottom": process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_BOTTOM,
  "sticky-mobile": process.env.NEXT_PUBLIC_ADSENSE_SLOT_STICKY_MOBILE,
};

/** Reserved ad placement — renders nothing until AdSense client + slot IDs are configured. */
export function AdSlot({ position, className = "" }: { position: Position; className?: string }) {
  const slot = SLOT_ENV[position];
  const active = Boolean(ADSENSE_CLIENT && slot);

  useEffect(() => {
    if (!active) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Loader script not ready yet — safe to ignore, nothing to render without it.
    }
  }, [active]);

  if (!active) return null;

  const stickyClass =
    position === "sticky-mobile"
      ? "fixed inset-x-0 bottom-0 z-40 border-t border-brand-100 bg-white sm:hidden"
      : "";

  return (
    <div className={`${stickyClass} ${className}`}>
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
