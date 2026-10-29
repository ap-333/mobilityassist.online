import Link from "next/link";
import type { ReactNode } from "react";
import { faqs } from "@/content/faq";
import { photos } from "@/content/photos";
import { Photo } from "../Photo";
import { FaqAccordion } from "../FaqAccordion";
import { Section, SectionHeading } from "../PageHero";
import { ArrowRightIcon, CalendarIcon, CheckIcon, FamilyIcon, PersonIcon, PlaneIcon } from "../icons";

export const steps = [
  { title: "Tell us about the trip", body: "Share the pickup location, destination and requested time." },
  { title: "Describe the passenger's needs", body: "Explain the wheelchair or mobility-device requirements and any boarding help needed." },
  { title: "We check with providers", body: "We contact an appropriate independent provider to check availability and obtain pricing." },
  { title: "You review and decide", body: "Review the provider, fare and any applicable fees before deciding whether to proceed." },
];

export function HowItWorksSteps({ headingId = "how-heading", tone = "white" as "white" | "surface" }) {
  return (
    <Section tone={tone} labelledBy={headingId}>
      <SectionHeading id={headingId} eyebrow="How it works" title="One conversation, four simple steps" />
      <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-2xl border border-line bg-white p-6">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-action text-lg font-extrabold text-white">{i + 1}</span>
            <h3 className="mt-4 text-lg font-bold text-navy">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 max-w-3xl leading-relaxed text-muted">
        Nothing is booked until you have agreed to the provider and price and the arrangements are confirmed to you.{" "}
        <Link href="/how-it-works/" className="font-semibold text-action underline">
          More about how it works
        </Link>
      </p>
    </Section>
  );
}

const audiences = [
  { icon: PersonIcon, title: "Passengers", photo: photos.passengerCar, body: "Help finding transportation that accommodates your mobility needs.", href: "/wheelchair-transportation/" },
  { icon: FamilyIcon, title: "Families and caregivers", photo: photos.familyHug, body: "Assistance coordinating transportation for someone else.", href: "/family-caregiver-transportation/" },
  { icon: CalendarIcon, title: "Scheduled appointments", photo: photos.appointment, body: "Requests for advance bookings and return-trip arrangements.", href: "/scheduled-rides/" },
  { icon: PlaneIcon, title: "Accessible travel", photo: photos.airport, body: "Airport and longer-distance trips where a suitable provider is available.", href: "/accessible-travel/" },
];

export function WhoWeHelp() {
  return (
    <Section labelledBy="who-heading">
      <SectionHeading id="who-heading" eyebrow="Who we help" title="For passengers and the people who look after them" />
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map(({ icon: Icon, title, body, href, photo }) => (
          <li key={title}>
            <Link href={href} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-md">
              <Photo photo={photo} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="aspect-[3/2] w-full" />
              <div className="flex flex-1 flex-col p-6">
              <span className="-mt-12 inline-flex size-12 items-center justify-center rounded-xl bg-teal-50 text-teal ring-4 ring-white">
                <Icon className="size-7" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted">{body}</p>
              <span className="mt-4 inline-flex items-center gap-1 font-semibold text-action group-hover:underline">
                Learn more <ArrowRightIcon className="size-4" />
              </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 leading-relaxed text-ink">
          <CheckIcon className="mt-0.5 size-6 shrink-0 text-teal" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FaqSection({ count, tone = "surface" as "white" | "surface" }: { count?: number; tone?: "white" | "surface" }) {
  return (
    <Section tone={tone} labelledBy="faq-heading">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Questions people ask before booking" />
          <Link href="/faq/" className="mt-5 inline-flex items-center gap-1 font-semibold text-action underline">
            See all questions <ArrowRightIcon className="size-4" />
          </Link>
        </div>
        <FaqAccordion items={count ? faqs.slice(0, count) : faqs} />
      </div>
    </Section>
  );
}
