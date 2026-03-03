import { motion } from "framer-motion";

const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Gold dust floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 1 + Math.random() * 2,
            height: 1 + Math.random() * 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `hsl(38 ${50 + Math.random() * 30}% ${50 + Math.random() * 20}% / ${0.15 + Math.random() * 0.2})`,
          }}
          animate={{
            y: [0, -(50 + Math.random() * 100), 0],
            x: [0, (Math.random() - 0.5) * 40, 0],
            opacity: [0, 0.4 + Math.random() * 0.3, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
