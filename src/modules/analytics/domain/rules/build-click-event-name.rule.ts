import type { ClickEventAction } from "../entities/click-event-action.type";

const INVALID_CHARACTERS = /[^a-z0-9]+/g;
const EDGE_HYPHENS = /^-+|-+$/g;

export function buildClickEventName(action: ClickEventAction, targetId: string): string {
  const normalizedTargetId = targetId.toLowerCase().replace(INVALID_CHARACTERS, "-").replace(EDGE_HYPHENS, "");
  return `${action}-${normalizedTargetId}`;
}
