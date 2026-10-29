import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero, Section } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import { faqs } from "@/content/faq";

const page = {
  title: "Frequently Asked Questions",
  description: "Answers about who operates the vehicle, costs, cancellations, wheelchair fit and what Mobility Assist does and doesn't do.",
  path: "/faq/",
};

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page.path, page.title, page.description)} />
      <>
        <PageHero eyebrow="FAQ" title="Frequently asked questions" placement="faq-hero" />
        <Section>
          <div className="max-w-3xl">
            <FaqAccordion items={faqs} headingLevel={2} />
          </div>
        </Section>
        <CtaBand placement="faq-cta-band" title="Still have a question?" />
      </>
    </>
  );
}
