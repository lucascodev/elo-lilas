import Image from "next/image";
import { ButtonLink } from "@/shared/presentation/components/actions/button-link/button-link";
import { Icon } from "@/shared/presentation/components/icons/icon/icon";
import { toPublicAssetPath } from "@/shared/utils/assets/to-public-asset-path";

export function HomeHero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-6 px-5 pt-5 pb-8 md:grid-cols-2 md:gap-18 md:px-12 md:py-18">
      <div className="order-2 flex flex-col gap-4 md:order-1 md:gap-5.5">
        <p className="hidden font-heading text-xs font-semibold tracking-[0.08em] text-primary uppercase md:block">Informação e acolhimento</p>
        <h1 className="text-[32px] leading-10 font-bold tracking-tight md:text-[58px] md:leading-[66px]">Você não está sozinha.</h1>
        <p className="text-[17px] leading-7 md:text-xl md:leading-8">
          Aqui você encontra informação, orientação e o caminho até a rede de apoio da sua cidade.
        </p>
        <div className="hidden gap-3 pt-1.5 md:flex">
          <ButtonLink href="/ajuda/" className="min-h-14 px-7 text-base">
            Como pedir ajuda
          </ButtonLink>
          <ButtonLink href="/entenda/teste/" variant="outline" className="min-h-14 px-7 text-base">
            Fazer o teste de sinais
          </ButtonLink>
        </div>
        <p className="hidden items-center gap-2 text-[15px] text-muted md:flex">
          <Icon name="lock" size={18} className="text-primary" />
          Gratuito, sigiloso e sem cadastro
        </p>
      </div>
      <Image
        src={toPublicAssetPath("/images/hero.webp")}
        alt="Duas mulheres se abraçam em um gesto de apoio"
        width={1000}
        height={704}
        priority
        className="order-1 h-58 w-full rounded-card object-cover md:order-2 md:h-125 md:rounded-panel"
      />
    </section>
  );
}
