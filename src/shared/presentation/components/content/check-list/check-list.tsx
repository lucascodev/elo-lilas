import { Icon } from "../../icons/icon/icon";

type CheckListProps = {
  items: string[];
  variant?: "do" | "avoid";
  columns?: 1 | 2;
};

export function CheckList({ items, variant = "do", columns = 1 }: CheckListProps) {
  const icon = variant === "do" ? "check" : "close";
  const iconColor = variant === "do" ? "text-primary" : "text-ink";

  return (
    <ul className={`grid gap-x-7 gap-y-2.5 ${columns === 2 ? "md:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <Icon name={icon} size={18} className={`mt-1 shrink-0 ${iconColor}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
