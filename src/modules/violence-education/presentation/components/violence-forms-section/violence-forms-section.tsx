import type { ViolenceFormOutputDto } from "../../../application/dtos/list-violence-forms/violence-form-output.dto";
import { AccordionItem } from "@/shared/presentation/components/content/accordion-item/accordion-item";
import { Eyebrow } from "@/shared/presentation/components/content/eyebrow/eyebrow";
import { VicariousViolenceCallout } from "../vicarious-violence-callout/vicarious-violence-callout";

type ViolenceFormsSectionProps = {
  forms: ViolenceFormOutputDto[];
};

export function ViolenceFormsSection({ forms }: ViolenceFormsSectionProps) {
  return (
    <section aria-labelledby="forms-heading" className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 md:gap-7 md:px-12 md:py-18">
      <div className="flex flex-col gap-2">
        <Eyebrow className="hidden md:block">Lei Maria da Penha, art. 7º</Eyebrow>
        <h2 id="forms-heading" className="text-[21px] leading-7 font-semibold md:text-[34px] md:leading-[42px]">
          As cinco formas de violência
        </h2>
      </div>
      <div className="flex flex-col gap-3 lg:hidden">
        {forms.map((form, index) => (
          <AccordionItem key={form.id} id={form.id} title={`Violência ${form.name.toLowerCase()}`} subtitle={form.summary} defaultOpen={index === 0}>
            <p>{form.summary}</p>
            <p className="font-bold text-ink">Exemplos</p>
            <ul className="list-disc pl-5">
              {form.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </AccordionItem>
        ))}
        <VicariousViolenceCallout />
      </div>
      <ul className="hidden gap-5 lg:grid lg:grid-cols-3">
        {forms.map((form) => (
          <li key={form.id} id={`${form.id}-card`} className="flex flex-col gap-2.5 rounded-card border border-line bg-white p-6">
            <Eyebrow>Violência</Eyebrow>
            <h3 className="text-xl font-semibold">{form.name}</h3>
            <p className="text-[15px] text-muted">{form.summary}</p>
            <ul className="list-disc pl-5 text-[15px] leading-6">
              {form.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </li>
        ))}
        <li>
          <VicariousViolenceCallout />
        </li>
      </ul>
    </section>
  );
}
