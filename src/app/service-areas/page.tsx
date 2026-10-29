import { CtaBand } from "@/components/CtaBand";
import { PageHero, Section, SectionHeading } from "@/components/PageHero";
import { CheckList } from "@/components/sections/shared";
import { site } from "@/config/site";
import { photos } from "@/content/photos";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const page = {
  title: "Service Areas",
  description: "Where Mobility Assist can help arrange accessible transportation, and how we check availability for each trip.",
  path: "/service-areas/",
};

export const metadata = pageMetadata(page);

export default function Page() {
  const areas = site.serviceAreas;
  return (
    <>
      <JsonLd graph={pageSchema(page.path, page.title, page.description)} />
      <>
        <PageHero eyebrow="Service areas" title="Where we can help" placement="areas-hero" photo={photos.passengerCar}>
          <p>
            We help people across the United States look for accessible transportation, but whether a ride can be arranged depends on
            whether a suitable independent provider serves your trip.
          </p>
        </PageHero>
        <Section labelledBy="areas-heading">
          {areas.length > 0 ? (
            <>
              <SectionHeading id="areas-heading" title="Areas where we currently work with providers" />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {areas.map((a) => (
                  <li key={a.region} className="rounded-2xl border border-line bg-white p-5">
                    <h3 className="font-bold text-navy">{a.region}</h3>
                    {a.notes && <p className="mt-1 text-muted">{a.notes}</p>}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-3xl leading-relaxed text-muted">
                Even within these areas, availability depends on the date, time, vehicle needed and provider capacity.
              </p>
            </>
          ) : (
            <>
              <SectionHeading
                id="areas-heading"
                title="We check every trip individually"
                intro="Rather than list places we can't reliably serve, we look at each request and tell you plainly whether a suitable provider is available."
              />
            </>
          )}
          <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-navy">What affects availability</h2>
          <div className="mt-6 max-w-3xl">
            <CheckList
              items={[
                "Where the trip starts and ends, and the distance between them.",
                "The vehicle the passenger needs, such as a ramp or lift van.",
                "The date and time requested. Advance requests are easier to fulfil.",
                "Provider capacity on the day.",
              ]}
            />
          </div>
        </Section>
        <CtaBand placement="areas-cta-band" title="Check whether we can help with your trip" />
      </>
    </>
  );
}
