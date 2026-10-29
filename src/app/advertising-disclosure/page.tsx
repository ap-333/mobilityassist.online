import { LegalPage } from "@/components/LegalPage";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const page = {
  title: "Advertising & Affiliate Disclosure",
  description: "How Mobility Assist advertises, how it may be compensated, and what advertising does and doesn't mean.",
  path: "/advertising-disclosure/",
};

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page.path, page.title, page.description)} />
      <LegalPage eyebrow="Disclosure" title="Advertising & Affiliate Disclosure">
        <h2>Advertising</h2>
        <p>
          Mobility Assist may advertise its booking and coordination services through search engines and other advertising platforms,
          including Google Ads. Advertising helps people discover Mobility Assist and does not mean that a search engine, advertising
          platform or third-party transportation provider endorses our business.
        </p>

        <h2>Independent service</h2>
        <p>
          Mobility Assist is an independent service. We are not an official representative of a transportation provider, government agency,
          healthcare organization or insurer unless a specific relationship has been expressly disclosed and verified. Our phone number is
          Mobility Assist&apos;s own line and is not an official line for any other company.
        </p>

        <h2>How we may be compensated</h2>
        <p>
          Mobility Assist may receive compensation from a transportation provider for a completed referral or booking, or may charge a
          disclosed coordination fee, depending on the applicable arrangement. Where relevant to your decision, we will explain the nature
          of that compensation and any fee you are expected to pay before the booking is finalized.
        </p>

        <h2>What compensation doesn&apos;t mean</h2>
        <p>
          Paid advertising, referral relationships and commercial compensation do not guarantee the availability, suitability, quality or
          price of a particular transportation service.
        </p>

        <h2>Where to find the key facts</h2>
        <p>
          This page supplements, and does not replace, the disclosures shown on our service pages and during your call. Material facts about
          fees and provider relationships are given to you before you decide.
        </p>
      </LegalPage>
    </>
  );
}
