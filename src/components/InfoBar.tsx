import { motion } from "framer-motion";
import { Users, CalendarDays, Clock, Truck } from "lucide-react";

const tips = [
  {
    icon: Users,
    title: "Perfect for Sharing",
    description:
      "A medium Chicago-style pizza comfortably serves 2 people. Go grande for groups of 4!",
  },
  {
    icon: CalendarDays,
    title: "Book Ahead",
    description:
      "Weekends fill up fast. We recommend reserving your table at least 2 days in advance.",
  },
  {
    icon: Clock,
    title: "Baked Fresh",
    description:
      "Our deep-dish takes 30–40 minutes to bake perfectly. Good things are worth the wait!",
  },
  {
    icon: Truck,
    title: "Delivery Available",
    description:
      "Can't dine in? We deliver within a 5-mile radius. Hot and fresh to your door.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function InfoBar() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {tips.map((tip) => {
            const Icon = tip.icon;
            return (
              <motion.div
                key={tip.title}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-pizza-red/5 text-pizza-red group-hover:bg-pizza-red group-hover:text-white transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-charcoal-light/70 leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}