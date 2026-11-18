import "server-only";
import { GetSiteSettingsUseCase } from "../../application/use-cases/get-site-settings.use-case";
import { LocalSiteSettingsRepository } from "../../infra/repositories/local-site-settings.repository";

export function makeGetSiteSettings(): GetSiteSettingsUseCase {
  return new GetSiteSettingsUseCase(new LocalSiteSettingsRepository());
}
