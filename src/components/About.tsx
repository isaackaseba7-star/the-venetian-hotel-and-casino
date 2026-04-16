import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-hotel-paper text-hotel-dark relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex relative"
          >
            {/* Image layout */}
            <div className="w-4/5 ml-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1025&auto=format&fit=crop" 
                alt="Hotel Lobby" 
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl z-10 relative"
              />
            </div>
            <div className="w-3/5 absolute left-0 bottom-12 z-20">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1170&auto=format&fit=crop" 
                alt="Cozy details" 
                className="w-full aspect-square object-cover rounded-sm shadow-xl border-4 border-hotel-paper"
              />
            </div>
            
            {/* Decoration */}
            <div className="absolute top-10 right-10 w-full h-full border border-hotel-gold/30 -z-10 translate-x-4 -translate-y-4"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex flex-col items-start"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-[1px] w-8 bg-hotel-gold"></div>
              <span className="text-hotel-gold uppercase tracking-widest text-xs font-semibold">The Story</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-hotel-black leading-tight mb-8">
              A Peaceful Oasis in <br/>
              <span className="italic font-light">Olympia Park</span>
            </h2>
            
            <div className="space-y-6 text-hotel-dark/70 font-light leading-relaxed mb-10">
              <p>
                Welcome to The Venetian Hotel and Casino, an exquisite blend of luxury, comfort, and entertainment in the heart of Lusaka. Located on Martin Mwamba Road in prestigious Olympia Park, we offer a sanctuary for high-income locals, business travelers, and international guests seeking the finest hospitality.
              </p>
              <p>
                Whether you're unwinding in our premium suites, enjoying our world-class complimentary breakfast, taking a dip in our pool, or feeling the excitement in our vibrant casino, every moment here is crafted to be exceptional. With robust Wi-Fi, 24-hour room service, and perfectly air-conditioned environments, your comfort is guaranteed.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 w-full border-t border-hotel-dark/10 pt-8">
              <div>
                <p className="text-3xl font-serif text-hotel-gold mb-1">12:00 PM</p>
                <p className="text-xs uppercase tracking-widest text-hotel-dark/60 font-semibold">Check-In</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-hotel-gold mb-1">1:00 PM</p>
                <p className="text-xs uppercase tracking-widest text-hotel-dark/60 font-semibold">Check-Out</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
