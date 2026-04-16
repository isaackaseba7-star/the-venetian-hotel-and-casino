import { motion } from 'motion/react';
import { Coins, Dices, Crown, Gem, ArrowRight } from 'lucide-react';

const casinoFeatures = [
  { icon: Coins, title: 'Slot Machines', desc: 'State-of-the-art themes & jackpots' },
  { icon: Dices, title: 'Table Games', desc: 'Roulette, Blackjack, Poker' },
  { icon: Crown, title: 'VIP Gaming Lounge', desc: 'Private rooms, premium service' },
  { icon: Gem, title: 'High-Roller Experience', desc: 'Elevated limits & exclusivity' },
];

export default function Casino() {
  return (
    <section id="casino" className="py-24 bg-hotel-black text-white relative border-t border-white/10 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-hotel-gold/10 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-[1px] w-8 bg-hotel-gold"></div>
              <span className="text-hotel-gold uppercase tracking-widest text-xs font-semibold">Entertainment</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 text-white">
              Lusaka’s Premier <br/>
              <span className="italic font-light text-hotel-gold">Casino Experience</span>
            </h2>

            <p className="text-lg md:text-xl text-white/70 font-light mb-12">
              Step into an electrifying casino atmosphere where entertainment meets luxury.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {casinoFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full border border-hotel-gold/30 flex items-center justify-center shrink-0 text-hotel-gold bg-hotel-gold/5">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-white mb-1">{feature.title}</h3>
                      <p className="text-[10px] text-white/50 uppercase tracking-widest font-light">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a 
              href="#booking"
              className="inline-flex items-center space-x-3 bg-hotel-gold text-hotel-black px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors duration-300 relative group"
            >
              <span>Enter the Casino Experience</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex relative w-full"
          >
            <div className="aspect-[4/5] w-full md:w-5/6 ml-auto overflow-hidden relative border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=1170&auto=format&fit=crop" 
                alt="Luxury Casino Experience" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hotel-black/80 via-hotel-black/20 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-10 left-0 w-48 h-48 bg-hotel-dark border border-hotel-gold/20 p-6 flex flex-col justify-center items-center shadow-2xl z-10 hidden sm:flex">
              <span className="text-4xl font-serif text-hotel-gold mb-2">24/7</span>
              <span className="text-[10px] uppercase tracking-widest text-white/50 text-center leading-relaxed">Exclusive Access<br/>Gaming Floor</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
