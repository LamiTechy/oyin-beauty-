import { NextResponse } from 'next/server'
import { db } from '@/db'
import { bookings } from '@/db/schema'

export async function GET() {
  const all = await db.select().from(bookings)
  return NextResponse.json(all)
}

export async function POST(request: Request) {
  const body = await request.json()
  const booking = await db.insert(bookings).values({
    serviceId: body.serviceId,
    date: body.date,
    time: body.time,
    clientName: body.clientName,
    clientEmail: body.clientEmail,
    clientPhone: body.clientPhone ?? null,
    notes: body.notes ?? null,
  }).returning()
  return NextResponse.json(booking[0], { status: 201 })
}
