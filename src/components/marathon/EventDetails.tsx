import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, MapPin, Users, CheckCircle, AlertCircle } from "lucide-react";

const details = [
  {
    icon: Calendar,
    label: "Date",
    value: "February 8, 2026",
    sublabel: "Sunday",
  },
  {
    icon: Clock,
    label: "Reporting Time",
    value: "5:30 AM",
    sublabel: "Race starts at 6:00 AM",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "TSEC, Bandra (West)",
    sublabel: "Thadomal Shahani Engineering College",
  },
  {
    icon: Users,
    label: "Eligibility",
    value: "All Ages",
    sublabel: "Under 18 requires guardian consent",
  },
];

const whatToBring = [
  "Valid ID proof (mandatory)",
  "Race bib (collected at registration)",
  "Comfortable running shoes",
  "Weather-appropriate clothing",
  "Personal water bottle (optional)",
  "Energy snacks if needed",
];

const rules = [
  "No headphones allowed on the 10K course",
  "Follow marshal instructions at all times",
  "Stay within marked course boundaries",
  "Report any medical issues immediately",
  "Respect fellow runners and spectators",
];

const EventDetails = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="details"
      className="section-padding relative overflow-hidden bg-muted/30"
    >
      <div className="container-editorial">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="label-athletic mb-4 inline-block text-muted-foreground"
          >
            Everything You Need to Know
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-display-lg uppercase text-foreground"
          >
            Event Details
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 h-px w-24 bg-primary"
          />
        </div>

        {/* Quick Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {details.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group border border-border bg-background p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-soft"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/5 transition-colors duration-300 group-hover:bg-primary/10">
                <detail.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="label-athletic text-muted-foreground">{detail.label}</span>
              <h3 className="mt-2 font-display text-xl uppercase tracking-wide text-foreground">
                {detail.value}
              </h3>
              <p className="mt-1 font-body text-sm text-muted-foreground">{detail.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* What to Bring */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="h-5 w-5 text-primary" />
              <h3 className="font-display text-xl uppercase tracking-wide text-foreground">
                What to Bring
              </h3>
            </div>

            <div className="border border-border bg-background p-8">
              <ul className="space-y-4">
                {whatToBring.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-primary" />
                    <span className="font-body text-base text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Rules */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="h-5 w-5 text-gold" />
              <h3 className="font-display text-xl uppercase tracking-wide text-foreground">
                Race Rules
              </h3>
            </div>

            <div className="border border-border bg-background p-8">
              <ul className="space-y-4">
                {rules.map((rule, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 font-display text-sm text-gold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-body text-base text-muted-foreground">{rule}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Schedule Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="mb-8 text-center font-display text-xl uppercase tracking-widest text-foreground">
            Race Day Schedule
          </h3>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-0">
            {[
              { time: "5:30 AM", event: "Gates Open" },
              { time: "5:45 AM", event: "Warm-up Session" },
              { time: "6:00 AM", event: "10K Start" },
              { time: "6:15 AM", event: "5K Start" },
              { time: "6:30 AM", event: "3K Start" },
              { time: "9:00 AM", event: "Prize Ceremony" },
            ].map((item, index, arr) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center px-6 py-4">
                  <span className="font-display text-lg font-bold text-primary">{item.time}</span>
                  <span className="mt-1 font-body text-sm text-muted-foreground">{item.event}</span>
                </div>
                {index < arr.length - 1 && (
                  <div className="hidden h-8 w-px bg-border lg:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
