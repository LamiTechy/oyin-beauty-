import { pgTable, serial, text, integer, timestamp, time, boolean } from 'drizzle-orm/pg-core'

export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  category: text('category').notNull(),
  name: text('name').notNull(),
  price: integer('price').notNull(),
  duration: integer('duration').notNull(),
  description: text('description'),
  image: text('image'),
})

export const bookings = pgTable('bookings', {
  id: serial('id').primaryKey(),
  serviceId: integer('service_id').references(() => services.id).notNull(),
  date: text('date').notNull(),
  time: text('time').notNull(),
  clientName: text('client_name').notNull(),
  clientEmail: text('client_email').notNull(),
  clientPhone: text('client_phone'),
  notes: text('notes'),
  status: text('status').default('confirmed').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const studioHours = pgTable('studio_hours', {
  id: serial('id').primaryKey(),
  dayOfWeek: integer('day_of_week').notNull().unique(),
  openTime: time('open_time').notNull(),
  closeTime: time('close_time').notNull(),
  isClosed: boolean('is_closed').default(false),
})
