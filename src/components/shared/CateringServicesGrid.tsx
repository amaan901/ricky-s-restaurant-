"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { scaleIn, staggerContainer } from "@/lib/animations";
import { CATERING_SERVICES } from "@/constants/site";

export function CateringServicesGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      className="grid grid-cols-2 sm:grid-cols-3 gap-4"
    >
      {CATERING_SERVICES.map((service) => (
        <motion.div
          key={service.href}
          variants={scaleIn}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href={service.href}
            className="group relative overflow-hidden rounded-xl aspect-square block"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold group-hover:text-amber-300 transition-colors">
              {service.title}
            </p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
