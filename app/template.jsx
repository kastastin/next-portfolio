"use client";

import { motion } from "framer-motion";

import { useScrollProgress } from "@/hooks/useScrollProgress";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Template = ({ children }) => {
  const completion = useScrollProgress();

  return (
    <>
      <motion.main
        initial="visible"
        animate="enter"
        variants={variants}
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>

      <span
        className="fixed inset-y-0 right-0 z-50 w-1.5 bg-primary transition-all duration-700"
        style={{ transform: `translateY(${completion - 100}%)` }}
      />
    </>
  );
};

export default Template;
