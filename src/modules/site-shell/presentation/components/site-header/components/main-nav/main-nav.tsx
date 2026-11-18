"use client";

import Link from "next/link";
import { MAIN_NAVIGATION } from "../../../../constants/main-navigation.constant";
import { useActiveNavigation } from "../../../../hooks/use-active-navigation/use-active-navigation";

export function MainNav() {
  const items = useActiveNavigation(MAIN_NAVIGATION);

  return (
    <nav aria-label="Menu principal" className="hidden grow lg:block">
      <ul className="flex gap-7">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={item.isActive ? "page" : undefined}
              className={`block border-b-[3px] py-2.5 font-heading text-[15px] no-underline ${
                item.isActive ? "border-primary font-semibold text-primary" : "border-transparent font-medium text-ink hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
