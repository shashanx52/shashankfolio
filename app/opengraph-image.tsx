import { ImageResponse } from "next/og";

/*
  The share card. Previously this fell back to shashank.jpg, a 960x1280
  portrait, against the ~1200x630 landscape that og:image wants - so every
  LinkedIn, WhatsApp and Twitter preview cropped the photo to a face-sized
  sliver. Generating the card means it is the right shape by construction.

  Rendered at build time by Satori, which supports a subset of CSS: flex only
  (no grid), no external stylesheets, every element needs an explicit display.
*/

export const alt = "Shashank Jha — Product Analyst at Times Internet";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f0f0f",
          color: "#F4F1EA",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, opacity: 0.55 }}>
          SHASHANX.IN
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 128, fontWeight: 700, lineHeight: 1 }}>
            Shashank Jha
          </div>
          <div style={{ display: "flex", fontSize: 46, marginTop: 22, opacity: 0.85 }}>
            Product Analyst
          </div>
          <div style={{ display: "flex", fontSize: 34, marginTop: 10, opacity: 0.6 }}>
            Times Internet · The Economic Times
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, letterSpacing: 2, opacity: 0.55 }}>
          BigQuery · SQL · Python · Google Ads · Meta Ads
        </div>
      </div>
    ),
    size,
  );
}
