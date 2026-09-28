import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! Your reservation request has been received. We'll confirm via email shortly.`
    );
    setFormData({ name: "", email: "", phone: "", guests: "2", date: "", time: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/92" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-accent text-sm tracking-[0.3em] text-pizza-red-light mb-3">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Reserve Your Table
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Join us for an unforgettable deep-dish experience. Walk-ins welcome,
            but reservations are recommended.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pizza-red/20 text-pizza-red-light">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-white mb-1">
                  Location
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  742 West Addison Street
                  <br />
                  Chicago, IL 60613
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pizza-red/20 text-pizza-red-light">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-white mb-1">
                  Phone
                </h4>
                <p className="text-white/50 text-sm">(312) 555-PIZZA</p>
                <p className="text-white/50 text-sm">(312) 555-7492</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pizza-red/20 text-pizza-red-light">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-white mb-1">
                  Hours
                </h4>
                <div className="text-white/50 text-sm space-y-0.5">
                  <p>Mon – Thu: 11:30 AM – 10:00 PM</p>
                  <p>Fri: 11:30 AM – 11:00 PM</p>
                  <p>Sat: 12:30 PM – 11:00 PM</p>
                  <p>Sun: 12:30 PM – 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pizza-red/20 text-pizza-red-light">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-white mb-1">
                  Email
                </h4>
                <p className="text-white/50 text-sm">
                  hello@chicagopizzafactory.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10"
            >
              <h3 className="font-display text-xl font-semibold text-white mb-6">
                Make a Reservation
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs text-white/40 font-medium uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-pizza-red/50 focus:ring-1 focus:ring-pizza-red/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 font-medium uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@email.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-pizza-red/50 focus:ring-1 focus:ring-pizza-red/30 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs text-white/40 font-medium uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-pizza-red/50 focus:ring-1 focus:ring-pizza-red/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 font-medium uppercase tracking-wider mb-2">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-pizza-red/50 focus:ring-1 focus:ring-pizza-red/30 transition-colors appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n} className="bg-charcoal">
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                    <option value="9+" className="bg-charcoal">
                      9+ (Large Party)
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="block text-xs text-white/40 font-medium uppercase tracking-wider mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-pizza-red/50 focus:ring-1 focus:ring-pizza-red/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 font-medium uppercase tracking-wider mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-pizza-red/50 focus:ring-1 focus:ring-pizza-red/30 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-pizza-red text-white font-semibold rounded-xl hover:bg-pizza-red-dark transition-all duration-300 tracking-wider uppercase text-sm shadow-lg shadow-pizza-red/30 hover:shadow-xl hover:shadow-pizza-red/40"
              >
                Confirm Reservation
              </button>

              <p className="text-center text-white/25 text-xs mt-4">
                We'll send a confirmation to your email within 2 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}