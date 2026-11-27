import "server-only";
import type { WebAnalyticsConfigDto } from "../../application/dtos/web-analytics-config.dto";
import { CLOUDFLARE_WEB_ANALYTICS } from "../../infra/constants/cloudflare-web-analytics.constant";

export function makeWebAnalyticsConfig(): WebAnalyticsConfigDto | null {
  const token = process.env.CLOUDFLARE_ANALYTICS_TOKEN?.trim();
  if (!token) return null;

  return {
    token,
    beaconScriptUrl: CLOUDFLARE_WEB_ANALYTICS.beaconScriptUrl,
    contentSecurityPolicySources: {
      scriptSources: [CLOUDFLARE_WEB_ANALYTICS.beaconScriptUrl],
      connectSources: [CLOUDFLARE_WEB_ANALYTICS.reportOrigin],
    },
  };
}
