"use client"
import React from 'react'
import Image from 'next/image'
export default function About() {
    return (
    <section className = "mb-28 mt-20 px-12 !scroll-mt-12 ">
        <div className="flex flex-row gap-60">
            {/* the image */}
                <div className = "flex flex-col">
                    <Image
                    src = "/b0b78a531c06d6795ca61748fc027b34.jpg"
                    width = "474"
                    height = "828"
                    alt= "ae"
                    className = "rounded-[5px]"
                    />
            
                </div>
            <div className = "flex flex-col gap-3">
                    {/* title */}
                    <h1 className = "font-bold text-4xl"> 
                    THIS GALLERY!
                    </h1>
                    {/* descs */}
                    <div className = "flex flex-row gap-2">
                        <div>
                            {/* buttons */}
                        </div>
                    </div>
            </div>
        </div>
    </section>
)
}