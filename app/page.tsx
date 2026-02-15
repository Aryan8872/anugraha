import BottomOffer from "@/Components/BottomOfferSection";
import CollectionTabSection from "@/Components/common/CollectionTabSection";
import LandingHero from "@/Components/hero/LandingHero";
import RecentArrivals from "@/Components/RecentArrivals";
import Testimonials from "@/Components/Testimonials";
import Image from "next/image";
export default function Home() {
  return (
    <main className="px-4 sm:px-12 bg-primary-bg">
      {/* <LandingHero
       /> */}
      {/* <HeroSwiper /> */}
      <CollectionTabSection/>

      <div className="flex flex-col rounded-4xl mt-8 mb-8 gap-3">
        <RecentArrivals />
        <Testimonials />
      </div>
      <BottomOffer />
    </main>
  );
}
