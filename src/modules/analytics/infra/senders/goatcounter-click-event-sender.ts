import type { ClickEventSender } from "../../application/ports/click-event-sender.interface";
import type { ClickEvent } from "../../domain/entities/click-event.entity";
import { buildGoatcounterCountUrl } from "./build-goatcounter-count-url";

export class GoatcounterClickEventSender implements ClickEventSender {
  constructor(private readonly countEndpoint: string) {}

  send(event: ClickEvent): void {
    navigator.sendBeacon(buildGoatcounterCountUrl(this.countEndpoint, event, Date.now().toString(36)));
  }
}
