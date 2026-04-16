import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function BookingLocation() {
  const [formData, setFormData] = useState({ name: '', phone: '', dates: '', guests: '1' });
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', phone: '', dates: '', guests: '1' });
    
    // Reset message after a few seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="location" className="bg-hotel-black text-white relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Contact & Location Info */}
        <div className="p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-hotel-gold/5 blur-3xl rounded-full"></div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="z-10"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Visit Us</h2>
            <p className="text-white/70 font-light mb-12 max-w-md">
              Located in the prestigious Olympia Park area, providing easy access to Lusaka's business and entertainment districts.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <MapPin className="text-hotel-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold uppercase tracking-widest text-sm mb-1">Location</h4>
                  <p className="text-white/70 font-light">Martin Mwamba Road, Great East Rd<br/>Olympia Park, Lusaka, Zambia</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-hotel-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold uppercase tracking-widest text-sm mb-1">Reservations</h4>
                  <p className="text-white/70 font-light">+260 76 6966666</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-hotel-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold uppercase tracking-widest text-sm mb-1">Email inquiries</h4>
                  <p className="text-white/70 font-light">bookings@venetianlusaka.com</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/260766966666" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center space-x-2 text-hotel-black bg-hotel-gold px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-white transition-colors duration-300"
            >
              <span>Message on WhatsApp</span>
            </a>
          </motion.div>
        </div>

        {/* Booking Form */}
        <div id="booking" className="bg-hotel-dark p-12 lg:p-24 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-[1px] w-8 bg-hotel-gold"></div>
              <span className="text-hotel-gold uppercase tracking-widest text-xs font-semibold">Reserve</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-10">Book Your Stay</h2>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-hotel-gold/10 border border-hotel-gold text-hotel-gold p-6 text-center"
              >
                <p className="font-serif text-xl mb-2">Request Received</p>
                <p className="font-light text-sm text-white/80">Thank you! We will contact you shortly to confirm your reservation details.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-hotel-gold transition-colors font-light"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-hotel-gold transition-colors font-light"
                      placeholder="+260..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Check-in / Check-out Dates</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.dates}
                      onChange={(e) => setFormData({...formData, dates: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-hotel-gold transition-colors font-light"
                      placeholder="e.g., Oct 12 - Oct 15"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Guests</label>
                    <select 
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      className="w-full bg-hotel-dark border-b border-white/20 pb-2 text-white outline-none focus:border-hotel-gold transition-colors font-light cursor-pointer"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4+">4+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit"
                    className="w-full bg-hotel-gold text-hotel-black py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white transition-colors duration-300"
                  >
                    Reserve Your Stay
                  </button>
                  <div className="mt-4 flex items-center justify-center space-x-2 text-white/50 text-xs">
                    <span className="uppercase tracking-widest">Secure Booking Process</span>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Map (Visual only for aesthetic) */}
      <div className="h-64 w-full bg-hotel-dark border-t border-white/10 grayscale opacity-80" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2074&auto=format&fit=crop")',
        backgroundPosition: 'center', backgroundSize: 'cover'
      }}>
      </div>
    </section>
  );
}
