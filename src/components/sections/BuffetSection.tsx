"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

export function BuffetSection() {
  return (
    <section className="py-20 lg:py-28 bg-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInLeft} className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Buffet Dinner
            </motion.p>
            <motion.h2 variants={fadeInLeft} className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4">
              Eat Healthy Live More
            </motion.h2>
            <motion.div
              variants={fadeInLeft}
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-5 py-2.5 rounded-full font-bold text-lg mb-6"
            >
              <span className="text-2xl font-extrabold">25%</span>
              <span className="text-sm leading-tight">Discount on<br />multiple categories</span>
            </motion.div>
            <motion.p variants={fadeInLeft} className="text-stone-600 leading-relaxed mb-8 text-sm">
              Enjoy a lavish spread of our finest dishes at discounted prices. From grilled
              delicacies to fresh salads, our buffet has something for every palate. Perfect
              for families and groups looking for a wholesome dining experience.
            </motion.p>
            <motion.div variants={fadeInLeft}>
              <Link
                href="/contact-us"
                className="inline-flex px-7 py-3.5 text-sm font-bold text-white bg-stone-800 hover:bg-stone-900 rounded-full transition-all hover:-translate-y-0.5"
              >
                Book a Table
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://rickyrestaurants.com/wp-content/uploads/2024/05/blob-img-2.png"
                alt="Buffet dinner"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative blob */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-amber-200/50 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
