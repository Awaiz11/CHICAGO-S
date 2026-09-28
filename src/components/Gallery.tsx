import { motion } from "framer-motion";

const images = [
  {
    src: "/gallery_1.jpg",
    alt: "Cheesy deep-dish pizza slice being pulled",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/gallery_2.jpg",
    alt: "Fresh pizza ingredients",
    span: "",
  },
  {
    src: "/gallery_3.jpg",
    alt: "Margherita pizza close-up",
    span: "",
  },
  {
    src: "/gallery_4.jpg",
    alt: "Cozy restaurant interior",
    span: "col-span-2",
  },
];

export default function Gallery() {
  return (
    <section className="bg-warm-gray py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-accent text-sm tracking-[0.3em] text-pizza-red mb-3">
            FEAST YOUR EYES
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
            From Our Kitchen
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${img.span} relative rounded-2xl overflow-hidden group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full min-h-[180px] sm:min-h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}