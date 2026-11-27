import type { ContentSecurityPolicySources } from "./content-security-policy-sources.type";

type OptionalSources = ContentSecurityPolicySources | null | undefined;

export function mergeContentSecurityPolicySources(sources: readonly OptionalSources[]): ContentSecurityPolicySources {
  const presentSources = sources.filter((source): source is ContentSecurityPolicySources => Boolean(source));
  return {
    scriptSources: presentSources.flatMap((source) => source.scriptSources),
    connectSources: presentSources.flatMap((source) => source.connectSources),
  };
}
