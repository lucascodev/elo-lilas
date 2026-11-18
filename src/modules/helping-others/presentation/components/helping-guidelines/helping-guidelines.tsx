import { CheckList } from "@/shared/presentation/components/content/check-list/check-list";

const TO_DO = [
  "Ouça sem julgar e acredite no que ela conta",
  "Respeite o tempo dela para decidir",
  "Conte que existe ajuda e mostre os canais",
  "Ofereça apoio prático: guardar documentos, um lugar para ficar",
];

const TO_AVOID = [
  "Confrontar o agressor",
  "Pressionar para denunciar ou terminar a relação",
  "Expor a situação em grupos ou redes sociais",
  "Culpar a vítima pelo que aconteceu",
];

export function HelpingGuidelines() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6">
      <section aria-labelledby="do-heading" className="flex flex-col gap-3 rounded-card border border-line p-5 md:p-8">
        <h2 id="do-heading" className="text-[21px] font-semibold">
          O que fazer
        </h2>
        <CheckList items={TO_DO} />
      </section>
      <section aria-labelledby="avoid-heading" className="flex flex-col gap-3 rounded-card bg-soft p-5 md:p-8">
        <h2 id="avoid-heading" className="text-[21px] font-semibold">
          O que evitar
        </h2>
        <CheckList items={TO_AVOID} variant="avoid" />
      </section>
    </div>
  );
}
