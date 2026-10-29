"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { site } from "@/config/site";
import { PhoneLink } from "./CallButton";
import { CheckIcon } from "./icons";

type Errors = Partial<Record<string, string>>;
type Status = "idle" | "sending" | "sent" | "failed";

const zipPattern = /^\d{5}$/;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const get = (k: string) => String(data.get(k) ?? "").trim();

  if (!get("name")) errors.name = "Enter your name.";
  const phone = get("phone").replace(/\D/g, "");
  const email = get("email");
  if (!phone && !email) errors.phone = "Enter a phone number or email so we can reach you.";
  if (phone && phone.length !== 10 && !(phone.length === 11 && phone.startsWith("1"))) errors.phone = "Enter a 10-digit US phone number.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
  if (!zipPattern.test(get("pickupZip"))) errors.pickupZip = "Enter a 5-digit pickup ZIP code.";
  if (!zipPattern.test(get("destinationZip"))) errors.destinationZip = "Enter a 5-digit destination ZIP code.";
  if (!get("date")) errors.date = "Choose a requested date.";
  if (!get("tripType")) errors.tripType = "Choose one-way or round trip.";
  if (!get("mobility")) errors.mobility = "Choose the mobility requirement.";
  if (!data.get("consent")) errors.consent = "Please agree to be contacted about this request.";
  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="field-error">
      {message}
    </p>
  );
}

