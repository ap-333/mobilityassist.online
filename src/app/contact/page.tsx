import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { PageHero, Section } from "@/components/PageHero";
import { businessName, disclosures, site } from "@/config/site";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: "Call Mobility Assist to arrange accessible transportation, or send a ride request online.",
  path: "/contact/",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Contact Mobility Assist" showCall={false} photo={photos.couplePhone}>
        <p>The quickest way to arrange a ride is to call. You&apos;ll speak with a Mobility Assist representative.</p>
      </PageHero>
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold text-navy">Call us</h2>
            <p className="mt-2 text-3xl font-extrabold text-action">{site.phone.display}</p>
            {site.hours && <p className="mt-2 text-muted">Support hours: {site.hours}</p>}
            <CallButton size="lg" className="mt-6" placement="contact-page" />
            <p className="mt-5 leading-relaxed text-muted">{disclosures.emergency}</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h2 className="text-lg font-extrabold text-navy">Request online</h2>
              <p className="mt-2 leading-relaxed text-muted">
                Send your trip details and we&apos;ll contact you about possible availability.{" "}
                <Link href="/request-a-ride/" className="font-semibold text-action underline">
                  Request transportation
                </Link>
              </p>
            </div>
            <dl className="rounded-2xl border border-line bg-surface p-6 leading-relaxed">
              <dt className="font-bold text-navy">Business</dt>
              <dd className="text-muted">{businessName}</dd>
              {site.email && (
                <>
                  <dt className="mt-3 font-bold text-navy">Email</dt>
                  <dd>
                    <a href={`mailto:${site.email}`} className="text-action underline">
                      {site.email}
                    </a>
                  </dd>
                </>
              )}
              {site.mailingAddress && (
                <>
                  <dt className="mt-3 font-bold text-navy">Mailing address</dt>
                  <dd className="text-muted">{site.mailingAddress}</dd>
                </>
              )}
              <dt className="mt-3 font-bold text-navy">Complaints</dt>
              <dd>
                <Link href="/complaints-refunds/" className="text-action underline">
                  Complaints &amp; refunds process
                </Link>
              </dd>
            </dl>
            <p className="leading-relaxed text-muted">
              Mobility Assist is an independent service. If you&apos;re trying to reach a different transportation company about an existing
              booking, please contact that company directly.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
