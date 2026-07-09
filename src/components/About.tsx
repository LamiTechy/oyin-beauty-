'use client'

import { motion } from 'framer-motion'

const team = [
  {
    name: 'Oyin Ola',
    role: 'Founder & CEO',
    specialties: 'Braiding, wig installation, makeup',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=400&auto=format&fit=crop',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-[#faf7f2]">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-stone-400 mb-4">The Studio</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">Meet the Team</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="text-stone-600 leading-relaxed">
            Based in Nigeria, Oyinola Beauty Enhance is where artistry meets confidence.
            From braiding to photoshoots, every service is crafted to make you look and feel your best.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-1 gap-8 max-w-sm mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-xl text-stone-900">{member.name}</h3>
              <p className="text-sm text-stone-500 mb-1">{member.role}</p>
              <p className="text-sm text-stone-400">{member.specialties}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
