"use client";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Contact({}) {
  return (
    <section className="px-12 mt-20">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col max-w-72">
          <h1 className="text-6xl font-bold">SAY HEY</h1>
          <p>
            This website is a showcase of some of my work bla bla bla. I don't
            know what to write here.
          </p>
        </div>

        <div className="flex flex-col text-sm">
          <h3 className="font-semibold text-2xl">SOCIALS</h3>

          <div className="flex flex-row gap-12">
            <div className="group flex flex-row gap-24 h-min border-b border-[#aeab7b] hover:bg-[#aeab7b] hover:text-[#4C0611] active:scale-105 ">
              <Link
                href="twitter.com/skymf"
                className="group flex w-fit group-hover:translate-x-2 transition"
              >
                mail:
              </Link>
              <p className="group flex w-fit group-hover:-translate-x-2 transition">
                smhmfss@gmail.com
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="group flex flex-row gap-24 h-min border-b border-[#aeab7b] hover:bg-[#aeab7b] hover:text-[#4C0611] active:scale-105 ">
                <Link
                  href="github.com/skymf"
                  className="group flex w-fit group-hover:translate-x-2 transition"
                >
                  github:
                </Link>
                <p className="group flex w-fit group-hover:-translate-x-2 transition">
                  @skymf
                </p>
              </div>

              <div className="group flex flex-row gap-24 h-min border-b border-[#aeab7b] hover:bg-[#aeab7b] hover:text-[#4C0611] active:scale-105 ">
                <Link
                  href="twitter.com/skymf"
                  className="group flex w-fit group-hover:translate-x-2 transition"
                >
                  twitter:
                </Link>
                <p className="group flex w-fit group-hover:-translate-x-2 transition">
                  @skymf
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-14 text-xl">
            <div className="flex flex-col border-b border-[#aeab7b]">
              <span className="mb-2">What's your name:</span>
              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent outline-none pb-1 resize-auto min-h-100 text-sm placeholder-opacity-50 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col border-b border-[#aeab7b]">
              <span className="mb-2">And your email:</span>
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent outline-none pb-1 resize-auto min-h-100 text-sm placeholder-opacity-50 placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col border-b border-[#aeab7b]">
              <span className="mb-2 font-semibold">What's up:</span>
              <textarea
                placeholder="Your message"
                className="bg-transparent outline-none pb-1 resize-auto min-h-100 text-sm placeholder-opacity-50 placeholder-gray-400"
              ></textarea>
            </div>

            <Link
              href="#contact"
              className="group flex items-center px-3 h-10 sm:h-12 w-auto max-w-xs sm:max-w-max rounded-full border border-[#aeab7b] font-medium text-base outline-none focus:scale-110 hover:scale-110 hover:bg-[#aeab7b] hover:text-[#4C0611] active:scale-105 transition"
            >
              CONTACT ME
              <BsArrowRight className="ml-1.5 -translate-x-1 opacity-75 group-hover:translate-x-1 group-hover:text-[#4C0611] transition" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
