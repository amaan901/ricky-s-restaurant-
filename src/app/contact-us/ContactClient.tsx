"use client";

import { motion } from "framer-motion";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { SITE_CONFIG } from "@/constants/site";
import { fadeInLeft, fadeInRight, fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

const INFO_CARDS = [
  { icon: Phone, title: "Call Us", lines: ["+971 54 339 2616", "+971 4 514 7066"], href: "tel:+97154339261" },
  { icon: MapPin, title: "Address", lines: ["Shop No. 5, Marina Pearl View Hotel Apt.,", "Waterfront Al Masara Street, Dubai Marina"], href: "https://maps.google.com/?q=Dubai+Marina" },
  { icon: Clock, title: "Opening Hours", lines: ["7:30 AM – 12:00 Midnight", "7 Days a Week"], href: undefined },
  { icon: Mail, title: "Email Us", lines: [SITE_CONFIG.email], href: `mailto:${SITE_CONFIG.email}` },
] as const;

export function ContactClient() {
  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumbs={[{ label: "Contact Us" }]}
        bgImage="https://rickyrestaurants.com/wp-content/uploads/2024/05/tes-bg-1.jpg"
      />

      {/* Info cards */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {INFO_CARDS.map((card, i) => {
              const Icon = card.icon;
              const inner = (
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-stone-50 hover:bg-amber-50 border border-stone-100 hover:border-amber-200 rounded-2xl p-6 text-center transition-colors h-full cursor-default"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4"
                  >
                    <Icon className="w-5 h-5 text-amber-600" />
                  </motion.div>
                  <h3 className="font-bold text-stone-800 mb-2">{card.title}</h3>
                  {card.lines.map((line, j) => (
                    <p key={j} className="text-stone-600 text-sm leading-relaxed">{line}</p>
                  ))}
                </motion.div>
              );
              return card.href ? (
                <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={card.title}>{inner}</div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ContactForm title="Get in Touch With Us" />
            </motion.div>

            {/* Map + Social */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <motion.div
                variants={fadeInRight}
                className="rounded-2xl overflow-hidden shadow-sm border border-stone-100 h-72"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.134455987!2d55.139!3d25.080!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA0JzQ4LjAiTiA1NcKwMDgnMjQuMCJF!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ricky's Restaurant location"
                />
              </motion.div>

              {/* Social */}
              <motion.div variants={fadeInRight} className="bg-white rounded-2xl p-6 border border-stone-100">
                <h3 className="font-bold text-stone-800 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { href: SITE_CONFIG.socials.facebook, icon: Facebook, label: "Facebook" },
                    { href: SITE_CONFIG.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
                    { href: SITE_CONFIG.socials.instagram, icon: Instagram, label: "Instagram" },
                  ].map(({ href, icon: Icon, label }, i) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-stone-50 hover:bg-amber-50 border border-stone-200 hover:border-amber-300 text-stone-700 hover:text-amber-700 text-sm font-medium transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={scaleIn}
                className="bg-amber-600 rounded-2xl p-6 text-white"
              >
                <h3 className="font-bold text-lg mb-2">Need Catering for an Event?</h3>
                <p className="text-amber-100 text-sm mb-4">
                  Call us directly for fast enquiries about catering packages and availability.
                </p>
                <motion.a
                  href="tel:+97154339261"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-white text-amber-700 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-amber-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +971 54 339 2616
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
