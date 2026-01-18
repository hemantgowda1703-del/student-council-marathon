import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Past sponsors
const sponsors = [
  { name: "Decathlon", tier: "title" },
  { name: "Hindustan Dry Fruit Center", tier: "title" },
  { name: "HP", tier: "gold" },
  { name: "No Escape", tier: "gold" },
  { name: "Red Bull", tier: "silver" },
  { name: "Cloud9", tier: "silver" },
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
          <span className="label-athletic text-muted-foreground">Past Sponsors</span>
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

      </div>
    </section>
  );
};

export default Sponsors;
