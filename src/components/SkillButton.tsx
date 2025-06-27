import type { Skill } from "@/lib/data";
import { type FC } from "react";
import { motion } from "framer-motion";
import { Particles } from "./particles";
import { LazyIcon } from "./LazyIcon";
import { useStore } from "@nanostores/react";
import { $currentTheme } from "@/store";

interface Props {
  skill: Skill;
  selectedSkillId: string;
  handleSkillChange: (skill: Skill) => void;
  particleTrigger?: boolean;
}
const SkillButton: FC<Props> = ({
  skill,
  selectedSkillId,
  handleSkillChange,
  particleTrigger = false,
}) => {
  const IconComponent = skill.icon;
  const isSelected = selectedSkillId === skill.id;
  const currentTheme = useStore($currentTheme);

  const isDarkMode = currentTheme === "dark";

  return (
    <motion.button
      key={skill.id}
      onClick={() => handleSkillChange(skill)}
      className="group relative overflow-hidden rounded-xl border-2 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-200 hover:shadow-xl dark:bg-gray-900/50"
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
      whileTap={{ scale: 0.95 }}
      animate={{
        borderColor: isSelected
          ? skill.color
          : isDarkMode
            ? "#1b2631"
            : "#e2e8f0",
        boxShadow: isSelected
          ? `0 20px 40px ${skill.color}30, 0 0 0 1px ${skill.color}20`
          : "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
      style={{
        background: isSelected
          ? `linear-gradient(135deg, ${skill.color}10, transparent)`
          : undefined,
      }}
    >
      {/* Efecto de brillo en hover */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        whileHover={{
          translateX: "200%",
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
      />

      {/* Partículas */}
      <Particles
        color={skill.color}
        trigger={particleTrigger && isSelected}
        count={30}
      />
      {/* Partículas secundarias más sutiles */}
      {isSelected && (
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Particles
            color={skill.color}
            trigger={particleTrigger && isSelected}
            count={15}
          />
        </motion.div>
      )}

      <motion.div
        animate={{
          filter: isSelected ? "none" : "grayscale(100%) opacity(0.6)",
        }}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        <LazyIcon
          icon={IconComponent}
          size={40}
          className={`mx-auto mb-2`}
          delay={100}
        />
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {skill.name}
        </p>
      </motion.div>

      {isSelected && (
        <motion.div
          className="absolute -top-1 -right-1 h-4 w-4 rounded-full"
          style={{ backgroundColor: skill.color }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      )}

      {/* Glow effect */}
      {isSelected && (
        <motion.div
          className="absolute inset-0 rounded-xl opacity-20"
          style={{
            background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.button>
  );
};

export default SkillButton;
