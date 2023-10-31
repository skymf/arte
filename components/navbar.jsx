/* eslint-disable react/jsx-props-no-spreading */
"use client";
import Link from "next/link";
import { React, useState } from "react";
import AnimatedLink from "./AnimatedLink";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Few pretty works", href: "/" },
  { title: "Contact me!", href: "/" },
  { title: "other websites", href: "/" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header>
        <nav className="flex justify-between items-center py-8 lg:py-4 px-12">
            <div className = "font-bold px-12">
                LARTEGALLERY
            </div>
            <div className="lg:flex hidden gap-12 text-md text-zinc-400">
                <Link href="#" className="font-medium text-[#aeab7b]">
                <AnimatedLink title={"home"} />
                </Link>
                <Link href={"/Projects"}>
                <AnimatedLink title={"projects"} />
                </Link>
                <AnimatedLink title={"contact"} />
            </div>
        <div
            className="cursor-pointer lg:hidden text-md"
            onClick={toggleMenu}
        >
            MENU
        </div>
    </nav>
        <AnimatePresence>
        {open && (
            <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"   
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-[#4C0611] text-[#aeab7b] p-10"
            >
            <div className="flex h-full flex-col">
                <div className="flex justify-between">
                <h1 className="text-lg">LArte Gallery</h1>
                <p
                    className="cursor-pointer text-md text-[#aeab7b]"
                    onClick={toggleMenu}
                >
                    CLOSE
                </p>
                </div>
                <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
                >
                {navLinks.map((link, index) => {
                    return (
                    <div className="overflow-hidden">
                        <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                        />
                    </div>
                    );
                })}
                </motion.div>
            </div>
            </motion.div>
        )}
        </AnimatePresence>
    </header>
  );
};
export default Navbar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-[#aeab7b] hover:text-[#dedcff]"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};