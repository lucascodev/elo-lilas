import { describe, expect, it } from "vitest";
import { isVerificationStale } from "./is-verification-stale.rule";

const now = new Date("2026-11-17T12:00:00Z");

describe("isVerificationStale", () => {
  it("accepts data verified less than six months ago", () => {
    expect(isVerificationStale(new Date("2026-08-01T12:00:00Z"), now)).toBe(false);
  });

  it("flags data verified more than six months ago", () => {
    expect(isVerificationStale(new Date("2026-04-01T12:00:00Z"), now)).toBe(true);
  });
});
