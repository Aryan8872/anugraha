import React from "react";
import HeroSection from "./home/HeroSection";
import NewArrivals from "./home/NewArrivals";
import BestSellers from "./home/BestSellers";
import CategoriesSection from "./home/CategoriesSection";
import MarqueeStrip from "./home/MarqueeStrip";
import DualWaveSection from "./home/DualWaveSection";
import Testimonials from "./home/Testimonials";

export default function HomePageContent() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      {/* Sections with consistent vertical padding */}
      <div className="flex flex-col gap-12 md:gap-20 lg:gap-28 py-12 md:py-20">
        <NewArrivals />
        <BestSellers />
        <CategoriesSection />
      </div>{" "}
      <MarqueeStrip />
      {/* Post-marquee sections */}
      <div className="flex flex-col gap-12 md:gap-20 lg:gap-28 py-12 md:py-20">
        <DualWaveSection />
        <Testimonials />
      </div>
    </div>
  );
}
