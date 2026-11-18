import type { SupportServiceCategory } from "../../domain/entities/support-service-category.type";
import type { SupportServiceCardViewModel } from "./support-service-card-view-model.type";

export type DirectoryServiceViewModel = SupportServiceCardViewModel & {
  category: SupportServiceCategory;
};
