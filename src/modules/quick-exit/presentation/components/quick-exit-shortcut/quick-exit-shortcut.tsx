"use client";

import { useEscapeShortcut } from "@/modules/quick-exit/presentation/hooks/use-escape-shortcut/use-escape-shortcut";
import { useQuickExit } from "@/modules/quick-exit/presentation/hooks/use-quick-exit/use-quick-exit";

export function QuickExitShortcut() {
  const { exit } = useQuickExit();
  useEscapeShortcut(exit);
  return null;
}
