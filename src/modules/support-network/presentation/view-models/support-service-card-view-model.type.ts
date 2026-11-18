export type SupportServiceCardViewModel = {
  id: string;
  name: string;
  categoryLabel: string;
  address: string;
  openingHours: string;
  phoneLabel: string;
  notes: string | null;
  phoneHref: string | null;
  routeHref: string;
  verifiedLabel: string;
  showStaleWarning: boolean;
};
