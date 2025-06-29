import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Coffee } from "lucide-react";
import { TypingAnimation } from "../common/TypingAnimation";
import SocialIcon from "../ui/SocialIcon";
import { menuItems } from "@/lib/siteConfig";
import { capitalize } from "@/lib/utils";
import { $currentMenuItemActive } from "@/store";
import { useStore } from "@nanostores/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const currentMenuItem = useStore($currentMenuItemActive);

  return (
    <footer className="from-background to-muted/20 border-t border-purple-500/10 bg-gradient-to-b py-6 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-between space-y-8 lg:flex-row lg:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-2 cursor-pointer text-2xl font-bold text-white transition-colors hover:text-blue-400">
              <TypingAnimation
                texts={["Douglas Pérez"]}
                className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent"
              />
            </h3>
            <p className="flex items-center justify-center gap-1 text-sm text-gray-400 lg:justify-start">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {menuItems.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => $currentMenuItemActive.set(link)}
                className={`group relative text-sm font-medium text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-gray-600 dark:hover:text-white ${currentMenuItem === link ? "text-gray-600 dark:text-white" : ""}`}
              >
                {capitalize(link)}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-yellow-400 transition-all duration-300 group-hover:w-full ${currentMenuItem === link ? "w-full" : ""}`}
                ></span>
              </a>
            ))}
          </div>

          <div className="flex space-x-6">
            <SocialIcon
              link={personalInfo.github}
              label="GitHub"
              className="hover:text-black dark:hover:text-white"
            >
              <Github />
            </SocialIcon>

            <SocialIcon
              link={personalInfo.linkedin}
              label="LinkedIn"
              className="hover:text-blue-600"
            >
              <Linkedin />
            </SocialIcon>

            <SocialIcon
              link={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=Hey%20Douglas!`}
              label="Email"
              className="hover:text-red-600"
            >
              <Mail />
            </SocialIcon>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-400 pt-8 dark:border-gray-800">
          <div className="flex items-center justify-center">
            <p className="text-xs text-gray-500">
              Maked with
              <span className="mx-1 animate-pulse text-blue-400">⚡</span>
              and a lot of
            </p>

            <Coffee className="ms-1 text-amber-400" size={14} />
          </div>
        </div>
      </div>
    </footer>
  );
}
