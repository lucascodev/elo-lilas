"use client";

import { QUICK_EXIT_SETTINGS } from "@/modules/quick-exit/domain/constants/quick-exit-settings.constant";
import { useQuickExit } from "@/modules/quick-exit/presentation/hooks/use-quick-exit/use-quick-exit";
import { Icon } from "@/shared/presentation/components/icons/icon/icon";

type QuickExitButtonProps = {
  showShortcutHint?: boolean;
};

export function QuickExitButton({ showShortcutHint = false }: QuickExitButtonProps) {
  const { exit } = useQuickExit();

  return (
    <a
      href={QUICK_EXIT_SETTINGS.destinationUrl}
      onClick={(event) => {
        event.preventDefault();
        exit();
      }}
      className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-ink px-3.5 font-heading text-sm font-semibold text-white no-underline hover:bg-black hover:text-white md:px-5 md:text-[15px]"
    >
      <Icon name="exit" size={18} />
      Sair rápido
      {showShortcutHint && <span className="hidden font-body text-[13px] font-normal text-on-dark md:inline">Esc 2x</span>}
    </a>
  );
}
