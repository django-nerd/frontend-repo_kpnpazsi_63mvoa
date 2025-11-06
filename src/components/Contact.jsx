import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0d0d0d] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Contact</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">Name</label>
                <input className="w-full rounded-lg border border-white/10 bg-[#0f0f10] px-3 py-2 text-white placeholder-white/40 outline-none ring-cyan-500/30 focus:ring" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">Email</label>
                <input type="email" className="w-full rounded-lg border border-white/10 bg-[#0f0f10] px-3 py-2 text-white placeholder-white/40 outline-none ring-cyan-500/30 focus:ring" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">Message</label>
                <textarea rows={4} className="w-full rounded-lg border border-white/10 bg-[#0f0f10] px-3 py-2 text-white placeholder-white/40 outline-none ring-cyan-500/30 focus:ring" placeholder="Tell me about your project" />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition hover:brightness-110">
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 backdrop-blur"
          >
            <p className="text-white/70">Prefer email or socials?</p>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <a href="mailto:hello@alex.dev" className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
                <Mail className="h-4 w-4 text-cyan-300" />
                hello@alex.dev
              </a>
              <a href="https://github.com" target="_blank" className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
                <Github className="h-4 w-4 text-cyan-300" />
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
                <Linkedin className="h-4 w-4 text-cyan-300" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
