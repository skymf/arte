"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function ViewMore() {
  return (
    <section className="mt-20 mb-28 px-12">
      <div className="flex flex-col gap-12">
        {/* contact me mini section */}
        <div className="flex flex-col gap-5 items-center">
          {/* h1 */}
          <h1 className="text-6xl font-bold">VIEW MORE</h1>
          {/* paragraph text */}
          <span className="font-medium text-base sm:text-lg text-center">
            Ready to dive deeper? Explore each piece of artistic realm and
            uncover their stories,
            <br />
            all wrapped up in dazzling animations!
          </span>
          {/* button */}
          <Link
            href="#contact"
            className="group flex items-center px-3 h-10 sm:h-12 w-auto max-w-xs sm:max-w-max rounded-full border border-[#aeab7b] font-medium text-base outline-none focus:scale-110 hover:scale-110 hover:bg-[#aeab7b] hover:text-[#F3F1EB] active:scale-105 transition"
          >
            Dive in the deep
            <BsArrowRight className="ml-1.5 -translate-x-1 opacity-75 group-hover:translate-x-2 group-hover:text-[#F3F1EB] transition" />
          </Link>
        </div>
      </div>
    </section>
  );
}
