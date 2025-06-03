"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
}
