import Link from "next/link";
import type { SupportServiceOutputDto } from "../../../application/dtos/list-support-services/support-service-output.dto";
import { mapSupportServiceToCardViewModel } from "../../mappers/support-service-to-card-view-model.mapper";
import { SupportServiceCard } from "../support-service-card/support-service-card";

type SupportNetworkPreviewProps = {
  services: SupportServiceOutputDto[];
  municipality: string;
};

export function SupportNetworkPreview({ services, municipality }: SupportNetworkPreviewProps) {
  const cards = services.map(mapSupportServiceToCardViewModel);

  return (
    <section aria-labelledby="support-network-heading" className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:px-12 md:py-20">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-heading text-xs font-semibold tracking-[0.08em] text-primary uppercase">Rede de apoio</p>
          <h2 id="support-network-heading" className="text-[22px] leading-7 font-semibold md:text-[34px] md:leading-[42px]">
            Onde buscar atendimento em {municipality}
          </h2>
        </div>
        <Link href="/rede-de-apoio/" className="font-bold">
          Ver toda a rede de apoio
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {cards.map((card) => (
          <SupportServiceCard key={card.id} service={card} />
        ))}
      </div>
    </section>
  );
}
