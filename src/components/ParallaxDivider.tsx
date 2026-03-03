import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxDividerProps {
  image: string;
  quote: string;
  author?: string;
}

const ParallaxDivider = ({ image, quote, author }: ParallaxDividerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Parallax BG */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-matte-black/60" />
      </motion.div>

      {/* Floating light particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30 - Math.random() * 40, 0],
              x: [0, (Math.random() - 0.5) * 20, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1 + Math.random(), 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated light rays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-1/4 left-1/4 w-[1px] h-[150%] bg-gradient-to-b from-transparent via-primary/10 to-transparent"
          style={{ rotate: "15deg" }}
          animate={{ x: [0, 200, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-1/4 right-1/3 w-[1px] h-[150%] bg-gradient-to-b from-transparent via-primary/8 to-transparent"
          style={{ rotate: "-10deg" }}
          animate={{ x: [0, -150, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Quote text */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-px bg-primary mb-8"
        />
        <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-warm-white/90 max-w-3xl leading-relaxed">
          "{quote}"
        </p>
        {author && (
          <p className="mt-6 font-body text-sm tracking-[0.3em] uppercase text-primary">
            — {author}
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default ParallaxDivider;
