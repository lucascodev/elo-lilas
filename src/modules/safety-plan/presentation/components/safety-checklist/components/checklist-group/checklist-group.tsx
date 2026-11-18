type ChecklistGroupProps = {
  groupId: string;
  title: string;
  items: readonly string[];
};

export function ChecklistGroup({ groupId, title, items }: ChecklistGroupProps) {
  return (
    <fieldset className="m-0 rounded-card border border-line bg-white px-5 pt-3.5 pb-2.5 md:px-6">
      <legend className="px-1.5 font-heading text-base font-semibold text-ink md:text-[17px]">{title}</legend>
      {items.map((item, index) => {
        const inputId = `${groupId}-${index}`;
        return (
          <label key={item} htmlFor={inputId} className="flex min-h-12 cursor-pointer items-center gap-3 leading-snug">
            <input id={inputId} type="checkbox" autoComplete="off" className="size-5.5 shrink-0 accent-primary" />
            {item}
          </label>
        );
      })}
    </fieldset>
  );
}
