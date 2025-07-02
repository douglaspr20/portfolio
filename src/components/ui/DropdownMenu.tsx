import { cn } from "@/lib";
import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Props {
  leftIcon?: React.ReactNode;
  selectedElement?: string;
  options: string[];
  handleSelect?: (option: string) => void;
  className?: string;
}

const DropdownMenu = ({
  leftIcon,
  selectedElement,
  options,
  handleSelect,
  className,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState<string | null>(
    selectedElement || null,
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (option: string) => {
    setCurrentOption(option);
    setIsOpen(false);
    handleSelect && handleSelect(option);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex cursor-pointer items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm transition-colors duration-200 hover:bg-gray-50 focus:ring-0 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700",
          className,
        )}
      >
        {leftIcon}
        <span className="flex-1 text-left font-medium text-gray-900 dark:text-white">
          {currentOption || "Select an option"}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 left-0 z-50 mt-2 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="max-h-64 overflow-y-auto py-1">
            {options.map((option, index) => (
              <button
                key={option}
                onClick={() => handleClick(option)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors duration-150 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none dark:hover:bg-gray-700"
              >
                <span className="flex-1 font-medium text-gray-900 dark:text-white">
                  {option}
                </span>
                {currentOption === option && (
                  <Check className="h-5 w-5 text-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
