import type { SiteSettings } from "../../domain/entities/site-settings.entity";

export const SITE_SETTINGS_DATA: SiteSettings = {
  siteName: "Elo Lilás",
  partnerName: "[INSTITUIÇÃO PARCEIRA]",
  municipality: "Rubinéia",
  state: "São Paulo",
  contentReviewedAt: "[DATA DA ÚLTIMA REVISÃO]",
  onlinePoliceReport: {
    label: "DDM Online da Polícia Civil de São Paulo",
    url: "https://www.delegaciaeletronica.policiacivil.sp.gov.br",
    appName: "SP Mulher Segura",
  },
};
