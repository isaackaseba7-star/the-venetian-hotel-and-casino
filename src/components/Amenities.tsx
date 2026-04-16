import { motion } from 'motion/react';
import { Wifi, Home, Coffee, ParkingCircle, Wind, ConciergeBell } from 'lucide-react';

const amenities = [
  { icon: Wifi, title: 'Free Wi-Fi', desc: 'High-speed internet in all areas' },
  { icon: Coffee, title: 'Free Breakfast', desc: 'Premium buffet every morning' },
  { icon: Home, title: 'Swimming Pool', desc: 'Outdoor heated luxury pool' },
  { icon: ParkingCircle, title: 'Free Parking', desc: 'Secure on-site parking' },
  { icon: Wind, title: 'Air Conditioning', desc: 'Climate control in all rooms' },
  { icon: ConciergeBell, title: 'Room Service', desc: '24/7 in-room dining' },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-hotel-paper text-hotel-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            World-class Amenities
          </motion.h2>
          <p className="text-hotel-dark/60 font-light tracking-wide">Everything you need for an unforgettable stay.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {amenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full border border-hotel-gold/30 flex items-center justify-center mb-6 group-hover:bg-hotel-gold group-hover:text-white transition-colors duration-500 text-hotel-gold">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm uppercase tracking-widest font-semibold mb-2">{item.title}</h3>
                <p className="text-xs text-hotel-dark/60 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
