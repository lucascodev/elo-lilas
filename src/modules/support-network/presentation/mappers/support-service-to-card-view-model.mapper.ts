import type { SupportServiceOutputDto } from "../../application/dtos/list-support-services/support-service-output.dto";
import { SUPPORT_CATEGORY_LABELS } from "../constants/support-category-labels.constant";
import type { SupportServiceCardViewModel } from "../view-models/support-service-card-view-model.type";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC" });

function toPhoneHref(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 3 ? `tel:${digits}` : null;
}

export function mapSupportServiceToCardViewModel(service: SupportServiceOutputDto): SupportServiceCardViewModel {
  return {
    id: service.id,
    name: service.name,
    categoryLabel: SUPPORT_CATEGORY_LABELS[service.category],
    address: service.address,
    openingHours: service.openingHours,
    phoneLabel: service.phone,
    notes: service.notes,
    phoneHref: toPhoneHref(service.phone),
    routeHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(service.address)}`,
    verifiedLabel: `Verificado em ${dateFormatter.format(new Date(service.lastVerifiedAt))}`,
    showStaleWarning: service.isVerificationStale,
  };
}
