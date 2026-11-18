import type { Metadata } from "next";
import { ChildWarningSigns, TrustedContacts } from "@/modules/children-protection";
import { makeListHelpChannels } from "@/modules/help-channels";
import { PageIntro } from "@/shared/presentation/components/layout/page-intro/page-intro";

export const metadata: Metadata = {
  title: "Crianças e adolescentes",
  description: "Se a violência acontece na sua casa, a culpa não é sua. Saiba para quem contar: adulto de confiança, Conselho Tutelar e Disque 100.",
};

export default async function ChildrenPage() {
  const [disque100] = await makeListHelpChannels().execute({ scope: "child-protection" });

  return (
    <>
      <PageIntro
        crumbs={[{ label: "Crianças e adolescentes" }]}
        eyebrow="Crianças e adolescentes"
        title="A culpa não é sua"
        lead="Se está acontecendo na sua casa, você tem direito de estar seguro e pode pedir ajuda."
        image={{ src: "/images/children.webp", alt: "Mulher abraça um menino sentado em seu colo", width: 1000, height: 1498, position: "center 30%" }}
      />
      <TrustedContacts disque100={disque100} />
      <ChildWarningSigns />
    </>
  );
}
