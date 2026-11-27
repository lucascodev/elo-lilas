import Link from "next/link";
import type { IconName } from "@/shared/presentation/components/icons/icon/icon-name.type";
import { Icon } from "@/shared/presentation/components/icons/icon/icon";

type ShortcutCardProps = {
  href: string;
  icon: IconName;
  title: string;
  description: string;
  highlighted?: boolean;
};

export function ShortcutCard({ href, icon, title, description, highlighted = false }: ShortcutCardProps) {
  const isExternal = !href.startsWith("/");
  const className = `group flex h-full items-center gap-3.5 rounded-card border p-4 no-underline md:flex-col md:items-start md:gap-4 md:p-7 ${
    highlighted ? "border-primary bg-primary hover:bg-primary-dark" : "border-line bg-white hover:border-primary"
  }`;
  const content = (
    <>
      <span className={`flex size-11 shrink-0 items-center justify-center rounded-full ${highlighted ? "bg-white text-primary" : "bg-soft text-primary"}`}>
        <Icon name={icon} size={22} />
      </span>
      <span className="flex grow flex-col gap-0.5 md:gap-2">
        <span className={`font-heading text-base font-semibold md:text-[21px] md:leading-7 ${highlighted ? "text-white" : "text-ink"}`}>{title}</span>
        <span className={`text-sm leading-5 md:text-base md:leading-6 ${highlighted ? "text-soft" : "text-muted"}`}>{description}</span>
      </span>
      <Icon name="chevron-right" className={`shrink-0 md:hidden ${highlighted ? "text-white" : "text-primary"}`} />
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
