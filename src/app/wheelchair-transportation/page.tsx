import { ServiceLanding } from "@/components/ServiceLanding";
import { photos } from "@/content/photos";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const page = {
  title: "Wheelchair-Accessible Transportation Booking",
  description:
    "Need a wheelchair-accessible ride? Mobility Assist helps you find and book suitable independent providers, with the fare and any fees explained before you commit.",
  path: "/wheelchair-transportation/",
};

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page.path, page.title, page.description)} />
      <ServiceLanding
        photo={photos.vanLiftSquare}
        slug="wheelchair"
        eyebrow="Wheelchair-accessible rides"
        title="Help booking a wheelchair-accessible ride"
        intro={
          <p>
            Tell us about the passenger and the trip. We check with independent local providers that operate ramp or lift vehicles, confirm
            the details that matter for fit, and explain the fare and fees before anything is booked.
          </p>
        }
        helpTitle="What we help with"
        helpItems={[
          "Finding a provider with a ramp- or lift-equipped vehicle for your trip.",
          "Rides where the passenger stays seated in their wheelchair, or transfers to a vehicle seat.",
          "Manual chairs, power chairs and scooters, subject to the provider's vehicle limits.",
          "Room for a companion or caregiver to ride along, where the vehicle allows.",
          "Return trips and pickups at a set time.",
        ]}
        tellUsItems={[
          "Pickup and destination ZIP codes, plus the requested date and time.",
          "Chair type (manual, power, scooter) and approximate size and combined weight, if known.",
          "Whether the passenger stays in the chair during the ride.",
          "Steps, stairs or tight entrances at pickup or drop-off.",
          "Any help needed getting from the door to the vehicle.",
        ]}
        limits={[
          "A wheelchair-accessible vehicle is not automatically suitable for every chair. We confirm fit with the provider first.",
          "Ramp or lift capacity, securement and companion seating vary by vehicle.",
          "We don't provide stretcher, ambulance or medically supervised transport.",
          "Availability varies by location and time, and some requests can't be fulfilled.",
        ]}
      />
    </>
  );
}
