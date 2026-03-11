import { Suspense, lazy } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { BelowFoldSections } from "@/components/sections/BelowFoldSections";
export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <Suspense fallback={<BelowFoldSkeleton />}>
        <BelowFoldSections />
      </Suspense>
    </>
  );
}

function BelowFoldSkeleton() {
  return (
    <div className="w-full">
      {/* About skeleton */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex gap-4 h-110">
              <div className="w-1/2 h-full rounded-2xl bg-stone-100 animate-pulse" />
              <div className="w-1/2 h-[80%] self-end rounded-2xl bg-stone-100 animate-pulse" />
            </div>
            <div className="space-y-4">
              <div className="h-4 w-24 bg-stone-100 rounded animate-pulse" />
              <div className="h-10 w-3/4 bg-stone-100 rounded animate-pulse" />
              <div className="h-4 w-full bg-stone-100 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-stone-100 rounded animate-pulse" />
              <div className="h-4 w-4/6 bg-stone-100 rounded animate-pulse" />
              <div className="h-11 w-32 bg-stone-100 rounded-full animate-pulse mt-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-8 w-64 bg-stone-200 rounded animate-pulse mx-auto mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-4/3 rounded-xl bg-stone-200 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
