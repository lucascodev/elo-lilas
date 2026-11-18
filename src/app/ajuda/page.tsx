import type { Metadata } from "next";
import { HelpPaths, indexChannelsById, SafetyPlanCallout } from "@/modules/help-guide";
import { makeListHelpChannels, TalkToSomeoneCard } from "@/modules/help-channels";
import { makeGetSiteSettings } from "@/modules/site-settings";
import { ContentWithAside } from "@/shared/presentation/components/layout/content-with-aside/content-with-aside";
import { PageIntro } from "@/shared/presentation/components/layout/page-intro/page-intro";
import { RelatedLinks } from "@/shared/presentation/components/navigation/related-links/related-links";

export const metadata: Metadata = {
  title: "Como pedir ajuda",
  description: "Caminhos para pedir ajuda: 190, Ligue 180, boletim de ocorrência, medida protetiva sem BO, apoio social e Defensoria Pública.",
};

export default async function HelpPage() {
  const [channels, listeningChannels, settings] = await Promise.all([
    makeListHelpChannels().execute(),
    makeListHelpChannels().execute({ scope: "listening" }),
    makeGetSiteSettings().execute(),
  ]);

  return (
    <>
      <PageIntro
        crumbs={[{ label: "Como pedir ajuda" }]}
        eyebrow="Como pedir ajuda"
        title="Você pode começar por qualquer caminho"
        lead="Não precisa seguir a ordem, e buscar orientação não obriga você a denunciar."
        image={{ src: "/images/comfort.webp", alt: "Duas pessoas de mãos dadas sobre a mesa, em um momento de conforto", width: 1000, height: 1500, position: "center 40%" }}
      />
      <ContentWithAside
        aside={
          <>
            <TalkToSomeoneCard channels={listeningChannels} />
            <RelatedLinks
              links={[
                { label: "Rede de apoio", href: "/rede-de-apoio/" },
                { label: "Seus direitos", href: "/direitos/" },
                { label: "Plano de segurança", href: "/ajuda/plano-de-seguranca/" },
              ]}
            />
          </>
        }
      >
        <HelpPaths channels={indexChannelsById(channels)} onlinePoliceReport={settings.onlinePoliceReport} />
        <SafetyPlanCallout />
      </ContentWithAside>
    </>
  );
}
