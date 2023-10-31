import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'l\'arte gallery',
  description: 'made by sky check out my portfolio lol',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#4C0611] text-[#aeab7b] ${inter.className}`}>{children}</body>
    </html>
  )
}
