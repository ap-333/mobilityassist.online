import type { Metadata } from "next";
import { site } from "@/config/site";

/** Share image for every page (app/opengraph-image.png/route.tsx). */
export const shareImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Mobility Assist: accessible transportation, arranged with a real person",
};

type PageInfo = { title: string; description: string; path: string };

/** Per-page title, description, canonical URL and social tags. */
export function pageMetadata({ title, description, path }: PageInfo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${site.name}`, description, url: path, siteName: site.name, type: "website", locale: "en_US", images: [shareImage] },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: [shareImage.url] },
  };
}
