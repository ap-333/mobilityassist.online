import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero, Section } from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { faqs } from "@/content/faq";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description: "Answers about who operates the vehicle, costs, cancellations, wheelchair fit and what Mobility Assist does and doesn't do.",
  path: "/faq/",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" placement="faq-hero" />
      <Section>
        <div className="max-w-3xl">
          <FaqAccordion items={faqs} headingLevel={2} />
        </div>
      </Section>
      <CtaBand placement="faq-cta-band" title="Still have a question?" />
    </>
  );
}
