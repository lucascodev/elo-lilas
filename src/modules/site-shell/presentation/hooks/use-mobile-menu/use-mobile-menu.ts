"use client";

import { useRef } from "react";

export function useMobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return {
    dialogRef,
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  };
}
