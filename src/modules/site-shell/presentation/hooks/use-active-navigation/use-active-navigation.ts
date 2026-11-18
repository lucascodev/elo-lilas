"use client";

import { usePathname } from "next/navigation";
import type { NavigationItem } from "../../view-models/navigation-item.type";

function normalize(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

export function useActiveNavigation(items: NavigationItem[]) {
  const pathname = normalize(usePathname() ?? "/");

  return items.map((item) => {
    const href = normalize(item.href);
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return { ...item, isActive };
  });
}
