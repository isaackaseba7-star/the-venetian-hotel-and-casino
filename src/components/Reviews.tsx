import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  { text: "Clean and comfortable rooms. The service was impeccable.", author: "James M.", role: "Business Traveler" },
  { text: "A truly peaceful environment despite being close to the city center. Highly recommend.", author: "Sarah W.", role: "Tourist" },
  { text: "Great breakfast experience and the Wi-Fi speed was excellent for my meetings.", author: "David K.", role: "Local Guest" }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-hotel-paper text-hotel-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-hotel-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Guest Experiences</h2>
          <div className="flex items-center justify-center space-x-1 mb-2">
            {[1, 2, 3, 4].map((star) => <Star key={star} size={20} className="fill-hotel-gold text-hotel-gold" />)}
            <Star size={20} className="fill-hotel-gold text-hotel-gold" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)' }} />
          </div>
          <p className="text-sm font-semibold tracking-widest text-hotel-dark/60 uppercase">4.3 / 5 Average Rating</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-10 border border-hotel-dark/5 shadow-sm"
            >
              <div className="flex space-x-1 mb-6 text-hotel-gold">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} className="fill-current" />)}
              </div>
              <p className="font-serif text-xl italic text-hotel-dark/80 mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <p className="font-semibold text-sm uppercase tracking-widest">{review.author}</p>
                <p className="text-xs text-hotel-dark/50 mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
