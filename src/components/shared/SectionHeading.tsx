"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  className?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  className,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      <motion.p
        variants={fadeInUp}
        className={cn(
          "text-sm font-semibold uppercase tracking-widest mb-2",
          light ? "text-amber-300" : "text-amber-600"
        )}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeInUp}
        className={cn(
          "text-3xl sm:text-4xl font-bold",
          light ? "text-white" : "text-stone-800"
        )}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
