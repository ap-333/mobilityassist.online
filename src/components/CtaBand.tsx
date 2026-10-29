import { disclosures } from "@/config/site";
import { CallButton } from "./CallButton";
import Link from "next/link";

export function CtaBand({ placement, title = "Talk it through with a real person" }: { placement: string; title?: string }) {
  return (
    <section className="bg-navy text-white">
      <div className="container-page flex flex-col gap-6 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
          <p className="mt-3 leading-relaxed text-white/85">
            Tell us where you need to go and what the passenger needs. We check with independent providers and explain the options,
            fares and fees before you decide.
          </p>
          <p className="mt-3 text-sm text-white/75">{disclosures.short}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <CallButton size="lg" variant="accent" placement={placement} />
          <Link
            href="/request-a-ride/"
            className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-white/70 px-7 text-lg font-bold text-white hover:bg-white/10"
          >
            Request Transportation
          </Link>
        </div>
      </div>
    </section>
  );
}
