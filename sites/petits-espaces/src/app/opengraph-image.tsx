import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #3a3122 0%, #8a7754 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            opacity: 0.8,
            marginBottom: 28,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", fontSize: 52, fontWeight: 700, lineHeight: 1.25, maxWidth: 950 }}>
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    { ...size }
  );
}
