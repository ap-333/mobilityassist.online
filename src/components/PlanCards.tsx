import { plans } from "@/config/site";
import { CallButton } from "./CallButton";
import { CheckIcon } from "./icons";

/** The three paid plans, each with its price and what the fee covers. */
export function PlanCards({ placement }: { placement: string }) {
  return (
    <ul className="mt-10 grid gap-6 lg:grid-cols-3">
      {plans.map((plan) => {
        const featured = "featured" in plan && plan.featured;
        return (
          <li
            key={plan.id}
            id={plan.id}
            className={`relative flex flex-col rounded-3xl border-2 bg-white p-6 sm:p-7 ${featured ? "border-teal shadow-xl" : "border-line"}`}
          >
            {featured && (
              <p className="absolute -top-3.5 left-6 rounded-full bg-teal px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Best for appointments
              </p>
            )}
            <h3 className="text-xl font-extrabold text-navy">{plan.name}</h3>
            <p className="mt-3 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold tracking-tight text-navy">${plan.price}</span>
              <span className="text-muted">{plan.unit}</span>
            </p>
            <p className="mt-1 text-sm font-semibold text-ink">Coordination fee only. Ride fare quoted separately.</p>
            <p className="mt-4 leading-relaxed text-muted">{plan.summary}</p>
            <ul className="mt-5 flex-1 space-y-2.5">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2.5 leading-snug">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-teal" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <CallButton
              variant={featured ? "accent" : "primary"}
              label={`Call about ${plan.name}`}
              placement={`${placement}-${plan.id}`}
              className="mt-7 w-full"
            />
          </li>
        );
      })}
    </ul>
  );
}
