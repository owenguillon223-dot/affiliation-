import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";
import { CLUSTER_ICON_LAYOUT } from "@/lib/clusterIcons";

const SIZE = { width: 1200, height: 630 };

const DARK = "#3a3122";
const MID = "#8a7754";
const LIGHT = "#e9e5da";

type Layout = "a" | "b" | "c";

/** Large abstract brand banner standing in for article photography — auto-varies by content cluster. */
function bannerFor(layout: Layout) {
  if (layout === "b") {
    return (
      <>
        <div style={{ position: "absolute", width: 620, height: 620, borderRadius: "50%", background: MID, opacity: 0.35, top: -200, left: -140, display: "flex" }} />
        <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", background: LIGHT, opacity: 0.18, bottom: -160, right: -80, display: "flex" }} />
        <div style={{ position: "absolute", width: 230, height: 160, borderRadius: 16, background: MID, opacity: 0.95, top: 235, left: 470, display: "flex" }} />
        <div style={{ position: "absolute", width: 130, height: 130, borderRadius: "50%", background: LIGHT, opacity: 0.95, top: 330, left: 850, display: "flex" }} />
      </>
    );
  }
  if (layout === "c") {
    return (
      <>
        <div style={{ position: "absolute", width: 560, height: 560, borderRadius: "50%", background: LIGHT, opacity: 0.2, top: -180, right: -140, display: "flex" }} />
        <div style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", background: MID, opacity: 0.3, bottom: -160, left: -100, display: "flex" }} />
        <div style={{ position: "absolute", width: 180, height: 180, background: MID, opacity: 0.95, transform: "rotate(45deg)", top: 220, left: 460, display: "flex" }} />
        <div style={{ position: "absolute", width: 210, height: 130, borderRadius: 16, background: LIGHT, opacity: 0.95, top: 400, left: 780, display: "flex" }} />
      </>
    );
  }
  return (
    <>
      <div style={{ position: "absolute", width: 640, height: 640, borderRadius: "50%", background: MID, opacity: 0.35, top: -210, left: 380, display: "flex" }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: LIGHT, opacity: 0.2, bottom: -150, right: -120, display: "flex" }} />
      <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: MID, opacity: 0.95, top: 200, left: 110, display: "flex" }} />
      <div style={{ position: "absolute", width: 120, height: 120, background: LIGHT, opacity: 0.95, transform: "rotate(45deg)", top: 400, left: 550, display: "flex" }} />
    </>
  );
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const layout: Layout = CLUSTER_ICON_LAYOUT[post?.cluster ?? ""] ?? "a";

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", background: DARK, overflow: "hidden" }}>
        {bannerFor(layout)}
      </div>
    ),
    { ...SIZE }
  );
}
