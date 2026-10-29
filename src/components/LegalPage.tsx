import type { ReactNode } from "react";
import { site } from "@/config/site";
import { PhoneLink } from "./CallButton";
import { PageHero } from "./PageHero";

export function LegalPage({ title, eyebrow = "Legal", intro, children }: { title: string; eyebrow?: string; intro?: ReactNode; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} showCall={false}>
        {intro}
        <p className="text-base">Last updated {new Date(`${site.lastUpdated}T12:00:00Z`).toLocaleDateString("en-US", { dateStyle: "long" })}</p>
      </PageHero>
      <section className="py-12 sm:py-16">
        <div className="container-page">
          {site.prelaunch && (
            <p role="note" className="mb-8 max-w-3xl rounded-xl bg-amber-100 p-4 text-amber-950">
              <strong>Template notice:</strong> this page is a drafting foundation, not legal advice. Have it reviewed by US counsel for
              the states where you operate and updated to match your actual booking, payment and provider arrangements before launch.
            </p>
          )}
          <div className="prose-legal max-w-3xl">{children}</div>
        </div>
      </section>
    </>
  );
}

/** "call 888-317-4337 (Mon–Fri ...) or email x" with only the details that are configured. */
export function ContactMethods({ email = site.email, placement }: { email?: string | null; placement: string }) {
  return (
    <>
      call <PhoneLink placement={placement} />
      {site.hours && <> during our support hours ({site.hours})</>}
      {email && (
        <>
          {" "}
          or email <a href={`mailto:${email}`}>{email}</a>
        </>
      )}
    </>
  );
}
