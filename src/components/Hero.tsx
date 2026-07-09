'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-stone-900/50" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] text-white/70 mb-6"
        >
          Nigeria&apos;s Premium Beauty Studio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-4"
        >
          Oyinola Beauty Enhance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-base md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
        >
          Braiding &middot; Makeup &middot; Wig Installation &middot; Wig Revamping &middot; Piercing &middot; Photoshoot
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#booking"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-stone-900 hover:bg-stone-100 transition-colors"
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Our Services
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
