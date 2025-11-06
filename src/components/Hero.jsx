import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0d0d0d]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d0d] pointer-events-none" />
        {/* Subtle accent glow */}
        <div className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.8)]" />
            Available for work
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Alex Carter
          </h1>
          <p className="mt-2 text-lg font-medium text-white/80">Frontend Developer</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
            Building immersive, high-performance web experiences with a focus on clarity, motion, and delightful details.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#projects" className="rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition hover:brightness-110">
              View Projects
            </a>
            <a href="#contact" className="rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur hover:bg-white/10">
              Contact
            </a>
          </div>
        </motion.div>

        <div className="relative h-[55vh] w-full md:h-[70vh]">
          <div className="absolute inset-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
