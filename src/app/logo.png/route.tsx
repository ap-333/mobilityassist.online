import { ImageResponse } from "next/og";
import { brand, MarkSvg } from "@/lib/brandImage";

export const dynamic = "force-static";

/** 512×512 PNG of the mark (white), served at /logo.png. */
export function GET() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", background: brand.white }}>
        <MarkSvg size={Math.round(512 * 0.86)} pin={brand.teal} />
      </div>
    ),
    { width: 512, height: 512 },
  );
}
