import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/config/site";

export type Faq = { q: string; a: ReactNode };

export const faqs: Faq[] = [
  {
    q: "Who operates the vehicle?",
    a: (
      <p>
        An independent transportation provider. Mobility Assist is a booking and coordination service: we do not own the vehicles or
        employ the drivers. We tell you which provider will perform the ride before your booking is treated as confirmed. See{" "}
        <Link href="/independent-providers/" className="font-semibold text-action underline">
          our independent provider model
        </Link>
        .
      </p>
    ),
  },
  {
    q: "What does it cost?",
    a: (
      <>
        <p>
          The provider sets its own fare, which depends on distance, timing, vehicle type and the help the passenger needs.{" "}
          {site.fees.coordinationFee ?? "Mobility Assist may charge a separate booking or coordination fee."}
        </p>
        <p className="mt-2">
          Before you commit, we tell you the known fare, any Mobility Assist fee, who collects each amount and the cancellation terms. Details
          are on our{" "}
          <Link href="/fees-cancellations/" className="font-semibold text-action underline">
            Fees &amp; Cancellations
          </Link>{" "}
          page.
        </p>
      </>
    ),
  },
  {
    q: "Is a ride guaranteed once I call or submit a request?",
    a: (
      <p>
        No. A call or form submission is a request for help, not a reservation. Availability depends on location, timing, vehicle
        suitability and provider capacity, and some requests can&apos;t be fulfilled. Your trip is only confirmed when the provider, date and
        time, pickup, destination and price have all been confirmed to you.
      </p>
    ),
  },
  {
    q: "What information do you need from me?",
    a: (
      <p>
        The pickup and destination (ZIP codes are enough to start), the date and approximate time, one-way or round trip, the number of
        passengers and companions, and the mobility requirements: for example, whether the passenger stays seated in their wheelchair, the
        type of chair, and any boarding help needed. We don&apos;t need a diagnosis, Social Security number or medical history.
      </p>
    ),
  },
  {
    q: "Will the vehicle fit my wheelchair or mobility device?",
    a: (
      <p>
        Not every accessible vehicle suits every chair. Ramp or lift capacity, interior height, securement and companion seating vary. Tell us
        the chair type, approximate size and combined weight if you know them, and we confirm fit with the provider before the booking is
        finalized. We won&apos;t promise compatibility we haven&apos;t confirmed.
      </p>
    ),
  },
  {
    q: "Can I book a ride for a parent, relative or client?",
    a: (
      <p>
        Yes. Many requests come from family members and caregivers. We can keep you as the contact while making sure the provider has what it
        needs to pick up the passenger. See{" "}
        <Link href="/family-caregiver-transportation/" className="font-semibold text-action underline">
          family &amp; caregiver booking
        </Link>
        .
      </p>
    ),
  },
  {
    q: "How do cancellations work?",
    a: (
      <p>
        Cancellation deadlines and no-show charges depend on the provider and the booking. We disclose them before you commit. If you need to
        cancel or change a confirmed trip, contact the provider named in your confirmation or call us at {site.phone.display}.
      </p>
    ),
  },
  {
    q: "Do you accept insurance, Medicaid or other program payments?",
    a: (
      <p>
        Mobility Assist does not bill insurers or public programs, and we are not affiliated with any insurer, health plan or government
        agency. Some providers may accept certain program payments for eligible trips. If that matters to you, tell us when you call and we
        will ask the provider; we can&apos;t promise coverage.
      </p>
    ),
  },
  {
    q: "Is this an ambulance or emergency service?",
    a: (
      <p>
        No. Mobility Assist does not provide emergency dispatch, ambulance transportation, medical care or medical supervision during a ride.
        In an emergency, call 911.
      </p>
    ),
  },
  {
    q: "I was trying to reach a different transportation company. Is this them?",
    a: (
      <p>
        No. Mobility Assist is a separate, independent service and is not the successor to or representative of any other company. We
        don&apos;t have access to any other company&apos;s reservations, accounts or customer records. If you have an existing booking
        elsewhere, please contact that company directly. We&apos;re happy to help you arrange a new trip if you&apos;d like.
      </p>
    ),
  },
];
