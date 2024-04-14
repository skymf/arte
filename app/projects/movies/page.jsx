"use client";
import React, { useLayoutEffect, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Index() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  const background = useRef(null);
  const introImage = useRef(null);
  const homeHeader = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=500px",
      },
    });

    timeline
      .from(background.current, { clipPath: `inset(10%)` })
      .to(introImage.current, { height: "300px" }, 0);
  }, []);

  return (
    <section>
      <div ref={homeHeader} className="relative w-full flex justify-center">
        <div className="relative flex justify-center mt-[35vh]">
          <div
            data-scroll
            data-scroll-speed="0.3"
            className="filter brightness-75 absolute"
          >
            <Image
              src={"/h.jpeg"}
              ref={introImage}
              alt="intro image"
              width={350}
              height={475}
              priority={true}
            />
          </div>
          <h1 className="text-white text-[7vw] z-10 text-center whitespace-nowrap">
            EL MOVIES
          </h1>
        </div>
      </div>
      <div className="relative mb-28 mt-[50vw] ml-[45vw]">hi</div>
    </section>
  );
}
