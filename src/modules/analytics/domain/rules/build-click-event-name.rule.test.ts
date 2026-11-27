import { describe, expect, it } from "vitest";
import { buildClickEventName } from "./build-click-event-name.rule";

describe("buildClickEventName", () => {
  it("joins the action and the target id", () => {
    expect(buildClickEventName("ligar", "cras-rubineia")).toBe("ligar-cras-rubineia");
  });

  it("keeps only lowercase letters, digits and inner hyphens in the target id", () => {
    expect(buildClickEventName("rota", "/UPA Santa Fe/")).toBe("rota-upa-santa-fe");
  });
});
