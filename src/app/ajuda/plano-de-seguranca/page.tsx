import type { Metadata } from "next";
import { makeListHelpChannels, TalkToSomeoneCard } from "@/modules/help-channels";
import { SafetyChecklist, SafetyWarning } from "@/modules/safety-plan";
import { ContentWithAside } from "@/shared/presentation/components/layout/content-with-aside/content-with-aside";
import { PageIntro } from "@/shared/presentation/components/layout/page-intro/page-intro";
import { RelatedLinks } from "@/shared/presentation/components/navigation/related-links/related-links";

export const metadata: Metadata = {
  title: "Plano de segurança",
  description: "Checklist para se preparar com segurança: documentos, dinheiro, pessoas de confiança e rota de saída.",
};

export default async function SafetyPlanPage() {
  const listeningChannels = await makeListHelpChannels().execute({ scope: "listening" });

  return (
    <>
      <PageIntro
        crumbs={[{ label: "Como pedir ajuda", href: "/ajuda/" }, { label: "Plano de segurança" }]}
        eyebrow="Plano de segurança"
        title="Prepare-se no seu tempo"
        lead="Marque o que você já tem pronto. Nada fica salvo quando você sai da página."
      />
      <ContentWithAside
        aside={
          <>
            <TalkToSomeoneCard channels={listeningChannels} />
            <RelatedLinks
              links={[
                { label: "Como pedir ajuda", href: "/ajuda/" },
                { label: "Rede de apoio", href: "/rede-de-apoio/" },
                { label: "Seus direitos", href: "/direitos/" },
              ]}
            />
          </>
        }
      >
        <SafetyWarning />
        <SafetyChecklist />
      </ContentWithAside>
    </>
  );
}
