import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Diamond } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Expertise",
    description: "Our team's extensive experience guarantees innovative and high-quality design solutions for your unique needs.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your vision is our priority. We collaborate closely to create spaces that truly reflect you.",
  },
  {
    icon: Diamond,
    title: "Quality",
    description: "We are committed to using premium materials and meticulous craftsmanship for lasting beauty and durability.",
  },
];

const WhyChooseSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden bg-accent text-accent-foreground">
      {/* Gold line top */}
      <div className="gold-line" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-serif text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Why Us
          </p>
          <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl">
            Why Choose Unfiltered?
          </h2>
          <p className="mt-6 font-body font-light text-lg text-accent-foreground/60 max-w-2xl mx-auto">
            We bring a wealth of experience and a passion for design to every project,
            ensuring exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary/60 group-hover:glow-gold transition-all duration-500">
                <reason.icon className="w-8 h-8 text-primary" strokeWidth={1} />
              </div>
              <h3 className="font-display text-2xl font-medium text-accent-foreground mb-4">
                {reason.title}
              </h3>
              <p className="font-body font-light text-accent-foreground/60 leading-relaxed max-w-sm mx-auto">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gold line bottom */}
      <div className="gold-line" />
    </section>
  );
};

export default WhyChooseSection;
