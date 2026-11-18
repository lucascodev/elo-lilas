export type SiteSettings = {
  readonly siteName: string;
  readonly partnerName: string;
  readonly municipality: string;
  readonly state: string;
  readonly contentReviewedAt: string;
  readonly onlinePoliceReport: { readonly label: string; readonly url: string; readonly appName: string };
};
