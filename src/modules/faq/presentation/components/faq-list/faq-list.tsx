import { AccordionItem } from "@/shared/presentation/components/content/accordion-item/accordion-item";
import type { FaqItemOutputDto } from "../../../application/dtos/list-faq/faq-item-output.dto";

type FaqListProps = {
  items: FaqItemOutputDto[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <AccordionItem key={item.id} id={item.id} title={item.question} defaultOpen={index === 0}>
          <p>{item.answer}</p>
        </AccordionItem>
      ))}
    </div>
  );
}
