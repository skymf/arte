"use client";

import { useTransitionState } from "next-transition-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Reveal({ children, ...rest }) {
  const ref = useRef(null);
  const { isReady } = useTransitionState();

  useEffect(() => {
    if (isReady) {
      const ctx = gsap.context(() => {
        gsap.to("img", { scale: 1, duration: 0.8, ease: "expo.out" });
      }, ref);

      return () => {
        ctx?.revert();
      };
    }
  }, [isReady]);

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
}
