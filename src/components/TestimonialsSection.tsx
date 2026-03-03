import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import clientPriya from "@/assets/client-priya.jpg";
import clientRahul from "@/assets/client-rahul.jpg";
import clientAnjali from "@/assets/client-anjali.jpg";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner",
    photo: clientPriya,
    text: "Unfiltered transformed our house into a stunning home. Their attention to detail and creativity were exceptional.",
  },
  {
    name: "Rahul Verma",
    role: "Entrepreneur",
    photo: clientRahul,
    text: "Working with Unfiltered was a dream. They understood our vision and created a space that perfectly suits us.",
  },
  {
    name: "Anjali Singh",
    role: "Business Owner",
    photo: clientAnjali,
    text: "The project management by Unfiltered was seamless. They delivered on time and within budget, exceeding expectations.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-secondary/50 relative">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-serif text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Testimonials
          </p>
          <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
            What Our Clients Say
          </h2>
          <p className="mt-6 luxury-subheading text-lg max-w-2xl mx-auto">
            Hear directly from our satisfied clients about their incredible experiences and
            the transformative impact of our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="glass-card p-8 md:p-10 relative group hover:shadow-xl transition-shadow duration-500"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-6" strokeWidth={1} />
              <p className="font-serif text-lg italic text-foreground leading-relaxed mb-8">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-body font-medium text-foreground">{t.name}</p>
                  <p className="font-body text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
