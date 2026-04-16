import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Casino from './components/Casino';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import BookingLocation from './components/BookingLocation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-hotel-paper min-h-screen relative">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Casino />
      <Gallery />
      <Reviews />
      <BookingLocation />
      <Footer />

      {/* Sticky Mobile Book Now Button */}
      <a 
        href="#booking"
        className="md:hidden fixed z-[40] bottom-0 left-0 right-0 bg-hotel-gold text-hotel-black text-center py-4 text-xs font-semibold uppercase tracking-[0.2em] shadow-[0_-4px_20px_rgba(0,0,0,0.15)] backdrop-blur-md pb-8 pt-5"
      >
        Book Now
      </a>
    </div>
  );
}
