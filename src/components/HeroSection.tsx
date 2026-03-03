import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} id="home" className="relative h-screen overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt="Luxury modern interior living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black/60 via-matte-black/30 to-matte-black/70" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-primary mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-lg md:text-xl tracking-[0.4em] uppercase text-gold-light mb-6"
        >
          Interior Design Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-warm-white leading-[1.05] max-w-5xl"
        >
          Transforming Spaces
          <br />
          <span className="italic font-normal">Into Dream Homes</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 font-body font-light text-base md:text-lg text-warm-white/70 max-w-xl leading-relaxed"
        >
          We are passionate interior designers dedicated to bringing your vision to life,
          creating spaces that are both functional and stylish.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://www.canva.com/design/DAG0jMXVc1c/mvwG3GvqBEe1f0fY6Z6g4Q/view?utm_content=DAG0jMXVc1c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5bc4518511"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 glow-gold"
          >
            <span className="relative z-10">Download Portfolio</span>
            <div className="absolute inset-0 bg-gold-dark transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
          </a>
          <a
            href="#contact"
            className="group px-10 py-4 border border-warm-white/30 text-warm-white font-body text-sm tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-all duration-500"
          >
            Book Now
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-warm-white/40 text-xs tracking-[0.3em] uppercase font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
