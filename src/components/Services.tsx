'use client'

import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Braiding',
    tagline: 'Expert braiding for every style',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    items: [
      { name: 'Box Braids', price: '₦15,000' },
      { name: 'Cornrows', price: '₦10,000' },
      { name: 'Knotless Braids', price: '₦20,000' },
      { name: 'Faux Locs', price: '₦25,000' },
    ],
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Makeup',
    tagline: 'Glam for every occasion',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 10-16 0" />
      </svg>
    ),
    items: [
      { name: 'Everyday Glam', price: '₦10,000' },
      { name: 'Bridal Package', price: '₦35,000' },
      { name: 'Editorial Look', price: '₦20,000' },
      { name: 'Lash Extensions', price: '₦8,000' },
    ],
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Wig',
    tagline: 'Installation & revamping',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M3 10h18" />
        <path d="M3 14h18" />
        <path d="M12 3v18" />
      </svg>
    ),
    items: [
      { name: 'Wig Installation', price: '₦12,000' },
      { name: 'Wig Revamping', price: '₦18,000' },
      { name: 'Custom Wig Making', price: '₦40,000' },
      { name: 'Wig Styling & Cut', price: '₦8,000' },
    ],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Piercing',
    tagline: 'Safe & stylish body art',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="12" />
      </svg>
    ),
    items: [
      { name: 'Earlobe Piercing', price: '₦5,000' },
      { name: 'Cartilage / Helix', price: '₦7,000' },
      { name: 'Nostril', price: '₦8,000' },
      { name: 'Navel Piercing', price: '₦10,000' },
    ],
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Photoshoot',
    tagline: 'Capture your best look',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    items: [
      { name: 'MUA Portfolio Shoot', price: '₦30,000' },
      { name: 'Styling Session', price: '₦25,000' },
      { name: 'Event Coverage', price: '₦50,000' },
      { name: 'Brand Content Shoot', price: '₦80,000' },
    ],
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=600&auto=format&fit=crop',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const itemAnim = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-stone-400 mb-4">What We Do</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">Services & Pricing</h2>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((s) => (
            <motion.div
              key={s.title}
              variants={itemAnim}
              className="group rounded-2xl bg-white border border-stone-200/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-stone-600">{s.icon}</span>
                  <h3 className="font-serif text-2xl text-stone-900">{s.title}</h3>
                </div>
                <p className="text-sm text-stone-500 mb-5">{s.tagline}</p>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item.name} className="flex justify-between text-sm">
                      <span className="text-stone-700">{item.name}</span>
                      <span className="font-medium text-stone-900">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
