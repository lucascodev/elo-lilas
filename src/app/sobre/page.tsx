import type { Metadata } from "next";
import { PolicyCards, ProjectCredits } from "@/modules/about";
import { makeGetSiteSettings } from "@/modules/site-settings";
import { PageIntro } from "@/shared/presentation/components/layout/page-intro/page-intro";

export const metadata: Metadata = {
  title: "Sobre o projeto",
  description: "O Elo Lilás é um projeto de extensão da UNIASSELVI em parceria com uma instituição local. Privacidade e acessibilidade.",
};

export default async function AboutPage() {
  const settings = await makeGetSiteSettings().execute();

  return (
    <>
      <PageIntro
        crumbs={[{ label: "Sobre" }]}
        eyebrow="Sobre o projeto"
        title="Informação que protege"
        lead={`O Elo Lilás nasceu de um projeto de extensão da UNIASSELVI ligado ao ODS 16 (Paz, Justiça e Instituições Eficazes). Instituição parceira: ${settings.partnerName}.`}
        image={{ src: "/images/support-network.webp", alt: "Mãos de várias pessoas unidas", width: 1000, height: 667 }}
      />
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 pb-12 md:gap-6 md:px-12 md:py-18 md:pb-22">
        <ProjectCredits partnerName={settings.partnerName} />
        <PolicyCards />
      </div>
    </>
  );
}
