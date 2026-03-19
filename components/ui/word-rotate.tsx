import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface WordItem {
  text: string;
  bgColor?: string;
  textColor?: string;
  icon?: React.ReactNode;
}

interface WordRotateProps {
  words: string[] | WordItem[];
  className?: string;
  duration?: number; // seconds per word
}

export default function WordRotate({ words, className = "", duration = 3 }: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [words.length, duration]);

  // Handle both strings and objects
  const currentWord = typeof words[index] === "string"
    ? { text: words[index] as string, bgColor: undefined, textColor: undefined, icon: undefined }
    : (words[index] as WordItem);

  return (
    <div
      className={`flex items-center justify-start p-2 md:w-78 rounded-full transition-colors duration-700`}
      style={{ backgroundColor: currentWord.bgColor }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentWord.text}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className={`flex items-center gap-2 ${className}`}
          style={{ color: currentWord.textColor }}
        >
          {currentWord.icon && <span className="flex">{currentWord.icon}</span>}
          <span>{currentWord.text}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}