import type { SupportService } from "../../domain/entities/support-service.entity";
import { isVerificationStale } from "../../domain/rules/is-verification-stale.rule";
import type { SupportServiceOutputDto } from "../dtos/list-support-services/support-service-output.dto";

export function mapSupportServiceToOutputDto(service: SupportService, now: Date): SupportServiceOutputDto {
  return {
    id: service.id,
    name: service.name,
    category: service.category,
    address: service.address,
    openingHours: service.openingHours,
    phone: service.phone,
    notes: service.notes,
    lastVerifiedAt: service.lastVerifiedAt.toISOString(),
    isVerificationStale: isVerificationStale(service.lastVerifiedAt, now),
  };
}
