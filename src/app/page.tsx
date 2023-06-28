import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-green-500 bg-opacity-5  dark:bg-dark-light dark:bg-opacity-100">
     <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
     <Footer />
    </main>
  )
}
