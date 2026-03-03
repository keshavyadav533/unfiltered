import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  { src: portfolio1, title: "Modern Bedroom Suite", category: "Residential" },
  { src: portfolio2, title: "Marble Kitchen", category: "Kitchen" },
  { src: portfolio3, title: "Spa Bathroom", category: "Bathroom" },
  { src: portfolio4, title: "Grand Living Room", category: "Living Space" },
  { src: portfolio5, title: "Executive Dining", category: "Dining" },
  { src: portfolio6, title: "Designer Office", category: "Commercial" },
];

const PortfolioSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section-padding bg-background relative">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-serif text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Our Work
          </p>
          <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
            Projects
          </h2>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative break-inside-avoid cursor-pointer overflow-hidden perspective-1000"
              onClick={() => setLightbox(i)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                e.currentTarget.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg)";
              }}
              style={{ transformStyle: "preserve-3d", transition: "transform 0.3s ease" }}
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                style={{ height: i % 3 === 0 ? "450px" : i % 3 === 1 ? "350px" : "400px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-xs tracking-[0.3em] uppercase text-primary font-body">{project.category}</p>
                <h3 className="font-display text-xl text-warm-white mt-1">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-matte-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              className="absolute top-6 right-6 text-warm-white/60 hover:text-warm-white transition-colors"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 md:left-8 text-warm-white/60 hover:text-warm-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 md:right-8 text-warm-white/60 hover:text-warm-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              src={projects[lightbox].src}
              alt={projects[lightbox].title}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-primary font-body">
                {projects[lightbox].category}
              </p>
              <p className="font-display text-xl text-warm-white mt-1">
                {projects[lightbox].title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
