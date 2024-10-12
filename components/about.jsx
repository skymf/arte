"use client";
import React from "react";
import Image from "next/image";

export default function About({ setisActive }) {
  return (
    <section className="mb-28 px-4 sm:px-8 md:px-12 !scroll-mt-12">
      <div className="flex flex-col sm:flex-row gap-10">
        {/* Image Section */}
        <div className="flex flex-col gap-2">
          <Image
            src="/282acccdeifa192.jpg"
            width={400}
            height={600}
            alt="ae"
            className="rounded-[5px] w-full max-w-[400px] h-auto object-cover"
            onMouseOver={() => setisActive(true)}
            onMouseLeave={() => setisActive(false)}
          />
          <span className="text-xs sm:text-sm text-center">
            YOUR IMAGE REIMAGINED - W PLAY - IDK WHAT TO SAY
          </span>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-3">
          {/* Title */}
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
            THIS GALLERY!
          </h1>

          {/* Buttons and Description */}
          <div className="flex flex-col gap-5">
            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <h2 className="flex items-center px-3 h-10 sm:h-12 rounded-full border border-[#aeab7b] font-medium text-xs sm:text-sm">
                GRAPHIC DESIGN
              </h2>
              <h2 className="flex items-center px-3 h-10 sm:h-12 rounded-full border border-[#aeab7b] font-medium text-xs sm:text-sm">
                VFX EDITING
              </h2>
            </div>

            {/* Text Section */}
            <div className="max-w-full sm:max-w-[45rem] font-medium text-sm sm:text-base">
              <p>
                Here is my website. It is still under construction and a lot of
                stuff needs to be fixed. E.g. the UI, responsiveness, motion,
                other pages, more components or yes, and just a pleasing website
                yay.
                <br />
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                blabla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
