import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shirt, Trophy, Medal, Award, Utensils, BadgeCheck, MapPin, Shield } from "lucide-react";

const participantBenefits = [
  { icon: Shirt, label: "T-shirt", description: "Exclusive marathon tee" },
  { icon: BadgeCheck, label: "Electronic Bibs", description: "For accurate timing" },
  { icon: Utensils, label: "Refreshments", description: "Snack Box included" },
  { icon: Medal, label: "Participation Medal", description: "For all finishers" },
  { icon: Award, label: "E-Certificates", description: "Post marathon" },
];

const raceDetails = [
  {
    category: "5K",
    route: {
      start: "Thadomal Shahani Engineering College, Bandra (West)",
      end: "Along Joggers Park, Bandra (West) return to TSEC",
    },
    fees: { regular: 450, defence: 350 },
    prizes: {
      male: [
        { position: "1st", cash: 3000 },
        { position: "2nd", cash: 2500 },
        { position: "3rd", cash: 2000 },
      ],
      female: [
        { position: "1st", cash: 3000 },
        { position: "2nd", cash: 2500 },
        { position: "3rd", cash: 2000 },
      ],
    },
  },
  {
    category: "10K",
    route: {
      start: "Thadomal Shahani Engineering College, Bandra (West)",
      end: "Along Bandra Fort return to TSEC",
    },
    fees: { regular: 450, defence: 350 },
    prizes: {
      male: [
        { position: "1st", cash: 5000 },
        { position: "2nd", cash: 4000 },
        { position: "3rd", cash: 3000 },
      ],
      female: [
        { position: "1st", cash: 5000 },
        { position: "2nd", cash: 4000 },
        { position: "3rd", cash: 3000 },
      ],
    },
  },
];

const Registration = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="register"
      className="section-padding relative overflow-hidden bg-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-narrow relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-block border border-primary/30 bg-primary/5 px-4 py-2 font-display text-xs uppercase tracking-widest text-primary">
              Prizes & Perks
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-display-lg uppercase text-foreground"
          >
            Exclusive
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-display-lg uppercase text-primary"
          >
            Rewards Await
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl font-body text-lg text-muted-foreground"
          >
            Get ready to ignite your excitement at the TSEC MARATHON! Experience exclusive rewards and seize the chance to win fabulous prizes. We provide the fuel, essentials, and an electrifying atmosphere.
          </motion.p>
        </div>

        {/* Participant Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <h3 className="font-display text-xl uppercase tracking-wider text-center mb-8 text-foreground">
            All Participants Receive
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {participantBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex flex-col items-center p-6 border border-border bg-cream/30 hover:bg-cream/50 transition-colors"
              >
                <benefit.icon className="h-8 w-8 text-primary mb-3" />
                <span className="font-display text-sm uppercase tracking-wider text-foreground text-center">
                  {benefit.label}
                </span>
                <span className="font-body text-xs text-muted-foreground text-center mt-1">
                  {benefit.description}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Winner Categories Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-4 border border-primary/30 bg-primary/5 px-6 py-3">
            <Trophy className="h-5 w-5 text-primary" />
            <span className="font-display text-sm uppercase tracking-wider text-foreground">
              Two Winner Categories: Male & Female
            </span>
            <Trophy className="h-5 w-5 text-primary" />
          </div>
        </motion.div>

        {/* Race Details Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {raceDetails.map((race, raceIndex) => (
            <motion.div
              key={race.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + raceIndex * 0.2 }}
              className="border border-border bg-background"
            >
              {/* Category Header */}
              <div className="bg-primary px-6 py-4">
                <h3 className="font-display text-2xl uppercase tracking-wider text-primary-foreground font-bold text-center">
                  {race.category} Run
                </h3>
              </div>

              <div className="p-6">
                {/* Route Info */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-display text-xs uppercase tracking-wider text-muted-foreground">Start:</span>
                      <p className="font-body text-sm text-foreground">{race.route.start}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-display text-xs uppercase tracking-wider text-muted-foreground">End:</span>
                      <p className="font-body text-sm text-foreground">{race.route.end}</p>
                    </div>
                  </div>
                </div>

                {/* Registration Fees */}
                <div className="mb-6 pb-6 border-b border-border">
                  <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-4">Registration Fees</h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-body text-sm text-muted-foreground">Regular</span>
                    <span className="font-display text-xl font-bold text-foreground">₹{race.fees.regular}/-</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span className="font-body text-sm text-muted-foreground">Defence & Armed Personnel</span>
                    </div>
                    <span className="font-display text-xl font-bold text-primary">₹{race.fees.defence}/-</span>
                  </div>
                </div>

                {/* Prizes */}
                <div>
                  <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-primary" />
                    Winner Prizes
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Male Prizes */}
                    <div className="border border-border p-4 bg-cream/20">
                      <h5 className="font-display text-xs uppercase tracking-wider text-primary mb-3 text-center">Male</h5>
                      {race.prizes.male.map((prize) => (
                        <div key={prize.position} className="flex justify-between items-center mb-2 last:mb-0">
                          <span className="font-body text-xs text-muted-foreground">{prize.position}</span>
                          <span className="font-display text-sm font-bold text-foreground">₹{prize.cash.toLocaleString()}/-</span>
                        </div>
                      ))}
                      <p className="font-body text-xs text-muted-foreground text-center mt-2 pt-2 border-t border-border">+ Trophy</p>
                    </div>

                    {/* Female Prizes */}
                    <div className="border border-border p-4 bg-cream/20">
                      <h5 className="font-display text-xs uppercase tracking-wider text-primary mb-3 text-center">Female</h5>
                      {race.prizes.female.map((prize) => (
                        <div key={prize.position} className="flex justify-between items-center mb-2 last:mb-0">
                          <span className="font-body text-xs text-muted-foreground">{prize.position}</span>
                          <span className="font-display text-sm font-bold text-foreground">₹{prize.cash.toLocaleString()}/-</span>
                        </div>
                      ))}
                      <p className="font-body text-xs text-muted-foreground text-center mt-2 pt-2 border-t border-border">+ Trophy</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <p className="font-body text-lg text-muted-foreground mb-8">
            Don't let this thrilling opportunity slip away—secure your spot today!
          </p>
          
          <button className="group relative inline-flex items-center gap-3 overflow-hidden bg-primary px-12 py-5 font-display text-base font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:gap-5">
            <span>Register Now</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 -translate-x-full bg-foreground/20 transition-transform duration-500 group-hover:translate-x-0" />
          </button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="font-body text-sm">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="font-body text-sm">Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="font-body text-sm">Contact Us for Details</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;
