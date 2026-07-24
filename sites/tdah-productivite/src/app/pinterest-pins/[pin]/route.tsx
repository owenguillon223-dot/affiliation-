import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/seo";

const PIN_SIZE = { width: 1000, height: 1500 };

const DARK = "#2e1c5c";
const MID = "#6544b8";
const LIGHT = "#e6dff6";

type Template = "split" | "circle" | "overlay" | "framed" | "badge";

interface PinDef {
  badge: string;
  headline: string;
  template: Template;
  slug: string;
}

const PINS: Record<string, PinDef> = {
  "adhd-morning-routine": {
    badge: "ADHD MORNING ROUTINE",
    headline: "for people who hate mornings",
    template: "split",
    slug: "adhd-morning-routine-for-people-who-hate-mornings",
  },
  "best-to-do-list-apps": {
    badge: "ADHD TO-DO LIST APPS",
    headline: "Best To-Do List Apps for ADHD Adults in 2026",
    template: "circle",
    slug: "best-to-do-list-apps-for-adhd-2026",
  },
  "body-doubling": {
    badge: "ADHD BODY DOUBLING",
    headline: "Body Doubling Apps for ADHD: Free & Paid Compared",
    template: "overlay",
    slug: "body-doubling-apps-for-adhd",
  },
  "cleaning-schedule": {
    badge: "ADHD CLEANING SCHEDULE",
    headline: "ADHD-Friendly Cleaning Schedule (Printable)",
    template: "framed",
    slug: "adhd-friendly-cleaning-schedule",
  },
  "dopamine-menu": {
    badge: "ADHD DOPAMINE MENU",
    headline: "Dopamine Menu: What It Is + Free Printable",
    template: "badge",
    slug: "dopamine-menu-adhd-free-printable",
  },
};

export function generateStaticParams() {
  return Object.keys(PINS).map((pin) => ({ pin }));
}

/** Brand-pattern fill standing in for a photo — no stock imagery available yet. */
function PatternPanel({ variant = "wide" }: { variant?: "wide" | "square" }) {
  if (variant === "square") {
    return (
      <div style={{ position: "absolute", inset: 0, display: "flex", background: "#d6c9f0" }}>
        <div style={{ position: "absolute", width: 460, height: 460, borderRadius: "50%", background: MID, opacity: 0.45, top: -110, left: -90, display: "flex" }} />
        <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", background: DARK, opacity: 0.3, bottom: -90, right: -70, display: "flex" }} />
        <div style={{ position: "absolute", width: 180, height: 180, borderRadius: "50%", background: MID, opacity: 0.35, top: 210, left: 220, display: "flex" }} />
      </div>
    );
  }
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", background: "#4a2f96" }}>
      <div style={{ position: "absolute", width: 620, height: 620, borderRadius: "50%", background: LIGHT, opacity: 0.3, top: -160, left: -120, display: "flex" }} />
      <div style={{ position: "absolute", width: 440, height: 440, borderRadius: "50%", background: DARK, opacity: 0.35, bottom: -140, right: -100, display: "flex" }} />
      <div style={{ position: "absolute", width: 260, height: 260, borderRadius: "50%", background: LIGHT, opacity: 0.25, top: 320, left: 340, display: "flex" }} />
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignSelf: "flex-start",
        background: LIGHT,
        color: DARK,
        fontSize: 24,
        fontWeight: 600,
        letterSpacing: 2,
        padding: "10px 22px",
      }}
    >
      {text}
    </div>
  );
}

