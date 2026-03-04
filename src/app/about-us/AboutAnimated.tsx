"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { useCounter } from "@/hooks/useCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

function StatItem({ label, value, suffix, started }: Stat & { started: boolean }) {
  const count = useCounter(value, 2000, started);
  return (
    <motion.div variants={fadeInUp} className="text-center">
      <p className="text-4xl font-extrabold text-amber-600">{count}{suffix}</p>
      <p className="text-xs font-medium text-stone-500 mt-1">{label}</p>
    </motion.div>
  );
}

export function AboutAnimated({ stats }: { stats: readonly Stat[] }) {
  const { ref, isInView } = useScrollAnimation();
  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-stone-100"
    >
      {stats.map((s) => (
        <StatItem key={s.label} {...s} started={isInView} />
      ))}
    </motion.div>
  );
}
