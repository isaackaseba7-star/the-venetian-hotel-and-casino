import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=1170&auto=format&fit=crop", // reception
  "https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=1170&auto=format&fit=crop", // pool
  "https://images.unsplash.com/photo-1414235077428-33898bd12405?q=80&w=1170&auto=format&fit=crop", // breakfast/dining
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1170&auto=format&fit=crop", // modern room
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-hotel-black py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {images.map((img, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="aspect-square md:aspect-[3/4] overflow-hidden relative group"
          >
            <img 
              src={img} 
              alt={`Gallery Image ${index + 1}`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100" 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
