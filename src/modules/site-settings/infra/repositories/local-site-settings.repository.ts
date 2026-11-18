import type { SiteSettings } from "../../domain/entities/site-settings.entity";
import type { SiteSettingsRepository } from "../../domain/repositories/site-settings.repository";
import { SITE_SETTINGS_DATA } from "../data/site-settings.data";

export class LocalSiteSettingsRepository implements SiteSettingsRepository {
  async get(): Promise<SiteSettings> {
    return SITE_SETTINGS_DATA;
  }
}
