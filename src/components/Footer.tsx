import { Pizza } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-pizza-red via-pizza-red-light to-pizza-red" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pizza-red">
                <Pizza className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-accent text-xl tracking-wider text-white">
                  CHICAGO'S
                </span>
                <span className="font-accent text-[10px] tracking-[0.25em] text-white/50 uppercase -mt-1">
                  Pizza Factory
                </span>
              </div>
            </a>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Authentic Chicago deep-dish pizza crafted with passion since 1985.
              Every bite tells a story.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-pizza-red transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-pizza-red transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-pizza-red transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Menu", "About Us", "Reservations", "Order Online"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-pizza-red-light transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Opening Hours
            </h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li className="flex justify-between">
                <span>Monday – Thursday</span>
                <span className="text-white/60">11:30 – 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span className="text-white/60">11:30 – 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white/60">12:30 – 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white/60">12:30 – 21:00</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-white/40">
              <p>
                742 West Addison Street
                <br />
                Chicago, IL 60613
              </p>
              <p>
                <a
                  href="tel:+13125557492"
                  className="hover:text-pizza-red-light transition-colors"
                >
                  (312) 555-PIZZA
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@chicagopizzafactory.com"
                  className="hover:text-pizza-red-light transition-colors"
                >
                  hello@chicagopizzafactory.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © {currentYear} Chicago's Pizza Factory. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/25">
            <a href="#" className="hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/50 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}