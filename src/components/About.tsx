import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80"
                alt="Chef preparing deep-dish pizza"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 sm:right-8 bg-pizza-red text-white rounded-2xl px-6 py-4 shadow-xl shadow-pizza-red/30"
            >
              <p className="font-accent text-3xl leading-none">40+</p>
              <p className="text-xs font-medium tracking-wider opacity-90 mt-1">
                YEARS OF TRADITION
              </p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="inline-block font-accent text-sm tracking-[0.3em] text-pizza-red mb-3">
              OUR STORY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight">
              A Slice of
              <br />
              <span className="text-pizza-red">Chicago Heritage</span>
            </h2>
            <p className="text-charcoal-light/70 leading-relaxed mb-5">
              Since 1985, Chicago's Pizza Factory has been serving up the
              authentic flavors of deep-dish pizza. Founded by the Rossi
              family — who brought their recipes straight from the Windy City —
              every pizza is crafted with love, tradition, and the finest
              ingredients.
            </p>
            <p className="text-charcoal-light/70 leading-relaxed mb-8">
              Our dough is made fresh every morning. Our tomato sauce is
              simmered for hours. Our mozzarella is sourced from local farms.
              This isn't fast food — this is a labor of love, baked to
              perfection in our signature stone ovens.
            </p>

            <div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
              <div>
                <p className="font-accent text-3xl text-pizza-red">500+</p>
                <p className="text-xs text-charcoal-light/50 mt-1 font-medium uppercase tracking-wider">
                  Pizzas Daily
                </p>
              </div>
              <div>
                <p className="font-accent text-3xl text-pizza-red">4.9★</p>
                <p className="text-xs text-charcoal-light/50 mt-1 font-medium uppercase tracking-wider">
                  Customer Rating
                </p>
              </div>
              <div>
                <p className="font-accent text-3xl text-pizza-red">12</p>
                <p className="text-xs text-charcoal-light/50 mt-1 font-medium uppercase tracking-wider">
                  Signature Pizzas
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}