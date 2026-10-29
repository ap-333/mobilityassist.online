import type { MetadataRoute } from "next";
import { allRoutes, legalNav, serviceNav } from "@/config/routes";
import { site } from "@/config/site";
import { photos, type Photo } from "@/content/photos";

export const dynamic = "force-static";

/** Photos shown on each page, listed so image search can find them. */
const pageImages: Record<string, Photo[]> = {
  "/": [photos.vanLift, photos.passengerCar, photos.familyHug, photos.appointment, photos.airport, photos.caregiverSunset],
  "/wheelchair-transportation/": [photos.vanLiftSquare],
  "/scheduled-rides/": [photos.appointment],
  "/family-caregiver-transportation/": [photos.caregiverPark],
  "/accessible-travel/": [photos.airport],
  "/how-it-works/": [photos.phoneCall],
  "/about/": [photos.caregiverSunset],
  "/service-areas/": [photos.passengerCar],
  "/independent-providers/": [photos.vanLiftSquare],
  "/contact/": [photos.couplePhone],
  "/request-a-ride/": [photos.phoneCall],
};

const servicePaths = new Set(serviceNav.map((r) => r.href));
const legalPaths = new Set(legalNav.map((r) => r.href));

function priority(path: string) {
  if (path === "/") return 1;
  if (servicePaths.has(path) || path === "/request-a-ride/") return 0.9;
  if (legalPaths.has(path)) return 0.3;
  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: site.lastUpdated,
    changeFrequency: legalPaths.has(path) ? "yearly" : "monthly",
    priority: priority(path),
    ...(pageImages[path] && { images: pageImages[path].map((p) => `${site.url}${p.src}`) }),
  }));
}
