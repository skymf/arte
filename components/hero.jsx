"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
const pd = Playfair_Display({ style: "italic", subsets: ["latin"] });
import { useEffect, useState } from "react";

export default function Hero({ setisActive }) {
  const [localTime, setLocalTime] = useState(
    new Date().toLocaleString("en-US", {
      timeZone: "Europe/Amsterdam",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  );
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const amsterdamTime = new Date().toLocaleString("en-US", {
        timeZone: "Europe/Amsterdam",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      setLocalTime(amsterdamTime);
      setFlash((prevState) => !prevState);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative -mt-10 flex flex-col w-full h-screen justify-center select-none items-center px-12">
      {/* intro? */}
      <div className="items-center">
        <span
          className="font-bold text-4xl sm:text-8xl"
          onMouseOver={() => {
            setisActive(true);
          }}
          onMouseLeave={() => {
            setisActive(false);
          }}
          data-scroll
          data-scroll-speed="0.05"
        >
          WELCOME TO MY
        </span>
        <span
          className="font-medium italic text-xs"
          onMouseOver={() => {
            setisActive(true);
          }}
          onMouseLeave={() => {
            setisActive(false);
          }}
          data-scroll
          data-scroll-speed="0.025"
        >
          {" "}
          OH SO PRETTY OR BEAUTIFUL?{" "}
        </span>
        <br />{" "}
        <div className="text-center">
          <h1
            className={`font-bold text-5xl sm:text-8xl italic ${pd.className}`}
            onMouseOver={() => {
              setisActive(true);
            }}
            onMouseLeave={() => {
              setisActive(false);
            }}
            data-scroll
            data-scroll-speed="0.025"
          >
            {" "}
            ART
          </h1>
        </div>
        <br />
        <div className="flex flex-row">
          <div className="flex flex-row">
            <span
              className="font-medium italic text-xs"
              onMouseOver={() => {
                setisActive(true);
              }}
              onMouseLeave={() => {
                setisActive(false);
              }}
              data-scroll
              data-scroll-speed="0.05"
            >
              {" "}
              THIS WEBSITE CONTAINS A LOT OF WORK <br />
              BUT YES BLA BLA BLA BLA I DONT KNOW{" "}
            </span>
          </div>
          <span
            className="font-bold text-4xl sm:text-8xl"
            onMouseOver={() => {
              setisActive(true);
            }}
            onMouseLeave={() => {
              setisActive(false);
            }}
          >
            {" "}
            GALLERY
          </span>
        </div>
      </div>
      <div className="absolute bottom-20 flex flex-row gap-[52rem]">
        <div className="left-0 text-xs ml-4 mb-4">
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: -15,
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.37,
              },
            }}
          >
            {" ( SCROLL ↓ ) "}
          </motion.div>
        </div>
        <div className="right-0 text-xs mr-4 mb-4">
          <span
            data-scroll
            data-scroll-speed="0.015"
            className="text-xs font-mono uppercase"
          >
            {" "}
            local time:
            {"[ "}
            {localTime.replace(":", flash ? " " : ":")} {"]"}
          </span>
        </div>
      </div>
    </section>
  );
}
