import { CheckList } from "@/shared/presentation/components/content/check-list/check-list";
import { Eyebrow } from "@/shared/presentation/components/content/eyebrow/eyebrow";

const SIGNS = ["Mudança brusca de comportamento", "Medo de voltar para casa", "Machucados sem explicação", "Queda no rendimento escolar ou faltas frequentes"];

export function ChildWarningSigns() {
  return (
    <section aria-labelledby="child-signs-heading" className="bg-soft">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 md:grid-cols-2 md:items-center md:gap-16 md:px-12 md:py-18">
        <div className="flex flex-col gap-2.5">
          <Eyebrow>Para adultos</Eyebrow>
          <h2 id="child-signs-heading" className="text-[21px] leading-7 font-semibold md:text-[34px] md:leading-[42px]">
            Sinais em crianças
          </h2>
          <p>Mudanças de comportamento podem ser um pedido de ajuda.</p>
        </div>
        <div className="flex flex-col gap-3">
          <CheckList items={SIGNS} />
          <p className="text-sm text-muted">Desconfiou? Procure o Conselho Tutelar ou ligue 100.</p>
        </div>
      </div>
    </section>
  );
}
