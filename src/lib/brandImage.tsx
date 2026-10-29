import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Brand colours and the pin-wheel mark for build-time generated images (share card, app icons). */
export const brand = { teal: "#0B5F6E", tealLight: "#1B8797", navy: "#0A3D47", navyDark: "#072C34", amber: "#F4B33E", white: "#FFFFFF" };

/** The mark. On a teal background, pass pin={brand.white} wheel={brand.teal} so the wheel stays visible. */
export function MarkSvg({ size, pin = brand.teal, wheel = brand.white }: { size: number; pin?: string; wheel?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <path
        d="M32 2.5C19.6 2.5 9.5 12.3 9.5 24.6c0 8.7 6.1 18.3 12.1 25.4C26.4 55.6 32 61.5 32 61.5s5.6-5.9 10.4-11.5C48.4 42.9 54.5 33.3 54.5 24.6 54.5 12.3 44.4 2.5 32 2.5Z"
        fill={pin}
      />
      <circle cx="32" cy="24.5" r="12" fill="none" stroke={wheel} strokeWidth="5" />
      <path d="M26.93 13.62A12 12 0 0 1 43.95 23.45" fill="none" stroke={brand.amber} strokeWidth="5" strokeLinecap="round" />
      <path d="M32 24.5L32 16.5M32 24.5L38.93 28.5M32 24.5L25.07 28.5" stroke={wheel} strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="32" cy="24.5" r="3.6" fill={wheel} />
    </svg>
  );
}

/** A public/ image as a data URL, so build-time image routes can embed it. */
export async function publicImage(path: string) {
  const data = await readFile(join(process.cwd(), "public", path));
  return `data:image/jpeg;base64,${data.toString("base64")}`;
}

/** Inter (SIL Open Font License) for generated images, so they match the site's headings. */
export async function brandFonts() {
  const dir = join(process.cwd(), "src/assets/fonts");
  const [medium, extraBold] = await Promise.all([readFile(join(dir, "inter-latin-500.woff")), readFile(join(dir, "inter-latin-800.woff"))]);
  return [
    { name: "Inter", data: medium, weight: 500 as const, style: "normal" as const },
    { name: "Inter", data: extraBold, weight: 800 as const, style: "normal" as const },
  ];
}
