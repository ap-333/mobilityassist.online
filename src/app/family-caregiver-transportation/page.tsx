import { ServiceLanding } from "@/components/ServiceLanding";
import { photos } from "@/content/photos";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const page = {
  title: "Arrange Transportation for a Family Member",
  description:
    "Book an accessible ride for a parent, relative or client. Mobility Assist coordinates with independent providers and keeps you informed as the booking contact.",
  path: "/family-caregiver-transportation/",
};

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page.path, page.title, page.description)} />
      <ServiceLanding
        photo={photos.caregiverPark}
        slug="caregiver"
        eyebrow="Family & caregiver booking"
        title="Arranging a ride for someone you care for"
        intro={
          <p>
            You may live in another city, be juggling work, or simply want one person to handle the phone calls. We help you find an
            independent provider for your parent, relative or client, and keep you in the loop as the booking contact.
          </p>
        }
        helpTitle="How we help families and caregivers"
        helpItems={[
          "You stay the contact for quotes and confirmations, even if you're not riding.",
          "We pass the provider only what it needs to pick up the passenger safely.",
          "Help planning return trips so nobody is left waiting without a ride home.",
          "Clear confirmation of who will drive, when, and what it costs, so you can share it with the passenger.",
        ]}
        tellUsItems={[
          "The passenger's name and a phone number they or someone with them can answer on the day.",
          "Pickup and destination, date and time, one-way or round trip.",
          "Mobility needs and any help required at the door.",
          "Whether you or another companion will ride along.",
        ]}
        limits={[
          "Only share the passenger's details if you're authorized to arrange travel for them.",
          "We don't need diagnoses or medical records to arrange a ride.",
          "Drivers are not caregivers or medical staff. Arrange supervision separately if the passenger needs it.",
          "Mobility Assist is not a medical, home-care or emergency service.",
        ]}
      />
    </>
  );
}
