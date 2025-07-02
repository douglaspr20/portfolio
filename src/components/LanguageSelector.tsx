import { Languages } from "lucide-react";
import type { Language } from "@/types";
import { type FC } from "react";
import { languages } from "@/i18n";
import DropdownMenu from "./ui/DropdownMenu";

interface Props {
  currentLang: Language;
}
const LanguageSelector: FC<Props> = ({ currentLang }) => {
  const selectedLanguage = languages[currentLang];

  const handleLanguageSelect = (selectedLanguage: string) => {
    console.log("Selected language:", selectedLanguage);
    const selectedLang = Object.entries(languages).find(
      ([, value]) => value === selectedLanguage,
    );

    window.location.href = `/${selectedLang ? selectedLang[0] : "en"}`;
  };

  return (
    <DropdownMenu
      leftIcon={<Languages className="h-4 w-4 text-gray-500 dark:text-white" />}
      options={Object.values(languages)}
      selectedElement={selectedLanguage}
      handleSelect={handleLanguageSelect}
    />
  );
};

export default LanguageSelector;
