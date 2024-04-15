"use client";
import React, { useLayoutEffect, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Playfair_Display } from "next/font/google";

const pd = Playfair_Display({ style: "italic", subsets: ["latin"] });

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
      .to(introImage.current, { borderRadius: "0px", height: "20vw" }, 0);
  }, []);

  return (
    <section className="px-12 relative">
      <div ref={homeHeader} className="relative w-full flex justify-center">
        <div className="relative flex justify-center mt-[10vh]">
          <div
            data-scroll
            data-scroll-speed="0.3"
            className="filter brightness-75 absolute"
          >
            <Image
              src={"/h.jpeg"}
              ref={introImage}
              alt="ehm omg"
              width={400}
              height={400}
              className="object-cover object-top rounded-[12.4px] -z-10 "
            />
          </div>
          <div className="text-center w-full relative z-10">
            <h1 className="text-9xl font-bold z-10 whitespace-nowrap">
              CINEMA
            </h1>
            <p className="text-left text-xs italic absolute left-0 top-0 mt-4 ml-[-8vw] md:ml-[-11vw]">
              FOR THE CINEPHILES
            </p>
            <p className="text-right text-xs italic absolute right-0 bottom-0 sm:mr-[-1vw] md:mr-[-17vw]">
              WHAT IS YOUR FAVORITE MOVIE?
            </p>
          </div>
        </div>
      </div>
      <div className="relative mb-28 mt-[38vw] sm:mt-[45vw]">
        <div className="flex flex-col">
          <p className="text-3xl font-medium">
            THE FOLLOWING MOVIES ARE PRETTY GREAT, <br /> CINEMATOGRAPHY,
            DESIGN, CAMERA SHOTS <br />
            <span
              className={`font-bold text-3xl sm:text-5xl italic ${pd.className}`}
            >
              {" "}
              {"IT'S ART "}
            </span>
          </p>

          <div className="mt-16 h-auto">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                hi add some card display so the movies are scrollable, or
                horizontal, or another parralex scroll thingy
              </div>
              <Image src={"/mm.jpg"} height={400} width={400} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
