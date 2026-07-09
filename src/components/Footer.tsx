'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl tracking-widest mb-4">OYINOLA BEAUTY</h3>
            <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
              Nigeria&apos;s premier beauty studio — braiding, makeup, wig services, piercing, and photoshoot. Where elegance meets expression.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm uppercase tracking-wider text-stone-500 mb-4">Location</h4>
            <address className="not-italic text-sm text-stone-300 leading-relaxed">
              42 Awolowo Road<br />Ikoyi, Lagos<br />Nigeria
            </address>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm uppercase tracking-wider text-stone-500 mb-4">Hours</h4>
            <ul className="text-sm text-stone-300 space-y-2">
              <li className="flex justify-between gap-8"><span>Mon – Fri</span><span>9:00 AM – 7:00 PM</span></li>
              <li className="flex justify-between gap-8"><span>Saturday</span><span>9:00 AM – 6:00 PM</span></li>
              <li className="flex justify-between gap-8"><span>Sunday</span><span>Closed</span></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm uppercase tracking-wider text-stone-500 mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              {['Instagram', 'WhatsApp', 'TikTok'].map((s) => (
                <a key={s} href="#" className="text-sm text-stone-400 hover:text-white transition-colors" aria-label={s}>{s}</a>
              ))}
            </div>
            <p className="text-sm text-stone-400">+234 800 000 0000</p>
            <p className="text-sm text-stone-400">hello@oyinolabeauty.com</p>
          </motion.div>
        </div>
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Oyinola Beauty Enhance. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
