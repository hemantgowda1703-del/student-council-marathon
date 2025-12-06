import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
const navLinks = [{
  label: "About",
  href: "#about"
}, {
  label: "Categories",
  href: "#categories"
}, {
  label: "Route",
  href: "#route"
}, {
  label: "Details",
  href: "#details"
}, {
  label: "Gallery",
  href: "#gallery"
}];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <>
      <motion.header initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 0.5
    }} className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${isScrolled ? "bg-secondary/95 py-4 shadow-lg backdrop-blur-md" : "bg-transparent py-6"}`}>
        <div className="container-editorial flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={e => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }} className="flex flex-col">
            <span className="font-display text-lg font-bold uppercase tracking-widest text-cream">TSEC MARATHON</span>
            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-cream/50">
              2025
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(link => <button key={link.label} onClick={() => scrollToSection(link.href)} className="relative font-display text-xs uppercase tracking-widest text-cream/70 transition-colors duration-300 hover:text-cream">
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 hover:w-full" />
              </button>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button onClick={() => scrollToSection("#register")} className="border border-cream/30 bg-transparent px-6 py-2.5 font-display text-xs uppercase tracking-widest text-cream transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex h-10 w-10 items-center justify-center text-cream md:hidden" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }} className="fixed inset-0 z-40 bg-secondary pt-24 md:hidden">
            <nav className="container-editorial flex flex-col gap-6">
              {navLinks.map((link, index) => <motion.button key={link.label} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.3,
            delay: index * 0.05
          }} onClick={() => scrollToSection(link.href)} className="border-b border-cream/10 pb-4 text-left font-display text-2xl uppercase tracking-wide text-cream">
                  {link.label}
                </motion.button>)}
              <motion.button initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: 0.3
          }} onClick={() => scrollToSection("#register")} className="mt-4 w-full bg-primary py-4 font-display text-base uppercase tracking-widest text-primary-foreground">
                Register Now
              </motion.button>
            </nav>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export default Header;