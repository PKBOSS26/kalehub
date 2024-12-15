"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100; 
    const delay = isDeleting && charIndex === 0 ? 1000 : 0; 

    const timeout = setTimeout(() => {
      const fullWord = words[currentIndex];

      if (!isDeleting) {
        // Typing the word letter by letter
        if (charIndex < fullWord.length) {
          setCurrentWord((prev) => prev + fullWord[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          // Start deleting after the full word is typed
          setIsDeleting(true);
        }
      } else {
        // Deleting the word letter by letter
        if (charIndex > 0) {
          setCurrentWord((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          // Move to the next word
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, typingSpeed + delay);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [charIndex, isDeleting, words, currentIndex]);

  return (
    <div className={cn("text-center", className)}>
      <span className="text-primary">{currentWord}</span>
      <span className="text-primary cursor">|</span>
    </div>
  );
};
