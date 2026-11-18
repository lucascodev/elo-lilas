"use client";

import Link from "next/link";
import { QuickExitButton } from "@/modules/quick-exit";
import { Icon } from "@/shared/presentation/components/icons/icon/icon";
import { FULL_NAVIGATION } from "../../../../constants/full-navigation.constant";
import { useActiveNavigation } from "../../../../hooks/use-active-navigation/use-active-navigation";
import { useMobileMenu } from "../../../../hooks/use-mobile-menu/use-mobile-menu";

export function MobileMenu() {
  const { dialogRef, open, close } = useMobileMenu();
  const items = useActiveNavigation(FULL_NAVIGATION);

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Abrir menu"
        className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border-[1.5px] border-line text-ink lg:hidden"
      >
        <Icon name="menu" size={22} />
      </button>
      <dialog
        ref={dialogRef}
        aria-label="Menu"
        className="m-0 h-dvh max-h-none w-full max-w-none bg-white p-0 backdrop:bg-ink/60 lg:hidden"
      >
        <div className="flex h-17 items-center gap-2 border-b border-line pr-3 pl-5">
          <p className="grow font-heading text-[19px] font-bold text-ink">Menu</p>
          <QuickExitButton />
          <button
            type="button"
            onClick={close}
            aria-label="Fechar menu"
            className="inline-flex size-11 items-center justify-center rounded-xl border-[1.5px] border-line text-ink"
          >
            <Icon name="close" size={22} />
          </button>
        </div>
        <nav aria-label="Menu principal" className="px-5 pb-36">
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={item.isActive ? "page" : undefined}
                  className={`flex min-h-13 items-center justify-between border-b border-line font-heading text-[17px] no-underline ${
                    item.isActive ? "font-semibold text-primary" : "font-medium text-ink"
                  }`}
                >
                  {item.label}
                  <Icon name="chevron-right" className="text-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </>
  );
}
