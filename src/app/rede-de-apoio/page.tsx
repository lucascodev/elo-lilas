import type { Metadata } from "next";
import { makeGetSiteSettings } from "@/modules/site-settings";
import { makeListSupportServices, mapSupportServicesToDirectory, SupportNetworkDirectory } from "@/modules/support-network";
import { PageIntro } from "@/shared/presentation/components/layout/page-intro/page-intro";

export const metadata: Metadata = {
  title: "Rede de apoio",
  description: "Endereços, horários e telefones dos serviços que acolhem pessoas em situação de violência.",
};

export default async function SupportNetworkPage() {
  const [services, settings] = await Promise.all([makeListSupportServices().execute(), makeGetSiteSettings().execute()]);
  const directory = mapSupportServicesToDirectory(services);

  return (
    <>
      <PageIntro
        crumbs={[{ label: "Rede de apoio" }]}
        eyebrow="Rede de apoio"
        title={`Onde buscar atendimento em ${settings.municipality}`}
        lead={`Serviços públicos e organizações que acolhem pessoas em situação de violência. Dados mantidos pela instituição parceira, ${settings.partnerName}.`}
        image={{ src: "/images/support-network.webp", alt: "Mãos de várias pessoas unidas, simbolizando uma rede de apoio", width: 1000, height: 667 }}
      />
      <div className="mx-auto max-w-7xl px-5 py-6 pb-12 md:px-12 md:py-14 md:pb-22">
        <SupportNetworkDirectory services={directory.services} filters={directory.filters} />
      </div>
    </>
  );
}
