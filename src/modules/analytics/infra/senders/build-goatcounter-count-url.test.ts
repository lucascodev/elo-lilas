import { describe, expect, it } from "vitest";
import { buildGoatcounterCountUrl } from "./build-goatcounter-count-url";

describe("buildGoatcounterCountUrl", () => {
  it("sends the click as an event with its name and title", () => {
    const event = { name: "ligar-cras-rubineia", title: "Ligar: CRAS" };
    const url = new URL(buildGoatcounterCountUrl("https://site.goatcounter.com/count", event, "abc"));

    expect(`${url.origin}${url.pathname}`).toBe("https://site.goatcounter.com/count");
    expect(url.searchParams.get("p")).toBe("ligar-cras-rubineia");
    expect(url.searchParams.get("t")).toBe("Ligar: CRAS");
    expect(url.searchParams.get("e")).toBe("true");
    expect(url.searchParams.get("rnd")).toBe("abc");
  });
});
