import { useState } from "react";
import { motion } from "framer-motion";

type Category = "pizzas" | "complementos" | "bebidas";

const categories: { key: Category; label: string }[] = [
  { key: "pizzas", label: "Pizzas" },
  { key: "complementos", label: "Complementos" },
  { key: "bebidas", label: "Bebidas y Postres" },
];

interface PizzaItem {
  name: string;
  description: string;
  prices: { small: string; medium: string; large: string };
  badge?: string;
}

interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: string;
}

const pizzas: PizzaItem[] = [
  {
    name: "7 PECADOS",
    description:
      "Our signature pizza. Pepperoni, Italian sausage, bacon, ham, ground beef, mushrooms, and black olives.",
    prices: { small: "$12.99", medium: "$18.99", large: "$24.99" },
    badge: "SIGNATURE",
  },
  {
    name: "MARGHERITA",
    description:
      "Classic simplicity. Fresh mozzarella, San Marzano tomato sauce, and fragrant basil leaves.",
    prices: { small: "$10.99", medium: "$15.99", large: "$21.99" },
  },
  {
    name: "CHICAGO CLASSIC",
    description:
      "Deep-dish loaded with mozzarella, Italian sausage, green peppers, and onions.",
    prices: { small: "$11.99", medium: "$17.99", large: "$23.99" },
    badge: "POPULAR",
  },
  {
    name: "QUATTRO FORMAGGI",
    description:
      "Four-cheese blend of mozzarella, gorgonzola, parmesan, and fontina on a garlic butter crust.",
    prices: { small: "$12.49", medium: "$18.49", large: "$24.49" },
  },
  {
    name: "DIABLO PICANTE",
    description:
      "Spicy chorizo, jalapeños, habanero sauce, and pepper jack cheese. Not for the faint-hearted!",
    prices: { small: "$11.99", medium: "$17.49", large: "$23.49" },
  },
  {
    name: "VEGGIE GARDEN",
    description:
      "Bell peppers, mushrooms, red onions, spinach, cherry tomatoes, and artichoke hearts.",
    prices: { small: "$10.99", medium: "$16.49", large: "$22.49" },
  },
  {
    name: "BBQ CHICKEN",
    description:
      "Grilled chicken, smoky BBQ sauce, red onions, cilantro, and smoked gouda.",
    prices: { small: "$11.99", medium: "$17.99", large: "$23.99" },
  },
  {
    name: "HAWAIIAN TWIST",
    description:
      "Ham, pineapple, mozzarella, and a drizzle of honey on our signature deep-dish crust.",
    prices: { small: "$10.99", medium: "$16.99", large: "$22.99" },
  },
];

const complementos: MenuItem[] = [
  {
    name: "GARLIC BREADSTICKS",
    description: "Warm, buttery breadsticks brushed with garlic herb butter.",
    price: "$6.99",
  },
  {
    name: "MOZZARELLA STICKS",
    description: "Crispy golden sticks with marinara dipping sauce.",
    price: "$8.49",
  },
  {
    name: "WINGS (8 PC)",
    description: "Choice of Buffalo, BBQ, or Garlic Parmesan sauce.",
    price: "$11.99",
    badge: "POPULAR",
  },
  {
    name: "CAESAR SALAD",
    description: "Crisp romaine, parmesan, croutons, and creamy Caesar dressing.",
    price: "$8.99",
  },
  {
    name: "BRUSCHETTA",
    description: "Toasted ciabatta topped with diced tomatoes, basil, and balsamic glaze.",
    price: "$7.99",
  },
  {
    name: "LOADED FRIES",
    description: "Crispy fries topped with bacon, cheddar, jalapeños, and sour cream.",
    price: "$9.49",
  },
];

