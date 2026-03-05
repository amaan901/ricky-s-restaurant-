// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { fadeInLeft, heroImageVariants, staggerContainer } from "@/lib/animations";

// export function HeroSection() {
//   return (
//     <section className="relative min-h-screen bg-amber-50 flex items-center overflow-hidden pt-20">
//       {/* Background decoration */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-100 opacity-60" />
//         <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-amber-100 opacity-40" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Text content */}
//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             animate="visible"
//             className="text-center lg:text-left"
//           >
//             <motion.p
//               variants={fadeInLeft}
//               className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3"
//             >
//               Welcome to
//             </motion.p>
//             <motion.h1
//               variants={fadeInLeft}
//               className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-stone-800 leading-tight mb-4"
//             >
//               Ricky&apos;s
//               <br />
//               <span className="text-amber-600">Restaurant</span>
//             </motion.h1>
//             <motion.p
//               variants={fadeInLeft}
//               className="text-xl sm:text-2xl font-medium text-stone-600 italic mb-8"
//             >
//               Eat What Makes You Happy
//             </motion.p>
//             <motion.div variants={fadeInLeft} className="flex flex-wrap gap-4 justify-center lg:justify-start">
//               <Link
//                 href="/contact-us"
//                 className="px-7 py-3.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-all hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5"
//               >
//                 Contact Us
//               </Link>
//               <Link
//                 href="/menu"
//                 className="px-7 py-3.5 text-sm font-bold text-amber-700 bg-white border-2 border-amber-300 hover:border-amber-500 rounded-full transition-all hover:-translate-y-0.5"
//               >
//                 View Menu
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Images */}
//           <div className="relative flex justify-center items-end gap-4 h-125 lg:h-140">
//             <motion.div
//               custom={0}
//               variants={heroImageVariants}
//               initial="hidden"
//               animate="visible"
//               className="relative w-[46%] h-[85%] self-end rounded-2xl overflow-hidden shadow-2xl"
//             >
//               <Image
//                 src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-1-676x1024.jpg"
//                 alt="Restaurant dish"
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 200px, 260px"
//                 priority
//               />
//             </motion.div>
//             <motion.div
//               custom={1}
//               variants={heroImageVariants}
//               initial="hidden"
//               animate="visible"
//               className="relative w-[46%] h-[75%] rounded-2xl overflow-hidden shadow-2xl mb-8"
//             >
//               <Image
//                 src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-2-676x1024.jpg"
//                 alt="Restaurant dish 2"
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 200px, 260px"
//                 priority
//               />
//             </motion.div>

//             {/* Floating badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//               className="absolute top-8 right-4 lg:-right-4 bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center"
//             >
//               <span className="text-3xl font-extrabold text-amber-600">25%</span>
//               <span className="text-xs font-semibold text-stone-500 uppercase">Discount</span>
//               <span className="text-xs text-stone-400">on catering</span>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInLeft, heroImageVariants, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative bg-amber-50 flex items-center overflow-hidden pt-20">
      {/* Background decoration — inset so blobs never bleed outside section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-amber-100 opacity-60 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-amber-100 opacity-40 -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.p
              variants={fadeInLeft}
              className="text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3"
            >
              Welcome to
            </motion.p>
            <motion.h1
              variants={fadeInLeft}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-stone-800 leading-tight mb-4"
            >
              Ricky&apos;s
              <br />
              <span className="text-amber-600">Restaurant</span>
            </motion.h1>
            <motion.p
              variants={fadeInLeft}
              className="text-xl sm:text-2xl font-medium text-stone-600 italic mb-8"
            >
              Eat What Makes You Happy
            </motion.p>
            <motion.div
              variants={fadeInLeft}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact-us"
                className="px-7 py-3.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-all hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
              <Link
                href="/menu"
                className="px-7 py-3.5 text-sm font-bold text-amber-700 bg-white border-2 border-amber-300 hover:border-amber-500 rounded-full transition-all hover:-translate-y-0.5"
              >
                View Menu
              </Link>
            </motion.div>
          </motion.div>

          {/* Images — desktop only */}
          <div className="relative hidden lg:flex justify-center items-end gap-4 h-[560px]">
            <motion.div
              custom={0}
              variants={heroImageVariants}
              initial="hidden"
              animate="visible"
              className="relative w-[46%] h-[85%] self-end rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-1-676x1024.jpg"
                alt="Restaurant dish"
                fill
                className="object-cover"
                sizes="260px"
                priority
              />
            </motion.div>
            <motion.div
              custom={1}
              variants={heroImageVariants}
              initial="hidden"
              animate="visible"
              className="relative w-[46%] h-[75%] rounded-2xl overflow-hidden shadow-2xl mb-8"
            >
              <Image
                src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-2-676x1024.jpg"
                alt="Restaurant dish 2"
                fill
                className="object-cover"
                sizes="260px"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-8 -right-4 bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center"
            >
              <span className="text-3xl font-extrabold text-amber-600">25%</span>
              <span className="text-xs font-semibold text-stone-500 uppercase">Discount</span>
              <span className="text-xs text-stone-400">on catering</span>
            </motion.div>
          </div>

          {/* Images — mobile/tablet only, fixed height so nothing overflows */}
          <div className="lg:hidden relative flex justify-center items-end gap-3 h-52">
            <motion.div
              custom={0}
              variants={heroImageVariants}
              initial="hidden"
              animate="visible"
              className="relative w-[45%] h-full rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-1-676x1024.jpg"
                alt="Restaurant dish"
                fill
                className="object-cover"
                sizes="150px"
                priority
              />
            </motion.div>
            <motion.div
              custom={1}
              variants={heroImageVariants}
              initial="hidden"
              animate="visible"
              className="relative w-[45%] h-[85%] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://rickyrestaurants.com/wp-content/uploads/2024/05/img-2-676x1024.jpg"
                alt="Restaurant dish 2"
                fill
                className="object-cover"
                sizes="150px"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-5 right-2 bg-white rounded-xl shadow-lg p-2.5 flex flex-col items-center"
            >
              <span className="text-xl font-extrabold text-amber-600">25%</span>
              <span className="text-[10px] font-semibold text-stone-500 uppercase">Discount</span>
              <span className="text-[10px] text-stone-400">on catering</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}