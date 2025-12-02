import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Placeholder sponsor logos - using text representations
const sponsors = [
  { name: "NIKE", tier: "title" },
  { name: "GATORADE", tier: "title" },
  { name: "GARMIN", tier: "gold" },
  { name: "ASICS", tier: "gold" },
  { name: "GoPro", tier: "gold" },
  { name: "Fitbit", tier: "silver" },
  { name: "Clif Bar", tier: "silver" },
  { name: "Nuun", tier: "silver" },
];

const Sponsors = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const titleSponsors = sponsors.filter((s) => s.tier === "title");
  const goldSponsors = sponsors.filter((s) => s.tier === "gold");
  const silverSponsors = sponsors.filter((s) => s.tier === "silver");

  return (
    <section
      ref={sectionRef}
      className="section-padding-sm relative overflow-hidden border-y border-border bg-muted/20"
    >
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="label-athletic text-muted-foreground">Our Partners</span>
        </motion.div>

        {/* Title Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-12 md:gap-20"
        >
          {titleSponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="grayscale-hover cursor-pointer"
            >
              <span className="font-display text-3xl font-bold tracking-wider text-foreground/60 transition-colors duration-300 hover:text-foreground md:text-4xl">
                {sponsor.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="mx-auto mb-10 h-px w-32 bg-border" />

        {/* Gold Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {goldSponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="grayscale-hover cursor-pointer"
            >
              <span className="font-display text-xl font-semibold tracking-wider text-foreground/40 transition-colors duration-300 hover:text-foreground md:text-2xl">
                {sponsor.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          {silverSponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="grayscale-hover cursor-pointer"
            >
              <span className="font-display text-sm font-medium tracking-wider text-foreground/30 transition-colors duration-300 hover:text-foreground md:text-base">
                {sponsor.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="font-body text-sm text-muted-foreground underline decoration-muted-foreground/30 underline-offset-4 transition-colors duration-300 hover:text-foreground hover:decoration-foreground"
          >
            Interested in sponsoring? Get in touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
