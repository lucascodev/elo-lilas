import type { SupportService } from "../../domain/entities/support-service.entity";
import type { SupportServiceRecord } from "../types/support-service-record.type";

export function mapSupportServiceRecordToEntity(record: SupportServiceRecord): SupportService {
  return {
    id: record.id,
    name: record.name,
    category: record.category,
    address: record.address,
    openingHours: record.opening_hours,
    phone: record.phone,
    notes: record.notes ?? null,
    lastVerifiedAt: new Date(record.last_verified_at),
    order: record.order,
  };
}
