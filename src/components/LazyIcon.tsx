import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import type { LucideIcon } from "lucide-react";

interface LazyIconProps {
  icon: string;
  size?: number;
  className?: string;
  delay?: number;
}

export function LazyIcon({
  icon,
  size = 24,
  className,
  delay = 0,
}: LazyIconProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isLoaded) {
    return (
      <motion.div
        className={`animate-pulse rounded bg-gray-200 dark:bg-gray-700 ${className}`}
        style={{ width: size, height: size }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <img
        src={icon}
        alt=""
        width={size}
        height={size}
        className={className}
        loading="lazy"
      />
    </motion.div>
  );
}