const bebidas: MenuItem[] = [
  {
    name: "FRESH LEMONADE",
    description: "Hand-squeezed lemons with a touch of mint.",
    price: "$4.49",
  },
  {
    name: "CRAFT ROOT BEER",
    description: "Artisan root beer brewed locally.",
    price: "$3.99",
  },
  {
    name: "ITALIAN SODA",
    description: "Choice of raspberry, peach, or blood orange.",
    price: "$4.99",
  },
  {
    name: "HOUSE RED WINE",
    description: "Glass of our curated Chianti or Montepulciano.",
    price: "$8.99",
  },
  {
    name: "TIRAMISU",
    description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone.",
    price: "$7.99",
    badge: "MUST TRY",
  },
  {
    name: "CANNOLI",
    description: "Crispy shells filled with sweet ricotta cream and chocolate chips.",
    price: "$6.49",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("pizzas");

  return (
    <section id="menu" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-accent text-sm tracking-[0.3em] text-pizza-red mb-3">
            WHAT WE SERVE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            Our Menu
          </h2>
          <p className="text-charcoal-light/60 max-w-lg mx-auto">
            Handcrafted with the finest ingredients, baked to perfection in our
            traditional stone ovens.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-sm border border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 sm:px-7 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-pizza-red text-white shadow-md shadow-pizza-red/20"
                    : "text-charcoal-light hover:text-pizza-red"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pizza Size Legend (only for pizzas) */}
        {activeCategory === "pizzas" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center gap-6 sm:gap-10 mb-10"
          >
            <div className="text-center">
              <span className="inline-block w-8 h-8 rounded-full bg-pizza-red/10 text-pizza-red text-xs font-bold leading-8">
                S
              </span>
              <p className="text-xs text-charcoal-light/60 mt-1.5 font-medium">
                Pequeña
              </p>
              <p className="text-[11px] text-charcoal-light/40">8&quot;</p>
            </div>
            <div className="text-center">
              <span className="inline-block w-8 h-8 rounded-full bg-pizza-red/10 text-pizza-red text-xs font-bold leading-8">
                M
              </span>
              <p className="text-xs text-charcoal-light/60 mt-1.5 font-medium">
                Mediana
              </p>
              <p className="text-[11px] text-charcoal-light/40">10&quot;</p>
            </div>
            <div className="text-center">
              <span className="inline-block w-8 h-8 rounded-full bg-pizza-red/10 text-pizza-red text-xs font-bold leading-8">
                L
              </span>
              <p className="text-xs text-charcoal-light/60 mt-1.5 font-medium">
                Grande
              </p>
              <p className="text-[11px] text-charcoal-light/40">14&quot;</p>
            </div>
          </motion.div>
        )}

        {/* Menu Content */}
        {activeCategory === "pizzas" && (
          <motion.div
            key="pizzas"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {pizzas.map((pizza) => (
              <motion.div
                key={pizza.name}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-pizza-red/5 transition-shadow duration-300 group"
              >
                <div className="flex items-start justify-between mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-display text-lg font-bold text-charcoal group-hover:text-pizza-red transition-colors">
                      {pizza.name}
                    </h3>
                    {pizza.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider bg-pizza-red text-white rounded-full uppercase">
                        {pizza.badge}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-charcoal-light/60 leading-relaxed mb-4">
                  {pizza.description}
                </p>
                <div className="flex items-center gap-4 border-t border-gray-50 pt-3">
                  <div className="text-center">
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-light/40 font-medium">
                      Small
                    </span>
                    <p className="text-sm font-bold text-pizza-red mt-0.5">
                      {pizza.prices.small}
                    </p>
                  </div>
                  <div className="w-px h-8 bg-gray-100" />
                  <div className="text-center">
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-light/40 font-medium">
                      Medium
                    </span>
                    <p className="text-sm font-bold text-pizza-red mt-0.5">
                      {pizza.prices.medium}
                    </p>
                  </div>
                  <div className="w-px h-8 bg-gray-100" />
                  <div className="text-center">
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-light/40 font-medium">
                      Large
                    </span>
                    <p className="text-sm font-bold text-pizza-red mt-0.5">
                      {pizza.prices.large}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeCategory === "complementos" && (
          <motion.div
            key="complementos"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {complementos.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-pizza-red/5 transition-shadow duration-300 group flex justify-between items-start gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 mb-2">
                    <h3 className="font-display text-lg font-bold text-charcoal group-hover:text-pizza-red transition-colors">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider bg-pizza-red text-white rounded-full uppercase">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-charcoal-light/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-lg font-bold text-pizza-red">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeCategory === "bebidas" && (
          <motion.div
            key="bebidas"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {bebidas.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-pizza-red/5 transition-shadow duration-300 group flex justify-between items-start gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 mb-2">
                    <h3 className="font-display text-lg font-bold text-charcoal group-hover:text-pizza-red transition-colors">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider bg-pizza-red text-white rounded-full uppercase">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-charcoal-light/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-lg font-bold text-pizza-red">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}