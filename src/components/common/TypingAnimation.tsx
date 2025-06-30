import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  texts: string[];
  className?: string;
  speed?: number;
  pause?: number;
}

export function TypingAnimation({
  texts,
  className = "",
  speed = 100,
  pause = 1000,
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex];

        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1));

          if (currentText === fullText) {
            setIsPaused(true);
            setTimeout(() => {
              setIsDeleting(true);
              setIsPaused(false);
            }, pause);
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsPaused(true);
            setTimeout(() => {
              setIsDeleting(false);
              setCurrentTextIndex((prev) => (prev + 1) % texts.length);
              setIsPaused(false);
            }, pause);
          }
        }
      },
      isDeleting ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="ml-1 inline-block h-8 w-0.5 bg-current"
      />
    </span>
  );
}
