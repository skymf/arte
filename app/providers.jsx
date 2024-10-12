"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { TransitionRouter } from "next-transition-router";

export function Providers({ children }) {
  const firstLayer = useRef(null);
  const secondLayer = useRef(null);

  return (
    <TransitionRouter
      auto={true}
      leave={(next, from, to) => {
        console.log({ from, to });

        const tl = gsap
          .timeline({
            onComplete: next,
          })
          .fromTo(
            firstLayer.current,
            { y: "100%" },
            {
              y: 0,
              duration: 0.75,
              ease: "circ.inOut",
            },
          )
          .fromTo(
            secondLayer.current,
            {
              y: "100%",
            },
            {
              y: 0,
              duration: 1,
              ease: "circ.inOut",
            },
            "<50%",
          );

        return () => {
          tl.kill();
        };
      }}
      enter={(next) => {
        const tl = gsap
          .timeline()
          .fromTo(
            secondLayer.current,
            { y: 0 },
            {
              y: "-100%",
              duration: 1,
              ease: "circ.inOut",
            },
          )
          .fromTo(
            firstLayer.current,
            { y: 0 },
            {
              y: "-100%",
              duration: 1,
              ease: "circ.inOut",
            },
            "<50%",
          )
          .call(next, undefined, "<50%");

        return () => {
          tl.kill();
        };
      }}
    >
      <main>{children}</main>

      <div
        ref={firstLayer}
        className="fixed inset-0 z-50 translate-y-full bg-blue-950"
      />
      <div
        ref={secondLayer}
        className="fixed inset-0 z-50 translate-y-full bg-green-950"
      />
    </TransitionRouter>
  );
}
