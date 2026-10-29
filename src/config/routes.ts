export type Route = { href: string; label: string };

export const primaryNav: Route[] = [
  { href: "/how-it-works/", label: "How It Works" },
  { href: "/wheelchair-transportation/", label: "Wheelchair Rides" },
  { href: "/scheduled-rides/", label: "Scheduled Rides" },
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/faq/", label: "FAQ" },
];

export const serviceNav: Route[] = [
  { href: "/wheelchair-transportation/", label: "Wheelchair-Accessible Rides" },
  { href: "/scheduled-rides/", label: "Scheduled Appointments" },
  { href: "/family-caregiver-transportation/", label: "Family & Caregiver Booking" },
  { href: "/accessible-travel/", label: "Accessible Travel" },
  { href: "/how-it-works/", label: "How It Works" },
];

export const companyNav: Route[] = [
  { href: "/about/", label: "About Mobility Assist" },
  { href: "/independent-providers/", label: "Our Independent Provider Model" },
  { href: "/request-a-ride/", label: "Request a Ride" },
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

export const legalNav: Route[] = [
  { href: "/terms/", label: "Terms of Service" },
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/transportation-disclosure/", label: "Transportation & Booking Disclosure" },
  { href: "/fees-cancellations/", label: "Fees & Cancellations" },
  { href: "/advertising-disclosure/", label: "Advertising Disclosure" },
  { href: "/accessibility/", label: "Accessibility Statement" },
  { href: "/complaints-refunds/", label: "Complaints & Refunds" },
];

/** Every indexable page, used by the sitemap. */
export const allRoutes = [
  "/",
  ...new Set([...serviceNav, ...companyNav, ...legalNav].map((r) => r.href)),
];
