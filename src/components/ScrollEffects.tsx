import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60]"
    />
  );
};

const SectionReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.3"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(10% 5% 10% 5%)", "inset(0% 0% 0% 0%)"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ clipPath, opacity, scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { ScrollProgressBar, SectionReveal };
