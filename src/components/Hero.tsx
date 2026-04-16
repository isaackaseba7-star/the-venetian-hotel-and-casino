import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden w-full">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-hotel-black/50 bg-gradient-to-b from-hotel-black/70 via-transparent to-hotel-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-[1px] w-12 bg-hotel-gold"></div>
            <span className="text-hotel-gold uppercase tracking-[0.3em] text-xs font-semibold">5-Star Luxury</span>
            <div className="h-[1px] w-12 bg-hotel-gold"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-6">
            Experience Luxury<br/>
            <span className="italic font-light text-white/90">in the Heart of Lusaka</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-2xl">
            Premium comfort, world-class service, and unforgettable stays at <br className="hidden md:block" />The Venetian Hotel & Casino.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="#booking"
              className="bg-hotel-gold text-hotel-black px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white transition-colors duration-300 w-full sm:w-auto"
            >
              Reserve Your Stay
            </a>
            <a 
              href="#rooms"
              className="border border-white/30 text-white px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto backdrop-blur-sm"
            >
              View Rooms
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 opacity-70"
      >
        <span className="text-hotel-gold text-[10px] uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-hotel-gold to-transparent"></div>
      </motion.div>
    </section>
  );
}
