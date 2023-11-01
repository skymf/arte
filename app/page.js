import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Reveal from '@/components/reveal'

export default function Home() {
  return (
    <main>
    <Navbar/>

    <Reveal>
    <Hero/>
    </Reveal>
    
    <About/>
    </main>
  )
}
