import Link from "next/link";

/**
 * The Mobility Assist pin-wheel mark (brand/logos/final). On the site the
 * wheel turns twice on page load and again on hover; see .logo-wheel in
 * globals.css. Reduced-motion users get a still logo.
 */
export function LogoMark({ className = "size-10", inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <path
        d="M32 2.5C19.6 2.5 9.5 12.3 9.5 24.6c0 8.7 6.1 18.3 12.1 25.4C26.4 55.6 32 61.5 32 61.5s5.6-5.9 10.4-11.5C48.4 42.9 54.5 33.3 54.5 24.6 54.5 12.3 44.4 2.5 32 2.5Z"
        fill={inverted ? "#1B8797" : "#0B5F6E"}
      />
      <circle cx="32" cy="24.5" r="12" fill="none" stroke="#fff" strokeWidth="5" />
      <g className="logo-wheel">
        <path d="M26.93 13.62A12 12 0 0 1 43.95 23.45" fill="none" stroke="#F4B33E" strokeWidth="5" strokeLinecap="round" />
        <path d="M32 24.5L32 16.5M32 24.5L38.93 28.5M32 24.5L25.07 28.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
      </g>
      <circle cx="32" cy="24.5" r="3.6" fill="#fff" />
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="logo-link inline-flex shrink-0 items-center gap-2" aria-label="Mobility Assist home">
      <LogoMark inverted={inverted} />
      <span className="flex flex-col leading-none">
        <span className={`whitespace-nowrap text-xl font-extrabold tracking-tight ${inverted ? "text-white" : "text-navy"}`}>
          Mobility <span className={inverted ? "text-sun" : "text-action"}>Assist</span>
        </span>
        <span className={`mt-1 hidden text-[0.7rem] font-semibold sm:block ${inverted ? "text-white/70" : "text-muted"}`}>
          Accessible ride coordination
        </span>
      </span>
    </Link>
  );
}
