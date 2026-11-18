"use client";

import { QUICK_EXIT_SETTINGS } from "@/modules/quick-exit/domain/constants/quick-exit-settings.constant";

export function useQuickExit() {
  function exit() {
    document.body.style.visibility = "hidden";
    document.title = "Previsão do tempo";
    window.location.replace(QUICK_EXIT_SETTINGS.destinationUrl);
  }

  return { exit };
}
