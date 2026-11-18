export type SiteSettingsOutputDto = {
  siteName: string;
  partnerName: string;
  municipality: string;
  state: string;
  contentReviewedAt: string;
  onlinePoliceReport: { label: string; url: string; appName: string };
};
