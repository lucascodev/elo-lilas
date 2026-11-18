import { ButtonLink } from "@/shared/presentation/components/actions/button-link/button-link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start gap-4 px-5 py-16 md:px-12 md:py-24">
      <p className="font-heading text-xs font-semibold tracking-[0.08em] text-primary uppercase">Página não encontrada</p>
      <h1 className="text-[30px] leading-[38px] font-bold md:text-5xl md:leading-[56px]">Não encontramos esta página</h1>
      <p className="md:text-lg">O endereço pode ter mudado. Se você precisa de ajuda agora, ligue 190 ou 180.</p>
      <div className="flex flex-col gap-3 md:flex-row">
        <ButtonLink href="/">Voltar ao início</ButtonLink>
        <ButtonLink href="/ajuda/" variant="outline">
          Como pedir ajuda
        </ButtonLink>
      </div>
    </section>
  );
}
