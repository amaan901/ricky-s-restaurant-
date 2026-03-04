// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
// import { SectionHeading } from "@/components/shared/SectionHeading";
// import { GALLERY_IMAGES } from "@/constants/site";

// export function GallerySection() {
//   return (
//     <section className="py-20 lg:py-28 bg-stone-50" id="gallery">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <SectionHeading eyebrow="Our Gallery" title="Food That Tells a Story" />

//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "0px 0px -60px 0px" }}
//           className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 "
//         >
//           {GALLERY_IMAGES.map((src, i) => (
//             <motion.div
//               key={i}
//               variants={scaleIn}
//               className={`relative overflow-hidden rounded-xl group cursor-pointer ${
//                 i === 0 || i === 4 || i === 8 ? "sm:col-span-2 aspect-video" : "aspect-square"
//               } `}
//             >
//               <Image
//                 src={src}
//                 alt={`Gallery image ${i + 1}`}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
//               />
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="text-center mt-10"
//         >
//           <Link
//             href="/menu"
//             className="inline-flex px-8 py-3.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-all hover:shadow-lg hover:shadow-amber-200 hover:-translate-y-0.5"
//           >
//             More Menu
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { scaleIn, staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GALLERY_IMAGES } from "@/constants/site";

export function GallerySection() {
  return (
    <section className="py-20 lg:py-28 bg-stone-50" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Gallery" title="Food That Tells a Story" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {GALLERY_IMAGES.map((src, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className={`relative overflow-hidden rounded-xl group cursor-pointer aspect-square ${
                i === 0 || i === 4 || i === 8 ? "sm:col-span-2" : ""
              } h-75 w-full`}
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </motion.div>
          ))}
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