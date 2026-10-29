import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { CallPopup } from "@/components/CallPopup";
import { JsonLd } from "@/components/JsonLd";
import { MobileCallBar } from "@/components/MobileCallBar";
import { PrelaunchBanner } from "@/components/PrelaunchBanner";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { businessName, site } from "@/config/site";
import { shareImage } from "@/lib/metadata";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Accessible Transportation Booking | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: businessName, url: site.url }],
  creator: businessName,
  publisher: businessName,
  category: "Transportation",
  alternates: { canonical: "/" },
  openGraph: { siteName: site.name, type: "website", locale: "en_US", url: "/", images: [shareImage] },
  twitter: { card: "summary_large_image", images: [shareImage.url] },
  icons: { apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  verification: {
    ...(site.googleSiteVerification && { google: site.googleSiteVerification }),
    ...(site.bingSiteVerification && { other: { "msvalidate.01": site.bingSiteVerification } }),
  },
  formatDetection: { telephone: false },
  // Keep preview builds out of search results until real details are in place.
  robots: site.prelaunch ? { index: false, follow: false } : { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A3D47",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body className="min-h-screen pb-24 font-sans text-[1.0625rem] antialiased md:pb-0">
        <JsonLd graph={[organizationSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-navy focus:shadow-lg"
        >
          Skip to content
        </a>
        <PrelaunchBanner />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileCallBar />
        <CallPopup />
        {site.googleAdsId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAdsId}`} strategy="afterInteractive" />
            <Script id="google-tag" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.googleAdsId}');${
                site.googleAdsCallConversion
                  ? `
// Count a lead each time a visitor taps a call button or phone link.
document.addEventListener('click', function (e) {
  var link = e.target && e.target.closest && e.target.closest('a[data-cta="call"]');
  if (link) gtag('event', 'conversion', { send_to: '${site.googleAdsCallConversion}', transport_type: 'beacon' });
}, true);`
                  : ""
              }${
                site.googleAdsFormConversion
                  ? `
// Count an accepted ride request. No form data is ever attached.
window.addEventListener('ma:request-submitted', function () {
  gtag('event', 'conversion', { send_to: '${site.googleAdsFormConversion}' });
});`
                  : ""
              }`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
