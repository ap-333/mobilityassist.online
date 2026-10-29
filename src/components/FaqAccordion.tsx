"use client";

import { useId, useState } from "react";
import type { Faq } from "@/content/faq";
import { ChevronDownIcon } from "./icons";

export function FaqAccordion({ items, headingLevel = 3 }: { items: Faq[]; headingLevel?: 2 | 3 }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const Heading = `h${headingLevel}` as "h2" | "h3";

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item, i) => {
        const open = openIndex === i;
        const buttonId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div key={item.q}>
            <Heading className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-navy hover:bg-surface sm:px-6 sm:text-lg"
              >
                <span>{item.q}</span>
                <ChevronDownIcon className={`size-5 shrink-0 text-action transition-transform ${open ? "rotate-180" : ""}`} />
              </button>
            </Heading>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open} className="px-5 pb-5 text-muted leading-relaxed sm:px-6">
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
