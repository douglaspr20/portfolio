import { useState, type FC } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@nanostores/react";
import { $currentMenuItemActive } from "@/store";
import type { Language, MenuItems } from "@/types";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { capitalize } from "@/lib/utils";
import { ui } from "@/i18n";
import LanguageSelector from "@/components/LanguageSelector";

interface Props {
  currentLang: Language;
}

const Header: FC<Props> = ({ currentLang }) => {
  const t = ui[currentLang];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentMenuItem = useStore($currentMenuItemActive);

  const toggleMenu = (link?: MenuItems) => {
    if (link) {
      $currentMenuItemActive.set(link);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = Object.entries(t.nav);

  return (
    <header className="dark:bg-background/40 border-border/40 fixed z-50 w-full border-b bg-gray-100 backdrop-blur-md backdrop-filter">
      <div className="container mx-auto flex max-w-4xl items-center justify-between p-4">
        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {menuItems.map(([link, label]) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => $currentMenuItemActive.set(link)}
              className={`group relative text-sm font-medium text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-gray-600 dark:hover:text-white ${currentMenuItem === link ? "text-gray-600 dark:text-white" : ""}`}
            >
              {capitalize(label)}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-yellow-400 transition-all duration-300 group-hover:w-full ${currentMenuItem === link ? "w-full" : ""}`}
              ></span>
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <LanguageSelector currentLang={currentLang} />

          {/* Mobile Menu Button */}
          <motion.button
            className="text-foreground p-2 md:hidden"
            onClick={() => toggleMenu()}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="border-border/10 bg-background/80 dark:bg-background/40 border-t px-4 py-4 backdrop-blur-md backdrop-filter md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              {menuItems.map(([link, label], index) => (
                <motion.a
                  key={link}
                  href={`#${link}`}
                  className="hover:text-foreground/80 text-foreground/60 py-2 transition-colors"
                  onClick={() => toggleMenu(link as MenuItems)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  {capitalize(label)}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
