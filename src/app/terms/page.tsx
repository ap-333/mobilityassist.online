import Link from "next/link";
import { ContactMethods, LegalPage } from "@/components/LegalPage";
import { businessName, site } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const page = {
  title: "Terms of Service",
  description: "The terms that apply when you use Mobility Assist's transportation booking and coordination service.",
  path: "/terms/",
};

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page.path, page.title, page.description)} />
      <LegalPage title="Terms of Service">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of MobilityAssist.online and the transportation booking and
          coordination service offered by {businessName} (&ldquo;Mobility Assist,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo; or
          &ldquo;our&rdquo;). Please read them together with our{" "}
          <Link href="/transportation-disclosure/">Transportation &amp; Booking Disclosure</Link>,{" "}
          <Link href="/fees-cancellations/">Fees &amp; Cancellations</Link> page and <Link href="/privacy/">Privacy Policy</Link>.
        </p>

        <h2>1. Acceptance of terms and eligibility</h2>
        <p>
          By using our website, submitting a request or asking us to coordinate a booking, you agree to these Terms. If you do not agree,
          please do not use the service. You must be at least 18 years old and able to enter a binding agreement. If you arrange
          transportation for another person, you confirm that you are authorized to share their information and act for them for that
          purpose.
        </p>

        <h2>2. Who we are and what we do</h2>
        <p>
          Mobility Assist operates the website MobilityAssist.online and provides transportation booking and coordination assistance. Our
          service helps customers identify and contact independent transportation providers that may be able to accommodate a requested
          journey.
        </p>
        <p>
          Unless expressly identified otherwise in a written agreement, Mobility Assist does not own or operate the vehicle used for a trip,
          employ the driver, or itself perform the transportation. The identity of the transportation provider will be communicated to you
          when known and before the booking is treated as confirmed.
        </p>
        <p>
          You can reach us when you <ContactMethods placement="terms-identity" />.
          {site.mailingAddress && <> Our mailing address is {site.mailingAddress}.</>}
        </p>

        <h2>3. Independent transportation providers</h2>
        <p>
          Transportation is subject to the independent provider&apos;s own terms, service area, vehicle availability, licensing, insurance
          and operational requirements. You may be asked to accept the provider&apos;s terms as a separate agreement between you and the
          provider.
        </p>
        <p>
          Mobility Assist will not represent that a provider is licensed, insured or qualified unless that status has been appropriately
          verified. Before you commit to a booking, we will disclose the provider&apos;s identity to the extent known and the material
          booking terms, including which party will perform the ride and who is responsible for collecting the transportation fare.
        </p>

        <h2>4. Requests, quotes and confirmations</h2>
        <p>
          Submitting a website form or speaking with a Mobility Assist representative is a request for assistance, not a confirmed
          reservation. A request may be declined or remain unfulfilled because of provider capacity, location, vehicle suitability,
          scheduling, pricing or other operational limitations.
        </p>
        <p>
          A trip is confirmed only when the required arrangements have been expressly confirmed to you, including the provider, date and
          time, pickup and destination details, agreed fare and any applicable coordination fee. A quote is valid only for the trip details
          on which it was based.
        </p>

        <h2>5. Fares, fees, taxes and payment</h2>
        <p>
          Mobility Assist is a paid service. {site.fees.coordinationFee} What each plan includes is set out on our{" "}
          <Link href="/pricing/">Plans &amp; Pricing</Link> page. A plan fee for a confirmed trip is non-refundable, except that it is refunded in full
          if the provider cancels or no ride can be provided. The Care Plan renews monthly until you cancel, and you can cancel at any time
          before your next billing date.
        </p>
        <p>
          Before you commit to a booking, Mobility Assist will disclose the known transportation fare, the Mobility Assist fee that applies, applicable taxes or additional charges, and the party responsible for collecting each amount.
        </p>
        <p>
          No undisclosed coordination fee will be added by Mobility Assist after you have accepted a quote. If a provider&apos;s fare
          changes or an additional charge becomes necessary, you will be informed of the change and any required consent obtained before
          proceeding, except where applicable law permits otherwise. Payments made by card are handled by the collecting party&apos;s
          payment processor; Mobility Assist does not ask for full card numbers through the website form.
        </p>

        <h2>6. Your responsibilities</h2>
        <ul>
          <li>
            Provide accurate, complete trip details, contact information and passenger requirements, and tell us promptly about changes.
          </li>
          <li>Make sure the passenger is ready at the agreed pickup place and time.</li>
          <li>Follow the provider&apos;s reasonable safety instructions and applicable law during the ride.</li>
          <li>Do not use the service for unlawful purposes or to make false or abusive requests.</li>
        </ul>

        <h2>7. Accessibility and vehicle requirements</h2>
        <p>
          You must provide accurate information about the passenger, mobility device, boarding requirements, passenger count and any
          relevant vehicle-fit requirements. A wheelchair-accessible vehicle is not necessarily suitable for every wheelchair or mobility
          device.
        </p>
        <p>
          Vehicle dimensions, lift or ramp capacity, wheelchair securement, seating arrangements and other relevant requirements should be
          confirmed with the transportation provider before the booking is finalized. Mobility Assist will not guarantee compatibility
          unless the relevant information has been verified and expressly confirmed.
        </p>

        <h2>8. Cancellations, delays and service failures</h2>
        <p>
          Transportation may be affected by traffic, weather, vehicle availability, provider cancellations and other circumstances. If a
          problem arises, contact the identified transportation provider or Mobility Assist using the contact details provided with your
          booking.
        </p>
        <p>
          Cancellation deadlines, no-show charges, refund eligibility and the party responsible for processing a refund will be disclosed
          before booking. See <Link href="/fees-cancellations/">Fees &amp; Cancellations</Link>. Any remedy offered by Mobility Assist is
          subject to the applicable agreement and law; these Terms do not eliminate rights that cannot legally be waived.
        </p>

        <h2>9. No emergency or medical service</h2>
        <p>
          Mobility Assist is not an emergency dispatch service, ambulance service, medical provider or substitute for emergency assistance.
          We do not provide medical advice or guarantee medical supervision during a journey. In an emergency, call 911 or the appropriate
          local emergency service.
        </p>

        <h2>10. Responsibility and liability</h2>
        <p>
          Mobility Assist is responsible for performing its own booking and coordination activities with reasonable care. The transportation
          provider is responsible for operating the vehicle and performing the ride. Each party&apos;s responsibility depends on the
          services it actually performs, the applicable agreements and the law.
        </p>
        <p>
          To the extent permitted by law, Mobility Assist is not liable for indirect or consequential losses arising from a provider&apos;s
          performance of a ride. Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable
          law, including liability for our own negligence where such exclusion is not permitted.
        </p>

        <h2>11. Complaints and disputes</h2>
        <p>
          If you have a concern, please <ContactMethods placement="terms-complaints" />. Our{" "}
          <Link href="/complaints-refunds/">Complaints &amp; Refunds</Link> page explains how we review issues. Nothing in these Terms
          limits consumer rights or remedies that cannot legally be excluded.
        </p>
        <p>
          {site.governingState
            ? `These Terms are governed by the laws of the State of ${site.governingState}, without regard to conflict-of-law rules, except where the law of your state of residence requires otherwise.`
            : "These Terms are governed by the laws of the state in which Mobility Assist is organized, without regard to conflict-of-law rules, except where the law of your state of residence requires otherwise."}
        </p>

        <h2>12. Privacy and electronic communications</h2>
        <p>
          Our <Link href="/privacy/">Privacy Policy</Link> explains how we handle personal information. By submitting a request, you agree
          that we may contact you by phone, text message or email about that request. Message and data rates may apply. You can ask us to
          stop non-essential messages at any time.
        </p>

        <h2>13. Website use</h2>
        <p>
          Website content is provided for general information about our service and may change. You may not copy, scrape or misuse the
          website or interfere with its operation.
        </p>

        <h2>14. Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date shows when they last changed. Changes do not
          apply retroactively to a booking already confirmed under earlier terms.
        </p>
      </LegalPage>
    </>
  );
}
