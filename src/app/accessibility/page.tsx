import { ContactMethods, LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const page = {
  title: "Accessibility Statement",
  description: "Mobility Assist's approach to website accessibility and how to get help if something doesn't work for you.",
  path: "/accessibility/",
};

export const metadata = pageMetadata(page);

export default function Page() {
  return (
    <>
      <JsonLd graph={pageSchema(page.path, page.title, page.description)} />
      <LegalPage eyebrow="Accessibility" title="Accessibility Statement">
        <h2>Our commitment</h2>
        <p>
          Mobility Assist aims to make its website usable by people with a range of abilities, including people who use screen readers,
          keyboard navigation, magnification or other assistive technologies.
        </p>

        <h2>What we&apos;ve built in</h2>
        <ul>
          <li>Readable text sizes and sufficient contrast between text and backgrounds.</li>
          <li>Clear, semantic headings and page landmarks, with a &ldquo;Skip to content&rdquo; link.</li>
          <li>Keyboard-accessible navigation with visible focus indicators.</li>
          <li>Form fields with visible labels and error messages that explain what to fix.</li>
          <li>Important disclosures written as text, not placed inside images.</li>
          <li>Layouts that work when zoomed and on small screens, and that respect reduced-motion settings.</li>
        </ul>

        <h2>Known limitations</h2>
        <p>
          We are continuing to test the site with assistive technologies. Some parts may not yet work as well as we would like. We do not
          claim that the site is fully conformant with any particular standard until it has been independently tested.
        </p>

        <h2>Need help or found a problem?</h2>
        <p>
          If you encounter difficulty accessing information or submitting a transportation request, please{" "}
          <ContactMethods email={site.accessibilityEmail ?? site.email} placement="accessibility-contact" />. Please describe the page or
          function causing difficulty and, if possible, the type of assistance you need. We will review the issue and work to provide an
          accessible alternative. You can always request transportation by phone instead of using the online form.
        </p>
      </LegalPage>
    </>
  );
}
