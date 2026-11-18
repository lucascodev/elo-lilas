import type { SupportServiceCategory } from "../../../domain/entities/support-service-category.type";

export type SupportServiceOutputDto = {
  id: string;
  name: string;
  category: SupportServiceCategory;
  address: string;
  openingHours: string;
  phone: string;
  notes: string | null;
  lastVerifiedAt: string;
  isVerificationStale: boolean;
};
