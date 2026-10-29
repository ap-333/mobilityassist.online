import { CallButton } from "@/components/CallButton";
import { DisclosureBox } from "@/components/DisclosureBox";
import { PageHero } from "@/components/PageHero";
import { RideRequestForm } from "@/components/RideRequestForm";
import { Photo } from "@/components/Photo";
import { photos } from "@/content/photos";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const page = {
  title: "Request Transportation",
  description:
    "Send Mobility Assist the details of the accessible ride you need. We check with independent providers and contact you about availability and pricing.",
  path: "/request-a-ride/",
};

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page.path, page.title, page.description)} />
      <>
        <PageHero eyebrow="Request a ride" title="Tell us about the trip you need" showCall={false}>
          <p>
            Share a few details and a Mobility Assist representative will review your request and contact you about possible provider
            availability.
          </p>
        </PageHero>
        <section className="py-12 sm:py-16">
          <div className="container-page grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <RideRequestForm />
            <div className="space-y-6">
              <DisclosureBox />
              <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                <Photo photo={photos.phoneCall} sizes="(min-width: 1024px) 30vw, 100vw" className="aspect-[3/2] w-full" />
                <div className="p-6">
                  <h2 className="text-lg font-extrabold text-navy">Prefer to talk?</h2>
                  <p className="mt-2 leading-relaxed text-muted">Calling is usually the quickest way to work out what&apos;s possible.</p>
                  <CallButton className="mt-4" placement="request-sidebar" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
