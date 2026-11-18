import type { ReactNode } from "react";
import { Eyebrow } from "@/shared/presentation/components/content/eyebrow/eyebrow";
import { Icon } from "@/shared/presentation/components/icons/icon/icon";
import type { IconName } from "@/shared/presentation/components/icons/icon/icon-name.type";

type HelpPathCardProps = {
  id?: string;
  step: number;
  icon: IconName;
  title: string;
  children: ReactNode;
  highlighted?: boolean;
  wide?: boolean;
};

export function HelpPathCard({ id, step, icon, title, children, highlighted = false, wide = false }: HelpPathCardProps) {
  return (
    <li
      id={id}
      className={`flex scroll-mt-28 flex-col gap-3 rounded-card bg-white p-5 md:p-7 ${highlighted ? "border-[1.5px] border-primary" : "border border-line"} ${
        wide ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-center gap-3.5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
          <Icon name={icon} size={22} />
        </span>
        <span className="flex flex-col">
          <Eyebrow>Caminho {step}</Eyebrow>
          <h2 className="text-[17px] leading-6 font-semibold md:text-xl">{title}</h2>
        </span>
      </div>
      {children}
    </li>
  );
}
