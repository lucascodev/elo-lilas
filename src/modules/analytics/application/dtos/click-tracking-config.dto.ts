import type { ContentSecurityPolicySources } from "@/shared/utils/security/content-security-policy-sources.type";

export type ClickTrackingConfigDto = {
  countEndpoint: string;
  contentSecurityPolicySources: ContentSecurityPolicySources;
};
