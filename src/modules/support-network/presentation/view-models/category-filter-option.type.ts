import type { SupportServiceCategory } from "../../domain/entities/support-service-category.type";

export type CategoryFilterOption = {
  value: SupportServiceCategory | "all";
  label: string;
};
