import { ImageResponse } from "next/og";
import { brand, MarkSvg } from "@/lib/brandImage";

export const dynamic = "force-static";

/** 180×180 iOS home-screen icon at /apple-touch-icon.png: the mark on white, since iOS adds its own rounded corners. */
export function GET() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", background: brand.white }}>
        <MarkSvg size={150} />
      </div>
    ),
    { width: 180, height: 180 },
  );
}
