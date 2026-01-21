import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-marathon.jpg";
const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToRegister = () => {
    const element = document.getElementById("register");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section ref={heroRef} className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 scale-110" style={{
      transform: `translateY(${scrollY * 0.3}px) scale(1.1)`
    }}>
        <img src={heroImage} alt="Marathon runners at golden hour" className="h-full w-full object-cover" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-secondary/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 via-transparent to-secondary/40" />
      </div>

      {/* Sustainability Theme Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute left-0 right-0 top-24 md:top-32 z-20"
      >
        <div className="container-editorial flex justify-center">
          <div className="text-center">
            <p className="font-cursive text-2xl md:text-4xl lg:text-5xl text-cream drop-shadow-lg" style={{ fontFamily: "'Pacifico', cursive" }}>
              Run For Sustainability
            </p>
            <p className="font-cursive text-3xl md:text-5xl lg:text-6xl text-primary font-bold mt-1 drop-shadow-lg" style={{ fontFamily: "'Pacifico', cursive" }}>
              The Global Goals
            </p>
            <p className="font-cursive text-lg md:text-2xl lg:text-3xl text-cream/90 mt-1 drop-shadow-md" style={{ fontFamily: "'Pacifico', cursive" }}>
              For Sustainable Development
            </p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container-editorial relative z-10 flex h-full flex-col justify-end pb-20 md:pb-28">
        {/* Event Badge */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="mb-6">
          <span className="label-athletic text-cream/70">FEBRUARY 8, 2026 • CITY DOWNTOWN</span>
        </motion.div>

        {/* Main Title */}
        <div className="overflow-hidden">
          <motion.h1 initial={{
          y: "100%"
        }} animate={{
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1]
        }} className="font-display text-display-xl font-bold uppercase tracking-wide text-cream">TSEC</motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 initial={{
          y: "100%"
        }} animate={{
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0.16, 1, 0.3, 1]
        }} className="font-display text-display-xl font-bold uppercase tracking-wide text-primary">
            Marathon 2026
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.7
      }} className="mt-6 font-display text-display-sm tracking-widest text-cream/80">
          RUN TOGETHER • RISE TOGETHER
        </motion.p>

        {/* CTA Button */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.9
      }} className="mt-10">
          <button onClick={scrollToRegister} className="group relative overflow-hidden bg-primary px-10 py-5 font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:bg-primary/90">
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 -translate-x-full bg-cream/20 transition-transform duration-500 group-hover:translate-x-0" />
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 1.2
      }} className="absolute bottom-8 right-8 hidden md:block">
          <div className="flex flex-col items-center gap-3">
            <span className="font-display text-xs uppercase tracking-widest text-cream/50">
              Scroll
            </span>
            <motion.div animate={{
            y: [0, 8, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity
          }} className="h-12 w-px bg-gradient-to-b from-cream/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;