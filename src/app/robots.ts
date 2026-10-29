import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Block crawlers until the site leaves prelaunch mode.
  if (site.prelaunch) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/_next/data/"] },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
