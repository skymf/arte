"use client";
import React from "react";
import Image from "next/image";

export default function About({ setisActive }) {
  return (
    <section className="mb-28 px-12 !scroll-mt-12 ">
      <div className="flex flex-col sm:flex-row gap-10">
        {/* the image */}
        <div className="flex flex-col gap-2">
          <Image
            src="/282acccdeifa192.jpg"
            width="400"
            height="600"
            alt="ae"
            className="rounded-[5px] "
            onMouseOver={() => {
              setisActive(true);
            }}
            onMouseLeave={() => {
              setisActive(false);
            }}
          />
          <span className="text-xs sm:text-sm">
            YOUR IMAGE REIMAGINED - W PLAY - IDK WHAT TO SAY
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {/* title */}
          <h1 className="font-bold text-4xl">THIS GALLERY!</h1>
          {/* descs */}
          <div className="flex flex-row gap-2">
            <div className="flex flex-col gap-5">
              {/* buttons */}
              <div className="flex flex-row gap-5">
                <h2 className="flex items-center px-3 h-10 sm:h-12 max-w-xs sm:max-w-max rounded-full border border-[#aeab7b] font-medium text-xs sm:text-sm ">
                  GRAPHIC DESIGN
                </h2>
                <h2 className="flex items-center px-3 h-10 sm:h-12 max-w-xs sm:max-w-max rounded-full border border-[#aeab7b] font-medium text-xs sm:text-sm">
                  VFX EDITING
                </h2>
              </div>

              {/* text */}
              <div className="max-w-[45rem] font-medium text-sm sm:text-base">
                <p>
                  Here is my website. bla bla bla bla bla bla bla bla bla bla
                  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                  bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla
                  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                  bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla
                  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                  bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla
                  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                  bla blabla bla bla bla bla bla bla bla bla bla bla bla bla bla
                  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                  blabla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                  bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla
                  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                  bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
