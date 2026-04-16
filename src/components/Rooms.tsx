import { motion } from 'motion/react';

const rooms = [
  {
    id: 'standard',
    name: 'Standard Room',
    price: 'K2,400',
    description: 'A perfect blend of comfort and style for the sophisticated traveler.',
    features: ['Queen Bed', 'Free Wi-Fi', 'Air Conditioning', 'Free Breakfast'],
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop'
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    price: 'K2,700',
    description: 'Spacious elegance featuring premium views and upgraded amenities.',
    features: ['King Bed', 'City View', 'Room Service', 'Mini Bar', 'Free Breakfast'],
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1170&auto=format&fit=crop'
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    price: 'K3,000',
    description: 'Our finest offering with a separate lounge area and supreme luxury.',
    features: ['Super King Bed', 'Lounge Area', 'Premium Wi-Fi', 'VIP Services'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1170&auto=format&fit=crop'
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-hotel-black text-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-hotel-gold"></div>
            <span className="text-hotel-gold uppercase tracking-widest text-xs font-semibold">Accommodations</span>
            <div className="h-[1px] w-8 bg-hotel-gold"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Rooms & Pricing
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-hotel-dark border border-white/10 hover:border-hotel-gold/50 transition-colors duration-500 overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif mb-2">{room.name}</h3>
                <p className="text-hotel-gold text-lg tracking-wider font-medium mb-4">
                  {room.price} <span className="text-xs text-white/50 uppercase tracking-widest">/ Night</span>
                </p>
                <p className="text-sm font-light text-white/70 mb-6 flex-grow">{room.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs text-white/80 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 bg-hotel-gold rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#booking"
                  className="w-full text-center border border-white/20 py-3 text-xs uppercase tracking-widest hover:bg-hotel-gold hover:text-hotel-black hover:border-hotel-gold transition-colors duration-300 block mt-auto"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
