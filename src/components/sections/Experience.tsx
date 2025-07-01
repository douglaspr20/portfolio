import TimelineItem from "@/components/ui/TimelineItem";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/common/MotionWrapper";
import { TypingAnimation } from "@/components/common/TypingAnimation";
import SectionContainer from "@/components/common/SectionContainer";
import type { Language } from "@/types";
import { ui } from "@/i18n";

interface Props {
  currentLang: Language;
}

export default function ExperienceSection({ currentLang }: Props) {
  const t = ui[currentLang];

  const { titles, workExperience, keyAchievements } = t.experience;

  return (
    <SectionContainer id="experience" className={"min-h-500"}>
      <MotionWrapper>
        <h2 className="mb-6 text-2xl font-bold sm:text-4xl">
          <TypingAnimation
            texts={titles}
            className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent"
          />
        </h2>
      </MotionWrapper>
      <div className="mb-8">
        {workExperience.map((job, index) => (
          <TimelineItem
            key={job.company + job.period}
            title={job.position}
            company={job.company}
            subtitle={`${job.location}`}
            date={`${job.period}`}
            isLast={index === workExperience.length - 1}
            index={index}
          >
            <motion.div
              layout
              className="bg-background/80 dark:bg-card/10 mt-3 rounded-lg border border-gray-500/20 p-4 shadow-sm backdrop-blur-sm backdrop-filter dark:border-gray-500/25"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 flex items-center">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-500/10">
                  <Briefcase className="h-4 w-4 text-blue-500" />
                </div>
                <h4 className="text-sm font-medium">{keyAchievements}</h4>
              </div>
              <ul className="ml-4 list-none space-y-2 text-sm">
                {job.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    className="text-muted-foreground relative md:pl-6"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                    viewport={{ once: true }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </TimelineItem>
        ))}
      </div>
    </SectionContainer>
  );
}
