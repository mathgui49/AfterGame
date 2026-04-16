"use client";

import { useEffect } from "react";
import { useCouple } from "@/lib/couple";

export function DimApplier() {
  const { config } = useCouple();
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (config.dim) root.classList.add("dimmed");
    else root.classList.remove("dimmed");
  }, [config.dim]);
  return null;
}
