import type { SiteSettings } from "../entities/site-settings.entity";

export interface SiteSettingsRepository {
  get(): Promise<SiteSettings>;
}
