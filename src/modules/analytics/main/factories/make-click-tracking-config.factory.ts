import "server-only";
import type { ClickTrackingConfigDto } from "../../application/dtos/click-tracking-config.dto";
import { GOATCOUNTER } from "../../infra/constants/goatcounter.constant";

export function makeClickTrackingConfig(): ClickTrackingConfigDto | null {
  const code = process.env.GOATCOUNTER_CODE?.trim();
  if (!code || !GOATCOUNTER.validCode.test(code)) return null;

  const origin = `https://${code}${GOATCOUNTER.hostSuffix}`;
  return {
    countEndpoint: `${origin}${GOATCOUNTER.countPath}`,
    contentSecurityPolicySources: { scriptSources: [], connectSources: [origin] },
  };
}
