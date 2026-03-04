"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from "@/lib/animations";
import { STATS } from "@/constants/site";
import { useCounter } from "@/hooks/useCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function StatItem({
  label,
  value,
  suffix,
  started,
}: {
  label: string;
  value: number;
  suffix: string;
  started: boolean;
}) {
  const count = useCounter(value, 2000, started);
  return (
    <motion.div variants={fadeInUp} className="text-center">
      <p className="text-4xl font-extrabold text-amber-600">
        {count}
        {suffix}
      </p>
      <p className="text-sm font-medium text-stone-500 mt-1">{label}</p>
    </motion.div>
  );
}

export function AboutSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex gap-4 h-[440px]"
          >
            <motion.div
              variants={fadeInLeft}
              className="relative w-1/2 h-full rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-3.jpg"
                alt="About Ricky's Restaurant"
                fill
                className="object-cover"
                sizes="300px"
              />
            </motion.div>
            <motion.div
              variants={fadeInLeft}
              className="relative w-1/2 h-[80%] self-end rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://rickyrestaurants.com/wp-content/uploads/2024/05/h2-sub-img-1024x720.jpg"
                alt="About food"
                fill
                className="object-cover"
                sizes="300px"
              />
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-amber-100 -z-10" />
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-amber-50 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInRight} className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">
              About Us
            </motion.p>
            <motion.h2 variants={fadeInRight} className="text-3xl sm:text-4xl font-bold text-stone-800 mb-5">
              Eat What Makes You Happy
            </motion.h2>
            <motion.p variants={fadeInRight} className="text-stone-600 leading-relaxed mb-8">
              Get the food that makes you drool! Ricky&apos;s Restaurant is one of the finest
              restaurants to dine-in with the best combination of spices according to your
              taste. Our professional staff is at your service with food delivery, event
              catering, and other services.
            </motion.p>
            <motion.div variants={fadeInRight}>
              <Link
                href="/contact-us"
                className="inline-flex px-7 py-3.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-all hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5"
              >
                Order Now
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={ref}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-stone-100"
            >
              {STATS.map((stat) => (
                <StatItem
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  started={isInView}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
