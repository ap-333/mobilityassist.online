import Link from "next/link";
import { ContactMethods, LegalPage } from "@/components/LegalPage";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const page = {
  title: "Complaints & Refunds",
  description: "How to raise a concern with Mobility Assist, how complaints are reviewed, and how refunds work.",
  path: "/complaints-refunds/",
};

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page.path, page.title, page.description)} />
      <LegalPage eyebrow="Support" title="Complaints, Refunds & Customer Support">
        <p>
          <strong>If anyone is in danger or needs urgent medical help, call 911 first.</strong>
        </p>

        <h2>1. How to raise a concern</h2>
        <p>
          If you have a concern about a transportation request or booking coordinated by Mobility Assist, please{" "}
          <ContactMethods placement="complaints-submit" />.
        </p>

        <h2>2. What to include</h2>
        <ul>
          <li>Your booking reference, if you have one.</li>
          <li>The requested trip date and the provider&apos;s name, if known.</li>
          <li>A description of what happened and what outcome you&apos;re looking for.</li>
        </ul>
        <p>Do not send sensitive medical information unless it is specifically necessary and requested through an appropriate channel.</p>

        <h2>3. How we review complaints</h2>
        <p>
          We acknowledge your complaint, review our records of the request and booking, and contact the provider where relevant. We will
          tell you the outcome and the next steps available. If you are not satisfied, you can ask for the complaint to be escalated to a
          manager for a second review.
        </p>

        <h2>4. Issues the provider must handle</h2>
        <p>
          Mobility Assist will review issues relating to its own booking and coordination activities. Complaints about driving, vehicle
          operation, driver conduct or transportation delivery may also need to be directed to the independent transportation provider. We
          will explain the appropriate contact and escalation process where known.
        </p>

        <h2>5. Fees Mobility Assist can refund</h2>
        <p>
          Mobility Assist plan fees are non-refundable once a trip is confirmed, except that we refund them in full if the provider cancels
          or no ride can be provided, and we correct any amount charged in error. Refunds of the ride fare depend on the party that
          collected it and its terms. We can refund only amounts Mobility Assist itself collected, and we will not promise a refund that we do not have
          authority to issue. See <Link href="/fees-cancellations/">Fees &amp; Cancellations</Link>.
        </p>

        <h2>6. If a provider cancels or doesn&apos;t arrive</h2>
        <p>
          Tell us as soon as possible. We will try to help find an alternative where one is available, help you contact the provider about
          any refund it owes, and review whether any Mobility Assist fee should be refunded under the terms disclosed when you booked.
        </p>

        <h2>7. Payment disputes</h2>
        <p>
          For duplicate or incorrect charges, contact us with the charge details. We will correct errors in amounts we collected and help
          you raise charges collected by a provider. You may also have rights through your card issuer or bank.
        </p>

        <h2>8. Accessibility-related complaints</h2>
        <p>
          If a vehicle or service did not meet the accessibility requirements confirmed for your booking, or our website or phone service
          was hard to use, please tell us. We take these complaints seriously and will review them with the provider where relevant. See our{" "}
          <Link href="/accessibility/">Accessibility Statement</Link>.
        </p>

        <h2>9. Your other rights</h2>
        <p>
          This process does not limit your right to contact a consumer protection agency, your state attorney general, or any other body, or
          any rights you have by law.
        </p>

        <h2>10. How we handle complaint information</h2>
        <p>
          We use the information you give us to investigate and resolve your complaint, and may share relevant details with the provider
          involved for that purpose. See our <Link href="/privacy/">Privacy Policy</Link>.
        </p>
      </LegalPage>
    </>
  );
}
