import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alma y Tierra — Therapeutic Yoga Retreat in Oaxaca, Mexico";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
          backgroundColor: "#1A1714",
          backgroundImage:
            "radial-gradient(ellipse at 30% 80%, rgba(196,87,46,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(61,110,79,0.1) 0%, transparent 60%)",
        }}
      >
        {/* Gold line */}
        <div
          style={{
            width: 60,
            height: 2,
            backgroundColor: "#C9A96E",
            marginBottom: 40,
          }}
        />

        {/* Dates */}
        <p
          style={{
            fontSize: 16,
            color: "#C9A96E",
            letterSpacing: "0.35em",
            textTransform: "uppercase" as const,
            marginBottom: 24,
            fontFamily: "sans-serif",
          }}
        >
          November 8–14, 2026 — Oaxaca, Mexico
        </p>

        {/* Heading */}
        <h1
          style={{
            fontSize: 72,
            color: "#FAF6F1",
            lineHeight: 0.95,
            marginBottom: 8,
            fontFamily: "serif",
            fontWeight: 300,
          }}
        >
          Reconnect
        </h1>
        <h1
          style={{
            fontSize: 72,
            color: "#C9A96E",
            lineHeight: 0.95,
            marginBottom: 8,
            fontFamily: "serif",
            fontWeight: 300,
            fontStyle: "italic",
          }}
        >
          with Yourself
        </h1>
        <h1
          style={{
            fontSize: 72,
            color: "#FAF6F1",
            lineHeight: 0.95,
            marginBottom: 40,
            fontFamily: "serif",
            fontWeight: 300,
          }}
        >
          in Oaxaca
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 18,
            color: "rgba(250,246,241,0.5)",
            maxWidth: 500,
            lineHeight: 1.6,
            fontFamily: "sans-serif",
            fontWeight: 300,
          }}
        >
          A 7-day therapeutic yoga retreat. Limited to 12 guests.
        </p>

        {/* Brand */}
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 80,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 22,
              color: "#FAF6F1",
              fontFamily: "serif",
            }}
          >
            Alma
          </span>
          <span
            style={{
              fontSize: 22,
              color: "#C9A96E",
              fontFamily: "serif",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            y
          </span>
          <span
            style={{
              fontSize: 22,
              color: "#FAF6F1",
              fontFamily: "serif",
            }}
          >
            Tierra
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
