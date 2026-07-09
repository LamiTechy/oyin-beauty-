'use client'

import { motion } from 'framer-motion'
import BookingForm from './BookingForm'

export default function Booking() {
  return (
    <section id="booking" className="py-24 md:py-32 px-6 bg-white">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-stone-400 mb-4">Book Your Appointment</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">Reserve Your Spot</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <BookingForm />
        </motion.div>
      </div>
    </section>
  )
}
