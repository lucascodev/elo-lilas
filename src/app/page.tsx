import { HelpingTeaser, HomeHero, HomeShortcuts, ProtectiveMeasureHighlight, QuizTeaser, ViolenceFormsTeaser } from "@/modules/home";
import { makeGetSiteSettings } from "@/modules/site-settings";
import { makeListSupportServices, SupportNetworkPreview } from "@/modules/support-network";
import { makeListViolenceForms } from "@/modules/violence-education";

export default async function HomePage() {
  const [forms, services, settings] = await Promise.all([
    makeListViolenceForms().execute(),
    makeListSupportServices().execute({ limit: 3 }),
    makeGetSiteSettings().execute(),
  ]);

  return (
    <>
      <HomeHero />
      <HomeShortcuts />
      <ProtectiveMeasureHighlight />
      <ViolenceFormsTeaser forms={forms} />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 md:px-12">
        <QuizTeaser />
        <HelpingTeaser />
      </section>
      <SupportNetworkPreview services={services} municipality={settings.municipality} />
    </>
  );
}
