import { ImageResponse } from "next/og";
import { brand, MarkSvg } from "@/lib/brandImage";

export const dynamic = "force-static";

/** 192×192 PNG of the mark (tile), served at /icon-192.png. */
export function GET() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", background: brand.teal }}>
        <MarkSvg size={Math.round(192 * 0.78)} pin={brand.white} wheel={brand.teal} />
      </div>
    ),
    { width: 192, height: 192 },
  );
}
