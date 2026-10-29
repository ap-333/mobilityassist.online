import { ServiceLanding } from "@/components/ServiceLanding";
import { photos } from "@/content/photos";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const page = {
  title: "Scheduled Rides for Appointments",
  description:
    "Arrange accessible rides to appointments, with return trips planned in advance. Mobility Assist coordinates with independent providers and explains pricing first.",
  path: "/scheduled-rides/",
};

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page.path, page.title, page.description)} />
      <ServiceLanding
        photo={photos.appointment}
        slug="scheduled"
        eyebrow="Scheduled appointments"
        title="Rides to appointments, planned ahead"
        intro={
          <p>
            Doctor visits, therapy sessions, dialysis, the pharmacy, a family event: if you know when you need to be somewhere, we can look
            for an independent provider that can take you there and back.
          </p>
        }
        helpTitle="What we help with"
        helpItems={[
          "Advance bookings for a specific date and arrival time.",
          "Return trips, including a set pickup time or a call-when-ready arrangement where the provider offers it.",
          "Recurring appointments, checked with the provider one trip or one series at a time.",
          "Wheelchair-accessible and ambulatory passengers.",
        ]}
        tellUsItems={[
          "The appointment address or ZIP code and the time you need to arrive.",
          "Your pickup ZIP code and whether you need a return ride.",
          "How long the appointment usually takes, if you know.",
          "The passenger's mobility needs and anyone riding along.",
        ]}
        limits={[
          "Booking earlier gives the best chance of finding a suitable provider. Same-day requests are harder to fulfil.",
          "We don't bill insurance or public programs, and we aren't affiliated with any healthcare provider.",
          "Drivers are not medical staff. We don't provide medical supervision during a ride.",
          "Wait times and return-trip rules are set by the provider and explained before you commit.",
        ]}
      />
    </>
  );
}
