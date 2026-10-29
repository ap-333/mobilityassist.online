"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { disclosures } from "@/config/site";
import { legalNav } from "@/config/routes";
import { CallButton } from "./CallButton";
import { LogoMark } from "./Logo";
import { CheckIcon, XMarkIcon } from "./icons";

const STORAGE_KEY = "ma-call-popup-seen";
const DELAY_MS = 15_000;
/** Pages where an interruption would get in the way: legal reading, contact details and the request form. */
const SKIP_PATHS = ["/contact/", "/request-a-ride/", ...legalNav.map((r) => r.href)];

function alreadySeen() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Storage unavailable (private mode); the pop-up may show again next page.
  }
}

const withSlash = (p: string) => (p.endsWith("/") ? p : `${p}/`);

/**
 * One-time call prompt, shown 15 seconds after a page loads. It appears at
 * most once per browser session, and never once the visitor has tapped a
 * call button or phone link.
 */
export function CallPopup() {
  const pathname = usePathname();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (SKIP_PATHS.includes(withSlash(pathname)) || alreadySeen()) return;

    const open = () => {
      const dialog = ref.current;
      if (!dialog || dialog.open || alreadySeen()) return cleanup();
      markSeen();
      dialog.showModal();
      cleanup();
    };
    const onCall = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest?.('[data-cta="call"]')) {
        markSeen();
        cleanup();
      }
    };

    const timer = window.setTimeout(open, DELAY_MS);
    document.addEventListener("click", onCall, true);

    function cleanup() {
      window.clearTimeout(timer);
      document.removeEventListener("click", onCall, true);
    }
    return cleanup;
  }, [pathname]);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      aria-labelledby="call-popup-title"
      aria-describedby="call-popup-desc"
      onClick={(e) => e.target === e.currentTarget && close()}
      className="m-auto w-[calc(100%-2rem)] max-w-md rounded-3xl bg-white p-0 text-ink shadow-2xl backdrop:bg-navy-900/70 backdrop:backdrop-blur-sm"
    >
      <div className="relative overflow-hidden rounded-t-3xl bg-navy px-5 pt-5 pb-6 text-white sm:px-6 sm:pt-6 sm:pb-7">
        <button
          type="button"
          onClick={close}
          className="absolute top-3 right-3 inline-flex size-10 items-center justify-center rounded-full text-white/80 hover:bg-white/10 hover:text-white"
        >
          <XMarkIcon className="size-5" />
          <span className="sr-only">Close</span>
        </button>
        <LogoMark inverted className="size-10 sm:size-12" />
        <h2 id="call-popup-title" className="mt-2 pr-8 text-xl font-extrabold leading-tight sm:mt-3 sm:text-3xl">
          Need an accessible ride? Talk to a real person.
        </h2>
        <p id="call-popup-desc" className="mt-2 text-[0.95rem] leading-relaxed text-white/85 sm:mt-3 sm:text-base">
          Tell us where you need to go and what the passenger needs. We&apos;ll check with independent local providers and explain your
          options before anything is booked.
        </p>
      </div>

      <div className="px-5 pt-5 pb-4 sm:px-6 sm:pt-6 sm:pb-6">
        <CallButton variant="accent" size="lg" placement="popup" className="w-full" />
        <ul className="mt-5 hidden space-y-2 text-[0.95rem] text-ink sm:block">
          {["Wheelchair-accessible and scheduled rides", "Fare and our fee explained before you commit", "Booking for yourself or a family member"].map(
            (t) => (
              <li key={t} className="flex gap-2">
                <CheckIcon className="mt-0.5 size-5 shrink-0 text-teal" />
                {t}
              </li>
            ),
          )}
        </ul>
        <p className="mt-4 border-t border-line pt-3 text-[0.8rem] leading-relaxed text-muted sm:pt-4 sm:text-sm">
          <strong className="text-ink">{disclosures.paid}</strong> {disclosures.independent} {disclosures.emergency}
        </p>
        <div className="mt-2 flex justify-between gap-3 sm:mt-3">
          <Link href="/request-a-ride/" onClick={close} className="py-2 text-sm font-semibold text-action hover:underline">
            Prefer to send a request?
          </Link>
          <button type="button" onClick={close} className="py-2 text-right text-sm font-semibold text-muted hover:underline">
            No thanks
          </button>
        </div>
      </div>
    </dialog>
  );
}
