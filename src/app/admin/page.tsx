'use client'

import { useState, useEffect } from 'react'

type Booking = {
  id: number
  serviceRequest: string
  date: string
  time: string
  clientName: string
  clientEmail: string
  clientPhone: string | null
  notes: string | null
  status: string
  createdAt: string
}

function openWhatsApp(phone: string, name: string, service: string, date: string, time: string) {
  let cleaned = phone.replace(/[\s\-\(\)\+]/g, '')
  if (cleaned.startsWith('0')) cleaned = '234' + cleaned.slice(1)
  if (!cleaned.startsWith('234')) cleaned = '234' + cleaned
  const text = encodeURIComponent(
    `Hello ${name}, this is Oyinola Beauty Enhance regarding your booking for "${service}" on ${date} at ${time}. How can we help you?`
  )
  window.open(`https://wa.me/${cleaned}?text=${text}`, '_blank')
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!authed) return
    fetch('/api/bookings')
      .then((r) => r.json())
      .then(setBookings)
      .finally(() => setLoading(false))
  }, [authed])

  const handleLogin = () => {
    if (password === 'admin123') {
      setAuthed(true)
    } else {
      alert('Wrong password')
    }
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#faf7f2] flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl p-8 shadow-sm max-w-sm w-full text-center">
          <h1 className="font-serif text-2xl text-stone-900 mb-2">Admin Login</h1>
          <p className="text-sm text-stone-400 mb-6">Oyinola Beauty Enhance</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            placeholder="Enter admin password"
            className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300 mb-4"
          />
          <button
            onClick={handleLogin}
            className="w-full rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white hover:bg-stone-800 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf7f2] flex items-center justify-center">
        <p className="text-stone-500">Loading bookings...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <header className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <h1 className="font-serif text-xl text-stone-900">Oyinola Beauty Enhance — Admin</h1>
        <a href="/" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">View Site</a>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-serif text-3xl text-stone-900 mb-8">Bookings ({bookings.length})</h2>

        {bookings.length === 0 ? (
          <p className="text-stone-400">No bookings yet.</p>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500 uppercase tracking-wider text-xs">
                  <th className="p-4 font-medium">Client</th>
                  <th className="p-4 font-medium">Service Request</th>
                  <th className="p-4 font-medium">Date</th>
                  <th className="p-4 font-medium">Time</th>
                  <th className="p-4 font-medium">Contact</th>
                  <th className="p-4 font-medium">Notes</th>
                  <th className="p-4 font-medium">Booked</th>
                  <th className="p-4 font-medium text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-medium text-stone-900">{b.clientName}</td>
                    <td className="p-4 text-stone-700">{b.serviceRequest}</td>
                    <td className="p-4 text-stone-700">{b.date}</td>
                    <td className="p-4 text-stone-700">{b.time}</td>
                    <td className="p-4 text-stone-700">
                      <div>{b.clientEmail}</div>
                      {b.clientPhone && <div className="text-xs text-stone-400">{b.clientPhone}</div>}
                    </td>
                    <td className="p-4 text-stone-500 text-xs max-w-[200px] truncate">{b.notes || '—'}</td>
                    <td className="p-4 text-stone-400 text-xs">{new Date(b.createdAt).toLocaleDateString()}</td>
                    <td className="p-4 text-center">
                      {b.clientPhone ? (
                        <button
                          onClick={() => openWhatsApp(b.clientPhone!, b.clientName, b.serviceRequest, b.date, b.time)}
                          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors"
                          title={`WhatsApp ${b.clientName}`}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        </button>
                      ) : (
                        <span className="text-stone-300 text-xs">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
