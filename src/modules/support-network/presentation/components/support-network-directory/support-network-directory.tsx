"use client";

import { useCategoryFilter } from "../../hooks/use-category-filter/use-category-filter";
import type { CategoryFilterOption } from "../../view-models/category-filter-option.type";
import type { DirectoryServiceViewModel } from "../../view-models/directory-service-view-model.type";
import { SupportServiceCard } from "../support-service-card/support-service-card";

type SupportNetworkDirectoryProps = {
  services: DirectoryServiceViewModel[];
  filters: CategoryFilterOption[];
};

export function SupportNetworkDirectory({ services, filters }: SupportNetworkDirectoryProps) {
  const { selected, select, visibleServices } = useCategoryFilter(services);

  return (
    <div className="flex flex-col gap-5 md:gap-7">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
        <p id="filter-heading" className="font-heading text-[15px] font-semibold text-ink">
          Filtrar por tipo:
        </p>
        <div role="group" aria-labelledby="filter-heading" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0">
          {filters.map((filter) => {
            const isSelected = filter.value === selected;
            return (
              <button
                key={filter.value}
                type="button"
                aria-pressed={isSelected}
                onClick={() => select(filter.value)}
                className={`min-h-10 shrink-0 rounded-full px-4 font-heading text-sm font-medium whitespace-nowrap ${
                  isSelected ? "bg-primary text-white" : "bg-soft text-primary-dark hover:bg-mid"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {visibleServices.length} serviços encontrados
      </p>
      <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {visibleServices.map((service) => (
          <SupportServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
