import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeUnit {
  value: number;
  label: string;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 0, label: "Days" },
    { value: 0, label: "Hours" },
    { value: 0, label: "Minutes" },
    { value: 0, label: "Seconds" },
  ]);

  useEffect(() => {
    const targetDate = new Date("2026-02-08T06:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft([
          { value: days, label: "Days" },
          { value: hours, label: "Hours" },
          { value: minutes, label: "Minutes" },
          { value: seconds, label: "Seconds" },
        ]);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-secondary py-16 md:py-20 overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--cream)/0.1)_0%,_transparent_50%)]" />
      </div>

      <div className="container-editorial relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="label-athletic text-cream/50">
            Race Day Countdown
          </span>
        </motion.div>

        {/* Countdown Grid */}
        <div className="flex justify-center items-center gap-3 md:gap-6 lg:gap-10">
          {timeLeft.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Number Container */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 blur-2xl bg-primary/20 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Number */}
                <div className="relative bg-secondary-foreground/5 border border-cream/10 px-4 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 min-w-[70px] md:min-w-[100px] lg:min-w-[130px]">
                  <span className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream tabular-nums tracking-tight">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Label */}
              <span className="mt-3 md:mt-4 font-display text-[10px] md:text-xs tracking-[0.3em] uppercase text-cream/40">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 md:mt-16 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        />

        {/* Event Date */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-6 text-center font-display text-sm md:text-base tracking-widest text-cream/60 uppercase"
        >
          February 8, 2026 • 6:00 AM
        </motion.p>
      </div>
    </section>
  );
};

export default Countdown;
