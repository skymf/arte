"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function About() {
    return (
    <section className = "mb-28 mt-20 px-12 !scroll-mt-12 ">
        <div className="flex flex-col sm:flex-row gap-10">
            {/* the image */}
                <div className = "flex flex-col">
                    <Image
                    src = "/b0b78a531c06d6795ca61748fc027b34.jpg"
                    width = "474"
                    height = "828"
                    alt= "ae"
                    className = "rounded-[5px] "
                    />
                <span className="text-sm sm:text-base">
                YOUR IMAGE REIMAGINED - W PLAY - IDK WHAT TO SAY
                </span>
                </div>
            <div className = "flex flex-col gap-3">
                    {/* title */}
                    <h1 className = "font-bold text-4xl"> 
                    THIS GALLERY!
                    </h1>
                    {/* descs */}
                    <div className = "flex flex-row gap-2">
                        <div className = "flex flex-col gap-5">
                            {/* buttons */}
                            <div className = "flex flex-row gap-5">
                                <div className="flex items-center px-3 h-10 sm:h-12 max-w-xs sm:max-w-max rounded-full border border-[#aeab7b] text-[#aeab7b] text-xs sm:text-base">
                                    GRAPHIC DESIGN
                                </div> 

                                <div className="flex items-center px-3 h-10 sm:h-12 max-w-xs sm:max-w-max rounded-full border border-[#aeab7b] text-[#aeab7b] text-xs sm:text-base">
                                    VFX EDITING
                                </div> 
                            </div>

                            {/* text */}
                            <div className="max-w-[45rem] font-medium text-sm sm:text-base">
                                <p>
                                Dive into the fantastic world of our showcased artists, each with their own dazzling page full of mesmerizing animations and juicy details!
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>
)
}