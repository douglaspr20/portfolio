import { type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyIcon } from "./LazyIcon";
import type { Skill } from "@/interfaces";

interface Props {
  selectedSkill: Skill;
}

const SelectedSkillDetails: FC<Props> = ({ selectedSkill }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedSkill.id}
        initial={{ opacity: 0, x: 20, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -20, scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="sticky top-8 overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-800/10 dark:backdrop-blur-none"
        style={{
          background: `linear-gradient(135deg, ${selectedSkill.color}05, transparent, ${selectedSkill.color}05)`,
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${selectedSkill.color}, transparent 50%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.div
          className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: `${selectedSkill.color}15`,
            color: selectedSkill.color,
          }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {<LazyIcon icon={selectedSkill.icon} size={60} />}

          <motion.div
            className="absolute inset-0 rounded-2xl border-2"
            style={{ borderColor: selectedSkill.color }}
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 1.5, 2], opacity: [0.8, 0.4, 0] }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            key={selectedSkill.id}
          />
        </motion.div>

        <div className="relative z-10 mb-6 text-center">
          <motion.h3
            className="mb-2 text-xl font-bold text-slate-800 sm:text-2xl dark:text-slate-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {selectedSkill.name}
          </motion.h3>
          <motion.div
            className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="rounded-full border border-white/10 bg-white/20 px-3 py-1 backdrop-blur-sm dark:bg-slate-700/20">
              {selectedSkill.category}
            </span>
            <span
              className="font-medium"
              style={{ color: selectedSkill.color }}
            >
              {selectedSkill.experience}
            </span>
          </motion.div>
        </div>

        {/* Descripción */}
        <motion.p
          className="relative z-10 mb-6 leading-relaxed text-slate-600 sm:text-center dark:text-slate-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {selectedSkill.description}
        </motion.p>

        {/* Barra de experiencia mejorada */}
        <motion.div
          className="relative z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Nivel de experiencia
            </span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200/50 backdrop-blur-sm dark:bg-slate-700/50">
            <motion.div
              className="relative h-3 overflow-hidden rounded-full"
              style={{
                background: `linear-gradient(90deg, ${selectedSkill.color}, ${selectedSkill.color}80)`,
              }}
              initial={{ width: 0 }}
              animate={{
                width: `${Math.min(Number.parseInt(selectedSkill.experience) * 20, 100)}%`,
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              {/* Efecto de brillo en la barra */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SelectedSkillDetails;
