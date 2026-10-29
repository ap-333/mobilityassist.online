import Link from "next/link";
import { disclosures } from "@/config/site";
import { ReceiptIcon } from "./icons";

/** A plain statement that Mobility Assist charges for its service, with a link to the plans. */
export function PaidServiceNotice({ className = "", showLink = true }: { className?: string; showLink?: boolean }) {
  return (
    <aside
      aria-label="Paid service disclosure"
      className={`flex gap-3 rounded-2xl border-2 border-sun-600/40 bg-sun/15 p-4 leading-relaxed text-ink sm:p-5 ${className}`}
    >
      <ReceiptIcon className="mt-0.5 size-6 shrink-0 text-navy" />
      <p>
        <strong className="text-navy">Paid service.</strong> {disclosures.paid.replace(/^Mobility Assist is a paid service\. /, "")}{" "}
        {showLink && (
          <Link href="/pricing/" className="font-semibold text-action underline">
            See plans &amp; pricing
          </Link>
        )}
      </p>
    </aside>
  );
}
