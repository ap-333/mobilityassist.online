import type { NextConfig } from "next";
import { site } from "./src/config/site";

if (site.prelaunch || !site.phone.verified) {
  console.warn(
    "\n⚠  Mobility Assist is in prelaunch mode. Verify the phone number and business details in " +
      "src/config/site.ts and set `prelaunch: false` before advertising.\n",
  );
}

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (see .github/workflows/deploy.yml).
  output: "export",
  // Matches the planned URLs, e.g. /wheelchair-transportation/
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
