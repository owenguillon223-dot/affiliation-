import { ImageResponse } from "next/og";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { SITE_NAME } from "@/lib/seo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #3f2620 0%, #a3654f 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            opacity: 0.75,
            textTransform: "uppercase",
            letterSpacing: 3,
          }}
        >
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", fontSize: 46, fontWeight: 700, lineHeight: 1.3 }}>
          {post.title}
        </div>
        <div style={{ fontSize: 22, opacity: 0.7, textTransform: "capitalize" }}>
          {post.cluster.replace(/-/g, " ")}
        </div>
      </div>
    ),
    { ...size }
  );
}
