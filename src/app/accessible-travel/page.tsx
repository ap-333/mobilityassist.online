import { ServiceLanding } from "@/components/ServiceLanding";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Accessible Airport & Long-Distance Rides",
  description:
    "Looking for an accessible ride to the airport or a longer trip? Mobility Assist checks whether a suitable independent provider is available and explains the price first.",
  path: "/accessible-travel/",
});

export default function Page() {
  return (
    <ServiceLanding
      photo={photos.airport}
      slug="travel"
      eyebrow="Accessible travel"
      title="Airport and longer-distance accessible rides"
      intro={
        <p>
          Airport runs and trips between cities need the right vehicle and a provider willing to cover the distance. We ask whether a
          suitable independent provider is available for your journey and tell you honestly if we can&apos;t find one.
        </p>
      }
      helpTitle="Trips we can look into"
      helpItems={[
        "Rides to and from the airport, including wheelchair-accessible vehicles where available.",
        "Longer trips between towns or cities, subject to provider coverage.",
        "Room for luggage, mobility equipment and a travel companion.",
        "Timing your pickup around flight times.",
      ]}
      tellUsItems={[
        "Pickup and destination, plus the airport and terminal if relevant.",
        "Flight times, if the ride connects to a flight.",
        "Luggage and any extra mobility equipment travelling with you.",
        "The passenger's mobility needs and companions.",
      ]}
      limits={[
        "Not every provider offers airport or long-distance trips. Coverage for these trips is more limited.",
        "Fares for longer trips can vary widely. You'll hear the quote before you commit.",
        "We don't arrange airline wheelchair assistance. Request that directly from your airline.",
        "Please allow extra time: flight delays may affect pickup arrangements and charges, as set by the provider.",
      ]}
    />
  );
}
