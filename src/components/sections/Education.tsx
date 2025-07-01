import React, { useState, type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { TypingAnimation } from "@/components/common/TypingAnimation";
import SectionContainer from "@/components/common/SectionContainer";
import type { Language } from "@/types";
import { ui } from "@/i18n";

interface Props {
  currentLang: Language;
}

const Education: FC<Props> = ({ currentLang }) => {
  const t = ui[currentLang];
  const { titles, degrees, certifications, tabsLabels } = t.education;

  const [activeTab, setActiveTab] = useState("education");

  return (
    <SectionContainer id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="mb-6 text-2xl font-bold md:text-4xl">
          <TypingAnimation
            texts={titles}
            className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent"
          />
        </h2>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-2 rounded-xl border-2 border-transparent bg-white p-0 shadow-lg dark:border-slate-800 dark:bg-gray-900/50">
          <TabsTrigger
            value="education"
            className="flex h-[100%] items-center gap-2 rounded-lg transition-all duration-300 data-[state=active]:bg-blue-700 data-[state=active]:text-white dark:text-white"
          >
            <GraduationCap className="h-4 w-4" />
            {tabsLabels.education}
          </TabsTrigger>
          <TabsTrigger
            value="certifications"
            className="flex h-[100%] items-center gap-2 rounded-lg transition-all duration-300 data-[state=active]:bg-yellow-500 data-[state=active]:text-white dark:text-white"
          >
            <Award className="h-4 w-4" />
            {tabsLabels.certifications}
          </TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          <TabsContent value="education" className="mt-0">
            <motion.div
              key="education"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {degrees.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="overflow-hidden border-l-4 border-l-blue-600 transition-all duration-300 hover:shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-sky-50 dark:from-slate-950 dark:to-slate-800">
                      <div className="flex flex-col items-start justify-between md:flex-row">
                        <div>
                          <CardTitle className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-sky-500">
                            {item.institution}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-300">
                            <Calendar className="h-4 w-4" />
                            {item.period}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="mb-4 text-gray-700 dark:text-white">
                        {item.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="mb-2 font-semibold text-gray-900">
                          Key Highlights:
                        </h4>
                        <ul className="list-inside list-disc space-y-1">
                          {item.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-700 dark:text-white"
                            >
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="bg-blue-100 text-sky-800 dark:bg-blue-900 dark:text-white"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <TabsContent value="certifications" className="mt-0">
            <motion.div
              key="certifications"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 gap-6 lg:grid-cols-2"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full overflow-hidden border-l-4 border-l-yellow-500 transition-all duration-300 hover:shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-slate-950 dark:to-slate-800">
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-yellow-700 dark:text-yellow-400">
                        {cert.issuer}
                      </CardDescription>
                      <div className="mt-2 flex items-center justify-between">
                        <Badge variant="outline">{cert.date}</Badge>
                        <span className="text-xs text-gray-500 dark:text-gray-300">
                          ID: {cert.credentialId}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="mb-4 text-sm text-gray-700 dark:text-white">
                        {cert.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="bg-yellow-100 text-xs text-yellow-800"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </SectionContainer>
  );
};

export default Education;
