"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseScrollAnimationOptions {
  once?: boolean;
  margin?: string;
  amount?: number | "some" | "all";
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { once = true, margin = "0px 0px -80px 0px", amount = 0.1 } = options;
  const ref = useRef<T>(null);
  const isInView = useInView(ref, {
    once,
    margin: margin as `${number}${"px" | "%"}`,
    amount,
  });

  return { ref, isInView };
}
