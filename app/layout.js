import React from "react";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import { Debug } from "@/components/debug";

const works = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "l'arte gallery",
  description: "made by sky check out my portfolio lol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`relative h-full antialiased bg-[#4C0611] text-[#aeab7b] !scroll-smooth ${works.className}`}
      >
        <Providers>
          <div className="h-full flex flex-col">
            <Navbar className="z-50" />
            <main className="">{children}</main>
            <Analytics />
          </div>
          {/* <Debug /> */}
        </Providers>
      </body>
    </html>
  );
}
