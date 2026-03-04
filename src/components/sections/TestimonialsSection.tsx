"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/shared/SectionHeading";

const TESTIMONIALS = [
  {
    name: "Raymond Harper",
    role: "Graphic Designer",
    avatar: "https://rickyrestaurants.com/wp-content/uploads/2024/05/user-img.jpg",
    content:
      "Ricky's Restaurant is absolutely fantastic! The food was delicious, service was impeccable, and the catering for our corporate event was handled with total professionalism. Highly recommended for any occasion!",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Event Planner",
    avatar: "https://rickyrestaurants.com/wp-content/uploads/2024/05/user-img.jpg",
    content:
      "We hired Ricky's for our wedding catering and they exceeded all expectations. The grilled meats and mezze platters were outstanding. Every guest complimented the food throughout the evening.",
    rating: 5,
  },
  {
    name: "James Khalil",
    role: "Business Owner",
    avatar: "https://rickyrestaurants.com/wp-content/uploads/2024/05/user-img.jpg",
    content:
      "Best catering service in Dubai! We use Ricky's for all our staff events. Reliable, punctual, and the food quality never disappoints. The seekh kebabs and seasoned rice are absolute favorites.",
    rating: 5,
  },
] as const;

export function TestimonialsSection() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://rickyrestaurants.com/wp-content/uploads/2024/05/tes-bg-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-900/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonial"
          title="What Our Customers Say"
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-stone-200 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-stone-400 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
