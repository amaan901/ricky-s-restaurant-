"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scaleIn, staggerContainer } from "@/lib/animations";
import { GALLERY_IMAGES } from "@/constants/site";

export function GalleryGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-3"
    >
      {GALLERY_IMAGES.map((src, i) => (
        <motion.div
          key={i}
          variants={scaleIn}
          className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
        >
          <Image
            src={src}
            alt={`Gallery ${i + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
        </motion.div>
      ))}
    </motion.div>
  );
}
