import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613564834361-9436948817d1?w=1920&q=80"
          alt="Delicious Chicago deep-dish pizza"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-pizza-red z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 rounded-full bg-pizza-red-light animate-pulse" />
            <span className="text-sm font-medium text-white/90 tracking-wider uppercase">
              Authentic Chicago Deep-Dish Since 1985
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6"
        >
          CHICAGO'S
          <br />
          <span className="text-pizza-red-light">PIZZA</span> FACTORY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl text-white/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Deep-dish perfection baked fresh daily. Layers of mozzarella, rich
          tomato sauce, and hand-crafted dough — just like they make it on
          the streets of Chicago.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="px-8 py-4 text-base font-semibold text-white bg-pizza-red rounded-full hover:bg-pizza-red-dark transition-all duration-300 tracking-wider uppercase shadow-xl shadow-pizza-red/30 hover:shadow-2xl hover:shadow-pizza-red/40 hover:-translate-y-0.5"
          >
            View Our Menu
          </a>
          <a
            href="#contact"
            className="px-8 py-4 text-base font-semibold text-white border-2 border-white/40 rounded-full hover:bg-white hover:text-charcoal transition-all duration-300 tracking-wider uppercase backdrop-blur-sm"
          >
            Reserve a Table
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}