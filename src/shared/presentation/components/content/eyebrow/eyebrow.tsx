import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "primary" | "on-dark";
  className?: string;
};

export function Eyebrow({ children, tone = "primary", className = "" }: EyebrowProps) {
  const color = tone === "primary" ? "text-primary" : "text-mid";
  return <p className={`font-heading text-xs font-semibold tracking-[0.08em] uppercase ${color} ${className}`}>{children}</p>;
}
