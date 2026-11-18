import { ButtonLink } from "@/shared/presentation/components/actions/button-link/button-link";
import { CheckList } from "@/shared/presentation/components/content/check-list/check-list";

const WARNING_SIGNS = [
  "Você muda o que faz para evitar a reação da outra pessoa",
  "Você se afastou de amigos e da família",
  "A pessoa controla para onde você vai e com quem fala",
  "Você sente medo dentro de casa",
];

export function WarningSignsSection() {
  return (
    <section aria-labelledby="signs-heading" className="mx-auto grid max-w-7xl gap-6 px-5 py-6 pb-10 md:grid-cols-2 md:items-center md:gap-16 md:px-12 md:py-18">
      <div className="flex flex-col gap-3.5">
        <h2 id="signs-heading" className="text-[21px] leading-7 font-semibold md:text-[34px] md:leading-[42px]">
          Sinais de alerta
        </h2>
        <CheckList items={WARNING_SIGNS} />
      </div>
      <div className="flex flex-col gap-3.5 rounded-card bg-ink p-6 md:p-8">
        <h2 className="text-[21px] font-semibold text-white">Reconheceu algum sinal?</h2>
        <p className="text-on-dark">Faça o teste de sinais de alerta. São dez perguntas e nada do que você responde é salvo.</p>
        <ButtonLink href="/entenda/teste/" variant="on-dark" className="self-start">
          Fazer o teste
        </ButtonLink>
      </div>
    </section>
  );
}
