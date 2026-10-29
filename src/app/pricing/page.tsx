import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { DisclosureBox } from "@/components/DisclosureBox";
import { PageHero, Section, SectionHeading } from "@/components/PageHero";
import { PaidServiceNotice } from "@/components/PaidServiceNotice";
import { PlanCards } from "@/components/PlanCards";
import { CheckList } from "@/components/sections/shared";
import { planTerms, site } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const page = {
  title: "Plans & Pricing",
  description:
    "Mobility Assist is a paid booking and coordination service. Plans are $29 per one-way trip, $49 per round trip or $149 a month. Ride fares are separate.",
  path: "/pricing/",
};

export const metadata = pageMetadata(page);

const paidFor = [
  [
    "Mobility Assist plan fee",
    "Our booking and coordination work: finding a suitable provider, explaining the options and confirming the trip.",
    "$29, $49 or $149 a month, by plan",
  ],
  [
    "Ride fare",
    "The transportation itself. Set by the independent provider based on distance, timing, vehicle and assistance needed.",
    "Quoted before you commit",
  ],
] as const;

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page.path, page.title, page.description)} />
      <PageHero eyebrow="Plans & pricing" title="Clear plans for booking help, before you commit" placement="pricing-hero">
        <p>
          Mobility Assist is a paid service. You pay us a coordination fee for arranging your trip, and the ride fare is separate. You hear
          both amounts before anything is booked.
        </p>
      </PageHero>

      <Section labelledBy="plans-heading">
        <PaidServiceNotice showLink={false} />
        <div className="mt-10">
          <SectionHeading
            id="plans-heading"
            eyebrow="Three plans"
            title="Choose how you'd like us to help"
            intro="Every plan covers Mobility Assist's booking and coordination only. The ride fare is set by the independent provider and quoted separately."
          />
        </div>
        <PlanCards placement="pricing" />
      </Section>

      <Section tone="surface" labelledBy="what-you-pay-heading">
        <SectionHeading id="what-you-pay-heading" title="What you pay, and to whom" />
        <div className="mt-8 overflow-x-auto rounded-2xl border border-line bg-white">
          <table className="w-full min-w-[36rem] text-left">
            <thead className="bg-navy text-white">
              <tr>
                <th scope="col" className="p-4 font-bold">
                  Charge
                </th>
                <th scope="col" className="p-4 font-bold">
                  What it covers
                </th>
                <th scope="col" className="p-4 font-bold">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {paidFor.map(([charge, covers, amount]) => (
                <tr key={charge} className="border-t border-line align-top">
                  <th scope="row" className="p-4 font-bold text-navy">
                    {charge}
                  </th>
                  <td className="p-4 leading-relaxed text-muted">{covers}</td>
                  <td className="p-4 leading-relaxed text-ink">{amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 leading-relaxed text-muted">
          {site.fees.fareCollection ?? "We tell you who collects the ride fare, and when it is due, before you commit."}
        </p>
      </Section>

      <Section labelledBy="terms-heading">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeading id="terms-heading" title="How plan fees are charged and refunded" />
            <div className="mt-6">
              <CheckList items={planTerms} />
            </div>
            <p className="mt-6 leading-relaxed text-muted">
              Full details are in our{" "}
              <Link href="/fees-cancellations/" className="font-semibold text-action underline">
                Fees &amp; Cancellations
              </Link>{" "}
              policy and{" "}
              <Link href="/terms/" className="font-semibold text-action underline">
                Terms of Service
              </Link>
              .
            </p>
          </div>
          <DisclosureBox className="h-fit" />
        </div>
      </Section>

      <CtaBand placement="pricing-cta-band" title="Not sure which plan fits? Ask us." />
    </>
  );
}
