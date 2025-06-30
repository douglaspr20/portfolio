import { useRef, type FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee, Code, Sparkles, Github, Linkedin, Mail } from "lucide-react";
import { AnimatedBackground } from "../layout/AnimatedBackground";
import { TypingAnimation } from "../common/TypingAnimation";
import SocialIcon from "../ui/SocialIcon";
import { personalInfo } from "@/lib/data";
import type { Language } from "@/types";
import { ui } from "@/i18n";

interface Props {
  currentLang: Language;
}

const HeroSection: FC<Props> = ({ currentLang }) => {
  const t = ui[currentLang];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const { greeting, name, roles, coffee, slang } = t.home;

  const { github, linkedin, email } = personalInfo;

  return (
    <motion.section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      style={{ y, opacity }}
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.p
            className="mb-2 text-lg font-light tracking-wide text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {greeting}
          </motion.p>

          <motion.h1
            className="mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text py-4 text-4xl font-bold text-transparent sm:text-5xl md:text-7xl lg:text-8xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            {name}
          </motion.h1>

          <motion.div
            className="mt-6 mb-10 flex items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Code className="text-blue-400" size={24} />
            </motion.div>
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="text-yellow-400" size={24} />
            </motion.div>
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Code className="text-cyan-400" size={24} />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="mb-6 text-2xl font-bold text-white sm:text-5xl lg:text-6xl">
            <TypingAnimation
              texts={roles}
              className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent"
            />
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto mb-8 max-w-3xl sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <p className="mb-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
            {slang}
          </p>
          <motion.div
            className="flex items-center justify-center gap-2 text-sm text-slate-400 sm:text-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            {coffee}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1,
              }}
            >
              <Coffee className="text-amber-400" size={24} />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-6 text-3xl text-gray-400 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <SocialIcon
            link={github}
            label="GitHub"
            className="p-3 hover:text-white"
          >
            <Github />
          </SocialIcon>

          <SocialIcon
            link={linkedin}
            label="LinkedIn"
            className="p-3 hover:text-blue-600"
          >
            <Linkedin />
          </SocialIcon>

          <SocialIcon
            link={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Hey%20Douglas!`}
            label="Email"
            className="p-3 hover:text-red-600"
          >
            <Mail />
          </SocialIcon>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-300/40 blur-3xl filter"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-500/60 blur-3xl filter"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 4 }}
      />
    </motion.section>
  );
};

export default HeroSection;
