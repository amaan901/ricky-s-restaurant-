"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export function PageHero({ title, breadcrumbs, bgImage }: PageHeroProps) {
  return (
    <section
      className="relative pt-36 pb-16 flex flex-col items-center justify-center text-center overflow-hidden"
      style={
        bgImage
          ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }
          : undefined
      }
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-900/70" />

      {/* Decorative amber gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-5 tracking-tight"
        >
          {title}
        </motion.h1>

        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-1.5 flex-wrap"
        >
          <Link href="/" className="flex items-center gap-1 text-amber-300 hover:text-amber-200 text-sm transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              {crumb.href ? (
                <Link href={crumb.href} className="text-sm text-amber-300 hover:text-amber-200 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-sm text-stone-300">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>
      </div>
    </section>
  );
}
