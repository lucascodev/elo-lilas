"use client";

import { useEffect } from "react";
import { makeClickEventSender } from "@/modules/analytics/main/factories/make-click-event-sender.factory";
import { TRACKED_ELEMENT_SELECTOR } from "@/modules/analytics/presentation/constants/tracked-element-selector.constant";

export function useClickEventTracking(countEndpoint: string) {
  useEffect(() => {
    const sender = makeClickEventSender(countEndpoint);

    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const trackedElement = event.target.closest<HTMLElement>(TRACKED_ELEMENT_SELECTOR);
      const name = trackedElement?.dataset.trackEvent;
      if (!trackedElement || !name) return;
      sender.send({ name, title: trackedElement.dataset.trackTitle ?? name });
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [countEndpoint]);
}
