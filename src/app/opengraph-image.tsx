import { ImageResponse } from "next/og";
import { personalInfo } from "@/lib/data";

export const size = {
  width: 1200,
  height: 630,
};

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
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #18181b 0%, #27182f 55%, #3b1d2b 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c4b5fd",
            marginBottom: 24,
          }}
        >
          Hi, my name is
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 8,
          }}
        >
          {personalInfo.name}.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 700,
            color: "#a1a1aa",
            marginBottom: 32,
          }}
        >
          {personalInfo.title}.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#d4d4d8",
            maxWidth: 900,
          }}
        >
          {personalInfo.tagline}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
