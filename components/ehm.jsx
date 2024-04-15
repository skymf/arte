"use client";
import React from "react";
import { useState, useEffect } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Reveal from "@/components/reveal";
import Gallery from "@/components/gallery";
import ViewMore from "@/components/viewmore";
import Footer from "@/components/footer";
import GradientCursor from "./cursor/cursor";

export default function Hey() {
  const [isActive, setisActive] = useState(false);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <section className=" flex flex-col justify-center items-center">
      {/* hero */}
      <Reveal>
        <Hero setisActive={setisActive} />
      </Reveal>
      {/* about me */}
      <Reveal>
        <About setisActive={setisActive} />
      </Reveal>
      {/* gallery */}
      <Reveal>
        <Gallery setisActive = {setisActive} />
      </Reveal>
      {/* view more */}
      <Reveal>
        <ViewMore />
      </Reveal>
      {/* footer */}
      <Footer />
      {/* cursor */}
      <GradientCursor isActive={isActive} />
    </section>
  );
}
