import type { Metadata } from "next";
import { makeListHelpChannels } from "@/modules/help-channels";
import { AnonymousReportSection, HelpingGuidelines, WitnessBanner } from "@/modules/helping-others";
import { PageIntro } from "@/shared/presentation/components/layout/page-intro/page-intro";

export const metadata: Metadata = {
  title: "Como ajudar alguém",
  description: "Como acolher alguém em situação de violência, o que evitar e como fazer uma denúncia anônima.",
};

export default async function HowToHelpPage() {
  const [emergencyChannels, listeningChannels] = await Promise.all([
    makeListHelpChannels().execute({ scope: "emergency" }),
    makeListHelpChannels().execute({ scope: "listening" }),
  ]);

  return (
    <>
      <PageIntro
        crumbs={[{ label: "Como ajudar" }]}
        eyebrow="Como ajudar"
        title="Você pode fazer a diferença"
        lead="Familiares, amigos, vizinhos e colegas de trabalho têm um papel importante. Veja como agir sem colocar a pessoa em risco."
        image={{ src: "/images/helping.webp", alt: "Três amigas sentadas lado a lado, conversando e sorrindo", width: 1000, height: 667 }}
      />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-6 pb-12 md:gap-10 md:px-12 md:py-16 md:pb-22">
        <WitnessBanner emergencyChannel={emergencyChannels[0]} />
        <HelpingGuidelines />
        <AnonymousReportSection listeningChannels={listeningChannels} />
      </div>
    </>
  );
}
