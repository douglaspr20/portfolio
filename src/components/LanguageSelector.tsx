import { Check, Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Button } from "@/components/ui/Button";
import type { Language } from "@/types";
import type { FC } from "react";
import { languages } from "@/i18n";

interface Props {
  currentLang: Language;
}
const LanguageSelector: FC<Props> = ({ currentLang }) => {
  const selectedLanguage = languages[currentLang];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-32 justify-between bg-transparent text-left font-normal"
        >
          <div className="flex items-center gap-3">
            <Languages className="h-4 w-4 text-gray-500" />
            <span>{selectedLanguage}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-32" align="start">
        {Object.entries(languages).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            className="flex cursor-pointer items-center justify-between px-3 py-2"
          >
            <div className="flex items-center gap-3">
              <a href={`/${code}`} className="font-medium">
                {name}
              </a>
            </div>
            {name === selectedLanguage && (
              <Check className="h-4 w-4 text-blue-600" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
