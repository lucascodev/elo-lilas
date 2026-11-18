import Link from "next/link";
import type { ReactNode } from "react";
import type { ButtonLinkVariant } from "./button-link-variant.type";

const BASE =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-[1.5px] px-5 font-heading text-[15px] font-semibold no-underline transition-colors";

const VARIANTS: Record<ButtonLinkVariant, string> = {
  primary: "border-primary bg-primary text-white hover:border-primary-dark hover:bg-primary-dark hover:text-white",
  outline: "border-primary bg-white text-primary hover:bg-soft hover:text-primary-dark",
  dark: "border-ink bg-ink text-white hover:bg-black hover:text-white",
  "on-dark": "border-white bg-white text-primary hover:bg-soft hover:text-primary-dark",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonLinkVariant;
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
