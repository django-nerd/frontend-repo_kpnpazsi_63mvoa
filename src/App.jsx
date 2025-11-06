import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handler = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const id = anchor.getAttribute('href')
      if (id && id !== '#') {
        const el = document.querySelector(id)
        if (el) {
          e.preventDefault()
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className="min-h-screen bg-[#0d0d0d] font-sans antialiased">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0d0d]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-medium tracking-wide text-white">AC</a>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="rounded-md bg-white/5 px-3 py-1.5 text-white hover:bg-white/10">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#0d0d0d] py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Alex Carter — Built with care.
        </div>
      </footer>
    </div>
  )
}

export default App
