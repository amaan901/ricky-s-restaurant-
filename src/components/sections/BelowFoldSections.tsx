import { AboutSection } from "@/components/sections/AboutSection";
import { CateringSection } from "@/components/sections/CateringSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { BuffetSection } from "@/components/sections/BuffetSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { DeliverySection } from "@/components/sections/DeliverySection";

/**
 * Async Server Component — Next.js will stream this after the Hero paints.
 * Wrapping in Suspense on the parent means the hero renders immediately
 * while this chunk is fetched, bundled and hydrated lazily.
 */
export async function BelowFoldSections() {
  return (
    <>
      <AboutSection />
      <CateringSection />
      <MenuSection />
      <BuffetSection />
      <TestimonialsSection />
      <GallerySection />
      <DeliverySection />
    </>
  );
}
