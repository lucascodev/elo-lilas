"use client";

import { useEffect, useRef } from "react";
import { QUICK_EXIT_SETTINGS } from "@/modules/quick-exit/domain/constants/quick-exit-settings.constant";
import { isDoublePress } from "@/modules/quick-exit/domain/rules/is-double-press.rule";

export function useEscapeShortcut(onTrigger: () => void) {
  const lastPressAt = useRef<number | null>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const now = performance.now();
      if (isDoublePress(lastPressAt.current, now, QUICK_EXIT_SETTINGS.doublePressWindowMs)) {
        onTrigger();
        return;
      }
      lastPressAt.current = now;
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onTrigger]);
}
