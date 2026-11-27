import type { ContentSecurityPolicySources } from "@/shared/utils/security/content-security-policy-sources.type";

export type WebAnalyticsConfigDto = {
  token: string;
  beaconScriptUrl: string;
  contentSecurityPolicySources: ContentSecurityPolicySources;
};
