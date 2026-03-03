import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative bg-accent text-accent-foreground overflow-hidden">
      {/* Animated gold line */}
      <div className="gold-line" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-serif text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Get In Touch
          </p>
          <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl">
            Let's Create Your Dream Space
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary/60 transition-colors duration-300">
                <Phone className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-body text-sm text-accent-foreground/50 mb-1">Phone</p>
                <a href="tel:+917508160506" className="font-body text-lg text-accent-foreground hover:text-primary transition-colors">
                  +91 75081 60506
                </a>
              </div>
            </div>
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary/60 transition-colors duration-300">
                <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-body text-sm text-accent-foreground/50 mb-1">Email</p>
                <a href="mailto:info@unfiltered.co.in" className="font-body text-lg text-accent-foreground hover:text-primary transition-colors">
                  info@unfiltered.co.in
                </a>
              </div>
            </div>
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary/60 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-body text-sm text-accent-foreground/50 mb-1">Address</p>
                <p className="font-body text-lg text-accent-foreground">
                  UTC Urbtech, B410, Sec 132, Noida
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary/60 transition-colors duration-300">
                <Instagram className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-body text-sm text-accent-foreground/50 mb-1">Instagram</p>
                <a href="https://instagram.com/unfiltered_worldd" target="_blank" rel="noopener noreferrer" className="font-body text-lg text-accent-foreground hover:text-primary transition-colors">
                  @unfiltered_worldd
                </a>
              </div>
            </div>

            <p className="font-body font-light text-accent-foreground/50 leading-relaxed pt-4">
              Have questions or need assistance? Feel free to reach out to us via email, WhatsApp,
              or call us at the number mentioned. We're happy to help!
            </p>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-body text-xs tracking-[0.2em] uppercase text-accent-foreground/50 mb-2">
                  Name *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-accent-foreground/20 pb-3 font-body text-accent-foreground focus:border-primary outline-none transition-colors placeholder:text-accent-foreground/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-body text-xs tracking-[0.2em] uppercase text-accent-foreground/50 mb-2">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-accent-foreground/20 pb-3 font-body text-accent-foreground focus:border-primary outline-none transition-colors placeholder:text-accent-foreground/20"
                  placeholder="Your phone"
                />
              </div>
            </div>
            <div>
              <label className="block font-body text-xs tracking-[0.2em] uppercase text-accent-foreground/50 mb-2">
                Email *
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-accent-foreground/20 pb-3 font-body text-accent-foreground focus:border-primary outline-none transition-colors placeholder:text-accent-foreground/20"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block font-body text-xs tracking-[0.2em] uppercase text-accent-foreground/50 mb-2">
                Subject *
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-accent-foreground/20 pb-3 font-body text-accent-foreground focus:border-primary outline-none transition-colors placeholder:text-accent-foreground/20"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block font-body text-xs tracking-[0.2em] uppercase text-accent-foreground/50 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-accent-foreground/20 pb-3 font-body text-accent-foreground focus:border-primary outline-none transition-colors resize-none placeholder:text-accent-foreground/20"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="group relative px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 glow-gold mt-4"
            >
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gold-dark transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
            </button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <div className="gold-line" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-accent-foreground/40">
          © 2025 Unfiltered. Creativity without boundaries.
        </p>
        <div className="flex gap-8">
          <a href="#home" className="font-body text-xs tracking-[0.2em] uppercase text-accent-foreground/40 hover:text-primary transition-colors">
            Home
          </a>
          <a href="#services" className="font-body text-xs tracking-[0.2em] uppercase text-accent-foreground/40 hover:text-primary transition-colors">
            Services
          </a>
          <a href="#projects" className="font-body text-xs tracking-[0.2em] uppercase text-accent-foreground/40 hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="font-body text-xs tracking-[0.2em] uppercase text-accent-foreground/40 hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
