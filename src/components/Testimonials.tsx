'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const reviews = [
  { name: 'Alexis R.', text: 'Sierra gave me the best balayage I have ever had. The studio atmosphere is so calming and chic — I never want to leave.', rating: 5 },
  { name: 'Jordan M.', text: 'I was nervous about my nostril piercing but Jade made it painless and quick. Healing has been a breeze. Obsessed!', rating: 5 },
  { name: 'Taylor K.', text: 'Maya did my bridal makeup and I have never felt more beautiful. She truly listened to what I wanted. 10/10.', rating: 5 },
  { name: 'Sam P.', text: 'Hairline is my go-to. The curated ear stack from Jade gets compliments everywhere. Book them, you will not regret it.', rating: 5 },
  { name: 'Riley W.', text: 'The attention to detail is unmatched. From the consultation to the finish, every moment felt premium.', rating: 5 },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-stone-900 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-white/50 mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-16">What Clients Say</h2>
        </motion.div>
        <div className="relative h-48 md:h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: reviews[current].rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-white/85 italic max-w-xl">
                &ldquo;{reviews[current].text}&rdquo;
              </p>
              <p className="mt-6 font-medium text-white/60 text-sm">&mdash; {reviews[current].name}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/30'}`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
