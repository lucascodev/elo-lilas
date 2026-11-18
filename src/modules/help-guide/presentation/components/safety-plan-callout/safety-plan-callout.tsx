import { ButtonLink } from "@/shared/presentation/components/actions/button-link/button-link";

export function SafetyPlanCallout() {
  return (
    <section className="flex flex-col gap-2 rounded-[20px] bg-soft p-5 md:flex-row md:items-center md:gap-5 md:p-7">
      <div className="flex grow flex-col gap-1">
        <h2 className="text-[17px] font-semibold md:text-xl">Vai sair de casa?</h2>
        <p>Veja o que preparar antes, com segurança.</p>
      </div>
      <ButtonLink href="/ajuda/plano-de-seguranca/" className="mt-1 self-start md:mt-0 md:self-auto">
        Abrir o plano de segurança
      </ButtonLink>
    </section>
  );
}
