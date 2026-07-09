'use client'

import { motion } from 'framer-motion'

const posts = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=400&auto=format&fit=crop',
]

export default function InstagramFeed() {
  return (
    <section className="py-24 px-6 bg-[#faf7f2]">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-stone-400 mb-4">Follow Us</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">@oyinola_beauty</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((src, i) => (
            <motion.a
              key={src}
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="aspect-square rounded-xl overflow-hidden group relative"
            >
              <img
                src={src}
                alt={`Oyinola Beauty post ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
