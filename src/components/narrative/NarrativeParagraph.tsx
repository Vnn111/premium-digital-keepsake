"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

type NarrativeParagraphProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function NarrativeParagraph({
  children,
  delay = 0,
  className = "",
}: NarrativeParagraphProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.75, delay, ease: "easeOut" }}
      className={`text-[1.03rem] leading-8 text-neutral-800 sm:text-lg sm:leading-9 ${className}`}
    >
      {children}
    </motion.p>
  );
}