function Mark() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ width: 24, height: 24, borderRadius: "50%", background: LIGHT, display: "flex" }} />
      <div style={{ display: "flex", fontSize: 24, fontWeight: 600, color: LIGHT }}>{SITE_NAME}</div>
    </div>
  );
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ pin: string }> }
) {
  const { pin } = await params;
  const def = PINS[pin];
  if (!def) {
    return new ImageResponse(
      (
        <div style={{ width: "100%", height: "100%", display: "flex", background: DARK }} />
      ),
      { ...PIN_SIZE }
    );
  }

  let body;

  if (def.template === "split") {
    body = (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: DARK }}>
        <div style={{ height: 760, position: "relative", overflow: "hidden", display: "flex" }}>
          <PatternPanel />
        </div>
        <div style={{ flex: 1, padding: "48px 56px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
          <Badge text={def.badge} />
          <div style={{ display: "flex", fontSize: 58, fontWeight: 700, lineHeight: 1.2, color: "#f5f2fb" }}>
            {def.headline}
          </div>
        </div>
        <div style={{ position: "absolute", margin: 32, display: "flex" }}>
          <Mark />
        </div>
      </div>
    );
  } else if (def.template === "circle") {
    body = (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", background: LIGHT }}>
        <div style={{ display: "flex", marginTop: 100 }}>
          <div style={{ background: DARK, color: LIGHT, fontSize: 24, fontWeight: 600, letterSpacing: 2, padding: "10px 22px", display: "flex" }}>
            {def.badge}
          </div>
        </div>
        <div style={{ width: 620, height: 620, borderRadius: "50%", overflow: "hidden", marginTop: 60, border: "14px solid " + MID, position: "relative", display: "flex" }}>
          <PatternPanel variant="square" />
        </div>
        <div style={{ display: "flex", fontSize: 54, fontWeight: 700, lineHeight: 1.25, color: DARK, textAlign: "center", marginTop: 60, padding: "0 60px" }}>
          {def.headline}
        </div>
        <div style={{ position: "absolute", bottom: 40, left: 40, display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: MID, display: "flex" }} />
            <div style={{ display: "flex", fontSize: 24, fontWeight: 600, color: DARK }}>{SITE_NAME}</div>
          </div>
        </div>
      </div>
    );
  } else if (def.template === "overlay") {
    body = (
      <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", background: DARK }}>
        <PatternPanel />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background: "linear-gradient(180deg, rgba(46,28,92,0) 35%, rgba(46,28,92,0.95) 78%)",
          }}
        />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "64px 56px 64px", display: "flex", flexDirection: "column", gap: 24 }}>
          <Badge text={def.badge} />
          <div style={{ display: "flex", fontSize: 52, fontWeight: 700, lineHeight: 1.2, color: "#f5f2fb" }}>
            {def.headline}
          </div>
        </div>
        <div style={{ position: "absolute", top: 32, right: 32, display: "flex" }}>
          <Mark />
        </div>
      </div>
    );
  } else if (def.template === "framed") {
    body = (
      <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", background: DARK }}>
        <PatternPanel />
        <div style={{ position: "absolute", inset: 40, border: "4px solid rgba(230,223,246,0.7)", display: "flex" }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background: "linear-gradient(180deg, rgba(46,28,92,0) 45%, rgba(46,28,92,0.95) 100%)",
          }}
        />
        <div style={{ position: "absolute", bottom: 80, left: 80, right: 80, display: "flex", flexDirection: "column", gap: 24 }}>
          <Badge text={def.badge} />
          <div style={{ display: "flex", fontSize: 54, fontWeight: 700, lineHeight: 1.2, color: "#f5f2fb" }}>
            {def.headline}
          </div>
        </div>
      </div>
    );
  } else {
    body = (
      <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", background: DARK }}>
        <div style={{ position: "absolute", top: 48, left: 48, display: "flex" }}>
          <Badge text={def.badge} />
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, lineHeight: 1.2, color: "#f5f2fb", margin: "180px 56px 0" }}>
          {def.headline}
        </div>
        <div style={{ margin: "50px 56px 56px", flex: 1, border: "12px solid " + MID, position: "relative", overflow: "hidden", display: "flex" }}>
          <PatternPanel />
        </div>
        <div style={{ position: "absolute", bottom: 40, right: 48, display: "flex" }}>
          <Mark />
        </div>
      </div>
    );
  }

  return new ImageResponse(body, { ...PIN_SIZE });
}
