import { ButtonLink } from "@/shared/presentation/components/actions/button-link/button-link";
import { CheckList } from "@/shared/presentation/components/content/check-list/check-list";
import { PROTECTIVE_MEASURES } from "../../constants/protective-measures.constant";

export function ProtectiveMeasuresSection() {
  return (
    <section aria-labelledby="measures-heading" className="flex flex-col gap-4">
      <h2 id="measures-heading" className="text-[21px] leading-7 font-semibold md:text-3xl">
        Medidas protetivas
      </h2>
      <p>São ordens da Justiça para proteger você. Valem enquanto existir risco.</p>
      <CheckList items={PROTECTIVE_MEASURES} columns={2} />
      <ButtonLink href="/ajuda/#protective-order" className="mt-1 md:self-start">
        Como pedir uma medida protetiva
      </ButtonLink>
    </section>
  );
}
