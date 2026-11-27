import { describe, expect, it } from "vitest";
import { mergeContentSecurityPolicySources } from "./merge-content-security-policy-sources";

describe("mergeContentSecurityPolicySources", () => {
  it("joins the sources of every provider and skips the missing ones", () => {
    const merged = mergeContentSecurityPolicySources([
      { scriptSources: ["https://a.example/script.js"], connectSources: ["https://a.example"] },
      null,
      { scriptSources: [], connectSources: ["https://b.example"] },
    ]);

    expect(merged).toEqual({
      scriptSources: ["https://a.example/script.js"],
      connectSources: ["https://a.example", "https://b.example"],
    });
  });
});
