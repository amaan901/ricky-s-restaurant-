"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import { fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

export function DeliverySection() {
  return (
    <section className="py-20 lg:py-28 bg-stone-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://rickyrestaurants.com/wp-content/uploads/2024/05/sub-img-1024x576.jpg"
                alt="Food delivery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInRight} className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">
              Get Delivery
            </motion.p>
            <motion.h2 variants={fadeInRight} className="text-3xl sm:text-4xl font-bold text-white mb-6">
              On Your Desired Time
            </motion.h2>

            <motion.div variants={fadeInRight} className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Same Day Delivery</p>
                  <p className="text-stone-400 text-xs mt-0.5">
                    Order by noon and get fresh food delivered the same day
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Dubai-wide Coverage</p>
                  <p className="text-stone-400 text-xs mt-0.5">
                    We deliver across Dubai Marina and all major areas
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <Link
                href="/menu"
                className="inline-flex px-7 py-3.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-all hover:shadow-lg hover:shadow-amber-900 hover:-translate-y-0.5"
              >
                Order Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
