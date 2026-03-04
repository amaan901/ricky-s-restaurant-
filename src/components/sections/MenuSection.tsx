"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MENU_ITEMS } from "@/constants/site";

function MenuItem({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex items-start gap-4 group py-4 border-b border-dashed border-stone-200 last:border-0"
    >
      <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="80px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="font-semibold text-stone-800 text-sm leading-tight">{name}</h3>
          <div className="hidden sm:flex items-center gap-0.5 flex-shrink-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="text-amber-300 text-xs">·</span>
            ))}
          </div>
        </div>
        <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
}

export function MenuSection() {
  const half = Math.ceil(MENU_ITEMS.length / 2);
  const leftItems = MENU_ITEMS.slice(0, half);
  const rightItems = MENU_ITEMS.slice(half);

  return (
    <section className="py-20 lg:py-28 bg-white" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Catering Menu" title="Grill Feast" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-12"
        >
          <div>
            {leftItems.map((item) => (
              <MenuItem key={item.name} {...item} />
            ))}
          </div>
          <div>
            {rightItems.map((item) => (
              <MenuItem key={item.name} {...item} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/menu"
            className="inline-flex px-8 py-3.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-all hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5"
          >
            More Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
