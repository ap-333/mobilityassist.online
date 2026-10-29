"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav } from "@/config/routes";
import { disclosures, site, telHref } from "@/config/site";
import { CallButton } from "./CallButton";
import { Logo } from "./Logo";
import { MenuIcon, PhoneIcon, XMarkIcon } from "./icons";

const mobileNav = [
  ...primaryNav,
  { href: "/family-caregiver-transportation/", label: "Family & Caregiver Booking" },
  { href: "/accessible-travel/", label: "Accessible Travel" },
  { href: "/request-a-ride/", label: "Request a Ride" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname === href.replace(/\/$/, "");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="bg-navy-900 text-white">
        <div className="container-page flex min-h-9 items-center justify-between gap-4 py-1.5 text-xs sm:text-sm">
          <p className="font-medium">{disclosures.short}</p>
          <a href={telHref} data-cta="call" data-placement="utility-bar" className="hidden shrink-0 font-semibold hover:underline sm:inline">
            Call {site.phone.display}
          </a>
        </div>
      </div>

      <div className="container-page flex min-h-16 items-center justify-between gap-4 py-2">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[0.95rem] font-semibold transition-colors hover:bg-surface xl:px-3.5 ${
                    isActive(item.href) ? "bg-action-50 text-action-700" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden shrink-0 sm:block">
            <CallButton placement="header" className="whitespace-nowrap" />
          </div>
          <a
            href={telHref}
            data-cta="call"
            data-placement="header-mobile"
            aria-label={`Call Mobility Assist, ${site.phone.display}`}
            className="inline-flex size-11 items-center justify-center rounded-full bg-action text-white sm:hidden"
          >
            <PhoneIcon className="size-5" />
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-navy hover:bg-surface xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <XMarkIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="max-h-[70vh] overflow-y-auto border-t border-line bg-white xl:hidden">
        <ul className="container-page grid gap-1 py-3">
          {mobileNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block rounded-lg px-3 py-3 text-base font-semibold ${
                  isActive(item.href) ? "bg-action-50 text-action-700" : "text-ink hover:bg-surface"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
