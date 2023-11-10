"use client";
import Link from "next/link";    
import { React, useState } from "react";
import AnimatedLink from "./AnimatedLink";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
    const navLinks = [
        { title: "Home", href: "/hero", key: "herox" },
        { title: "works", href: "/gallery", key: "gallery" },
        { title: "Contact me!", href: "/contact", key: "contact" },
        { title: "other websites", href: "/other", key: "other" },
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
                <div className = "flex flex-row gap-2">
                    <Image 
                        src = "/23e1.jpg" 
                        width = "25"
                        height = "25"
                        className = "rouned-full"
                    />
                    <div className = "font-bold text-xl">
                        {"L'ARTEGALLERY"}
                    </div>
                </div>
                <div className="lg:flex hidden gap-12 text-md text-zinc-400">
                    <Link href="#" className="font-medium text-[#aeab7b]">
                    <AnimatedLink title={"HOME"} />
                    </Link>
                    <Link href={"/projects"}>
                    <AnimatedLink title={"FEW PRETTY WORKS"} />
                    </Link>
                    <Link href = "#">
                    <AnimatedLink title={"CONTACT ME"} />
                    </Link>
                    <Link href = "#">
                    <AnimatedLink title={"UH"}/>
                    </Link>
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
                className="fixed left-0 top-0 w-full h-screen origin-top bg-[#050A50] text-[#848DAB] p-10"
                >
                    <div className="flex h-full flex-col">
                        <div className="flex justify-between">
                        <h1 className="text-lg">
                        {"L'ARTEGALLERY"}
                        </h1>
                        <p
                        className="cursor-pointer text-md text-[#aeab7b]"
                            onClick={toggleMenu}>
                            CLOSE
                        </p>
                        </div>
                        <motion.div
                        variants={containerVars}
                        initial="initial"
                        animate="open"
                        exit="initial"
                        className="flex flex-col h-full justify-center font-lora items-center gap-4">
                            {navLinks.map((link, i) => (
                            <div className="overflow-hidden" key={link.title + i}>
                                <MobileNavLink title={link.title} href={link.href} />
                            </div>
                            ))}
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
        className="text-5xl uppercase text-[#848DAB] hover:text-[#aeab7b]"
        >
        <Link href={href}>{title}</Link>
        </motion.div>
    );
    };