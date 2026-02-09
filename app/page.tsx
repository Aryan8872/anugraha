import BottomOffer from "@/Components/BottomOfferSection";
import LandingHero from "@/Components/hero/LandingHero";
import RecentArrivals from "@/Components/RecentArrivals";
import Testimonials from "@/Components/Testimonials";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <LandingHero
       />
      {/* <HeroSwiper /> */}

      <div className="flex flex-col bg-white shadow-md rounded-4xl mt-8 mb-8 gap-3">
        <RecentArrivals />
        <Testimonials />
      </div>
      <BottomOffer />
    </main>
  );
}
