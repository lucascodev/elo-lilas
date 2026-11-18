import Image from "next/image";
import { ButtonLink } from "@/shared/presentation/components/actions/button-link/button-link";
import { toPublicAssetPath } from "@/shared/utils/assets/to-public-asset-path";

export function ProtectiveMeasureHighlight() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-8 md:px-12 md:pb-22">
      <div className="grid overflow-hidden rounded-[20px] bg-soft md:grid-cols-2 md:rounded-[28px] md:bg-primary">
        <div className="flex flex-col gap-2.5 p-5 md:gap-4 md:p-14">
          <p className="font-heading text-xs font-semibold tracking-[0.08em] text-primary uppercase md:text-mid">Você sabia?</p>
          <h2 className="text-[23px] leading-[31px] font-semibold md:text-[34px] md:leading-[42px] md:text-white">
            Você pode pedir medida protetiva sem boletim de ocorrência.
          </h2>
          <p className="md:text-lg md:leading-7 md:text-soft">
            Seu relato basta para o pedido ser analisado pela Justiça. Veja onde pedir e o que levar.
          </p>
          <ButtonLink
            href="/ajuda/#protective-order"
            className="mt-1 self-start md:mt-2 md:border-white md:bg-white md:text-primary md:hover:bg-soft md:hover:text-primary-dark"
          >
            Saiba como pedir
          </ButtonLink>
        </div>
        <Image
          src={toPublicAssetPath("/images/lavender.webp")}
          alt="Campo de lavanda iluminado pelo sol"
          width={1000}
          height={669}
          className="hidden h-full min-h-95 w-full object-cover md:block"
        />
      </div>
    </section>
  );
}
