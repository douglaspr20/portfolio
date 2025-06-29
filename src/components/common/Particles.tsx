import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  type: "circle" | "star" | "diamond" | "square";
  rotation: number;
  delay: number;
}

interface ParticlesProps {
  color: string;
  trigger: boolean;
  count?: number;
}

export function Particles({ color, trigger, count = 25 }: ParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  const particleTypes = ["circle", "star", "diamond", "square"] as const;

  useEffect(() => {
    if (trigger) {
      const newParticles: Particle[] = Array.from(
        { length: count },
        (_, i) => ({
          id: i,
          x: (Math.random() - 0.5) * 300, // Rango más amplio
          y: (Math.random() - 0.5) * 300,
          size: Math.random() * 8 + 4, // Partículas más grandes
          opacity: Math.random() * 0.9 + 0.3, // Más opacas
          duration: Math.random() * 1.5 + 1, // Duración más larga
          type: particleTypes[Math.floor(Math.random() * particleTypes.length)],
          rotation: Math.random() * 360,
          delay: Math.random() * 0.3, // Delay escalonado
        }),
      );

      setParticles(newParticles);

      // Limpiar partículas después de la animación
      setTimeout(() => setParticles([]), 3000);
    }
  }, [trigger, count]);

  const renderParticle = (particle: Particle) => {
    const baseClasses = "absolute";

    switch (particle.type) {
      case "circle":
        return (
          <div
            className={`${baseClasses} rounded-full`}
            style={{
              backgroundColor: color,
              width: particle.size,
              height: particle.size,
              boxShadow: `0 0 ${particle.size * 2}px ${color}80, inset 0 0 ${particle.size}px ${color}40`,
            }}
          />
        );
      case "star":
        return (
          <div
            className={`${baseClasses}`}
            style={{
              width: particle.size,
              height: particle.size,
              background: `radial-gradient(circle, ${color} 30%, transparent 70%)`,
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              filter: `drop-shadow(0 0 ${particle.size}px ${color}80)`,
            }}
          />
        );
      case "diamond":
        return (
          <div
            className={`${baseClasses}`}
            style={{
              width: particle.size,
              height: particle.size,
              background: `linear-gradient(45deg, ${color}, ${color}80)`,
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              filter: `drop-shadow(0 0 ${particle.size}px ${color}60)`,
            }}
          />
        );
      case "square":
        return (
          <div
            className={`${baseClasses} rounded-sm`}
            style={{
              backgroundColor: color,
              width: particle.size,
              height: particle.size,
              boxShadow: `0 0 ${particle.size * 1.5}px ${color}70`,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0,
            rotate: particle.rotation,
          }}
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: [0, particle.opacity, particle.opacity * 0.7, 0],
            scale: [0, 1.2, 1, 0.8],
            rotate: particle.rotation + 180,
          }}
          transition={{
            duration: particle.duration,
            ease: "easeOut",
            delay: particle.delay,
            times: [0, 0.2, 0.8, 1], // Control de keyframes
          }}
        >
          {renderParticle(particle)}
        </motion.div>
      ))}

      {/* Efecto de onda expansiva */}
      {trigger && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full border-2 opacity-60"
            style={{
              borderColor: color,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{
              scale: [0, 2, 4],
              opacity: [0.8, 0.4, 0],
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-dashed opacity-40"
            style={{
              borderColor: color,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{
              scale: [0, 3, 6],
              opacity: [0.6, 0.2, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
          />
        </>
      )}
    </div>
  );
}
