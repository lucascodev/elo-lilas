import type { ClickEvent } from "../../domain/entities/click-event.entity";

export interface ClickEventSender {
  send(event: ClickEvent): void;
}
