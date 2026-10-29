/**
 * Central site configuration.
 *
 * Every phone CTA, disclosure, contact detail and legal-page variable reads
 * from this file. Optional values left as null are hidden from the site, and
 * legal pages fall back to "call us" wording instead of showing blanks.
 * Before launch, fill in verified details and set `prelaunch` to false.
 */

export const site = {
  name: "Mobility Assist",
  url: "https://mobilityassist.online",
  domainLabel: "MobilityAssist.online",
  tagline: "Accessible transportation, arranged with a real person",
  description:
    "Independent booking and coordination service. Mobility Assist helps passengers, families and caregivers find and arrange wheelchair-accessible and scheduled rides with independent local transportation providers.",

  /**
   * While true, a visible notice tells visitors the site is in preview, the
   * request form does not send, legal pages carry a template notice, and
   * robots/meta tags block indexing.
   */
  prelaunch: true,

  phone: {
    display: "888-317-4337",
    tel: "+18883174337",
    /**
     * Set to true once the number is fully under your control, answered as
     * Mobility Assist, and no longer listed as another company's line.
     */
    verified: false,
  },

  // Optional details. Leave as null to hide them from the site.
  email: null as string | null, // e.g. "help@mobilityassist.online"
  privacyEmail: null as string | null, // e.g. "privacy@mobilityassist.online"
  accessibilityEmail: null as string | null, // e.g. "accessibility@mobilityassist.online"
  hours: null as string | null, // e.g. "Mon–Fri, 8 a.m.–6 p.m. ET"
  legalName: null as string | null, // registered business name, e.g. "Mobility Assist LLC"
  mailingAddress: null as string | null,
  /** State whose law governs the Terms of Service. Confirm with counsel. */
  governingState: null as string | null,

  /**
   * Verified places where you can realistically arrange rides. Leave empty
   * until coverage is confirmed; the Service Areas page then explains that
   * availability is checked case by case. Never list areas you can't serve.
   */
  serviceAreas: [] as { region: string; notes?: string }[],

  fees: {
    /**
     * A short, accurate statement of what Mobility Assist itself charges,
     * e.g. "A $__ coordination fee per confirmed one-way trip, paid to
     * Mobility Assist." When null, the site says any fee is disclosed
     * before you commit.
     */
    coordinationFee: null as string | null,
    /** Who collects the transportation fare, e.g. "The provider collects the fare directly." */
    fareCollection: null as string | null,
    /** Whether Mobility Assist may receive a referral commission from providers. Confirm before launch. */
    mayReceiveProviderCompensation: true,
  },

  /**
   * Where the ride-request form posts JSON (Formspree, Basin, your CRM's
   * webhook, etc.). While null, the form is shown but cannot be submitted.
   */
  requestFormEndpoint: null as string | null,

  /** Google Ads tag (gtag.js). Set to null to remove the tag from every page. */
  googleAdsId: null as string | null, // e.g. "AW-XXXXXXXXXX"
  /** Conversion sent when a visitor taps any call button or phone link. */
  googleAdsCallConversion: null as string | null, // e.g. "AW-XXXXXXXXXX/abc123"
  /** Conversion sent when the ride-request form is accepted. Carries no form data. */
  googleAdsFormConversion: null as string | null,

  lastUpdated: "2026-10-29",
} as const;

export const disclosures = {
  independent:
    "Mobility Assist is an independent booking and coordination service. Transportation is provided by third-party operators, subject to availability and confirmation.",
  short: "Independent booking & coordination service · Not an emergency service",
  emergency: "Mobility Assist is not an emergency or ambulance service. In an emergency, call 911.",
  fees: "Before you commit, we tell you the known fare, any separate Mobility Assist fee, who collects each amount and the cancellation terms.",
  affiliation:
    "Mobility Assist is not affiliated with, endorsed by or acting for any government agency, insurer, healthcare provider or transportation company unless a specific relationship is expressly disclosed.",
  notReservation:
    "A request is not a confirmed reservation. Your trip is only confirmed when the provider, time, pickup, destination and price have all been confirmed to you.",
} as const;

export const telHref = `tel:${site.phone.tel}`;

/** The business identity used on legal pages. */
export const businessName = site.legalName ?? site.name;
