import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    distance: "3K",
    name: "Fun Run",
    description: "Perfect for beginners and families. A welcoming introduction to organized running.",
    time: "Approx. 20-35 min",
    fee: "₹200",
  },
  {
    distance: "5K",
    name: "Community Run",
    description: "The classic distance. Challenge yourself while enjoying the full race experience.",
    time: "Approx. 25-45 min",
    fee: "₹350",
    featured: true,
  },
  {
    distance: "10K",
    name: "Challenge Run",
    description: "For experienced runners seeking a real test. Push your limits on our signature course.",
    time: "Approx. 45-75 min",
    fee: "₹500",
  },
];

const RaceCategories = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="categories"
      className="section-padding relative overflow-hidden bg-secondary"
    >
      <div className="container-editorial">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="label-athletic mb-4 inline-block text-cream/50"
          >
            Choose Your Distance
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-display-lg uppercase text-cream"
          >
            Race Categories
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 h-px w-24 bg-primary"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.distance}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className={`group relative overflow-hidden border transition-all duration-500 ${
                category.featured
                  ? "border-primary bg-primary/10"
                  : "border-cream/10 bg-cream/5 hover:border-cream/30"
              }`}
            >
              {category.featured && (
                <div className="absolute right-0 top-0 bg-primary px-4 py-1">
                  <span className="font-display text-xs uppercase tracking-wider text-primary-foreground">
                    Popular
                  </span>
                </div>
              )}

              <div className="p-8 md:p-10">
                {/* Distance */}
                <div className="mb-6">
                  <span className="font-display text-7xl font-bold text-cream md:text-8xl">
                    {category.distance}
                  </span>
                </div>

                {/* Name */}
                <h3 className="mb-3 font-display text-xl uppercase tracking-wide text-cream">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="mb-6 font-body text-sm leading-relaxed text-cream/60">
                  {category.description}
                </p>

                {/* Details */}
                <div className="mb-8 space-y-2 border-t border-cream/10 pt-6">
                  <div className="flex justify-between">
                    <span className="font-body text-sm text-cream/50">Duration</span>
                    <span className="font-display text-sm uppercase tracking-wide text-cream">
                      {category.time}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-sm text-cream/50">Registration</span>
                    <span className="font-display text-sm uppercase tracking-wide text-primary">
                      {category.fee}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button className="flex w-full items-center justify-center gap-2 border border-cream/20 bg-transparent px-6 py-4 font-display text-sm uppercase tracking-widest text-cream transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground">
                  Select
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RaceCategories;
