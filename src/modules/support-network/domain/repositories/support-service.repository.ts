import type { SupportService } from "../entities/support-service.entity";

export interface SupportServiceRepository {
  listAll(): Promise<SupportService[]>;
}
