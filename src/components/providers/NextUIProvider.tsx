"use client";

import { NextUIProvider as NextUIProviderBase } from "@nextui-org/react";

export function NextUIProvider({ children }: { children: React.ReactNode }) {
  return <NextUIProviderBase>{children}</NextUIProviderBase>;
}
