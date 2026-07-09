import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/db'
import { bookings, studioHours } from '@/db/schema'
import { eq, and, gte, lte } from 'drizzle-orm'
import { addMinutes, format, parse, setHours, setMinutes } from 'date-fns'

const SLOT_DURATION = 60

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get('date')
  if (!date) return NextResponse.json({ error: 'date required' }, { status: 400 })

  const dayOfWeek = new Date(date).getDay()

  const hours = await db
    .select()
    .from(studioHours)
    .where(eq(studioHours.dayOfWeek, dayOfWeek))
    .then((r) => r[0])

  if (!hours || hours.isClosed) return NextResponse.json({ slots: [] })

  const existing = await db
    .select()
    .from(bookings)
    .where(eq(bookings.date, date))

  const existingTimes = new Set(existing.map((b) => b.time))

  const open = parse(hours.openTime, 'HH:mm', new Date())
  const close = parse(hours.closeTime, 'HH:mm', new Date())

  const slots: string[] = []
  let current = open
  while (current < close) {
    const formatted = format(current, 'HH:mm')
    if (!existingTimes.has(formatted)) {
      slots.push(formatted)
    }
    current = addMinutes(current, SLOT_DURATION)
  }

  return NextResponse.json({ slots })
}
