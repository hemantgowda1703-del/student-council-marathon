import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Sponsor logos
import decathlonLogo from "@/assets/sponsors/decathlon.png";
import hindustanLogo from "@/assets/sponsors/hindustan-dry-fruit.png";
import hpLogo from "@/assets/sponsors/hp.png";
import noEscapeLogo from "@/assets/sponsors/no-escape.png";
import redbullLogo from "@/assets/sponsors/redbull.png";
import cloud9Logo from "@/assets/sponsors/cloud9.png";

const sponsors = [
  { name: "Decathlon", logo: decathlonLogo, tier: "title" },
  { name: "Hindustan Dry Fruit Center", logo: hindustanLogo, tier: "title" },
  { name: "HP", logo: hpLogo, tier: "gold" },
  { name: "No Escape", logo: noEscapeLogo, tier: "gold" },
  { name: "Red Bull", logo: redbullLogo, tier: "silver" },
  { name: "Cloud9", logo: cloud9Logo, tier: "silver" },
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
              className="flex items-center justify-center"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100 md:h-20"
              />
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
          className="mb-8 flex flex-wrap items-center justify-center gap-10 md:gap-16"
        >
          {goldSponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-12 w-auto object-contain opacity-60 transition-opacity duration-300 hover:opacity-100 md:h-14"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {silverSponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-10 w-auto object-contain opacity-50 transition-opacity duration-300 hover:opacity-100 md:h-12"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
