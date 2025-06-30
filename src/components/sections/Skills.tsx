import { useState, useEffect, useRef, type FC } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import SkillButton from "@/components/SkillButton";
import SelectedSkillDetails from "@/components/SelectedSkillDetails";
import { TypingAnimation } from "@/components/common/TypingAnimation";
import { useStore } from "@nanostores/react";
import { $currentTheme } from "@/store";
import SectionContainer from "@/components/common/SectionContainer";
import type { Skill } from "@/interfaces";
import type { Language } from "@/types";
import { ui } from "@/i18n";

interface Props {
  currentLang: Language;
}

const SkillSection: FC<Props> = ({ currentLang }) => {
  const t = ui[currentLang];

  const { titles, skills, experienceLevelLabel } = t.skills;

  const [selectedSkill, setSelectedSkill] = useState<Skill>(skills[0]);
  const [isExploring, setIsExploring] = useState(true);
  const [particleTrigger, setParticleTrigger] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <SectionContainer id="skills" ref={containerRef}>
      <div className="mb-8">
        <h2 className="text-2xl font-bold md:text-4xl">
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
        <div className="order-1 lg:order-2 lg:col-span-1">
          <SelectedSkillDetails
            selectedSkill={selectedSkill}
            experienceLabel={experienceLevelLabel}
          />
        </div>
        <div className="order-2 lg:order-1 lg:col-span-2">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {skillsParsed.map((skill) => (
              <SkillButton
                key={skill.id}
                skill={skill}
                selectedSkillId={selectedSkill.id}
                handleSkillChange={handleSkillChange}
                particleTrigger={particleTrigger}
                containerRef={containerRef}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default SkillSection;
