import "server-only";
import { SystemClock } from "@/shared/infra/clock/system-clock";
import { ListSupportServicesUseCase } from "../../application/use-cases/list-support-services.use-case";
import { LocalSupportServiceRepository } from "../../infra/repositories/local-support-service.repository";

export function makeListSupportServices(): ListSupportServicesUseCase {
  return new ListSupportServicesUseCase(new LocalSupportServiceRepository(), new SystemClock());
}
