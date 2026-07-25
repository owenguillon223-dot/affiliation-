import type { Metadata } from "next";
import Script from "next/script";
import { Lora, Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdSlot } from "@/components/AdSlot";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/seo";

const display = Lora({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-display",
});
const body = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col font-body">
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        <Header />
        <div className="mx-auto w-full max-w-4xl px-4">
          <AdSlot position="top" className="my-4" />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
        <AdSlot position="sticky-mobile" />
      </body>
    </html>
  );
}
