"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  duration?: number;
};

const TypewriterText = ({
  text = "",
  className = "",
  speed = 50,
  delay = 0,
  duration = 0.5,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!text) return;

    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setCurrentIndex(i);

        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, delay * 1000); // convert seconds to ms

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration, delay: delay }}
      className={className}
    >
      {text.slice(0, currentIndex)}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </motion.div>
  );
};

export default TypewriterText;
