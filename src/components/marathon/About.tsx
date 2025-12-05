import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import galleryImage1 from "@/assets/gallery-1.jpg";
import galleryImage5 from "@/assets/gallery-5.jpg";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-background"
    >
      <div className="container-editorial">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="label-athletic mb-6 text-muted-foreground"
            >
              About The Run
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-editorial text-editorial-lg font-normal italic text-foreground"
            >
              A race built for our community
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="my-8 h-px w-24 origin-left bg-primary"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 font-body text-base leading-relaxed text-muted-foreground"
            >
              <p>
                Welcome to the Student Council Marathon 2025. This isn't just another
                race — it's a celebration of movement, community, and the simple joy
                of putting one foot in front of the other.
              </p>
              <p>
                Whether you're a seasoned runner chasing a personal best or taking your
                first steps into the world of distance running, this is your moment.
                We've designed every detail with you in mind: from the carefully
                curated route through our most scenic streets to the volunteers
                cheering at every corner.
              </p>
              <p className="font-editorial text-lg italic text-foreground">
                "Run with us. Celebrate with us."
              </p>
            </motion.div>

            {/* Past Footfall Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8"
            >
              <span className="label-athletic mb-4 block text-muted-foreground">
                Past Footfall
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 flex items-center gap-8"
            >
              <div className="flex flex-col">
                <span className="font-display text-4xl font-bold text-primary">500+</span>
                <span className="font-body text-sm text-muted-foreground">Runners</span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <span className="font-display text-4xl font-bold text-primary">2</span>
                <span className="font-body text-sm text-muted-foreground">Race Categories</span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <span className="font-display text-4xl font-bold text-primary">1</span>
                <span className="font-body text-sm text-muted-foreground">Community</span>
              </div>
            </motion.div>
          </div>

          {/* Images */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="image-hover relative z-10 overflow-hidden"
            >
              <img
                src={galleryImage1}
                alt="Runner on city street"
                className="h-[500px] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="image-hover absolute -bottom-16 -left-8 z-20 hidden overflow-hidden shadow-dramatic lg:block"
            >
              <img
                src={galleryImage5}
                alt="Runner at dawn"
                className="h-[280px] w-[220px] object-cover"
              />
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -right-4 top-8 -z-10 h-full w-full border border-primary/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
