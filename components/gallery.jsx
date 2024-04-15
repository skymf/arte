"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

export default function Gallery() {
  // const [isActive, setActive] = useState(false);
  return (
    <section className="mt-20 mb-28 px-12">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">MY PROJECTS</h1>

        <div className="grid md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full md:pr-12">
          <Link href="/projects/star_wars">
            <TiltCard item={items[0]} />
          </Link>

          <Link href="/projects/artists">
            <TiltCard item={items[1]} />
          </Link>

          <Link href="/projects/movies">
            <TiltCard item={items[2]} />
          </Link>

          <Link href="/projects/cars">
            <TiltCard item={items[3]} />
          </Link>
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
    ["7.5deg", "-7.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.75, 0.75],
    ["-7.5deg", "7.5deg"],
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
        className="absolute opacity-95 inset-5 flex flex-col items-end justify-end p-5 rounded-xl text-[#F3F1EB] "
      >
        <h2
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-lg font-bold"
        >
          {item.title}
        </h2>
      </div>
    </motion.div>
  );
};

const items = [
  {
    url: "/23e1.jpg",
    title: "MY WISHLIST? // EHM ",
    id: 1,
  },
  // {
  //   url: "/8932jkhsbfjrui321.png",
  //   title: "VFX EDIT",
  //   id: 2,
  // },
  // {
  //   url: "/282acccdeifa192.jpg",
  //   title: "3D MODELING",
  //   id: 3,
  // },
  {
    url: "/o.jpg",
    title: "JE NE SAIS PAS",
    id: 3,
  },
  {
    url: "/heyyy.jpg",
    title: "CHECK CINEMA",
    id: 4,
  },
  {
    url: "/mm.jpg",
    title: "WEB DESIGN ???",
    id: 5,
  },
];
