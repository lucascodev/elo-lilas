import { describe, expect, it } from "vitest";
import { buildContentSecurityPolicy } from "./build-content-security-policy";

describe("buildContentSecurityPolicy", () => {
  it("allows only the site itself when there are no extra sources", () => {
    const policy = buildContentSecurityPolicy({ isDevelopment: false });

    expect(policy).toContain("script-src 'self' 'unsafe-inline';");
    expect(policy).toContain("connect-src 'self';");
  });

  it("allows eval only in development", () => {
    expect(buildContentSecurityPolicy({ isDevelopment: true })).toContain("'unsafe-eval'");
    expect(buildContentSecurityPolicy({ isDevelopment: false })).not.toContain("'unsafe-eval'");
  });

  it("appends the extra script and connect sources", () => {
    const policy = buildContentSecurityPolicy({
      isDevelopment: false,
      extraSources: { scriptSources: ["https://scripts.example"], connectSources: ["https://reports.example"] },
    });

    expect(policy).toContain("script-src 'self' 'unsafe-inline' https://scripts.example;");
    expect(policy).toContain("connect-src 'self' https://reports.example;");
  });
});
