import { NextResponse } from 'next/server'
import { db } from '@/db'
import { services } from '@/db/schema'

export async function GET() {
  const all = await db.select().from(services)
  return NextResponse.json(all)
}