export function RideRequestForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [mobility, setMobility] = useState("");
  const enabled = Boolean(site.requestFormEndpoint);

  const err = (k: string) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!site.requestFormEndpoint) return;
    const data = new FormData(e.currentTarget);
    // Honeypot: real visitors never see or fill this field.
    if (data.get("company")) return;

    const found = validate(data);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const payload = Object.fromEntries([...data.entries()].filter(([k]) => k !== "company"));
      const res = await fetch(site.requestFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...payload, source: "website-request-form" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      // Conversion signal only. Never attach names, contact details, places or mobility needs.
      window.dispatchEvent(new Event("ma:request-submitted"));
      window.scrollTo({ top: 0 });
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border-2 border-teal/40 bg-teal-50 p-6 sm:p-8">
        <h2 className="flex items-center gap-2 text-2xl font-extrabold text-navy">
          <CheckIcon className="size-7 text-teal" />
          Your request has been received
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink">
          <strong>This is not a confirmed transportation reservation.</strong> A Mobility Assist representative will review the information
          and contact you about possible provider availability. Your trip is only confirmed when the applicable provider and booking
          arrangements have been explicitly confirmed.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Need to add something or talk it through now? Call <PhoneLink placement="form-confirmation" className="text-action" />.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="form-intro" className="space-y-8">
      <p id="form-intro" className="leading-relaxed text-muted">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">required</span> are required. Please don&apos;t include diagnoses, insurance IDs, Social Security numbers
        or medical history.
      </p>

      {!enabled && (
        <p role="note" className="rounded-xl bg-amber-100 p-4 text-amber-950">
          <strong>Online requests are not open yet.</strong> To request transportation now, call{" "}
          <PhoneLink placement="form-disabled" className="text-amber-950" />.
        </p>
      )}

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <fieldset className="space-y-5">
        <legend className="text-xl font-extrabold text-navy">Who should we contact?</legend>
        <div>
          <label htmlFor="name" className="field-label">
            Your name <span aria-hidden="true">*</span>
          </label>
          <p className="field-hint">The passenger, or the family member or caregiver making the request.</p>
          <input id="name" name="name" type="text" autoComplete="name" required className="field-input" {...err("name")} />
          <FieldError id="name-error" message={errors.name} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="field-label">
              Phone number
            </label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className="field-input" {...err("phone")} />
            <FieldError id="phone-error" message={errors.phone} />
          </div>
          <div>
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input id="email" name="email" type="email" autoComplete="email" className="field-input" {...err("email")} />
            <FieldError id="email-error" message={errors.email} />
          </div>
        </div>
        <p className="field-hint">Give at least one reliable way to reach you.</p>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="text-xl font-extrabold text-navy">About the trip</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="pickupZip" className="field-label">
              Pickup ZIP code <span aria-hidden="true">*</span>
            </label>
            <input id="pickupZip" name="pickupZip" inputMode="numeric" maxLength={5} autoComplete="postal-code" required className="field-input" {...err("pickupZip")} />
            <FieldError id="pickupZip-error" message={errors.pickupZip} />
          </div>
          <div>
            <label htmlFor="destinationZip" className="field-label">
              Destination ZIP code <span aria-hidden="true">*</span>
            </label>
            <input id="destinationZip" name="destinationZip" inputMode="numeric" maxLength={5} required className="field-input" {...err("destinationZip")} />
            <FieldError id="destinationZip-error" message={errors.destinationZip} />
          </div>
          <div>
            <label htmlFor="date" className="field-label">
              Requested date <span aria-hidden="true">*</span>
            </label>
            <input id="date" name="date" type="date" required className="field-input" {...err("date")} />
            <FieldError id="date-error" message={errors.date} />
          </div>
          <div>
            <label htmlFor="time" className="field-label">
              Approximate pickup time
            </label>
            <input id="time" name="time" type="time" className="field-input" />
          </div>
        </div>
        <div>
          <label htmlFor="tripType" className="field-label">
            One-way or round trip <span aria-hidden="true">*</span>
          </label>
          <select id="tripType" name="tripType" required defaultValue="" className="field-input" {...err("tripType")}>
            <option value="" disabled>
              Choose one
            </option>
            <option value="one-way">One-way</option>
            <option value="round-trip">Round trip</option>
          </select>
          <FieldError id="tripType-error" message={errors.tripType} />
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="text-xl font-extrabold text-navy">Passenger needs</legend>
        <div>
          <label htmlFor="mobility" className="field-label">
            Mobility requirement <span aria-hidden="true">*</span>
          </label>
          <select
            id="mobility"
            name="mobility"
            required
            value={mobility}
            onChange={(e) => setMobility(e.target.value)}
            className="field-input"
            {...err("mobility")}
          >
            <option value="" disabled>
              Choose one
            </option>
            <option value="wheelchair-accessible-vehicle">Wheelchair-accessible vehicle</option>
            <option value="ambulatory">Ambulatory passenger (can walk, may need some help)</option>
            <option value="other">Another requirement</option>
          </select>
          <FieldError id="mobility-error" message={errors.mobility} />
        </div>
        {mobility === "wheelchair-accessible-vehicle" && (
          <div>
            <label htmlFor="staysSeated" className="field-label">
              Will the passenger stay seated in their wheelchair during travel?
            </label>
            <select id="staysSeated" name="staysSeated" defaultValue="" className="field-input">
              <option value="">Not sure yet</option>
              <option value="yes">Yes, stays in the wheelchair</option>
              <option value="no">No, transfers to a vehicle seat</option>
            </select>
          </div>
        )}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="passengers" className="field-label">
              Passengers
            </label>
            <input id="passengers" name="passengers" type="number" min={1} max={12} defaultValue={1} className="field-input" />
          </div>
          <div>
            <label htmlFor="companions" className="field-label">
              Companions riding along
            </label>
            <input id="companions" name="companions" type="number" min={0} max={12} defaultValue={0} className="field-input" />
          </div>
        </div>
        <div>
          <label htmlFor="notes" className="field-label">
            Notes about vehicle fit or boarding help
          </label>
          <p className="field-hint">For example: power chair, approximate chair width, stairs at pickup, needs door-to-door help.</p>
          <textarea id="notes" name="notes" rows={4} maxLength={800} className="field-input" />
        </div>
      </fieldset>

      <div>
        <label className="flex items-start gap-3">
          <input type="checkbox" name="consent" value="yes" required className="mt-1 size-5 shrink-0 accent-[var(--color-action)]" {...err("consent")} />
          <span className="leading-relaxed text-ink">
            I agree that Mobility Assist may contact me by phone, text or email about this transportation request, and I have read the{" "}
            <Link href="/privacy/" className="font-semibold text-action underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/transportation-disclosure/" className="font-semibold text-action underline">
              Transportation &amp; Booking Disclosure
            </Link>
            . <span aria-hidden="true">*</span>
          </span>
        </label>
        <FieldError id="consent-error" message={errors.consent} />
      </div>

      {status === "failed" && (
        <p role="alert" className="rounded-xl bg-red-50 p-4 font-semibold text-red-800">
          Your request could not be sent. Please try again, or call <PhoneLink placement="form-error" className="text-red-800" />.
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={!enabled || status === "sending"}
          className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-action px-8 text-lg font-bold text-white transition-colors hover:bg-action-700 disabled:cursor-not-allowed disabled:bg-[#8aa3a8] sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Send Transportation Request"}
        </button>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
          Sending this form is a request for assistance, not a confirmed reservation.
        </p>
      </div>
    </form>
  );
}
