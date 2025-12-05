import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Droplets, Heart, Flag, CircleDot } from "lucide-react";
import routeMapImage from "@/assets/route-map.jpg";

const legendItems = [
  { icon: Flag, label: "Start Line", color: "text-primary" },
  { icon: CircleDot, label: "Finish Line", color: "text-primary" },
  { icon: MapPin, label: "Checkpoints", color: "text-gold" },
  { icon: Droplets, label: "Hydration Stations", color: "text-blue-500" },
  { icon: Heart, label: "Medical Posts", color: "text-red-500" },
];

const RouteMap = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="route"
      className="section-padding relative overflow-hidden bg-background"
    >
      <div className="container-editorial">
        {/* Section Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="label-athletic mb-4 inline-block text-muted-foreground"
          >
            The Course
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-display-lg uppercase text-foreground"
          >
            Route Map
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl font-body text-base text-muted-foreground"
          >
            Our carefully designed course takes you through the heart of downtown,
            featuring a mix of scenic boulevards and energetic commercial districts.
            Every kilometer is supported.
          </motion.p>
        </div>

        {/* Route Maps Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 mb-16">
          {/* 5K Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-4">
              <span className="font-display text-xl uppercase tracking-widest text-primary">
                5K Route
              </span>
            </div>
            <div className="relative overflow-hidden border border-border bg-cream/50">
              <img
                src={routeMapImage}
                alt="5K Marathon route map"
                className="h-auto w-full"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 px-4 py-2 backdrop-blur-sm">
                <span className="font-display text-xs uppercase tracking-wider text-muted-foreground">
                  Start: City Hall Plaza
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-background/90 px-4 py-2 backdrop-blur-sm">
                <span className="font-display text-xs uppercase tracking-wider text-muted-foreground">
                  Finish: Central Park
                </span>
              </div>
              <div className="absolute top-4 right-4 bg-primary px-4 py-2">
                <span className="font-display text-sm uppercase tracking-wider text-primary-foreground font-bold">
                  5 KM
                </span>
              </div>
            </div>
          </motion.div>

          {/* 10K Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-4">
              <span className="font-display text-xl uppercase tracking-widest text-primary">
                10K Route
              </span>
            </div>
            <div className="relative overflow-hidden border border-border bg-cream/50">
              <img
                src={routeMapImage}
                alt="10K Marathon route map"
                className="h-auto w-full"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 px-4 py-2 backdrop-blur-sm">
                <span className="font-display text-xs uppercase tracking-wider text-muted-foreground">
                  Start: City Hall Plaza
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-background/90 px-4 py-2 backdrop-blur-sm">
                <span className="font-display text-xs uppercase tracking-wider text-muted-foreground">
                  Finish: Memorial Park
                </span>
              </div>
              <div className="absolute top-4 right-4 bg-primary px-4 py-2">
                <span className="font-display text-sm uppercase tracking-wider text-primary-foreground font-bold">
                  10 KM
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Legend & Course Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Legend */}
          <div>
            <h3 className="mb-6 font-display text-sm uppercase tracking-widest text-foreground">
              Map Legend
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {legendItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center border border-border bg-background">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <span className="font-body text-xs text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Course Highlights */}
          <div>
            <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-foreground">
              Course Highlights
            </h4>
            <ul className="grid grid-cols-2 gap-2 font-body text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Flat, fast course through downtown
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Hydration every 2 kilometers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Crowd support throughout the route
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Professional timing at all checkpoints
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RouteMap;
