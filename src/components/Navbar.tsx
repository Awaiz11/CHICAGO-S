import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Pizza } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pizza-red">
              <Pizza className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-accent text-xl tracking-wider text-pizza-red">
                CHICAGO'S
              </span>
              <span className="font-accent text-[10px] tracking-[0.25em] text-charcoal-light uppercase -mt-1">
                Pizza Factory
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm font-medium text-charcoal-light hover:text-pizza-red transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold text-charcoal border-2 border-charcoal rounded-full hover:bg-charcoal hover:text-white transition-all duration-200 tracking-wide"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-pizza-red rounded-full hover:bg-pizza-red-dark transition-all duration-200 tracking-wide shadow-md shadow-pizza-red/20"
            >
              Order Online
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-warm-gray transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-charcoal" />
            ) : (
              <Menu className="h-6 w-6 text-charcoal" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-charcoal-light hover:text-pizza-red hover:bg-warm-gray rounded-lg transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-center px-5 py-3 text-sm font-semibold text-charcoal border-2 border-charcoal rounded-full hover:bg-charcoal hover:text-white transition-all duration-200 tracking-wide"
                >
                  Reserve a Table
                </a>
                <a
                  href="#menu"
                  onClick={() => setMobileOpen(false)}
                  className="text-center px-5 py-3 text-sm font-semibold text-white bg-pizza-red rounded-full hover:bg-pizza-red-dark transition-all duration-200 tracking-wide"
                >
                  Order Online
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}