export default function Footer() {
  return (
    <footer className="bg-hotel-black text-white/50 py-12 border-t border-white/10 text-center md:text-left">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          <div>
            <h3 className="font-serif text-2xl text-white mb-1">THE VENETIAN</h3>
            <p className="text-[10px] uppercase tracking-[0.3em] text-hotel-gold">Hotel & Casino</p>
          </div>
          <div className="md:text-center text-xs uppercase tracking-widest space-y-2">
            <p className="hover:text-hotel-gold cursor-pointer transition">Terms & Conditions</p>
            <p className="hover:text-hotel-gold cursor-pointer transition">Privacy Policy</p>
          </div>
          <div className="md:text-right text-xs uppercase tracking-widest">
            <p>Lusaka, Zambia</p>
          </div>
        </div>
        <div className="text-center text-xs border-t border-white/10 pt-8 mt-8">
          <p>&copy; {new Date().getFullYear()} The Venetian Hotel and Casino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
