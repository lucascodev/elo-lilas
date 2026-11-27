import type { ContentSecurityPolicySources } from "./content-security-policy-sources.type";

const DEVELOPMENT_SCRIPT_SOURCES = ["'self'", "'unsafe-inline'", "'unsafe-eval'"];
const PRODUCTION_SCRIPT_SOURCES = ["'self'", "'unsafe-inline'"];

type BuildContentSecurityPolicyInput = {
  isDevelopment: boolean;
  extraSources?: ContentSecurityPolicySources;
};

export function buildContentSecurityPolicy({ isDevelopment, extraSources }: BuildContentSecurityPolicyInput): string {
  const baseScriptSources = isDevelopment ? DEVELOPMENT_SCRIPT_SOURCES : PRODUCTION_SCRIPT_SOURCES;
  const scriptSources = [...baseScriptSources, ...(extraSources?.scriptSources ?? [])];
  const connectSources = ["'self'", ...(extraSources?.connectSources ?? [])];

  return [
    "default-src 'self'",
    `script-src ${scriptSources.join(" ")}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self'",
    `connect-src ${connectSources.join(" ")}`,
    "base-uri 'self'",
    "form-action 'self'",
  ].join("; ");
}
