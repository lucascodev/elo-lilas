import type { SupportService } from "../../domain/entities/support-service.entity";
import type { SupportServiceRepository } from "../../domain/repositories/support-service.repository";
import { SUPPORT_SERVICES_DATA } from "../data/support-services.data";
import { mapSupportServiceRecordToEntity } from "../mappers/support-service-record-to-entity.mapper";

export class LocalSupportServiceRepository implements SupportServiceRepository {
  async listAll(): Promise<SupportService[]> {
    return SUPPORT_SERVICES_DATA.map(mapSupportServiceRecordToEntity);
  }
}
