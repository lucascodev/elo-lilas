import Image from "next/image";
import { ButtonLink } from "@/shared/presentation/components/actions/button-link/button-link";
import { Icon } from "@/shared/presentation/components/icons/icon/icon";
import { toPublicAssetPath } from "@/shared/utils/assets/to-public-asset-path";

export function QuizTeaser() {
  return (
    <article className="flex flex-col overflow-hidden rounded-[20px] border border-line bg-white">
      <Image src={toPublicAssetPath("/images/phone.webp")} alt="Mulher segura o celular com as duas mãos" width={1000} height={667} className="h-40 w-full object-cover md:h-60" />
      <div className="flex flex-col gap-2.5 p-5 md:gap-3 md:p-7">
        <h2 className="text-[21px] leading-7 font-semibold">Teste de sinais de alerta</h2>
        <p>Dez perguntas de sim ou não, em cerca de 3 minutos.</p>
        <p className="flex items-center gap-1.5 text-sm text-muted">
          <Icon name="lock" size={18} />
          Nada do que você responde é salvo.
        </p>
        <ButtonLink href="/entenda/teste/" className="mt-1 self-start">
          Fazer o teste
        </ButtonLink>
      </div>
    </article>
  );
}
