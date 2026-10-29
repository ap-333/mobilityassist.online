import { jsonLd } from "@/lib/schema";

/** Renders schema.org structured data into the page HTML. */
export function JsonLd({ graph }: { graph: Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />;
}
