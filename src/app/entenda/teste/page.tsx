import type { Metadata } from "next";
import { makeListHelpChannels, TalkToSomeoneCard } from "@/modules/help-channels";
import { makeListQuizQuestions, Quiz } from "@/modules/warning-signs-quiz";
import { ContentWithAside } from "@/shared/presentation/components/layout/content-with-aside/content-with-aside";
import { PageIntro } from "@/shared/presentation/components/layout/page-intro/page-intro";
import { RelatedLinks } from "@/shared/presentation/components/navigation/related-links/related-links";

export const metadata: Metadata = {
  title: "Teste de sinais de alerta",
  description: "Dez perguntas de sim ou não para reconhecer sinais de violência. Nada é salvo.",
};

export default async function WarningSignsTestPage() {
  const [questions, listeningChannels] = await Promise.all([makeListQuizQuestions().execute(), makeListHelpChannels().execute({ scope: "listening" })]);

  return (
    <>
      <PageIntro
        crumbs={[{ label: "Entenda", href: "/entenda/" }, { label: "Teste" }]}
        eyebrow="Teste de sinais de alerta"
        title="Reconheça o que você está vivendo"
        lead="Dez perguntas de sim ou não sobre situações do dia a dia. Leva cerca de 3 minutos."
      />
      <ContentWithAside
        aside={
          <>
            <TalkToSomeoneCard channels={listeningChannels} />
            <RelatedLinks
              links={[
                { label: "Entenda a violência", href: "/entenda/" },
                { label: "Como pedir ajuda", href: "/ajuda/" },
                { label: "Plano de segurança", href: "/ajuda/plano-de-seguranca/" },
              ]}
            />
          </>
        }
      >
        <Quiz questions={questions} />
      </ContentWithAside>
    </>
  );
}
