import type { SupportServiceCategory } from "./support-service-category.type";

export type SupportService = {
  readonly id: string;
  readonly name: string;
  readonly category: SupportServiceCategory;
  readonly address: string;
  readonly openingHours: string;
  readonly phone: string;
  readonly notes: string | null;
  readonly lastVerifiedAt: Date;
  readonly order: number;
};
