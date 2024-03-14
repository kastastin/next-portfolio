"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Template({ children }) {
  const completion = useScrollProgress();

  return (
    <>
      <motion.main
        animate="enter"
        initial="visible"
        variants={variants}
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>

      <span
        className="fixed inset-y-0 right-0 z-50 w-1 bg-primary transition-all duration-700"
        style={{ transform: `translateY(${completion - 100}%)` }}
      />

      <div className="h-[4000px]" />
    </>
  );
}
