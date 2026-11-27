import type { ClickEventAction } from "../../domain/entities/click-event-action.type";
import { buildClickEventName } from "../../domain/rules/build-click-event-name.rule";
import type { TrackEventAttributes } from "./track-event-attributes.type";

export function toTrackEventAttributes(action: ClickEventAction, targetId: string, title: string): TrackEventAttributes {
  return {
    "data-track-event": buildClickEventName(action, targetId),
    "data-track-title": title,
  };
}
