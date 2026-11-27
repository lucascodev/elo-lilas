import type { ClickEventSender } from "../../application/ports/click-event-sender.interface";
import { GoatcounterClickEventSender } from "../../infra/senders/goatcounter-click-event-sender";

export function makeClickEventSender(countEndpoint: string): ClickEventSender {
  return new GoatcounterClickEventSender(countEndpoint);
}
