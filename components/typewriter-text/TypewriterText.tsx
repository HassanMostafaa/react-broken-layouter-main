"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  text: string;
  className?: string;
  speed?: number;
};

const TypewriterText = ({ text = "", className = "", speed = 50 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!text) return;

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCurrentIndex(i);

      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {text.slice(0, currentIndex)}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </motion.div>
  );
};

export default TypewriterText;
