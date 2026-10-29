import Link from "next/link";
import { companyNav, legalNav, serviceNav, type Route } from "@/config/routes";
import { businessName, disclosures, site } from "@/config/site";
import { PhoneLink } from "./CallButton";
import { Logo } from "./Logo";

function FooterColumn({ title, links }: { title: string; links: Route[] }) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-wider text-white/90">{title}</h2>
      <ul className="mt-3 space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="inline-block py-1 text-white/80 hover:text-white hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-sm leading-relaxed text-white/85">{disclosures.independent}</p>
          <p className="mt-3 max-w-sm leading-relaxed text-white/85">
            {disclosures.paid}{" "}
            <Link href="/pricing/" className="font-semibold text-white underline">
              See plans
            </Link>
          </p>
          <p className="mt-4">
            <span className="text-white/70">Call: </span>
            <PhoneLink placement="footer" className="text-white" />
          </p>
          {site.hours && <p className="mt-1 text-white/75">Support hours: {site.hours}</p>}
          {site.email && (
            <p className="mt-1">
              <a href={`mailto:${site.email}`} className="text-white/85 hover:underline">
                {site.email}
              </a>
            </p>
          )}
          {site.mailingAddress && <p className="mt-1 text-white/75">{site.mailingAddress}</p>}
        </div>
        <FooterColumn title="Services" links={serviceNav} />
        <FooterColumn title="Company" links={companyNav} />
        <FooterColumn title="Legal & Disclosures" links={legalNav} />
      </div>
      <div className="border-t border-white/15">
        <div className="container-page space-y-3 py-7 leading-relaxed text-white/80">
          <p>
            <strong className="text-white">Not an emergency service.</strong> Mobility Assist does not provide emergency dispatch,
            ambulance transportation, medical care or medical supervision. In an emergency, call 911.
          </p>
          <p>{disclosures.affiliation}</p>
          <p className="text-sm text-white/65">
            Photos from Unsplash, used under the Unsplash License. People pictured are models, not Mobility Assist customers or
            providers.
          </p>
          <p className="text-sm text-white/65">
            © {new Date().getFullYear()} {businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
