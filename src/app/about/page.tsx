import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero, Section, SectionHeading } from "@/components/PageHero";
import { CheckList } from "@/components/sections/shared";
import { businessName, disclosures } from "@/config/site";
import { photos } from "@/content/photos";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const page = {
  title: "About Us",
  description:
    "Mobility Assist is an independent transportation booking and coordination service. Learn what we do, what we don't do, and how we work.",
  path: "/about/",
};

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page.path, page.title, page.description)} />
      <>
        <PageHero eyebrow="About" title="About Mobility Assist" placement="about-hero" photo={photos.caregiverSunset}>
          <p>
            Mobility Assist is an independent transportation booking and coordination service. We help customers identify third-party
            transportation providers for wheelchair-accessible rides, scheduled appointments, personal trips and other accessible travel
            needs.
          </p>
        </PageHero>
        <Section>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading id="what-heading" title="What we do" />
              <div className="mt-6">
                <CheckList
                  items={[
                    "Listen to what the passenger needs and where they need to go.",
                    "Contact independent providers that may be able to handle the trip.",
                    "Explain the provider, fare, any Mobility Assist fee and the cancellation terms before you commit.",
                    "Coordinate the booking and help if something needs to be resolved.",
                  ]}
                />
              </div>
            </div>
            <div>
              <SectionHeading id="not-heading" title="What we don't do" />
              <ul className="mt-6 list-disc space-y-3 pl-5 leading-relaxed text-muted">
                <li>
                  We don&apos;t own vehicles or employ drivers. Transportation is performed by independent operators unless a specific
                  service is expressly identified otherwise.
                </li>
                <li>We don&apos;t provide emergency dispatch, ambulance transport, medical care or medical supervision.</li>
                <li>
                  We don&apos;t represent any other transportation company, and we don&apos;t have access to other companies&apos; bookings
                  or records.
                </li>
                <li>{disclosures.affiliation}</li>
              </ul>
            </div>
          </div>
          <p className="mt-12 max-w-3xl leading-relaxed text-muted">
            {businessName} operates MobilityAssist.online. Read more about{" "}
            <Link href="/independent-providers/" className="font-semibold text-action underline">
              our independent provider model
            </Link>{" "}
            or{" "}
            <Link href="/contact/" className="font-semibold text-action underline">
              contact us
            </Link>
            .
          </p>
        </Section>
        <CtaBand placement="about-cta-band" />
      </>
    </>
  );
}
