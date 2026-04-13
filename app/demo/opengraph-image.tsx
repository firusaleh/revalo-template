import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Revalo Demo — 30 Sekunden Smart Review Management";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "linear-gradient(135deg, #0ea5e9, #fbbf24)",
          }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          Revalo Demo
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            background: "linear-gradient(90deg, #0ea5e9, #fbbf24)",
            backgroundClip: "text",
            color: "transparent",
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          30 Sekunden Smart Review Management
        </div>
        <div
          style={{
            display: "flex",
            gap: 32,
            fontSize: 18,
            color: "#94a3b8",
          }}
        >
          <span>Vollautomatisch</span>
          <span style={{ color: "#475569" }}>|</span>
          <span>Google-konform</span>
          <span style={{ color: "#475569" }}>|</span>
          <span>DSGVO-sicher</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
