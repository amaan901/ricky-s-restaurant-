"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Users, Utensils, Zap } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { GalleryGrid } from "@/components/shared/GalleryGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
  staggerContainer,
} from "@/lib/animations";

const WHY_CHOOSE = [
  { icon: Award, title: "We Are Reliable", desc: "With extensive experience in corporate catering and logistics, we ensure your peace of mind. As your consultants, we handle all the details and execution, guaranteeing the success of your corporate event." },
  { icon: Utensils, title: "Delectable, Quality-Controlled Food", desc: "Our menu features proven favorites like canapes, live stations, and snack boxes. You can customize the preparation to suit your event, ensuring a delightful culinary experience for your guests." },
  { icon: Users, title: "Versatile Corporate Catering", desc: "Ricky's Restaurant Catering offers a range of services from simple pick-ups to fully staffed events. Whether you're serving 25 or 500 people, we have the experience to handle it efficiently." },
  { icon: Zap, title: "Productivity", desc: "We provide delicious food and exceptional corporate catering services tailored to your budget. Our combination of experience, creativity, and flexibility ensures we meet and exceed client expectations." },
] as const;

const CORPORATE_SERVICES = [
  { title: "Staff Parties", href: "/staff-catering", image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/seminarcatering.avif" },
  { title: "Conferences & Seminars", href: "/business-party-catering", image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/catering-2-qpe6omzvkdpp3j974i61twuz2r5jb7jh01rcancwqg.png" },
] as const;

export function CorporateCateringClient() {
  return (
    <>
      <PageHero
        title="Corporate Events Catering"
        breadcrumbs={[{ label: "Catering" }, { label: "Corporate Catering" }]}
        bgImage="https://rickyrestaurants.com/wp-content/uploads/2024/05/seminarcatering.avif"
      />

      {/* Main intro */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p variants={fadeInUp} className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">Catering</motion.p>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-stone-800 mb-6">Organizing Corporate Catering in Dubai</motion.h2>
              {[
                "Ricky's Restaurant Catering is renowned as one of the premier corporate catering services providers in Dubai. With a wealth of experience serving clients ranging from multinational corporations to small and medium enterprises, we offer unparalleled professionalism.",
                "Our corporate catering services are distinguished by our extensive menu options, expert staff, and top-of-the-line equipment capable of accommodating any request. Whether it's simple sandwich platters, hot staff lunches, or exquisite 5-star dining in UAE boardrooms, we deliver with excellence.",
                "Our highly trained and experienced teams of corporate event caterers, strategically positioned across the region, are equipped to swiftly respond to any catering service demand, regardless of scale.",
                "Ricky's Restaurant Catering's stellar reputation for delivering quality food and professional corporate catering services reflects our unwavering commitment to maintaining exceptional client relationships.",
              ].map((p, i) => (
                <motion.p key={i} variants={fadeInUp} className="text-stone-600 text-sm leading-relaxed mb-4">{p}</motion.p>
              ))}
              <motion.div variants={scaleIn}>
                <Link href="/contact-us" className="inline-flex mt-4 px-7 py-3.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-all hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5">
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Corporate service cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              <motion.h3 variants={fadeInRight} className="font-bold text-stone-800 text-lg">Our Corporate Services</motion.h3>
              {CORPORATE_SERVICES.map((service, i) => (
                <motion.div key={service.href} variants={fadeInRight}>
                  <Link
                    href={service.href}
                    className="group flex gap-4 items-center bg-stone-50 hover:bg-amber-50 border border-stone-100 hover:border-amber-200 rounded-xl p-4 transition-colors"
                  >
                    <div className="relative w-24 h-20 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="96px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-stone-800 group-hover:text-amber-700 transition-colors">{service.title}</p>
                      <p className="text-stone-500 text-xs mt-1">Professional catering for your corporate events</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="Why Choose Ricky's Restaurant Catering?" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {WHY_CHOOSE.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-7 border border-stone-100 shadow-sm"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4"
                  >
                    <Icon className="w-6 h-6 text-amber-600" />
                  </motion.div>
                  <h3 className="font-bold text-stone-800 text-lg mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Gallery" title="Corporate Events Gallery" />
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
