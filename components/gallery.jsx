"use client";
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import Image from 'next/image';

export default function Gallery() {
  return (
    <section className="mt-20 mb-28 px-12">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">THE PROJECTS</h1>

        <div className="grid md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full md:pr-12">
          <TiltCard item={items[0]} />
          <TiltCard item={items[1]} />
          <TiltCard item={items[2]} />
          <TiltCard item={items[3]} />
          {/* dont want these */}
          {/* <TiltCard item={items[4]} />
          <TiltCard item={items[5]} /> */}
        </div>
      </div>
    </section>
  );
}

const TiltCard = ({ item }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.75, 0.75],
    ["7.5deg", "-7.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.75, 0.75],
    ["-7.5deg", "7.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-72 rounded-xl"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          backgroundImage: `url(${item.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-5 flex flex-col items-end justify-end p-5 rounded-xl text-[#F3F1EB] "
      >
        <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          {item.title}
        </p>
      </div>
    </motion.div>
  );
};

const items = [
  {
    url: "/23e1.jpg",
    title: "graphic design",
    id: 1,
  },
  {
    url: "/8932jkhsbfjrui321.png",
    title: "vfx editing",
    id: 2,
  },
  {
    url: "/282acccdeifa192.jpg",
    title: "3D modeling",
    id: 3,
  },
  {
    url: "/b0b78a531c06d6795ca61748fc027b34.jpg",
    title: "je ne sais pas",
    id: 4,
  },
  {
    url: "/282acccdeifa192.jpg",
    title: "app design",
    id: 4,
  },
  {
    url: "/282acccdeifa192.jpg",
    title: "web design",
    id: 5,
  },
];
