import { motion } from 'framer-motion'
import { Code, Rocket, Zap, Cpu } from 'lucide-react'

const skills = [
  { name: 'React', icon: <Code className="h-4 w-4" /> },
  { name: 'TypeScript', icon: <Code className="h-4 w-4" /> },
  { name: 'Tailwind', icon: <Zap className="h-4 w-4" /> },
  { name: 'Framer Motion', icon: <Rocket className="h-4 w-4" /> },
  { name: 'Node.js', icon: <Cpu className="h-4 w-4" /> },
  { name: 'Spline', icon: <Zap className="h-4 w-4" /> },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0d0d0d] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Skills</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6"
        >
          {skills.map((s) => (
            <div
              key={s.name}
              className="group relative flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 backdrop-blur transition hover:bg-white/10"
            >
              <span className="text-cyan-300">{s.icon}</span>
              <span className="text-sm">{s.name}</span>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
