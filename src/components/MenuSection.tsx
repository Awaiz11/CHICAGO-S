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
  image: string;
}

interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: string;
  image: string;
}

const pizzas: PizzaItem[] = [
  {
    name: "7 PECADOS",
    description:
      "Our signature pizza. Pepperoni, Italian sausage, bacon, ham, ground beef, mushrooms, and black olives.",
    prices: { small: "$12.99", medium: "$18.99", large: "$24.99" },
    badge: "SIGNATURE",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "MARGHERITA",
    description:
      "Classic simplicity. Fresh mozzarella, San Marzano tomato sauce, and fragrant basil leaves.",
    prices: { small: "$10.99", medium: "$15.99", large: "$21.99" },
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "CHICAGO CLASSIC",
    description:
      "Deep-dish loaded with mozzarella, Italian sausage, green peppers, and onions.",
    prices: { small: "$11.99", medium: "$17.99", large: "$23.99" },
    badge: "POPULAR",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "QUATTRO FORMAGGI",
    description:
      "Four-cheese blend of mozzarella, gorgonzola, parmesan, and fontina on a garlic butter crust.",
    prices: { small: "$12.49", medium: "$18.49", large: "$24.49" },
    image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "DIABLO PICANTE",
    description:
      "Spicy chorizo, jalapeños, habanero sauce, and pepper jack cheese. Not for the faint-hearted!",
    prices: { small: "$11.99", medium: "$17.49", large: "$23.49" },
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "VEGGIE GARDEN",
    description:
      "Bell peppers, mushrooms, red onions, spinach, cherry tomatoes, and artichoke hearts.",
    prices: { small: "$10.99", medium: "$16.49", large: "$22.49" },
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "BBQ CHICKEN",
    description:
      "Grilled chicken, smoky BBQ sauce, red onions, cilantro, and smoked gouda.",
    prices: { small: "$11.99", medium: "$17.99", large: "$23.99" },
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "HAWAIIAN TWIST",
    description:
      "Ham, pineapple, mozzarella, and a drizzle of honey on our signature deep-dish crust.",
    prices: { small: "$10.99", medium: "$16.99", large: "$22.99" },
    image: "https://images.unsplash.com/photo-1564936281291-294551497d81?auto=format&fit=crop&q=80&w=800",
  },
];

const complementos: MenuItem[] = [
  {
    name: "GARLIC BREADSTICKS",
    description: "Warm, buttery breadsticks brushed with garlic herb butter.",
    price: "$6.99",
    image: "https://image.pollinations.ai/prompt/close-up%20of%20warm%20buttery%20garlic%20breadsticks%20food%20photography",
  },
  {
    name: "MOZZARELLA STICKS",
    description: "Crispy golden sticks with marinara dipping sauce.",
    price: "$8.49",
    image: "https://images.unsplash.com/photo-1533777324565-a040eb52facd?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "WINGS (8 PC)",
    description: "Choice of Buffalo, BBQ, or Garlic Parmesan sauce.",
    price: "$11.99",
    badge: "POPULAR",
    image: "https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "CAESAR SALAD",
    description: "Crisp romaine, parmesan, croutons, and creamy Caesar dressing.",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "BRUSCHETTA",
    description: "Toasted ciabatta topped with diced tomatoes, basil, and balsamic glaze.",
    price: "$7.99",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "LOADED FRIES",
    description: "Crispy fries topped with bacon, cheddar, jalapeños, and sour cream.",
    price: "$9.49",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=800",
  },
];

