import type { ReactNode } from "react";
import { disclosures } from "@/config/site";
import type { Photo as PhotoData } from "@/content/photos";
import { CallButton } from "./CallButton";
import { LinkButton } from "./LinkButton";
import { Photo } from "./Photo";

type Props = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  showCall?: boolean;
  /** Identifies the page for call tracking, e.g. "wheelchair-hero". */
  placement?: string;
  photo?: PhotoData;
};

export function PageHero({ eyebrow, title, children, showCall = true, placement = "page-hero", photo }: Props) {
  return (
    <section className="border-b border-line bg-surface">
      <div className={`container-page py-12 sm:py-16 ${photo ? "grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center" : ""}`}>
        <div>
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-navy sm:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl space-y-3 text-lg leading-relaxed text-muted">{children}</div>}
        {showCall && (
          <div className="mt-7">
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallButton size="lg" placement={placement} />
              <LinkButton href="/request-a-ride/">Request Transportation</LinkButton>
            </div>
            <p className="mt-4 max-w-2xl rounded-xl border border-line bg-white p-4 text-[0.95rem] leading-relaxed text-ink">
              {disclosures.independent}
            </p>
          </div>
        )}
        </div>
        {photo && <Photo photo={photo} priority className="aspect-[4/3] w-full rounded-3xl shadow-lg" />}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  tone = "white",
  id,
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "surface";
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tone === "surface" ? "bg-surface" : "bg-white"} py-14 sm:py-20 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({ id, eyebrow, title, intro, center = false }: { id: string; eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal">{eyebrow}</p>}
      <h2 id={id} className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}
