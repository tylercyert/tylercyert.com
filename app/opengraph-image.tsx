import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        justifyContent: "space-between", padding: 62, background: "#f5f4ee",
        color: "#17211e", fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 28, fontWeight: 700 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: 4, background: "#3158d5", color: "white", fontSize: 25 }}>tc</div>
        Tyler Cyert
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", fontSize: 21, letterSpacing: 3, color: "#3158d5", fontWeight: 700 }}>SOFTWARE &amp; SYSTEMS</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 82, lineHeight: 1.06, letterSpacing: -5, fontWeight: 700 }}>
          <span>I build the software</span>
          <span style={{ color: "#3158d5" }}>businesses run on.</span>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "2px solid #17211e", paddingTop: 20, fontSize: 21 }}>
        <span>Internal products / integrations / reliable operations</span>
        <span>tylercyert.com ↗</span>
      </div>
    </div>, size,
  );
}
