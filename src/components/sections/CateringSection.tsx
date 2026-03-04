"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CATERING_SERVICES } from "@/constants/site";

function CateringCard({
  title,
  href,
  image,
  index,
}: {
  title: string;
  href: string;
  image: string;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={scaleIn}
      className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
    >
      <Link href={href}>
        <div className="relative aspect-[4/3]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold text-base group-hover:text-amber-300 transition-colors">
              {title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function CateringSection() {
  return (
    <section className="py-20 lg:py-28 bg-stone-50" id="catering">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <motion.p variants={fadeInUp} className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Catering
          </motion.p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-stone-800 max-w-md">
              Organising Private &amp; Corporate Parties
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-stone-600 max-w-lg leading-relaxed text-sm lg:text-base">
              Are you planning a private party, birthday, small or large event, wedding or
              outdoor food catering? Treat your friends and clients with one of the best
              restaurant food available in Dubai. We do more than catering services — we
              create a holiday atmosphere and deliver the freshest and finest food to your place.
              Any time of the day, promptly and at the highest quality.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {CATERING_SERVICES.map((service, i) => (
            <CateringCard key={service.href} {...service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
