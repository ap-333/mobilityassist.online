import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Transportation & Booking Disclosure",
  description: "Who provides the ride, how availability and pricing work, and what Mobility Assist does and does not do.",
  path: "/transportation-disclosure/",
});

export default function Page() {
  return (
    <LegalPage
      eyebrow="Disclosure"
      title="Transportation & Booking Disclosure"
      intro={<p>The essential facts about our service, in one place. Please read this before you book.</p>}
    >
      <h2>Who we are</h2>
      <p>
        Mobility Assist is an independent transportation booking and coordination service. We assist customers in identifying and arranging
        potential transportation options through independent third-party providers.
      </p>

      <h2>Who provides the ride</h2>
      <p>
        Unless a specific service is expressly described otherwise, the vehicle and driver are supplied by an independent transportation
        provider, not by Mobility Assist. The provider&apos;s identity and relevant trip arrangements will be communicated before the
        booking is treated as confirmed.
      </p>

      <h2>Availability and service area</h2>
      <p>
        Transportation is not available in every location or at every time. Availability depends on provider coverage, scheduling, vehicle
        suitability and acceptance of the requested trip. A request or inquiry does not guarantee that a ride can be arranged.
      </p>

      <h2>Accessibility</h2>
      <p>
        Vehicle accessibility depends on the passenger&apos;s needs and the specific vehicle. Ramp or lift access, wheelchair dimensions and
        weight limits, securement arrangements, companion seating and boarding assistance must be confirmed with the provider.
      </p>

      <h2>Pricing and fees</h2>
      <p>
        The transportation provider may charge a separate fare. Mobility Assist may charge a separate booking or coordination fee if that fee
        is part of the disclosed pricing arrangement. Before you commit, the applicable fare, fees, payment recipient, cancellation terms and
        any known additional charges will be disclosed. See <Link href="/fees-cancellations/">Fees &amp; Cancellations</Link>.
      </p>

      <h2>No medical or emergency service</h2>
      <p>
        Mobility Assist does not provide emergency dispatch, ambulance transportation, medical care or guaranteed medical supervision. Call
        911 for emergencies.
      </p>

      <h2>Independence and affiliation</h2>
      <p>
        Mobility Assist is not affiliated with, endorsed by or acting on behalf of a government agency, insurer, healthcare provider or
        transportation company unless a specific relationship is expressly disclosed and substantiated. Mobility Assist is not the successor
        to, or a representative of, any other transportation business, and has no access to another company&apos;s bookings or records.
      </p>
    </LegalPage>
  );
}
