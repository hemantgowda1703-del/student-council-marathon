import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-secondary py-16 md:py-20">
      <div className="container-editorial">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl uppercase tracking-widest text-cream">
              SC Marathon
            </h3>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-cream/50">
              A community-driven race celebrating the joy of running. Organized by the
              Student Council with love and dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-xs uppercase tracking-widest text-cream/70">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Race Categories", href: "#categories" },
                { label: "Route Map", href: "#route" },
                { label: "Event Details", href: "#details" },
                { label: "Gallery", href: "#gallery" },
                { label: "Register", href: "#register" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-sm text-cream/50 transition-colors duration-300 hover:text-cream"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-xs uppercase tracking-widest text-cream/70">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:marathon@studentcouncil.edu"
                className="flex items-center gap-3 text-cream/50 transition-colors duration-300 hover:text-cream"
              >
                <Mail className="h-4 w-4" />
                <span className="font-body text-sm">marathon@studentcouncil.edu</span>
              </a>
              <a
                href="https://instagram.com/scmarathon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/50 transition-colors duration-300 hover:text-cream"
              >
                <Instagram className="h-4 w-4" />
                <span className="font-body text-sm">@scmarathon</span>
              </a>
              <div className="flex items-start gap-3 text-cream/50">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span className="font-body text-sm">
                  City Hall Plaza, Downtown District
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-cream/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-body text-xs text-cream/30">
            © 2025 Student Council Marathon. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="font-body text-sm text-cream/50">Follow Us On</span>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 transition-colors duration-300 hover:text-cream"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 transition-colors duration-300 hover:text-cream"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 transition-colors duration-300 hover:text-cream"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Large Background Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.02 }}
          viewport={{ once: true }}
          className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden"
        >
          <span className="block whitespace-nowrap font-display text-[20vw] font-bold uppercase leading-none text-cream">
            RUN TOGETHER
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
