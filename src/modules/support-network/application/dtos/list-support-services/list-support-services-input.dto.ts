import type { SupportServiceCategory } from "../../../domain/entities/support-service-category.type";

export type ListSupportServicesInputDto = {
  category?: SupportServiceCategory;
  limit?: number;
};
