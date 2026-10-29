import Link from "next/link";
import { CallButton } from "@/components/CallButton";

export default function NotFound() {
  return (
    <section className="container-page py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal">Page not found</p>
      <h1 className="mt-3 text-3xl font-extrabold text-navy sm:text-5xl">We couldn&apos;t find that page</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
        Head back to the{" "}
        <Link href="/" className="font-semibold text-action underline">
          homepage
        </Link>{" "}
        or call us for help arranging a ride.
      </p>
      <CallButton size="lg" className="mt-8" placement="404" />
    </section>
  );
}
