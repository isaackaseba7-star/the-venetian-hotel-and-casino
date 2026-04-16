import { motion } from 'motion/react';
import { Menu, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Casino', href: '#casino' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-hotel-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#" className="font-serif text-2xl tracking-wider text-white">
          THE VENETIAN<br />
          <span className="text-xs font-sans tracking-[0.3em] text-hotel-gold block mt-1 uppercase">Hotel & Casino</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-white/80 hover:text-hotel-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Phone (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:+260766966666" className="flex items-center space-x-2 text-white/80 hover:text-white transition">
            <Phone size={16} className="text-hotel-gold" />
            <span className="text-sm font-medium tracking-wider">+260 76 6966666</span>
          </a>
          <a
            href="#booking"
            className="border border-hotel-gold bg-hotel-gold/10 text-hotel-gold px-6 py-2.5 text-sm uppercase tracking-widest hover:bg-hotel-gold hover:text-hotel-black transition-all duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-hotel-black border-t border-hotel-gold/20 shadow-xl py-6 px-6 md:hidden flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base uppercase tracking-widest text-white hover:text-hotel-gold transition-colors py-2 border-b border-white/10"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center border border-hotel-gold bg-hotel-gold/10 text-hotel-gold px-6 py-3 text-sm uppercase tracking-widest hover:bg-hotel-gold hover:text-hotel-black transition-all duration-300 mt-4"
          >
            Book Now
          </a>
        </motion.div>
      )}
    </header>
  );
}
