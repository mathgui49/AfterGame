import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AfterGame — Le jeu hot pour couples audacieux";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background:
            "radial-gradient(1100px 700px at 15% -10%, rgba(228, 51, 122, 0.45), transparent 60%), radial-gradient(900px 600px at 110% 10%, rgba(128, 88, 242, 0.4), transparent 55%), linear-gradient(180deg, #0a0410 0%, #1a061a 50%, #0d0513 100%)",
          color: "white",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            right: -180,
            bottom: -180,
            width: 520,
            height: 520,
            borderRadius: 520,
            background:
              "radial-gradient(circle, rgba(237,15,35,0.35), transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* Top chip */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.06)",
              padding: "10px 18px",
              borderRadius: 999,
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            🔥 Le jeu hot pour couples audacieux
          </div>
        </div>

        {/* Flame + title */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 40,
            marginTop: 20,
          }}
        >
          <div style={{ display: "flex", fontSize: 320, lineHeight: 1 }}>🔥</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 128,
                fontWeight: 800,
                letterSpacing: -4,
                lineHeight: 1,
                display: "flex",
              }}
            >
              AfterGame
            </div>
            <div
              style={{
                fontSize: 54,
                fontStyle: "italic",
                fontWeight: 700,
                marginTop: 8,
                color: "#ff6266",
                display: "flex",
              }}
            >
              Rallumez la flamme.
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
            fontSize: 26,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          <div style={{ display: "flex", gap: 36 }}>
            <div style={{ display: "flex" }}>10 modes de jeu</div>
            <div style={{ display: "flex" }}>·</div>
            <div style={{ display: "flex" }}>146+ cartes</div>
            <div style={{ display: "flex" }}>·</div>
            <div style={{ display: "flex" }}>Scénarios guidés</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 22,
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "8px 18px",
              borderRadius: 999,
              fontWeight: 600,
            }}
          >
            18+
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
