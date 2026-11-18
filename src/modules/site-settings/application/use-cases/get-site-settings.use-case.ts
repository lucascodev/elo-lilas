import type { SiteSettingsRepository } from "../../domain/repositories/site-settings.repository";
import type { SiteSettingsOutputDto } from "../dtos/get-site-settings/site-settings-output.dto";

export class GetSiteSettingsUseCase {
  constructor(private readonly repository: SiteSettingsRepository) {}

  async execute(): Promise<SiteSettingsOutputDto> {
    const settings = await this.repository.get();
    return { ...settings, onlinePoliceReport: { ...settings.onlinePoliceReport } };
  }
}
