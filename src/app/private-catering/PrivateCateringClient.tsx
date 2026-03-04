"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CateringServicesGrid } from "@/components/shared/CateringServicesGrid";
import { GalleryGrid } from "@/components/shared/GalleryGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
  staggerContainer,
} from "@/lib/animations";

const PROCESS_STEPS = [
  { step: "Planning", desc: "We consult with you to understand your vision, preferences, and requirements." },
  { step: "Managing", desc: "Our team coordinates all vendors, logistics, and timelines seamlessly." },
  { step: "Delegating", desc: "Every task is assigned to skilled professionals for flawless execution." },
  { step: "Executing", desc: "We deliver on the day with zero bottlenecks, ensuring a perfect event." },
] as const;

export function PrivateCateringClient() {
  return (
    <>
      <PageHero
        title="Private Events Catering"
        breadcrumbs={[{ label: "Catering" }, { label: "Private Catering" }]}
        bgImage="https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/4f70ac522dd448dc88c9f57887596a26-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.jpg"
      />

      {/* Main content */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p variants={fadeInUp} className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">
                Catering
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-stone-800 mb-6">
                Organizing Private Catering in Dubai
              </motion.h2>
              {[
                "Ricky's Restaurant is renowned as the most reliable private events catering service provider in the UAE. Let us amaze you with our private events catering! Our services are designed to transform your venue into a stunning experience for you and your guests.",
                "With outstanding food, creative presentation, and excellent service, our team offers a prestigious private event catering experience. Sit back, relax, and plan your guest list — we'll handle the rest.",
                "When planning an event, details matter. Food that inspires, décor that sets the mood, and service that is friendly yet unobtrusive are the key elements that make an event memorable and distinguish our reliable private catering services from others.",
                "Whether you need private catering services for an intimate gathering or a large event, Ricky's Restaurant and our team will make your occasion memorable. Creating the ultimate culinary experience with unique presentation is at the heart of our business.",
              ].map((p, i) => (
                <motion.p key={i} variants={fadeInUp} className="text-stone-600 text-sm leading-relaxed mb-4">
                  {p}
                </motion.p>
              ))}
              <motion.div variants={scaleIn}>
                <Link
                  href="/contact-us"
                  className="inline-flex mt-4 px-7 py-3.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-all hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5"
                >
                  Book an Event
                </Link>
              </motion.div>
            </motion.div>

            {/* Service grid */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-stone-800 text-lg mb-5">Our Private Catering Services</h3>
              <CateringServicesGrid />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process + image */}
      <section className="py-20 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://rickyrestaurants.com/wp-content/uploads/2024/05/1524212633950-1024x682.jpg"
                alt="Professional catering services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Steps */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p variants={fadeInUp} className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">
                Our Process
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-stone-800 mb-3">
                Professional Catering Services in Dubai
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-stone-600 text-sm leading-relaxed mb-8">
                Ricky's Restaurant has been at the forefront of professional catering services in Dubai
                and across the Emirates. We continue to offer not only the most reliable but also the
                finest catering services.
              </motion.p>
              <div className="space-y-5">
                {PROCESS_STEPS.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-stone-800 text-sm">{item.step}</p>
                      <p className="text-stone-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div variants={scaleIn}>
                <Link
                  href="/contact-us"
                  className="inline-flex mt-8 px-7 py-3.5 text-sm font-bold text-white bg-stone-800 hover:bg-stone-900 rounded-full transition-all hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Gallery" title="Moments We've Made Special" />
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
