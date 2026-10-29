import { disclosures, site, telHref } from "@/config/site";
import { PhoneIcon } from "./icons";

/**
 * Persistent call bar on small screens. The root layout adds matching bottom
 * padding to <body> so it never covers page content or footer links.
 */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(7,58,68,0.12)] backdrop-blur md:hidden">
      <a
        href={telHref}
        data-cta="call"
        data-placement="mobile-bar"
        className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-action px-4 font-bold text-white active:bg-action-700"
      >
        <PhoneIcon className="size-5" />
        <span>Call {site.phone.display}</span>
      </a>
      <p className="mt-1 text-center text-[0.7rem] text-muted">{disclosures.short}</p>
    </div>
  );
}
