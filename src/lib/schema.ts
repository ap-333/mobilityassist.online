import { isValidElement, type ReactNode } from "react";
import { companyNav, legalNav, serviceNav } from "@/config/routes";
import { businessName, site } from "@/config/site";
import { faqs } from "@/content/faq";

/**
 * schema.org structured data (JSON-LD) for search engines. Only facts the
 * site already states are described: no ratings, prices, addresses or
 * coverage claims that aren't in src/config/site.ts.
 */

const orgId = `${site.url}/#organization`;
const siteId = `${site.url}/#website`;
const abs = (path: string) => `${site.url}${path}`;

const labels: Record<string, string> = Object.fromEntries(
  [...serviceNav, ...companyNav, ...legalNav].map((r) => [r.href, r.label]),
);

/** Service pages and what each one offers, for Service markup. */
const services: Record<string, { name: string; serviceType: string; description: string }> = {
  "/wheelchair-transportation/": {
    name: "Wheelchair-accessible ride booking",
    serviceType: "Wheelchair-accessible transportation booking and coordination",
    description: "Help finding and booking independent providers with ramp- or lift-equipped vehicles, with the fare and any fees explained before you commit.",
  },
  "/scheduled-rides/": {
    name: "Scheduled appointment ride booking",
    serviceType: "Scheduled transportation booking and coordination",
    description: "Advance booking of accessible rides to appointments, including return trips, through independent transportation providers.",
  },
  "/family-caregiver-transportation/": {
    name: "Family and caregiver ride booking",
    serviceType: "Transportation booking for family members and caregivers",
    description: "Arranging accessible rides for a parent, relative or client, with the family member or caregiver kept as the booking contact.",
  },
  "/accessible-travel/": {
    name: "Accessible airport and long-distance ride booking",
    serviceType: "Accessible airport and long-distance transportation booking",
    description: "Checking whether a suitable independent provider is available for accessible airport and longer-distance trips.",
  },
};

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    ...(site.legalName && { legalName: businessName }),
    url: abs("/"),
    logo: { "@type": "ImageObject", url: abs("/logo.png"), width: 512, height: 512 },
    image: abs("/opengraph-image.png"),
    description: site.description,
    telephone: site.phone.tel,
    ...(site.email && { email: site.email }),
    areaServed: { "@type": "Country", name: "United States" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone.tel,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
      ...(site.email && { email: site.email }),
    },
    ...(site.socialProfiles.length > 0 && { sameAs: site.socialProfiles }),
  };
}

export function websiteSchema() {
  return { "@type": "WebSite", "@id": siteId, url: abs("/"), name: site.name, inLanguage: "en-US", publisher: { "@id": orgId } };
}

/** Plain text of a React tree, for FAQ answers written as JSX. */
function textOf(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) {
    const text = textOf(node.props.children);
    return node.type === "p" || node.type === "li" ? ` ${text} ` : text;
  }
  return "";
}

/** The per-page graph: WebPage, breadcrumbs, and Service or FAQPage where they apply. */
export function pageSchema(path: string, title: string, description: string) {
  const url = abs(path);
  const graph: Record<string, unknown>[] = [
    {
      "@type": path === "/faq/" ? ["WebPage", "FAQPage"] : "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: "en-US",
      isPartOf: { "@id": siteId },
      about: { "@id": orgId },
      ...(path !== "/" && { breadcrumb: { "@id": `${url}#breadcrumb` } }),
      ...(path === "/faq/" && {
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: textOf(f.a).replace(/\s+/g, " ").trim() },
        })),
      }),
    },
  ];
  if (path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
        { "@type": "ListItem", position: 2, name: labels[path] ?? title, item: url },
      ],
    });
  }
  const service = services[path];
  if (service) {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      ...service,
      url,
      provider: { "@id": orgId },
      areaServed: { "@type": "Country", name: "United States" },
      audience: { "@type": "Audience", audienceType: "Passengers with mobility needs, families and caregivers" },
    });
  }
  return graph;
}

export function jsonLd(graph: Record<string, unknown>[]) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
}
