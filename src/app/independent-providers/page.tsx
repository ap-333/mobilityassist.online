import { CtaBand } from "@/components/CtaBand";
import { PageHero, Section, SectionHeading } from "@/components/PageHero";
import { CheckList } from "@/components/sections/shared";
import { site } from "@/config/site";
import { photos } from "@/content/photos";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const page = {
  title: "Our Independent Provider Model",
  description: "How Mobility Assist works with independent transportation providers, who performs the ride, and how we're compensated.",
  path: "/independent-providers/",
};

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page.path, page.title, page.description)} />
      <>
        <PageHero
          eyebrow="Our model"
          title="How we work with independent providers"
          placement="providers-hero"
          photo={photos.vanLiftSquare}
        >
          <p>Mobility Assist arranges rides; independent transportation providers perform them. Here is what that means for you.</p>
        </PageHero>
        <Section>
          <div className="max-w-3xl space-y-12">
            <div>
              <SectionHeading id="roles-heading" title="Who does what" />
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-surface p-5">
                  <dt className="font-bold text-navy">Mobility Assist</dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    Takes your request, checks provider availability and suitability, explains the price and terms, and coordinates the
                    booking.
                  </dd>
                </div>
                <div className="rounded-2xl border border-line bg-surface p-5">
                  <dt className="font-bold text-navy">The transportation provider</dt>
                  <dd className="mt-2 leading-relaxed text-muted">
                    Supplies the vehicle and driver, performs the ride, and is responsible for operating it under its own licensing,
                    insurance and terms.
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <SectionHeading id="promises-heading" title="What we commit to" />
              <div className="mt-6">
                <CheckList
                  items={[
                    "We tell you the provider's identity before your booking is treated as confirmed.",
                    "We tell you who will collect the fare and any Mobility Assist fee.",
                    "We don't describe a provider as licensed, insured or qualified unless we have verified it.",
                    "We don't promise vehicle compatibility we haven't confirmed with the provider.",
                  ]}
                />
              </div>
            </div>
            <div>
              <SectionHeading id="paid-heading" title="How Mobility Assist is paid" />
              <p className="mt-4 leading-relaxed text-muted">
                {site.fees.coordinationFee ?? "Mobility Assist may charge a disclosed booking or coordination fee."}{" "}
                {site.fees.mayReceiveProviderCompensation &&
                  "We may also receive compensation from a transportation provider for a completed referral or booking. "}
                Where it matters to your decision, we explain the arrangement and any fee you&apos;re expected to pay before the booking is
                finalized. Compensation never guarantees the availability, suitability, quality or price of a ride.
              </p>
            </div>
          </div>
        </Section>
        <CtaBand placement="providers-cta-band" />
      </>
    </>
  );
}
