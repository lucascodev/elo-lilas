"use client";

import { useClickEventTracking } from "@/modules/analytics/presentation/hooks/use-click-event-tracking/use-click-event-tracking";

type ClickEventTrackerProps = {
  countEndpoint: string;
};

export function ClickEventTracker({ countEndpoint }: ClickEventTrackerProps) {
  useClickEventTracking(countEndpoint);
  return null;
}
