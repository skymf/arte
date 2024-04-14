"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
const pd = Playfair_Display({ style: "italic", subsets: ["latin"] });
import GradientCursor from "./cursor/cursor";
import { useState } from "react";

export default function Hero({ setisActive }) {
  // const [isActive, setIsActive] = useState(false);
  return (
    <section className="relative flex flex-col w-full h-screen justify-center select-none items-center px-12">
      {/* <GradientCursor isActive={isActive} /> */}
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
      <div className="absolute bottom-20 left-0 text-xs ml-4 mb-4">
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: -15,
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.35,
            },
          }}
        >
          {" ( SCROLL ↓ ) "}
        </motion.div>
      </div>
    </section>
  );
}
