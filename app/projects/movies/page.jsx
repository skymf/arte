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
      .to(introImage.current, { height: "50" }, 0);
  }, []);

  return (
    <section className="px-12 relative">
      <div ref={homeHeader} className="relative w-full flex justify-center">
        <div className="relative flex justify-center mt-[20vh]">
          <div
            data-scroll
            data-scroll-speed="0.3"
            className="filter brightness-75 absolute"
          >
            <Image
              src={"/h.jpeg"}
              ref={introImage}
              alt="intro image"
              width={200}
              height={200}
              priority={true}
              className="object-cover object-top width-[10px] height-[10px] rounded-[5px] "
            />
          </div>
          <div className="text-center w-full relative z-10">
            <h1 className="text-8xl font-bold z-10 whitespace-nowrap">
              CINEMA
            </h1>
            <p className="text-left text-xs italic absolute left-0 top-0 mt-4 ml-[-11vw]">
              FOR THE CINEPHILES
            </p>
            <p className="text-right text-xs italic absolute right-0 bottom-0  mr-[-11vw]">
              FOR THE CINEPHILES
            </p>
          </div>
        </div>
      </div>
      <div className="relative mb-28 mt-[40vw] ml-[45vw]">hi</div>
    </section>
  );
}
