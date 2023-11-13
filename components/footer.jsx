"use client";
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className = "mt-20 mb-28 px-12">
        <div className = "flex flex-col gap-5 items-center">
        {/* h1 */}
            <h1 className="text-6xl font-bold">
                HEY
            </h1>
        {/* paragraph text */}
            <span>
                Dive deeper bla bla bla
            </span>

            {/* button */}
            <Link href="#contact" className="group flex items-center px-3 h-10 sm:h-12 w-full max-w-xs sm:max-w-max rounded-full border border-[#aeab7b] text-[#aeab7b] text-sm sm:text-base outline-none focus:scale-110 hover:scale-110 hover:bg-[#aeab7b] hover:text-[#F3F1EB] active:scale-105 transition">
                                Dive in the deep
                <BsArrowRight className="ml-1.5 -translate-x-1 opacity-75 group-hover:translate-x-2 group-hover:text-[#F3F1EB] transition" /> 
            </Link>
        </div>
    </section>
  )
}
