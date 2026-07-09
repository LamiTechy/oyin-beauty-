'use client'

import { motion } from 'framer-motion'

const images = [
  'WhatsApp Image 2026-07-09 at 2.07.19 PM.jpeg',
  'WhatsApp Image 2026-07-09 at 2.07.21 PM (1).jpeg',
  'WhatsApp Image 2026-07-09 at 2.07.21 PM.jpeg',
  'WhatsApp Image 2026-07-09 at 2.07.22 PM.jpeg',
  'WhatsApp Image 2026-07-09 at 2.07.23 PM (1).jpeg',
  'WhatsApp Image 2026-07-09 at 2.07.23 PM.jpeg',
  'WhatsApp Image 2026-07-09 at 2.07.24 PM.jpeg',
  'WhatsApp Image 2026-07-09 at 2.07.29 PM (1).jpeg',
  'WhatsApp Image 2026-07-09 at 2.07.29 PM.jpeg',
  'WhatsApp Image 2026-07-09 at 2.07.30 PM.jpeg',
  'WhatsApp Image 2026-07-09 at 2.32.03 PM (1).jpeg',
  'WhatsApp Image 2026-07-09 at 2.32.03 PM.jpeg',
  'WhatsApp Image 2026-07-09 at 2.32.09 PM.jpeg',
  'WhatsApp Image 2026-07-09 at 2.32.12 PM.jpeg',
  'WhatsApp Image 2026-07-09 at 2.32.15 PM (1).jpeg',
  'WhatsApp Image 2026-07-09 at 2.32.15 PM (2).jpeg',
  'WhatsApp Image 2026-07-09 at 2.32.15 PM.jpeg',
  'WhatsApp Image 2026-07-09 at 2.32.21 PM.jpeg',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-stone-400 mb-4">Portfolio</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">Our Work</h2>
        </motion.div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="break-inside-avoid rounded-xl overflow-hidden group"
            >
              <img
                src={`/${src}`}
                alt={`Gallery image ${i + 1}`}
                loading="lazy"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
