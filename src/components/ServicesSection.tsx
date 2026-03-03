import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, LayoutGrid, ClipboardCheck, PenTool } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Concept and Visualization",
    description:
      "Through 3D visuals, mood boards, and material samples, we let you preview and refine every detail from colors and textures to furniture and lighting before it's built.",
  },
  {
    icon: LayoutGrid,
    title: "Space Planning and Furniture Layout",
    description:
      "Crafting bespoke modular furniture solutions that perfectly blend functionality with sophisticated aesthetics for your space.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description:
      "Experience seamless, end-to-end project execution from initial concept to final handover with our expert team.",
  },
  {
    icon: PenTool,
    title: "Schematic Design",
    description:
      "Detailed schematic designs that lay the foundation for your project's success, ensuring clarity and precision.",
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div ref={ref} className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-serif text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Our Services
          </p>
          <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
            Design, Build & Inspire
          </h2>
          <p className="mt-6 luxury-subheading text-lg max-w-2xl mx-auto">
            Discover our comprehensive suite of services designed to bring your dream space
            to life with expertise and style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group glass-card p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:shadow-xl perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                e.currentTarget.style.transform = `rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg)";
              }}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="font-body font-light text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
