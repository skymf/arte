import { Work_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
const works = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'l\'arte gallery',
  description: 'made by sky check out my portfolio lol',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      className={`bg-[#4C0611] text-[#aeab7b] !scroll-smooth ${works.className}`}>
      <Navbar/>
        {children}
      </body>
    </html>
  )
}
