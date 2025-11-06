import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neon Dashboard',
    description: 'A high-performance analytics dashboard with real-time charts and glassmorphism UI.',
    tags: ['React', 'Tailwind', 'WebSockets'],
    link: '#',
  },
  {
    title: '3D Product Showcase',
    description: 'Interactive 3D product viewer with Spline and smooth scroll-based animations.',
    tags: ['Spline', 'React', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Design System Kit',
    description: 'A scalable design system with accessible components and theming support.',
    tags: ['Design Systems', 'TypeScript', 'Storybook'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0d0d0d] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Projects</h2>
          <a href="#contact" className="text-sm text-cyan-400 hover:text-cyan-300">Get in touch</a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/[0.03] opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-medium text-white">{p.title}</h3>
                <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_2px_rgba(168,85,247,0.7)]" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/80">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
