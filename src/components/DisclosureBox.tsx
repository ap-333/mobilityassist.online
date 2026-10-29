import Link from "next/link";
import { disclosures } from "@/config/site";
import { InfoIcon } from "./icons";

/** The key facts a customer needs at the point of decision, in readable text. */
export function DisclosureBox({ title = "Before you book", className = "" }: { title?: string; className?: string }) {
  const items = [
    disclosures.paid,
    disclosures.independent,
    disclosures.fees,
    disclosures.notReservation,
    disclosures.emergency,
  ];
  return (
    <aside aria-label={title} className={`rounded-2xl border-2 border-teal/30 bg-teal-50 p-6 sm:p-7 ${className}`}>
      <h2 className="flex items-center gap-2 text-lg font-extrabold text-navy">
        <InfoIcon className="size-6 text-teal" />
        {title}
      </h2>
      <ul className="mt-4 space-y-3 leading-relaxed text-ink">
        {items.map((t) => (
          <li key={t} className="flex gap-3">
            <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[0.95rem]">
        Read the full{" "}
        <Link href="/transportation-disclosure/" className="font-semibold text-action underline">
          Transportation &amp; Booking Disclosure
        </Link>{" "}
        ,{" "}
        <Link href="/fees-cancellations/" className="font-semibold text-action underline">
          Fees &amp; Cancellations
        </Link>{" "}
        and{" "}
        <Link href="/pricing/" className="font-semibold text-action underline">
          Plans &amp; Pricing
        </Link>
        .
      </p>
    </aside>
  );
}
