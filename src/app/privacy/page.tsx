import Link from "next/link";
import { ContactMethods, LegalPage } from "@/components/LegalPage";
import { businessName, site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Mobility Assist collects, uses, shares and protects personal information when you request or book transportation.",
  path: "/privacy/",
});

export default function Page() {
  const privacyEmail = site.privacyEmail ?? site.email;
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This policy explains how {businessName} (&ldquo;Mobility Assist&rdquo;) handles personal information when you visit
        MobilityAssist.online, call us, or ask us to help arrange transportation.
      </p>

      <h2>1. Who is responsible for your information</h2>
      <p>
        {businessName} is responsible for the personal information described in this policy. For privacy questions or requests,{" "}
        <ContactMethods email={privacyEmail} placement="privacy-identity" />.
        {site.mailingAddress && <> Our mailing address is {site.mailingAddress}.</>}
      </p>

      <h2>2. Information we collect</h2>
      <p>
        Depending on how you interact with Mobility Assist, we may collect your name, telephone number, email address, pickup and destination
        information, requested travel date and time, number of passengers, mobility-device and vehicle-fit requirements, booking status and
        communications concerning your request.
      </p>
      <p>
        We may also collect technical information such as IP address, browser and device information, referring pages, website interactions
        and advertising attribution data, subject to the technologies used and your applicable privacy choices.
      </p>
      <p>
        We do not ask for diagnoses, Social Security numbers, insurance member IDs or medical history in our standard request process. Please
        don&apos;t include them in forms or messages unless we specifically ask through an appropriately protected channel and explain why.
      </p>

      <h2>3. How we use information</h2>
      <p>
        We use information to respond to inquiries, assess whether a suitable provider may be available, obtain quotes, coordinate bookings,
        communicate trip details, handle cancellations and complaints, prevent fraud, maintain records and measure the performance of our
        services and advertising. Where a law requires a legal basis or consent for a particular use, we rely on the basis that applies, such
        as performing the service you asked for, your consent, or our legitimate business interests.
      </p>

      <h2>4. Sharing with transportation providers and service vendors</h2>
      <p>
        Where necessary to fulfil a request, we may share relevant trip details and contact information with independent transportation
        providers and booking partners. We limit the information shared to what is reasonably necessary for the requested service.
      </p>
      <p>
        Independent providers may process information under their own privacy practices. We will explain the provider&apos;s identity and
        relevant terms before you commit to a booking, where applicable.
      </p>
      <p>
        We also use service vendors that help us operate, such as website hosting, form handling, phone systems and customer-record tools.
        They may process information on our behalf for those purposes. We may disclose information where required by law or to protect the
        rights and safety of our customers, providers or others.
      </p>

      <h2>5. Advertising, analytics, call tracking and cookies</h2>
      <p>
        We may use website analytics and advertising measurement technologies, such as Google Ads conversion tracking, to understand which
        marketing activities generate inquiries and completed bookings. Depending on the configuration, these technologies may collect device,
        browser, referral, page-interaction and conversion information and may use cookies or similar technologies.
      </p>
      <p>
        We will configure advertising and analytics technologies according to applicable law and the privacy choices presented to visitors.
        We will not intentionally send passenger names, contact details, destinations, detailed mobility requirements, diagnoses, full trip
        notes or other sensitive booking information to advertising platforms as conversion parameters. You can limit cookies through your
        browser settings and manage Google ad personalization in your Google account settings.
      </p>
      <p>
        If we record phone calls for quality or training purposes, we will tell you at the start of the call and follow the consent rules
        that apply in the relevant states.
      </p>

      <h2>6. Retention and deletion</h2>
      <p>
        We retain information for as long as reasonably necessary for the purposes described in this policy, including service delivery,
        dispute handling, accounting, legal compliance and legitimate business recordkeeping. Retention periods vary according to the type of
        record and applicable requirements. When information is no longer needed, we delete or de-identify it.
      </p>

      <h2>7. Security</h2>
      <p>
        We use reasonable administrative, technical and organizational safeguards to protect personal information, including encrypted
        (HTTPS) connections to our website and limiting staff access to what their role requires. No system can be guaranteed to be
        completely secure.
      </p>

      <h2>8. Your privacy rights</h2>
      <p>
        Depending on your state of residence and the applicable law, you may have rights to request access to, correction of or deletion of
        certain personal information, or to opt out of certain targeted advertising, sale or sharing practices. To make a request,{" "}
        <ContactMethods email={privacyEmail} placement="privacy-rights" />. We will verify and respond to requests in accordance with
        applicable law, and we will not discriminate against you for exercising your rights. Where the law allows, you may use an authorized
        agent, and you may appeal a decision on your request by contacting us the same way.
      </p>

      <h2>9. Health-related information</h2>
      <p>
        Trip details can sometimes reveal health-related information, such as a trip to a medical facility or a mobility need. We treat this
        information carefully and use it only to arrange the requested transportation. Whether particular health-privacy laws apply depends
        on the specific relationship and data flow; Mobility Assist is not a healthcare provider or health plan.
      </p>

      <h2>10. Children&apos;s information</h2>
      <p>
        Our website is not directed to children under 13, and we do not knowingly collect their personal information online. A parent or
        guardian may arrange transportation for a minor by calling us.
      </p>

      <h2>11. Where information is processed</h2>
      <p>
        We operate in the United States. Some service vendors may process information in other locations, subject to appropriate contractual
        safeguards.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We may update this policy as our practices change. The &ldquo;Last updated&rdquo; date shows the latest version. If we make material
        changes, we will take reasonable steps to let you know.
      </p>

      <h2>13. Questions and complaints</h2>
      <p>
        For privacy questions or complaints, <ContactMethods email={privacyEmail} placement="privacy-contact" />. You can also see our{" "}
        <Link href="/complaints-refunds/">Complaints &amp; Refunds</Link> page.
      </p>
    </LegalPage>
  );
}
