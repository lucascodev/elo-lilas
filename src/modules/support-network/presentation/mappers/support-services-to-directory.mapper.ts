import type { SupportServiceOutputDto } from "../../application/dtos/list-support-services/support-service-output.dto";
import { SUPPORT_CATEGORY_LABELS } from "../constants/support-category-labels.constant";
import type { CategoryFilterOption } from "../view-models/category-filter-option.type";
import type { DirectoryServiceViewModel } from "../view-models/directory-service-view-model.type";
import { mapSupportServiceToCardViewModel } from "./support-service-to-card-view-model.mapper";

export function mapSupportServicesToDirectory(services: SupportServiceOutputDto[]): {
  services: DirectoryServiceViewModel[];
  filters: CategoryFilterOption[];
} {
  const categories = [...new Set(services.map((service) => service.category))];
  return {
    services: services.map((service) => ({ ...mapSupportServiceToCardViewModel(service), category: service.category })),
    filters: [{ value: "all", label: "Todos" }, ...categories.map((category) => ({ value: category, label: SUPPORT_CATEGORY_LABELS[category] }))],
  };
}
