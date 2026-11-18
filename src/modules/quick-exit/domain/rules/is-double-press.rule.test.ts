import { describe, expect, it } from "vitest";
import { isDoublePress } from "./is-double-press.rule";

describe("isDoublePress", () => {
  it("returns false on the first press", () => {
    expect(isDoublePress(null, 1000, 800)).toBe(false);
  });

  it("returns true when the second press is inside the window", () => {
    expect(isDoublePress(1000, 1500, 800)).toBe(true);
  });

  it("returns false when the second press is too late", () => {
    expect(isDoublePress(1000, 2000, 800)).toBe(false);
  });
});
