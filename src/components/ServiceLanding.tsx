import type { ReactNode } from "react";
import type { Photo as PhotoData } from "@/content/photos";
import { CtaBand } from "./CtaBand";
import { DisclosureBox } from "./DisclosureBox";
import { PageHero, Section, SectionHeading } from "./PageHero";
import { CheckList, FaqSection, HowItWorksSteps } from "./sections/shared";

type Props = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: ReactNode;
  helpTitle: string;
  helpItems: ReactNode[];
  tellUsTitle?: string;
  tellUsItems: ReactNode[];
  limitsTitle?: string;
  limits: ReactNode[];
  extra?: ReactNode;
  photo?: PhotoData;
};

/** Shared layout for service and Google Ads landing pages. */
export function ServiceLanding({
  slug,
  eyebrow,
  title,
  intro,
  helpTitle,
  helpItems,
  tellUsTitle = "What to have ready when you call",
  tellUsItems,
  limitsTitle = "Good to know",
  limits,
  extra,
  photo,
}: Props) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} placement={`${slug}-hero`} photo={photo}>
        {intro}
      </PageHero>

      <Section labelledBy="help-heading">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading id="help-heading" title={helpTitle} />
            <div className="mt-6">
              <CheckList items={helpItems} />
            </div>
            <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{tellUsTitle}</h2>
            <div className="mt-6">
              <CheckList items={tellUsItems} />
            </div>
          </div>
          <div className="space-y-6">
            <DisclosureBox />
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h2 className="text-lg font-extrabold text-navy">{limitsTitle}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-muted">
                {limits.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {extra}
      <HowItWorksSteps tone="surface" />
      <FaqSection count={5} tone="white" />
      <CtaBand placement={`${slug}-cta-band`} />
    </>
  );
}
