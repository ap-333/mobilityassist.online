import { CtaBand } from "@/components/CtaBand";
import { DisclosureBox } from "@/components/DisclosureBox";
import { PageHero, Section, SectionHeading } from "@/components/PageHero";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How It Works",
  description: "How Mobility Assist coordinates accessible transportation with independent providers, from your first call to a confirmed booking.",
  path: "/how-it-works/",
});

const stages = [
  {
    title: "1. Your inquiry",
    body: "You call us or send a request. Tell us where and when you need to go, who is travelling and what the passenger needs. A request is not yet a booking.",
  },
  {
    title: "2. Requirements and availability",
    body: "We confirm the pickup area, timing, trip type and mobility needs, then identify independent providers that may be able to handle the trip.",
  },
  {
    title: "3. Provider and price confirmation",
    body: "An independent provider confirms it can take the trip, that its vehicle suits the passenger, and what it will charge.",
  },
  {
    title: "4. Your decision",
    body: "We tell you the provider's name, the fare, any separate Mobility Assist fee, who collects each payment and the cancellation terms. You decide whether to go ahead.",
  },
  {
    title: "5. Booking confirmed",
    body: "Once you accept, the arrangements are confirmed to you with the provider's details. Only then is the trip a confirmed booking.",
  },
  {
    title: "6. On the day and after",
    body: "The provider performs the ride. If something goes wrong, contact the provider or us. We help with follow-up and complaints about our coordination.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="How it works" title="From your first call to a confirmed ride" placement="how-hero" photo={photos.phoneCall}>
        <p>
          Mobility Assist is a booking and coordination service. We do the legwork of finding a suitable independent provider; the provider
          performs the ride.
        </p>
      </PageHero>
      <Section labelledBy="stages-heading">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeading id="stages-heading" title="What happens, step by step" />
            <ol className="mt-8 space-y-5">
              {stages.map((s) => (
                <li key={s.title} className="rounded-2xl border border-line bg-white p-6">
                  <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <DisclosureBox className="h-fit lg:sticky lg:top-32" />
        </div>
      </Section>
      <CtaBand placement="how-cta-band" />
    </>
  );
}
