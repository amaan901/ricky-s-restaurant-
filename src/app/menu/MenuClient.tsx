"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  fadeInLeft,
  fadeInUp,
  scaleIn,
  staggerContainer,
} from "@/lib/animations";

interface MenuItem {
  name: string;
  description: string;
  image: string;
}

const BASE_ITEMS: MenuItem[] = [
  { name: "Caesar Salad", description: "Crisp romaine lettuce tossed with creamy Caesar dressing, Parmesan cheese, and homemade croutons", image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Caesar-Salad-768x512.jpg" },
  { name: "Hummus", description: "Smooth and savory chickpea hummus, drizzled with extra virgin olive oil, and served with warm pita bread", image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/hummus-index-6463bace4bba5-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpeg" },
  { name: "Tahina", description: "Rich and velvety tahini sauce made with sesame paste, garlic, lemon juice, and a hint of olive oil", image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Tahina-300x200.jpg" },
  { name: "Mutton Kofta (Seekh Kabab)", description: "Juicy mutton seekh kebabs, expertly seasoned with aromatic spices and grilled to perfection", image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/muttonkofta-300x200.jpg" },
  { name: "Chicken Skewers", description: "Tender chicken skewers marinated in a flavorful blend of spices, grilled to juicy perfection", image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/hm-img-5-300x242.jpg" },
  { name: "Grilled Chicken Bone", description: "Grilled chicken bone-in, seasoned to perfection and bursting with savory flavor", image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Grilled-Chicken-Thighs-Square-new-480x270-1-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpeg" },
  { name: "Pasta (White or Pink)", description: "Al dente pasta served with your choice of creamy white sauce or tangy pink sauce", image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/PinkSaucePasta02-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpg" },
  { name: "Seasoned Rice", description: "Fluffy seasoned rice, infused with aromatic herbs and spices", image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/seasoned-rice-qpe6omzt4o543tlvgprxvb396zydmn3mj7bx0bny70.jpg" },
  { name: "Potato Wedges / French Fries", description: "Crispy potato wedges or golden French fries, seasoned to perfection", image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/potatow-qpe6omzt4o543tlvgprxvb396zydmn3mj7bx0bny70.jpg" },
];

const EXTRA: Record<string, MenuItem> = {
  salmon: { name: "Grilled Salmon and Seabass", description: "Grilled salmon and seabass fillets, delicately seasoned and cooked to perfection", image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Grilled-Salmon-and-Seabass-300x197.jpg" },
  calamari: { name: "Slightly Fried Calamari", description: "Tender calamari rings lightly fried to crispy perfection, served with zesty marinara sauce", image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/fried-calamari-recipe-snippet-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpg" },
  prawns: { name: "Grilled Tiger Prawns", description: "Juicy grilled tiger prawns, seasoned to perfection", image: "https://rickyrestaurants.com/wp-content/uploads/elementor/thumbs/Grilled-Tiger-Prawns-qpe6omzucix9hj3gplavpu0m1exwngbr496658vopc.jpg" },
  shrimp: { name: "Shrimp Egg Fried Rice", description: "Flavorful shrimp fried rice cooked with fluffy grains, succulent shrimp, and fresh vegetables, bound with scrambled eggs", image: "https://rickyrestaurants.com/wp-content/uploads/2024/05/Shrimp-EGG-Fried-Rice-300x225.jpg" },
};

const MENU_PACKAGES = [
  { id: "grill-feast", title: "Ricky's Grill Feast", tagline: "Our classic crowd-pleaser, perfect for intimate gatherings", items: BASE_ITEMS, highlight: false },
  { id: "grill-paradise", title: "Ricky's Grill Paradise", tagline: "Elevated grilling with premium seafood additions", items: [...BASE_ITEMS.slice(0, -1), EXTRA.salmon], highlight: true },
  { id: "extravaganza", title: "Ricky's Extravaganza", tagline: "The ultimate indulgence — a complete seafood and grill experience", items: [...BASE_ITEMS.slice(0, 5), EXTRA.calamari, EXTRA.prawns, BASE_ITEMS[6], BASE_ITEMS[7], EXTRA.salmon, BASE_ITEMS[8], EXTRA.shrimp], highlight: false },
  { id: "international", title: "Ricky's International", tagline: "A full-spectrum feast blending global flavors and premium proteins", items: [...BASE_ITEMS.slice(0, 5), EXTRA.calamari, EXTRA.prawns, BASE_ITEMS[6], BASE_ITEMS[7], EXTRA.salmon, BASE_ITEMS[8], EXTRA.shrimp], highlight: false },
];

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex items-start gap-4 py-4 border-b border-dashed border-stone-200 last:border-0 group"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0"
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="80px"
        />
      </motion.div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-stone-800 text-sm mb-0.5">{item.name}</p>
        <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">{item.description}</p>
      </div>
    </motion.div>
  );
}

export function MenuClient() {
  return (
    <>
      <PageHero
        title="Catering Menu"
        breadcrumbs={[{ label: "Menu" }]}
        bgImage="https://rickyrestaurants.com/wp-content/uploads/2024/05/tes-bg-1.jpg"
      />

      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Offerings" title="Ricky's Grill Packages" />

          <div className="space-y-20">
            {MENU_PACKAGES.map((pkg, pkgIndex) => (
              <motion.div
                key={pkg.id}
                id={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="scroll-mt-24"
              >
                {/* Package header */}
                <motion.div
                  whileHover={{ scale: 1.005 }}
                  transition={{ duration: 0.2 }}
                  className={`rounded-2xl p-8 mb-8 ${pkg.highlight ? "bg-amber-600 text-white" : "bg-stone-50"}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${pkg.highlight ? "text-amber-200" : "text-amber-600"}`}>
                        Package {pkgIndex + 1}
                      </p>
                      <h2 className={`text-2xl sm:text-3xl font-bold ${pkg.highlight ? "text-white" : "text-stone-800"}`}>
                        {pkg.title}
                      </h2>
                      <p className={`text-sm mt-1 ${pkg.highlight ? "text-amber-100" : "text-stone-500"}`}>
                        {pkg.tagline}
                      </p>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      href="/contact-us"
                      className={`self-start sm:self-center px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                        pkg.highlight
                          ? "bg-white text-amber-600 hover:bg-amber-50"
                          : "bg-amber-600 text-white hover:bg-amber-700"
                      }`}
                    >
                      Book This Package
                    </motion.a>
                  </div>
                </motion.div>

                {/* Items grid */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-x-12"
                >
                  {pkg.items.slice(0, Math.ceil(pkg.items.length / 2)).map((item, i) => (
                    <MenuItemCard key={item.name} item={item} index={i} />
                  ))}
                  {pkg.items.slice(Math.ceil(pkg.items.length / 2)).map((item, i) => (
                    <MenuItemCard key={item.name + "-r"} item={item} index={i} />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation form */}
      <section className="py-20 bg-stone-50 overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Reservation" title="Book Your Table" />
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ContactForm title="Make a Reservation" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
