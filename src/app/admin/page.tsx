'use client'

import { useState, useEffect } from 'react'

type Booking = {
  id: number
  serviceId: number
  date: string
  time: string
  clientName: string
  clientEmail: string
  clientPhone: string | null
  notes: string | null
  status: string
  createdAt: string
}

type Service = {
  id: number
  name: string
  category: string
  price: number
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!authed) return
    Promise.all([
      fetch('/api/bookings').then((r) => r.json()),
      fetch('/api/services').then((r) => r.json()),
    ]).then(([b, s]) => {
      setBookings(b)
      setServices(s)
      setLoading(false)
    })
  }, [authed])

  const handleLogin = () => {
    if (password === 'admin123') {
      setAuthed(true)
    } else {
      alert('Wrong password')
    }
  }

  const getServiceName = (id: number) => services.find((s) => s.id === id)?.name ?? `Service #${id}`

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
                  <th className="p-4 font-medium">Service</th>
                  <th className="p-4 font-medium">Date</th>
                  <th className="p-4 font-medium">Time</th>
                  <th className="p-4 font-medium">Contact</th>
                  <th className="p-4 font-medium">Notes</th>
                  <th className="p-4 font-medium">Booked</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-medium text-stone-900">{b.clientName}</td>
                    <td className="p-4 text-stone-700">{getServiceName(b.serviceId)}</td>
                    <td className="p-4 text-stone-700">{b.date}</td>
                    <td className="p-4 text-stone-700">{b.time}</td>
                    <td className="p-4 text-stone-700">
                      <div>{b.clientEmail}</div>
                      {b.clientPhone && <div className="text-xs text-stone-400">{b.clientPhone}</div>}
                    </td>
                    <td className="p-4 text-stone-500 text-xs max-w-[200px] truncate">{b.notes || '—'}</td>
                    <td className="p-4 text-stone-400 text-xs">{new Date(b.createdAt).toLocaleDateString()}</td>
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
