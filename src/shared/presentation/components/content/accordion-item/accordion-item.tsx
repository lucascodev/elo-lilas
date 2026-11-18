import type { ReactNode } from "react";
import { Icon } from "../../icons/icon/icon";

type AccordionItemProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function AccordionItem({ id, title, subtitle, children, defaultOpen = false }: AccordionItemProps) {
  return (
    <details id={id} open={defaultOpen} className="group scroll-mt-28 rounded-card border border-line bg-white open:border-[1.5px] open:border-primary">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 p-4.5 md:p-6 [&::-webkit-details-marker]:hidden">
        <span className="flex flex-col gap-0.5">
          <span className="font-heading text-[17px] leading-6 font-semibold text-ink md:text-lg">{title}</span>
          {subtitle && <span className="text-sm leading-5 text-muted group-open:hidden">{subtitle}</span>}
        </span>
        <Icon name="chevron-down" className="shrink-0 text-primary transition-transform group-open:rotate-180" />
      </summary>
      <div className="flex flex-col gap-3 px-4.5 pb-5 md:px-6 md:pb-6">{children}</div>
    </details>
  );
}
