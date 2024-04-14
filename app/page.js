import React from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Reveal from "@/components/reveal";
import Gallery from "@/components/gallery";
import ViewMore from "@/components/viewMore";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className=" flex flex-col justify-center items-center">
      <Reveal>
        <Hero />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Gallery />
      </Reveal>

      <Reveal>
        <ViewMore />
      </Reveal>

      <Footer />
    </main>
  );
}