import React from "react";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
const pd = Playfair_Display({ style: "italic", subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="relative flex flex-col w-full h-screen justify-center select-none items-center px-12">
      {/* intro? */}
      <div className="items-center">
        <span className="font-bold text-4xl sm:text-8xl">WELCOME TO MY </span>
        <span className="font-medium italic text-xs">
          {" "}
          OH SO PRETTY OR BEAUTIFUL?{" "}
        </span>
        <br />{" "}
        <div className="text-center">
          <span
            className={`font-bold text-5xl sm:text-8xl italic ${pd.className}`}
          >
            {" "}
            ART{" "}
          </span>
        </div>
        <br />
        <div className="flex flex-row">
          <div className="flex flex-row">
            <span className="font-medium italic text-xs">
              {" "}
              THIS WEBSITE CONTAINS A LOT OF WORK <br />
              BUT YES BLA BLA BLA BLA I DONT KNOW{" "}
            </span>
          </div>
          <span className="font-bold text-4xl sm:text-8xl"> GALLERY</span>
        </div>
      </div>
      <span className="absolute bottom-20 left-0 text-lg ml-4 mb-4">
        scroll down ↓
      </span>
    </section>
  );
}
