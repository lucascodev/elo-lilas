import type { Metadata } from "next";
import { makeListViolenceForms, ViolenceCycleSection, ViolenceFormsSection, WarningSignsSection } from "@/modules/violence-education";
import { PageIntro } from "@/shared/presentation/components/layout/page-intro/page-intro";

export const metadata: Metadata = {
  title: "Entenda a violência doméstica",
  description: "As cinco formas de violência da Lei Maria da Penha, o ciclo da violência e os sinais de alerta.",
};

export default async function UnderstandPage() {
  const forms = await makeListViolenceForms().execute();

  return (
    <>
      <PageIntro
        crumbs={[{ label: "Entenda" }]}
        eyebrow="Entenda"
        title="O que é violência doméstica"
        lead="É qualquer ação ou omissão que cause sofrimento físico, psicológico, sexual, patrimonial ou moral dentro de casa, na família ou em uma relação íntima, mesmo depois que ela termina."
        image={{ src: "/images/lavender.webp", alt: "Campo de lavanda iluminado pelo sol", width: 1000, height: 669 }}
      />
      <ViolenceFormsSection forms={forms} />
      <ViolenceCycleSection />
      <WarningSignsSection />
    </>
  );
}
