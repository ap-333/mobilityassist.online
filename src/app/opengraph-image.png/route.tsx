import { ImageResponse } from "next/og";
import { site } from "@/config/site";
import { brand, brandFonts, MarkSvg, publicImage } from "@/lib/brandImage";

export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

/**
 * The 1200×630 share image used by Facebook, LinkedIn, X, iMessage and search
 * results, served at /opengraph-image.png (a route rather than the
 * opengraph-image file convention, which exports without a .png extension).
 */
export async function GET() {
  const [photo, fonts] = await Promise.all([publicImage("images/van-lift-square.jpg"), brandFonts()]);
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: brand.navyDark, fontFamily: "Inter", fontWeight: 500 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 690, padding: "64px 56px 56px 64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <MarkSvg size={84} pin={brand.tealLight} />
            <div style={{ display: "flex", fontSize: 46, fontWeight: 800, color: brand.white }}>
              Mobility<span style={{ color: brand.amber, marginLeft: 12 }}>Assist</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5, color: brand.white }}>Accessible rides, arranged with a real person</div>
            <div style={{ marginTop: 22, fontSize: 26, lineHeight: 1.4, color: "#C9DADD" }}>
              Wheelchair-accessible and scheduled rides through independent local providers.
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ display: "flex", background: brand.amber, color: brand.navyDark, fontSize: 28, fontWeight: 800, padding: "14px 28px", borderRadius: 999, whiteSpace: "nowrap" }}>
              Call {site.phone.display}
            </div>
            <div style={{ fontSize: 20, color: "#9FB9BE", whiteSpace: "nowrap" }}>{site.domainLabel}</div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo} width={510} height={630} style={{ objectFit: "cover" }} alt="" />
      </div>
    ),
    { ...size, fonts },
  );
}
