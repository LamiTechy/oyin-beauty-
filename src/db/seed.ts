import 'dotenv/config'
import { db } from './index'
import { services, studioHours, bookings } from './schema'

const seedServices = [
  { category: 'Braiding', name: 'Box Braids', price: 15000, duration: 120, image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=600&auto=format&fit=crop' },
  { category: 'Braiding', name: 'Cornrows', price: 10000, duration: 90, image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=600&auto=format&fit=crop' },
  { category: 'Braiding', name: 'Knotless Braids', price: 20000, duration: 150, image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=600&auto=format&fit=crop' },
  { category: 'Braiding', name: 'Faux Locs', price: 25000, duration: 180, image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=600&auto=format&fit=crop' },
  { category: 'Makeup', name: 'Everyday Glam', price: 10000, duration: 60, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop' },
  { category: 'Makeup', name: 'Bridal Package', price: 35000, duration: 120, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop' },
  { category: 'Makeup', name: 'Editorial Look', price: 20000, duration: 90, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop' },
  { category: 'Makeup', name: 'Lash Extensions', price: 8000, duration: 45, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop' },
  { category: 'Wig', name: 'Wig Installation', price: 12000, duration: 60, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop' },
  { category: 'Wig', name: 'Wig Revamping', price: 18000, duration: 90, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop' },
  { category: 'Wig', name: 'Custom Wig Making', price: 40000, duration: 180, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop' },
  { category: 'Wig', name: 'Wig Styling & Cut', price: 8000, duration: 45, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop' },
  { category: 'Piercing', name: 'Earlobe Piercing', price: 5000, duration: 15, image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=600&auto=format&fit=crop' },
  { category: 'Piercing', name: 'Cartilage / Helix', price: 7000, duration: 20, image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=600&auto=format&fit=crop' },
  { category: 'Piercing', name: 'Nostril', price: 8000, duration: 20, image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=600&auto=format&fit=crop' },
  { category: 'Piercing', name: 'Navel Piercing', price: 10000, duration: 25, image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=600&auto=format&fit=crop' },
  { category: 'Photoshoot', name: 'MUA Portfolio Shoot', price: 30000, duration: 120, image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=600&auto=format&fit=crop' },
  { category: 'Photoshoot', name: 'Styling Session', price: 25000, duration: 90, image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=600&auto=format&fit=crop' },
  { category: 'Photoshoot', name: 'Event Coverage', price: 50000, duration: 180, image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=600&auto=format&fit=crop' },
  { category: 'Photoshoot', name: 'Brand Content Shoot', price: 80000, duration: 240, image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=600&auto=format&fit=crop' },
]

const seedHours = [
  { dayOfWeek: 1, openTime: '09:00', closeTime: '19:00' },
  { dayOfWeek: 2, openTime: '09:00', closeTime: '19:00' },
  { dayOfWeek: 3, openTime: '09:00', closeTime: '19:00' },
  { dayOfWeek: 4, openTime: '09:00', closeTime: '19:00' },
  { dayOfWeek: 5, openTime: '09:00', closeTime: '19:00' },
  { dayOfWeek: 6, openTime: '09:00', closeTime: '18:00' },
  { dayOfWeek: 0, openTime: '10:00', closeTime: '16:00' },
]

async function seed() {
  await db.delete(bookings)
  await db.delete(services)
  for (const s of seedServices) {
    await db.insert(services).values(s)
  }
  await db.delete(studioHours)
  for (const h of seedHours) {
    await db.insert(studioHours).values(h)
  }
  console.log('Seeded successfully')
}

seed().catch(console.error)
