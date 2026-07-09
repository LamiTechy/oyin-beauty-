'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#faf7f2]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#" className="font-serif text-xl md:text-2xl tracking-widest text-stone-900 whitespace-nowrap">
          OYINOLA BEAUTY
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wide text-stone-700">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-stone-900 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#booking"
          className="hidden md:inline-block rounded-full bg-stone-900 px-6 py-2 text-sm font-medium text-white hover:bg-stone-800 transition-colors"
        >
          Book Now
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative z-50 flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-stone-900 transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-stone-900 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-stone-900 transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#faf7f2] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-serif text-stone-900 hover:text-stone-600 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full bg-stone-900 px-8 py-3 text-base font-medium text-white"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
