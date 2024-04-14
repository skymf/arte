"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Picture1 from "../../../public/h.jpeg";
import Picture2 from "../../../public/abc.jpeg";
import Picture3 from "../../../public/23e1.jpg";
import Image from "next/image";

const word = "with framer-motion";

export default function Index() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: Picture1,
      y: 0,
    },
    {
      src: Picture2,
      y: lg,
    },
    {
      src: Picture3,
      y: md,
    },
  ];

  return (
    <div
      ref={container}
      className="mt-[10vh] min-h-screen flex flex-col items-center justify-center"
    >
      <div className="ml-[10vw]">
        <motion.h1
          style={{ y: sm }}
          className="text-5xl md:text-6xl lg:text-7xl uppercase"
        >
          Parallax
        </motion.h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl">Scroll</h1>
        <div className="text-white text-3xl md:text-4xl lg:text-5xl uppercase">
          <p>
            {word.split("").map((letter, i) => {
              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [0, Math.floor(Math.random() * -75) - 25],
              );
              return (
                <motion.span style={{ top: y }} key={`l_${i}`}>
                  {letter}
                </motion.span>
              );
            })}
          </p>
        </div>
      </div>
      <div className="flex justify-center relative [mt-5vh]">
        {images.map(({ src, y }, i) => (
          <motion.div
            style={{ y }}
            key={`i_${i}`}
            className={`absolute ${i === 0 ? "[h-60vh] [w-50vh] z-10" : i === 1 ? "left-[55vw] top-[15vh] h-[40vh] w-[30vh] z-20" : "left-[27.5vw] top-[40vh] h-[25vh] w-[20vh] z-30"}`}
          >
            <Image
              src={src}
              placeholder="blur"
              alt="image"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
