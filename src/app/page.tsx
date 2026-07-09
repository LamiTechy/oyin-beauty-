import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Booking from '@/components/Booking'
import InstagramFeed from '@/components/InstagramFeed'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <Booking />
      <InstagramFeed />
      <Footer />
    </>
  );
}
