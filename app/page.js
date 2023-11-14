import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Reveal from '@/components/reveal'
import Gallery from '@/components/gallery'
import Footer from '@/components/footer';


export default function Home() {
  return (
      <main>
      <Navbar/>

      <Reveal>
      <Hero/>
      </Reveal>
      
      <Reveal>
      <About/>
      </Reveal>

      <Reveal>
      <Gallery/>
      </Reveal>



      <Footer />
      </main>
  )
}
