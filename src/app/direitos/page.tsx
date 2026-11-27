import type { Metadata } from "next";
import { makeListHelpChannels, TalkToSomeoneCard } from "@/modules/help-channels";
import { LawTimeline, PenaltiesSection, ProtectiveMeasuresSection } from "@/modules/rights";
import { makeGetSiteSettings } from "@/modules/site-settings";
import { ContentWithAside } from "@/shared/presentation/components/layout/content-with-aside/content-with-aside";
import { PageIntro } from "@/shared/presentation/components/layout/page-intro/page-intro";
import { RelatedLinks } from "@/shared/presentation/components/navigation/related-links/related-links";

export const metadata: Metadata = {
  title: "Seus direitos",
  description: "O que a Lei Maria da Penha garante: medidas protetivas, penalidades para o agressor e as mudanças da lei até 2026.",
};

export default async function RightsPage() {
  const [listeningChannels, settings] = await Promise.all([makeListHelpChannels().execute({ scope: "listening" }), makeGetSiteSettings().execute()]);

  return (
    <>
      <PageIntro
        crumbs={[{ label: "Seus direitos" }]}
        eyebrow="Seus direitos"
        title="O que a lei garante para você"
        lead="A Lei Maria da Penha (Lei 11.340/2006) protege mulheres em situação de violência doméstica e familiar, em qualquer tipo de relação, inclusive depois que ela termina."
        image={{ src: "/images/conversation.webp", alt: "Duas mulheres conversam sorrindo em uma mesa de café", width: 1000, height: 563 }}
      >
        <p className="text-sm text-muted">
          Revisado pela instituição parceira, {settings.partnerName}, em {settings.contentReviewedAt}
        </p>
      </PageIntro>
      <ContentWithAside
        aside={
          <>
            <TalkToSomeoneCard channels={listeningChannels} />
            <RelatedLinks
              links={[
                { label: "Como pedir ajuda", href: "/ajuda/" },
                { label: "Perguntas frequentes", href: "/perguntas/" },
                { label: "Rede de apoio", href: "/rede-de-apoio/" },
              ]}
            />
          </>
        }
      >
        <ProtectiveMeasuresSection />
        <PenaltiesSection />
      </ContentWithAside>
      <LawTimeline />
    </>
  );
}
