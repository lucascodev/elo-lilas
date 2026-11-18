"use client";

import { useState } from "react";
import type { CategoryFilterOption } from "../../view-models/category-filter-option.type";
import type { DirectoryServiceViewModel } from "../../view-models/directory-service-view-model.type";

export function useCategoryFilter(services: DirectoryServiceViewModel[]) {
  const [selected, setSelected] = useState<CategoryFilterOption["value"]>("all");
  const visibleServices = selected === "all" ? services : services.filter((service) => service.category === selected);

  return { selected, select: setSelected, visibleServices };
}
