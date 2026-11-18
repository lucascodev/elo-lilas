import Image from "next/image";
import { ButtonLink } from "@/shared/presentation/components/actions/button-link/button-link";
import { toPublicAssetPath } from "@/shared/utils/assets/to-public-asset-path";

export function HelpingTeaser() {
  return (
    <article className="hidden flex-col overflow-hidden rounded-[20px] border border-line bg-white md:flex">
      <Image src={toPublicAssetPath("/images/helping.webp")} alt="Três amigas sentadas lado a lado, conversando" width={1000} height={667} className="h-60 w-full object-cover" />
      <div className="flex flex-col gap-3 p-7">
        <h2 className="text-[21px] leading-7 font-semibold">Conhece alguém que precisa de ajuda?</h2>
        <p>Saiba como acolher, o que evitar e como fazer uma denúncia anônima.</p>
        <ButtonLink href="/como-ajudar/" variant="outline" className="mt-1 self-start">
          Como ajudar
        </ButtonLink>
      </div>
    </article>
  );
}
