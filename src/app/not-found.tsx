"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 pt-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center px-4"
      >
        <motion.p variants={fadeInUp} className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">
          404 Error
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="text-7xl sm:text-9xl font-extrabold text-stone-200 mb-0 leading-none select-none"
        >
          404
        </motion.h1>
        <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-bold text-stone-800 -mt-2 mb-4">
          Page Not Found
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-stone-600 mb-8 max-w-md mx-auto text-sm">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="px-7 py-3.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-200"
          >
            Back to Home
          </Link>
          <Link
            href="/contact-us"
            className="px-7 py-3.5 text-sm font-bold text-amber-700 bg-white border-2 border-amber-300 hover:border-amber-500 rounded-full transition-all hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
