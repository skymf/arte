"use client";
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section className = "mt-20 mb-22 px-12">
        <div className = "flex flex-col gap-8">
            <h1 className = "font-bold text-6xl">
            PROJECTS
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10" >
                {/* display grid for each proj web or other just storage web */}
                <motion.div
                whileHover={{
                        scale: 1.1
                    }}   
                className ="">
                    <Image
                        src = "/8932jkhsbfjrui321.png"
                        height = "400"
                        width = "400"
                        className = ""
                    />
                </motion.div>
                <Image
                    src = "/8932jkhsbfjrui321.png"
                    height = "400"
                    width = "400"
                    className = ""
                />

                <Image
                    src = "/8932jkhsbfjrui321.png"
                    height = "400"
                    width = "400"
                    className = ""
                />
            </div>
        </div>
    </section>
  )
}
