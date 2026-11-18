import type { Metadata } from "next";
import { FaqList, makeListFaqItems } from "@/modules/faq";
import { makeListHelpChannels, TalkToSomeoneCard } from "@/modules/help-channels";
import { ContentWithAside } from "@/shared/presentation/components/layout/content-with-aside/content-with-aside";
import { PageIntro } from "@/shared/presentation/components/layout/page-intro/page-intro";
import { RelatedLinks } from "@/shared/presentation/components/navigation/related-links/related-links";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description: "Respostas curtas para as dúvidas mais comuns sobre violência doméstica, denúncia e medidas protetivas.",
};

export default async function FaqPage() {
  const [items, listeningChannels] = await Promise.all([makeListFaqItems().execute(), makeListHelpChannels().execute({ scope: "listening" })]);

  return (
    <>
      <PageIntro
        crumbs={[{ label: "Perguntas frequentes" }]}
        eyebrow="Perguntas frequentes"
        title="Dúvidas comuns"
        lead="Respostas curtas para o que mais se pergunta sobre violência doméstica, denúncia e proteção."
      />
      <ContentWithAside
        aside={
          <>
            <TalkToSomeoneCard channels={listeningChannels} />
            <RelatedLinks
              links={[
                { label: "Seus direitos", href: "/direitos/" },
                { label: "Como pedir ajuda", href: "/ajuda/" },
                { label: "Sobre o projeto", href: "/sobre/" },
              ]}
            />
          </>
        }
      >
        <FaqList items={items} />
      </ContentWithAside>
    </>
  );
}
