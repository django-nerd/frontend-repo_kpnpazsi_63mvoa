import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-[#0d0d0d] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 items-center gap-10 md:grid-cols-5"
        >
          <div className="md:col-span-2">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-1 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              <div className="h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">About</h2>
            <p className="mt-6 text-white/70">
              I craft interfaces that feel fast, focused, and quietly confident. My work blends elegant motion, clean systems, and accessible patterns—delivering experiences that look sharp and feel effortless.
            </p>
            <p className="mt-4 text-white/70">
              I specialize in modern frontend stacks, design systems, performance optimization, and thoughtful micro-interactions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">Based in Remote</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">Open to Freelance</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">Timezone: GMT-5</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
