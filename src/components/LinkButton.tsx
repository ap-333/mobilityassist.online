import Link from "next/link";
import { ArrowRightIcon } from "./icons";

export function LinkButton({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-action px-7 text-lg font-bold text-action transition-colors hover:bg-action-50 ${className}`}
    >
      {children}
      <ArrowRightIcon className="size-5" />
    </Link>
  );
}
