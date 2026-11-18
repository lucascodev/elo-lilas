import type { Clock } from "@/shared/application/clock/clock.interface";
import type { SupportServiceRepository } from "../../domain/repositories/support-service.repository";
import type { ListSupportServicesInputDto } from "../dtos/list-support-services/list-support-services-input.dto";
import type { SupportServiceOutputDto } from "../dtos/list-support-services/support-service-output.dto";
import { mapSupportServiceToOutputDto } from "../mappers/support-service-to-output-dto.mapper";

export class ListSupportServicesUseCase {
  constructor(
    private readonly repository: SupportServiceRepository,
    private readonly clock: Clock,
  ) {}

  async execute(input: ListSupportServicesInputDto = {}): Promise<SupportServiceOutputDto[]> {
    const services = await this.repository.listAll();
    const now = this.clock.now();
    const filtered = input.category ? services.filter((service) => service.category === input.category) : services;
    const sorted = [...filtered].sort((a, b) => a.order - b.order);
    const limited = input.limit ? sorted.slice(0, input.limit) : sorted;
    return limited.map((service) => mapSupportServiceToOutputDto(service, now));
  }
}
