import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { skills, type Skill } from "@/lib/data";
import SkillButton from "../SkillButton";
import SelectedSkillDetails from "../SelectedSkillDetails";
import { TypingAnimation } from "../typing-animation";
import { useStore } from "@nanostores/react";
import { $currentTheme } from "@/store";

export default function SkillsSectionEnhanced() {
  const [selectedSkill, setSelectedSkill] = useState<Skill>(skills[0]);
  const [isExploring, setIsExploring] = useState(true);
  const [particleTrigger, setParticleTrigger] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentTheme = useStore($currentTheme);

  const isDarkMode = currentTheme === "dark";

  useEffect(() => {
    if (isExploring) {
      intervalRef.current = setInterval(() => {
        const currentIndex = skills.findIndex(
          (skill) => skill.id === selectedSkill.id,
        );
        const nextIndex = (currentIndex + 1) % skills.length;
        handleSkillChange(skills[nextIndex]);
      }, 3000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isExploring, selectedSkill]);

  const handleSkillChange = (skill: Skill) => {
    if (skill.id !== selectedSkill.id) {
      setSelectedSkill(skill);
      setParticleTrigger(true);
      setTimeout(() => setParticleTrigger(false), 200);
    }
  };

  const toggleExploration = () => {
    setIsExploring(!isExploring);
  };

  const skillsParsed = skills.map((skill) => ({
    ...skill,
    color: skill.id === "nextjs" && isDarkMode ? "#ffffff" : skill.color,
  }));

  const titles = ["Skills", "Technologies", "Expertise", "Powers"];

  return (
    <section
      id="skills"
      className="from-muted/20 to-background relative mt-10 bg-gradient-to-b py-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white md:text-4xl">
            <TypingAnimation
              texts={titles}
              className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent"
            />
          </h2>
          <motion.button
            onClick={toggleExploration}
            className={`mt-4 cursor-pointer rounded-lg p-2 transition-colors ${
              isExploring
                ? "bg-blue-700 text-white hover:bg-blue-600"
                : "bg-slate-400 text-white hover:bg-slate-500 dark:bg-slate-700 dark:hover:bg-slate-600"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExploring ? <Pause size={20} /> : <Play size={20} />}
          </motion.button>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {skillsParsed.map((skill) => (
                <SkillButton
                  key={skill.id}
                  skill={skill}
                  selectedSkillId={selectedSkill.id}
                  handleSkillChange={handleSkillChange}
                  particleTrigger={particleTrigger}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <SelectedSkillDetails selectedSkill={selectedSkill} />
          </div>
        </div>
      </div>
    </section>
  );
}
