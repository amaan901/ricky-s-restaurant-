"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { STATS } from "@/constants/site";
import { AboutAnimated } from "./AboutAnimated";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  heroImageVariants,
  scaleIn,
  staggerContainer,
} from "@/lib/animations";

const PHILOSOPHY_SECTIONS = [
  {
    title: "Our Culinary Philosophy",
    body: "At Ricky's Restaurant, we believe that great food starts with the finest ingredients. Our chefs are dedicated to sourcing the best produce, meats, and seafood from trusted suppliers. This commitment to quality ensures that every dish is prepared with care and precision.",
  },
  {
    title: "Diverse Menu",
    body: "Our menu is a celebration of culinary diversity, offering a wide range of options to suit every taste. From rich, aromatic Asian delicacies and vibrant Middle Eastern specialties to classic Mediterranean fare and innovative international cuisine, we have something for everyone.",
  },
  {
    title: "Exceptional Catering Services",
    body: "In addition to our restaurant dining, Ricky's Restaurant is proud to offer comprehensive catering services for all occasions. Whether you're planning a corporate event, a wedding, or a private party, our catering team is here to make your event special.",
  },
  {
    title: "Our Team",
    body: "Our team at Ricky's Restaurant is our greatest asset. From our talented chefs to our friendly and professional staff, everyone is dedicated to making your visit enjoyable. We take pride in our warm hospitality and strive to create a welcoming environment.",
  },
  {
    title: "Commitment to Excellence",
    body: "At Ricky's Restaurant, we are committed to maintaining the highest standards in everything we do. From the freshness of our ingredients to the elegance of our presentation and the attentiveness of our service, we aim to exceed your expectations.",
  },
  {
    title: "Visit Us",
    body: "Join us at Ricky's Restaurant and discover why we are a favorite among Dubai's dining enthusiasts. Whether you're looking for a casual meal with friends, a romantic dinner, or a place to celebrate a special occasion, Ricky's Restaurant is the perfect choice.",
  },
] as const;

export function AboutClient() {
  return (
    <>
      <PageHero
        title="About Us"
        breadcrumbs={[{ label: "About Us" }]}
        bgImage="https://rickyrestaurants.com/wp-content/uploads/2024/05/tes-bg-1.jpg"
      />

      {/* Main intro */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <motion.div
              className="relative flex gap-4 h-[440px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                custom={0}
                variants={heroImageVariants}
                className="relative w-1/2 h-full rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-3.jpg"
                  alt="Ricky's Restaurant interior"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </motion.div>
              <motion.div
                custom={1}
                variants={heroImageVariants}
                className="relative w-1/2 h-[80%] self-end rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="https://rickyrestaurants.com/wp-content/uploads/2024/05/h2-sub-img-1024x720.jpg"
                  alt="Ricky's Restaurant food"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-amber-100 -z-10"
              />
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
                Ricky&apos;s Restaurant
              </motion.h2>
              <motion.p variants={fadeInRight} className="text-stone-600 leading-relaxed mb-6 text-sm">
                Welcome to Ricky&apos;s Restaurant, where culinary excellence meets unparalleled service.
                Situated in the vibrant heart of Dubai, Ricky&apos;s Restaurant is renowned for its
                exquisite dining experiences, offering a diverse menu that caters to both local and
                international palates. Our commitment to quality and passion for food is reflected
                in every dish we serve.
              </motion.p>
              <motion.div variants={fadeInRight}>
                <Link
                  href="/contact-us"
                  className="inline-flex px-7 py-3.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-all hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
              </motion.div>
              <AboutAnimated stats={STATS} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy grid */}
      <section className="py-20 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Story" title="What Makes Us Special" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PHILOSOPHY_SECTIONS.map((section, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-stone-100 cursor-default"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-4"
                >
                  <span className="text-amber-600 font-bold text-lg">{i + 1}</span>
                </motion.div>
                <h3 className="font-bold text-stone-800 text-lg mb-3">{section.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{section.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature image banner */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-80 sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://rickyrestaurants.com/wp-content/uploads/2024/05/1524212633950-1024x682.jpg"
              alt="Ricky's Restaurant professional catering"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-transparent flex items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-8 sm:p-12 max-w-lg"
              >
                <motion.p variants={fadeInLeft} className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">
                  Dubai&apos;s Finest
                </motion.p>
                <motion.h2 variants={fadeInLeft} className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Thank you for choosing Ricky&apos;s Restaurant
                </motion.h2>
                <motion.p variants={fadeInLeft} className="text-stone-300 text-sm leading-relaxed mb-6">
                  We look forward to serving you soon. Come and experience the best of
                  culinary artistry and hospitality in a setting that feels like home.
                </motion.p>
                <motion.div variants={scaleIn}>
                  <Link
                    href="/contact-us"
                    className="inline-flex px-6 py-3 text-sm font-bold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-full transition-colors"
                  >
                    Make a Reservation
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