const bebidas: MenuItem[] = [
  {
    name: "FRESH LEMONADE",
    description: "Hand-squeezed lemons with a touch of mint.",
    price: "$4.49",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "CRAFT ROOT BEER",
    description: "Artisan root beer brewed locally.",
    price: "$3.99",
    image: "/craft_root_beer.jpg",
  },
  {
    name: "ITALIAN SODA",
    description: "Choice of raspberry, peach, or blood orange.",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "HOUSE RED WINE",
    description: "Glass of our curated Chianti or Montepulciano.",
    price: "$8.99",
    image: "/house_red_wine.jpg",
  },
  {
    name: "TIRAMISU",
    description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone.",
    price: "$7.99",
    badge: "MUST TRY",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "CANNOLI",
    description: "Crispy shells filled with sweet ricotta cream and chocolate chips.",
    price: "$6.49",
    image: "/cannoli.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("pizzas");

  return (
    <section id="menu" className="bg-cream py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-accent text-sm tracking-[0.3em] text-pizza-red mb-3">
            WHAT WE SERVE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-5">
            Our Menu
          </h2>
          <p className="text-charcoal-light/70 max-w-2xl mx-auto text-lg">
            Handcrafted with the finest ingredients, baked to perfection in our
            traditional stone ovens.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-sm border border-gray-100 flex-wrap justify-center gap-1 sm:gap-0">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 sm:px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-pizza-red text-white shadow-md shadow-pizza-red/30"
                    : "text-charcoal-light hover:text-pizza-red hover:bg-gray-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Content */}
        {activeCategory === "pizzas" && (
          <motion.div
            key="pizzas"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
          >
            {pizzas.map((pizza) => (
              <motion.div
                key={pizza.name}
                variants={itemVariants}
                className="group flex flex-row bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full items-start"
              >
                {/* Content Section (Left) */}
                <div className="flex flex-col flex-1 pr-3 sm:pr-5">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-charcoal group-hover:text-pizza-red transition-colors">
                      {pizza.name}
                    </h3>
                    {pizza.badge && (
                      <span className="bg-pizza-red text-white text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase shrink-0 mt-0.5">
                        {pizza.badge}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-xs sm:text-sm text-charcoal-light/70 leading-relaxed mb-4 flex-1">
                    {pizza.description}
                  </p>

                  {/* Pricing */}
                  <div className="flex items-center gap-3 sm:gap-4 border-t border-gray-100 pt-3 mt-auto w-full">
                    <div className="text-center">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-charcoal-light/50 font-bold block mb-0.5">8"</span>
                      <p className="text-xs sm:text-sm font-bold text-charcoal">{pizza.prices.small}</p>
                    </div>
                    <div className="w-px h-6 bg-gray-100" />
                    <div className="text-center">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-charcoal-light/50 font-bold block mb-0.5">10"</span>
                      <p className="text-sm sm:text-base font-bold text-pizza-red">{pizza.prices.medium}</p>
                    </div>
                    <div className="w-px h-6 bg-gray-100" />
                    <div className="text-center">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-charcoal-light/50 font-bold block mb-0.5">14"</span>
                      <p className="text-xs sm:text-sm font-bold text-charcoal">{pizza.prices.large}</p>
                    </div>
                  </div>
                </div>

                {/* Image Section (Right) */}
                <div className="shrink-0 pt-1">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-sm border-2 border-white ring-1 ring-gray-100 bg-gray-50">
                    <img
                      src={pizza.image}
                      alt={pizza.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
                    />
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
            className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
          >
            {complementos.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="group flex flex-row bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full items-start"
              >
                <div className="flex flex-col flex-1 pr-3 sm:pr-5">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-charcoal group-hover:text-pizza-red transition-colors">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className="bg-pizza-red text-white text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase shrink-0 mt-0.5">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-light/70 leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-3 mt-auto">
                    <p className="text-lg sm:text-xl font-bold text-pizza-red">{item.price}</p>
                    <button className="w-8 h-8 rounded-full bg-pizza-red/10 text-pizza-red flex items-center justify-center transition-colors group-hover:bg-pizza-red group-hover:text-white">
                      <span className="text-lg leading-none mb-0.5">+</span>
                    </button>
                  </div>
                </div>
                <div className="shrink-0 pt-1">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-sm border-2 border-white ring-1 ring-gray-100 bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
                    />
                  </div>
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
            className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
          >
            {bebidas.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="group flex flex-row bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full items-start"
              >
                <div className="flex flex-col flex-1 pr-3 sm:pr-5">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-charcoal group-hover:text-pizza-red transition-colors">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className="bg-pizza-red text-white text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase shrink-0 mt-0.5">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-light/70 leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-3 mt-auto">
                    <p className="text-lg sm:text-xl font-bold text-pizza-red">{item.price}</p>
                    <button className="w-8 h-8 rounded-full bg-pizza-red/10 text-pizza-red flex items-center justify-center transition-colors group-hover:bg-pizza-red group-hover:text-white">
                      <span className="text-lg leading-none mb-0.5">+</span>
                    </button>
                  </div>
                </div>
                <div className="shrink-0 pt-1">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-sm border-2 border-white ring-1 ring-gray-100 bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}