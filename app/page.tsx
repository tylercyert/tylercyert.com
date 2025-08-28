import Hero from '@/components/Hero.jsx'
import About from '@/components/About'
import Projects from '@/components/Projects'
import GitHub from '@/components/GitHub'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <GitHub />
      <Footer />
    </main>
  )
}
