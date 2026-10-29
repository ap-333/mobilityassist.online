import { site, telHref } from "@/config/site";
import { PhoneIcon } from "./icons";

type Variant = "primary" | "light" | "outline" | "accent";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-action text-white hover:bg-action-700 shadow-sm",
  light: "bg-white text-navy hover:bg-action-50 shadow-sm",
  outline: "border-2 border-action text-action hover:bg-action-50",
  accent: "bg-sun text-navy-900 hover:bg-sun-600 shadow-sm",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-base gap-2",
  lg: "min-h-14 px-7 text-lg gap-2.5",
};

type Props = {
  label?: string;
  variant?: Variant;
  size?: Size;
  showNumber?: boolean;
  /** Identifies the placement for call-tracking tools. */
  placement: string;
  className?: string;
};

export function CallButton({
  label = `Call ${site.phone.display}`,
  variant = "primary",
  size = "md",
  showNumber = false,
  placement,
  className = "",
}: Props) {
  return (
    <a
      href={telHref}
      data-cta="call"
      data-placement={placement}
      aria-label={showNumber || label.includes(site.phone.display) ? undefined : `${label}, ${site.phone.display}`}
      className={`inline-flex items-center justify-center rounded-full font-bold transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <PhoneIcon className={size === "lg" ? "size-6" : "size-5"} />
      <span className="flex flex-col items-start leading-tight">
        <span>{label}</span>
        {showNumber && <span className="text-sm font-semibold opacity-90">{site.phone.display}</span>}
      </span>
    </a>
  );
}

/** The phone number as a plain tel: link, for inline use in copy. */
export function PhoneLink({ className = "", placement }: { className?: string; placement: string }) {
  return (
    <a href={telHref} data-cta="call" data-placement={placement} className={`font-semibold underline-offset-2 hover:underline ${className}`}>
      {site.phone.display}
    </a>
  );
}
