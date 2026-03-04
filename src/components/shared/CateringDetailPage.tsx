"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { GalleryGrid } from "@/components/shared/GalleryGrid";
import { ContactForm } from "@/components/shared/ContactForm";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
  staggerContainer,
} from "@/lib/animations";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface CateringDetailPageProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage: string;
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  image?: string;
  benefits?: string[];
  benefitsTitle?: string;
  showGallery?: boolean;
  showForm?: boolean;
}

export function CateringDetailPage({
  title,
  breadcrumbs,
  bgImage,
  eyebrow,
  heading,
  paragraphs,
  image,
  benefits,
  benefitsTitle = "Why Choose Us",
  showGallery = true,
  showForm = false,
}: CateringDetailPageProps) {
  return (
    <>
      <PageHero title={title} breadcrumbs={breadcrumbs} bgImage={bgImage} />

      {/* Content */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 ${image ? "lg:grid-cols-2" : ""} gap-16 items-start`}>
            {/* Text */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            >
              <motion.p variants={fadeInUp} className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">
                {eyebrow}
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-stone-800 mb-6">
                {heading}
              </motion.h2>
              <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
                {paragraphs.map((p, i) => (
                  <motion.p key={i} variants={fadeInUp}>{p}</motion.p>
                ))}
              </div>

              {benefits && benefits.length > 0 && (
                <motion.div variants={fadeInUp} className="mt-8">
                  <h3 className="font-bold text-stone-800 mb-4">{benefitsTitle}</h3>
                  <motion.ul
                    variants={staggerContainer}
                    className="space-y-3"
                  >
                    {benefits.map((b, i) => (
                      <motion.li
                        key={i}
                        variants={fadeInLeft}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-stone-600 text-sm">{b}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}

              <motion.div variants={fadeInUp}>
                <Link
                  href="/contact-us"
                  className="inline-flex mt-8 px-7 py-3.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-all hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Image */}
            {image && (
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src={image}
                  alt={heading}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {showGallery && (
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Gallery" title="Our Work" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            >
              <GalleryGrid />
            </motion.div>
          </div>
        </section>
      )}

      {/* Form */}
      {showForm && (
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Reservation" title="Book This Service" />
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            >
              <ContactForm title="Get in Touch" />
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
