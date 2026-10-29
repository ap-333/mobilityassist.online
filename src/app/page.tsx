import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { CtaBand } from "@/components/CtaBand";
import { LinkButton } from "@/components/LinkButton";
import { Photo } from "@/components/Photo";
import { Section, SectionHeading } from "@/components/PageHero";
import { ChatIcon, MapPinIcon, ReceiptIcon, ShieldIcon } from "@/components/icons";
import { CheckList, FaqSection, HowItWorksSteps, WhoWeHelp } from "@/components/sections/shared";
import { JsonLd } from "@/components/JsonLd";
import { disclosures, site } from "@/config/site";
import { photos } from "@/content/photos";
import { pageSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd graph={pageSchema("/", `Accessible Transportation Booking | ${site.name}`, site.description)} />
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy to-action text-white">
        <div aria-hidden="true" className="absolute -right-24 -top-24 size-96 rounded-full bg-sun/15 blur-3xl" />
        <div className="container-page relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-sun">Independent booking &amp; coordination</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
              Accessible transportation, with help from a real person
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
              Need help finding a wheelchair-accessible ride? Mobility Assist helps passengers, families and caregivers connect with
              independent transportation providers and coordinate their travel arrangements.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton size="lg" variant="accent" placement="home-hero" />
              <Link
                href="/request-a-ride/"
                className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-white/80 px-7 text-lg font-bold text-white hover:bg-white/10"
              >
                Request Transportation
              </Link>
            </div>
            <p className="mt-5 max-w-xl rounded-xl bg-white/10 p-4 leading-relaxed text-white">{disclosures.independent}</p>
          </div>

          <div className="relative">
            <Photo photo={photos.vanLift} priority className="aspect-[4/5] max-h-[34rem] w-full rounded-3xl shadow-2xl" />
            <div className="relative -mt-24 mx-4 rounded-3xl bg-white p-6 text-ink shadow-xl sm:mx-8 sm:p-7">
              <h2 className="text-xl font-extrabold text-navy">When you call, we&apos;ll ask about</h2>
              <CheckListCompact
                items={[
                  "Pickup and destination ZIP codes",
                  "Date and approximate pickup time",
                  "One-way or round trip",
                  "Wheelchair or mobility-device needs",
                  "Passengers and companions riding along",
                ]}
              />
              <p className="mt-5 border-t border-line pt-4 text-[0.95rem] leading-relaxed text-muted">{disclosures.emergency}</p>
            </div>
          </div>
        </div>
      </section>

      <WhoWeHelp />
      <HowItWorksSteps tone="surface" />

      <Section labelledBy="why-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading id="why-heading" eyebrow="Why use a booking concierge?" title="Less phoning around, clearer answers" />
            <div className="mt-6">
              <CheckList
                items={[
                  "Speak with a person instead of contacting multiple operators yourself.",
                  "Explain your requirements once, in one conversation.",
                  "Compare suitable options when more than one provider is available.",
                  "Get help coordinating the trip and understanding the booking details.",
                ]}
              />
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: ShieldIcon,
                title: "Clear about our role",
                body: "We arrange rides with independent providers. We tell you who will drive before you commit.",
              },
              {
                icon: ReceiptIcon,
                title: "Prices before commitment",
                body: "You hear the known fare, any Mobility Assist fee and who collects each amount up front.",
              },
              {
                icon: ChatIcon,
                title: "A real conversation",
                body: "Questions about chair size, boarding or companions are part of the call, not an afterthought.",
              },
              { icon: MapPinIcon, title: "Honest about coverage", body: "If we can't find a suitable provider for your trip, we say so." },
            ].map(({ icon: Icon, title, body }) => (
              <li key={title} className="rounded-2xl border border-line bg-surface p-5">
                <Icon className="size-7 text-teal" />
                <h3 className="mt-3 font-bold text-navy">{title}</h3>
                <p className="mt-1.5 leading-relaxed text-muted">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface" labelledBy="coverage-heading">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              id="coverage-heading"
              eyebrow="Service coverage"
              title="Availability depends on where and when you need to go"
              intro="Whether we can arrange a ride depends on your location, the vehicle the passenger needs, the requested time and provider capacity. We check each request individually and tell you plainly if we can't find a suitable option."
            />
          </div>
          <div className="flex flex-col gap-3">
            <Photo photo={photos.caregiverSunset} className="mb-2 aspect-[16/9] w-full rounded-2xl" />
            <LinkButton href="/service-areas/">About service areas</LinkButton>
            <CallButton size="lg" label="Call to check your trip" placement="home-coverage" />
          </div>
        </div>
      </Section>

      <FaqSection count={6} tone="white" />

      <Section tone="surface" labelledBy="contact-heading">
        <SectionHeading id="contact-heading" eyebrow="Contact" title="Talk to Mobility Assist" />
        <dl className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-line bg-white p-5">
            <dt className="font-bold text-navy">Phone</dt>
            <dd className="mt-1">
              <a
                href={`tel:${site.phone.tel}`}
                data-cta="call"
                data-placement="home-contact"
                className="text-lg font-bold text-action underline"
              >
                {site.phone.display}
              </a>
            </dd>
          </div>
          {site.hours && (
            <div className="rounded-2xl border border-line bg-white p-5">
              <dt className="font-bold text-navy">Support hours</dt>
              <dd className="mt-1 text-muted">{site.hours}</dd>
            </div>
          )}
          {site.email && (
            <div className="rounded-2xl border border-line bg-white p-5">
              <dt className="font-bold text-navy">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="text-action underline">
                  {site.email}
                </a>
              </dd>
            </div>
          )}
          <div className="rounded-2xl border border-line bg-white p-5">
            <dt className="font-bold text-navy">Online</dt>
            <dd className="mt-1">
              <Link href="/request-a-ride/" className="font-semibold text-action underline">
                Request transportation
              </Link>
            </dd>
          </div>
        </dl>
      </Section>

      <CtaBand placement="home-cta-band" />
    </>
  );
}

function CheckListCompact({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((t) => (
        <li key={t} className="flex gap-2.5 leading-snug">
          <span aria-hidden="true" className="mt-1.5 size-2 shrink-0 rounded-full bg-teal" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
