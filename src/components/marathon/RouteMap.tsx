import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Flag, Circle, X, ZoomIn } from "lucide-react";
import routeMapImage from "@/assets/route-map-actual.png";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const legendItems = [
  { icon: MapPin, label: "Start Point (Joggers Park)", color: "text-red-500" },
  { icon: Flag, label: "End Point (TSEC)", color: "text-primary" },
  { icon: Circle, label: "Route Markers", color: "text-blue-500" },
];

const RouteMap = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedMap, setSelectedMap] = useState<string | null>(null);

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
            Our carefully designed course takes you through Bandra West,
            featuring scenic routes past Joggers Park, Pali Market, and through the vibrant streets of Mumbai.
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
            <div 
              className="relative overflow-hidden border border-border bg-cream/50 cursor-pointer group"
              onClick={() => setSelectedMap("5K")}
            >
              <img
                src={routeMapImage}
                alt="5K Marathon route map - Joggers Park to TSEC"
                className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="h-10 w-10 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-4 left-4 bg-background/90 px-4 py-2 backdrop-blur-sm">
                <span className="font-display text-xs uppercase tracking-wider text-muted-foreground">
                  Start: Joggers Park
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-background/90 px-4 py-2 backdrop-blur-sm">
                <span className="font-display text-xs uppercase tracking-wider text-muted-foreground">
                  Finish: TSEC
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
            <div 
              className="relative overflow-hidden border border-border bg-cream/50 cursor-pointer group"
              onClick={() => setSelectedMap("10K")}
            >
              <img
                src={routeMapImage}
                alt="10K Marathon route map - Extended route through Bandra"
                className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="h-10 w-10 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-4 left-4 bg-background/90 px-4 py-2 backdrop-blur-sm">
                <span className="font-display text-xs uppercase tracking-wider text-muted-foreground">
                  Start: Joggers Park
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-background/90 px-4 py-2 backdrop-blur-sm">
                <span className="font-display text-xs uppercase tracking-wider text-muted-foreground">
                  Finish: TSEC
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
            <div className="flex flex-wrap gap-6">
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
                  <span className="font-body text-sm text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Course Highlights */}
          <div>
            <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-foreground">
              Course Highlights
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-body text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Scenic route through Bandra West
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Passes Pali Market & G7 Multiplex
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Hydration stations along the route
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Medical support at checkpoints
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Map Modal */}
      <Dialog open={!!selectedMap} onOpenChange={() => setSelectedMap(null)}>
        <DialogContent className="max-w-4xl p-0 border-none bg-transparent">
          <DialogTitle className="sr-only">{selectedMap} Route Map</DialogTitle>
          <div className="relative">
            <button
              onClick={() => setSelectedMap(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-primary transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="bg-background p-2 rounded-lg">
              <div className="bg-primary px-4 py-2 mb-2 text-center">
                <span className="font-display text-lg uppercase tracking-wider text-primary-foreground font-bold">
                  {selectedMap} Route
                </span>
              </div>
              <img
                src={routeMapImage}
                alt={`${selectedMap} Marathon route map`}
                className="w-full h-auto"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RouteMap;
