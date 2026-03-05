import React from "react";
import HeroSection from "./home/HeroSection";
import NewArrivals from "./home/NewArrivals";
import Editorial from "./home/Editorial";
import BestSellers from "./home/BestSellers";

export default function HomePageContent() {
  return (
    // We don't need excessive padding here because `app/layout.tsx` guarantees `px-4 sm:px-12`.
    // We just stack the components cleanly.
    <div className="w-full flex flex-col gap-8 md:gap-16 lg:gap-24">
      <HeroSection />
      <NewArrivals />
      <BestSellers />
      <Editorial />
    </div>
  );
}
