import type { SiteSettings } from "../../domain/entities/site-settings.entity";

export const SITE_SETTINGS_DATA: SiteSettings = {
  siteName: "Elo Lilás",
  partnerName: "Departamento de Assistência e Desenvolvimento Social de Rubinéia",
  municipality: "Rubinéia",
  state: "São Paulo",
  contentReviewedAt: "26/11/2026",
  onlinePoliceReport: {
    label: "DDM Online da Polícia Civil de São Paulo",
    url: "https://www.delegaciaeletronica.policiacivil.sp.gov.br",
    appName: "SP Mulher Segura",
  },
};
