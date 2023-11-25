import { Work_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import { Analytics } from '@vercel/analytics/react';


const works = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'l\'arte gallery',
  description: 'made by sky check out my portfolio lol',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className ="h-full">
      <body
      className={`relative h-full antialiased bg-[#4C0611] text-[#aeab7b] !scroll-smooth ${works.className}`}>
        <main className ="relative flex flex-col min-h">
        <Navbar/>
        {children}
        <Analytics />
        </main>
      </body>
    </html>
  )
}
