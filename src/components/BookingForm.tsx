'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Step = 'service' | 'date' | 'time' | 'details'

export default function BookingForm() {
  const [step, setStep] = useState<Step>('service')
  const [serviceRequest, setServiceRequest] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [slots, setSlots] = useState<string[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (date) {
      fetch(`/api/time-slots?date=${date}`)
        .then((r) => r.json())
        .then((data) => setSlots(data.slots))
        .catch(() => setSlots([]))
      setTime('')
    }
  }, [date])

  const minDate = new Date().toISOString().split('T')[0]

  const handleSubmit = async () => {
    if (!serviceRequest.trim() || !date || !time || !name.trim() || !email.trim()) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceRequest: serviceRequest.trim(),
          date,
          time,
          clientName: name.trim(),
          clientEmail: email.trim(),
          clientPhone: phone || null,
          notes: notes || null,
        }),
      })
      if (!res.ok) throw new Error('Booking failed')
      setDone(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const canGoNext = () => {
    switch (step) {
      case 'service': return serviceRequest.trim().length > 0
      case 'date': return !!date
      case 'time': return !!time
      case 'details': return name.trim().length > 0 && email.trim().length > 0
      default: return true
    }
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 rounded-full bg-stone-900 text-white flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
        <h3 className="font-serif text-2xl text-stone-900 mb-2">You&apos;re booked!</h3>
        <p className="text-stone-500 mb-2">
          {serviceRequest} on {date} at {time}
        </p>
        <p className="text-stone-400 text-sm">We&apos;ll send a confirmation to {email}</p>
      </motion.div>
    )
  }

  return (
    <div className="bg-[#faf7f2] rounded-3xl p-5 sm:p-8 md:p-12 shadow-sm">
      <div className="flex justify-center gap-2 mb-10">
        {(['service', 'date', 'time', 'details'] as Step[]).map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                step === s ? 'bg-stone-900 text-white' : 'bg-stone-200 text-stone-500'
              }`}
            >
              {i + 1}
            </div>
            {i < 3 && <div className="w-6 h-px bg-stone-200 hidden sm:block" />}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 'service' && (
          <motion.div key="service" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="font-serif text-2xl text-stone-900 text-center mb-2">What service do you need?</h3>
            <p className="text-sm text-stone-400 text-center mb-8">Tell us what you&apos;re looking for</p>
            <textarea
              value={serviceRequest}
              onChange={(e) => setServiceRequest(e.target.value)}
              placeholder="e.g. Box braids, Bridal makeup, Wig installation..."
              rows={3}
              className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300 resize-none"
            />
          </motion.div>
        )}

        {step === 'date' && (
          <motion.div key="date" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="font-serif text-2xl text-stone-900 text-center mb-2">Pick a Date</h3>
            <p className="text-sm text-stone-400 text-center mb-8">{serviceRequest}</p>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={minDate}
              className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300"
            />
          </motion.div>
        )}

        {step === 'time' && (
          <motion.div key="time" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="font-serif text-2xl text-stone-900 text-center mb-2">Pick a Time</h3>
            <p className="text-sm text-stone-400 text-center mb-8">{date}</p>
            {slots.length === 0 ? (
              <p className="text-center text-stone-400">No available slots for this date.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {slots.map((s) => (
                  <button
                    key={s}
                    onClick={() => setTime(s)}
                    className={`p-3 rounded-xl text-sm font-medium transition-all ${
                      time === s
                        ? 'bg-stone-900 text-white'
                        : 'bg-white border border-stone-200 text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {step === 'details' && (
          <motion.div key="details" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="font-serif text-2xl text-stone-900 text-center mb-2">Your Details</h3>
            <p className="text-sm text-stone-400 text-center mb-8">{serviceRequest} &middot; {date} at {time}</p>
            <div className="max-w-md mx-auto space-y-4">
              <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300" />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300" />
              <input type="tel" placeholder="Phone (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300" />
              <textarea placeholder="Additional notes (optional)" value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300 resize-none" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}

      <div className="flex justify-between mt-8 max-w-md mx-auto">
        {step !== 'service' ? (
          <button
            onClick={() => {
              const prev: Record<Step, Step> = { service: 'service', date: 'service', time: 'date', details: 'time' }
              setStep(prev[step])
            }}
            className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
          >
            &larr; Back
          </button>
        ) : <div />}

        {step !== 'details' ? (
          <button
            onClick={() => {
              const next: Record<Step, Step> = { service: 'date', date: 'time', time: 'details', details: 'details' }
              if (canGoNext()) setStep(next[step])
            }}
            disabled={!canGoNext()}
            className="rounded-full bg-stone-900 px-8 py-3 text-sm font-medium text-white hover:bg-stone-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={loading || !canGoNext()}
            className="rounded-full bg-stone-900 px-8 py-3 text-sm font-medium text-white hover:bg-stone-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? 'Booking...' : 'Confirm Booking'}
          </button>
        )}
      </div>
    </div>
  )
}