"use client";

import React, { useLayoutEffect, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <section className="px-4 sm:px-8 md:px-12 relative -z-0">
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
              className="object-cover object-top rounded-[12.4px] -z-10"
            />
          </div>
          <div className="text-center w-full relative z-10">
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold z-10 whitespace-nowrap">
              CINEMA
            </h1>
            <p className="text-left text-[8px] sm:text-xs md:text-sm italic absolute left-0 top-0 mt-4 ml-[-8vw] md:ml-[-11vw]">
              FOR THE CINEPHILES
            </p>
            <p className="text-right text-[8px] sm:text-xs md:text-sm italic absolute right-0 bottom-0 sm:mr-[-1vw] md:mr-[-17vw]">
              WHAT IS YOUR FAVORITE MOVIE?
            </p>
          </div>
        </div>
      </div>
      <div className="relative mb-28 mt-[50vw] sm:mt-[45vw] md:mt-[35vw]">
        <div className="flex flex-col">
          <p className="text-xl sm:text-2xl md:text-3xl font-medium">
            THE FOLLOWING MOVIES ARE PRETTY GREAT, <br /> CINEMATOGRAPHY,
            DESIGN, CAMERA SHOTS <br />
            <span
              className={`font-bold text-2xl sm:text-4xl md:text-5xl italic ${pd.className}`}
            >
              {" "}
              {"IT'S ART "}
            </span>
          </p>

          <div className="h-auto md:h-screen relative">
            <div className="flex flex-col md:flex-row justify-between mt-8">
              <div className="flex flex-col gap-5 w-full md:w-1/2">
                <span className="text-sm md:text-md font-medium">
                  Add some card display so the movies are scrollable,
                  horizontal, or use parallax scrolling.
                </span>
                <Link
                  href="#"
                  className="group relative flex h-10 sm:h-12 w-64 sm:w-72 cursor-pointer items-center justify-center gap-4 rounded-full border border-solid border-[#aeab7b]"
                >
                  <div className="absolute left-5 z-0 h-2 w-2 rounded-full bg-[#aeab7b] transition-all duration-300 ease-in-out group-hover:left-0 group-hover:h-full group-hover:w-full"></div>
                  <p className="absolute right-5 z-10 font-bold text-sm sm:text-md uppercase transition-all duration-300 ease-in-out group-hover:right-8 group-hover:text-[#4C0611]">
                    Visit a different website
                  </p>
                </Link>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto mt-6 md:mt-0">
                <Image src={"/mm.jpg"} height={300} width={300} alt="Image" />
                <span className="w-full sm:w-[400px] rounded-full border-t-2 border-[#aeab7b]"></span>
                <span className="-mt-2 flex items-center uppercase text-xs font-semibold sm:text-sm">
                  Cars • Je ne sais pas • ???
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
