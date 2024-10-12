"use client";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function ViewMore({ setisActive }) {
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
          <Link href="/">
            <button className="rounded-2xl border-2 border-[#2A2A2B] bg-[#d4cdc3] px-6 py-3 font-semibold uppercase text-[#2A2A2B] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#2A2A2B] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              view the collection
            </button>
          </Link>
          {/* <Link
            href="#contact"
            className="group flex items-center px-3 h-10 sm:h-12 w-auto max-w-xs sm:max-w-max rounded-full border border-[#aeab7b] font-medium text-base outline-none focus:scale-110 hover:scale-110 hover:bg-[#aeab7b] hover:text-[#F3F1EB] active:scale-105 transition"
            onMouseOver={() => {
              setisActive(true);
            }}
            onMouseLeave={() => {
              setisActive(false);
            }}
          >
            Dive in the deep
            <BsArrowRight className="ml-1.5 -translate-x-1 opacity-75 group-hover:translate-x-2 group-hover:text-[#F3F1EB] transition" />
          </Link> */}
        </div>
      </div>
    </section>
  );
}
