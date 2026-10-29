import Link from "next/link";
import { ContactMethods, LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const page = {
  title: "Fees & Cancellations",
  description: "How Mobility Assist discloses fares and fees, who you pay, and how cancellations, no-shows and refunds work.",
  path: "/fees-cancellations/",
};

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page.path, page.title, page.description)} />
      <LegalPage
        title="Fees & Cancellations"
        intro={<p>You should know the total you&apos;ll pay, and who you&apos;ll pay, before you accept a booking.</p>}
      >
        <h2>Our pricing promise</h2>
        <p>
          Before you accept a booking, we will explain the known transportation fare, any separate Mobility Assist fee, the recipient of
          each payment and the applicable cancellation terms. If the provider and Mobility Assist collect separate charges, these will be
          identified separately. We will not describe a referral or coordination service as free if a mandatory fee applies.
        </p>

        <h2>Who sets the fare</h2>
        <p>
          The independent transportation provider sets its own fare. Fares typically depend on distance, time of day, wait time, vehicle
          type and the assistance requested. We pass on the provider&apos;s quote; we don&apos;t mark up a provider&apos;s fare without
          telling you.
        </p>

        <h2>Mobility Assist fees and compensation</h2>
        <p>
          {site.fees.coordinationFee ??
            "If Mobility Assist charges a booking or coordination fee for your trip, we will tell you the amount, what it covers and whether it is refundable before you commit."}
        </p>
        {site.fees.mayReceiveProviderCompensation && (
          <p>
            Mobility Assist may also receive a referral commission from a provider for a completed booking. Where this is relevant to your
            decision, we will tell you. See our <Link href="/advertising-disclosure/">Advertising &amp; Affiliate Disclosure</Link>.
          </p>
        )}

        <h2>Who you pay, and when</h2>
        <p>
          {site.fees.fareCollection ??
            "We will tell you whether you pay the provider directly, pay Mobility Assist, or pay each party separately, and when any deposit or payment is due."}{" "}
          You will never be asked to pay an amount that was not disclosed when you accepted the booking, unless you agree to a change first
          or the law permits otherwise.
        </p>

        <h2>Cancelling a trip</h2>
        <ul>
          <li>Cancellation deadlines and any late-cancellation charges are set by the provider and disclosed before you book.</li>
          <li>To cancel, contact the provider named in your confirmation, or call us at {site.phone.display}.</li>
          <li>If the passenger is not at the pickup point at the agreed time, the provider&apos;s no-show terms may apply.</li>
        </ul>

        <h2>If the provider cancels, is late or doesn&apos;t arrive</h2>
        <ul>
          <li>Contact the provider and us right away. We will try to help find an alternative, but we can&apos;t guarantee one.</li>
          <li>If a provider cancels or fails to arrive, you should not be charged a fare for a ride that wasn&apos;t provided.</li>
          <li>Refunds of amounts paid to the provider are issued by the provider under its terms. We will help you contact them.</li>
        </ul>

        <h2>Price changes</h2>
        <p>
          If the trip changes (for example, a different destination, extra waiting time or an added stop), the fare may change. We or the
          provider will tell you about any change and obtain your agreement before proceeding where required.
        </p>

        <h2>Refunds of Mobility Assist fees</h2>
        <p>
          If you paid Mobility Assist a fee, we will tell you before you commit whether it is refundable if no ride is ultimately fulfilled.
          We can refund only amounts that Mobility Assist itself collected. Approved refunds are returned to the original payment method;
          the time it takes to appear depends on your bank or card issuer.
        </p>

        <h2>Billing problems</h2>
        <p>
          If you see a duplicate charge or an amount you didn&apos;t agree to, please <ContactMethods placement="fees-billing" /> with the
          booking reference and the charge details. We will review it, correct any error in amounts we collected, and help you raise it with
          the provider if they collected the payment. See <Link href="/complaints-refunds/">Complaints &amp; Refunds</Link>.
        </p>
      </LegalPage>
    </>
  );
}
