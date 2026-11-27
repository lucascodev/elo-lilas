import type { ClickEvent } from "../../domain/entities/click-event.entity";

export function buildGoatcounterCountUrl(countEndpoint: string, event: ClickEvent, cacheBuster: string): string {
  const url = new URL(countEndpoint);
  url.searchParams.set("p", event.name);
  url.searchParams.set("t", event.title);
  url.searchParams.set("e", "true");
  url.searchParams.set("rnd", cacheBuster);
  return url.toString();
}
