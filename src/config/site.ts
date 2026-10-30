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
    "Book wheelchair-accessible and scheduled rides with help from a real person. We coordinate with independent local providers and explain costs before you commit.",

  /**
   * While true, legal pages carry a template notice and robots/meta tags
   * block indexing. Set to false once the launch checklist is done.
   */
  prelaunch: true,

  phone: {
    display: "888-450-3026",
    tel: "+18884503026",
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
    coordinationFee:
      "Mobility Assist charges its own coordination fee, separate from the fare: $29 per confirmed one-way trip, $49 per confirmed round trip, or $149 a month on the Care Plan." as
        | string
        | null,
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

  /** Official social or directory profiles (Google Business Profile, Facebook, LinkedIn, Yelp). Used in structured data. */
  socialProfiles: [] as string[],

  /** Search engine ownership tags. Paste only the token from Google Search Console or Bing Webmaster Tools. */
  googleSiteVerification: null as string | null,
  bingSiteVerification: null as string | null,

  /** Google Analytics 4 measurement ID. Set to null to remove it from every page. */
  googleAnalyticsId: "G-DKQEDVEDHT" as string | null,
  /** Google Ads tag (gtag.js). Set to null to remove the tag from every page. */
  googleAdsId: "AW-18397689422" as string | null,
  /** Conversion sent when a visitor taps any call button or phone link. */
  googleAdsCallConversion: null as string | null, // e.g. "AW-XXXXXXXXXX/abc123"
  /** Conversion sent when the ride-request form is accepted. Carries no form data. */
  googleAdsFormConversion: null as string | null,

  lastUpdated: "2026-10-29",
} as const;

/**
 * Mobility Assist's own paid plans. These fees cover booking and coordination
 * only; the transportation fare is always separate and set by the provider.
 */
export const plans = [
  {
    id: "one-way",
    name: "One-Way Ride",
    price: 29,
    unit: "per confirmed one-way trip",
    summary: "For a single trip, such as getting to an appointment when you already have a ride home.",
    features: [
      "We check with independent providers for a suitable vehicle",
      "Wheelchair and mobility-device needs discussed on the call",
      "Provider, fare and cancellation terms explained before you commit",
      "Trip details confirmed to you by phone",
    ],
  },
  {
    id: "round-trip",
    name: "Round Trip",
    price: 49,
    unit: "per confirmed round trip",
    summary: "For appointments and outings where the passenger needs to get there and back.",
    features: [
      "Everything in One-Way Ride, for both legs of the trip",
      "Outbound and return pickups coordinated together",
      "Ride-day support: call us if the return time changes",
    ],
    featured: true,
  },
  {
    id: "care-plan",
    name: "Care Plan",
    price: 149,
    unit: "per month",
    summary: "For regular trips, such as therapy or dialysis schedules, booked by the passenger or a family caregiver.",
    features: [
      "Coordination of up to 8 one-way trips a month (a round trip counts as 2)",
      "A dedicated coordinator who knows the passenger's needs",
      "Trip updates to a family member or caregiver you name",
      "Recurring appointments scheduled in advance",
      "Extra trips that month at $29 per one-way trip",
    ],
  },
] as const;

/** When plan fees are charged and refunded. Shown on the Pricing and Fees pages. */
export const planTerms = [
  "Plan fees are for Mobility Assist's booking and coordination only. They do not include the transportation fare.",
  "The fare is set by the independent provider and quoted to you separately before you commit.",
  "One-Way Ride and Round Trip fees are charged only when your trip is confirmed. No fee is charged for calls, quotes or requests that don't result in a confirmed trip.",
  "Once a trip is confirmed, its plan fee is non-refundable, including if you cancel or change the trip. It is refunded in full if the provider cancels or no ride can be provided.",
  "The Care Plan is billed monthly in advance from the day you join and renews each month until you cancel. Cancel by phone at any time before your next billing date to stop future charges. The current month's fee is non-refundable, and unused trips don't carry over.",
];

export const disclosures = {
  independent:
    "Mobility Assist is an independent booking and coordination service. Transportation is provided by third-party operators, subject to availability and confirmation.",
  paid: "Mobility Assist is a paid service. Our coordination fee is $29 per confirmed one-way trip, $49 per confirmed round trip, or $149 a month on the Care Plan. The ride fare is separate and set by the provider.",
  short: "Paid booking & coordination service · Not an emergency service",
  emergency: "Mobility Assist is not an emergency or ambulance service. In an emergency, call 911.",
  fees: "Before you commit, we tell you the ride fare, our coordination fee, who collects each amount and the cancellation terms. Our fee is non-refundable once a trip is confirmed.",
  affiliation:
    "Mobility Assist is not affiliated with, endorsed by or acting for any government agency, insurer, healthcare provider or transportation company unless a specific relationship is expressly disclosed.",
  notReservation:
    "A request is not a confirmed reservation. Your trip is only confirmed when the provider, time, pickup, destination and price have all been confirmed to you.",
} as const;

export const telHref = `tel:${site.phone.tel}`;

/** The business identity used on legal pages. */
export const businessName = site.legalName ?? site.name;
