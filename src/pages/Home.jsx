import BottomOffer from "../Components/BottomOfferSection"
import LandingHero from "../Components/hero/LandingHero"
import HeroSwiper from "../Components/HeroSwiper"
import RecentArrivals from "../Components/RecentArrivals"
import Testimonials from "../Components/Testimonials"

const Home = () => {
    return (
        <>  
            <LandingHero/>
            {/* <HeroSwiper /> */}

            <div className="flex flex-col bg-white shadow-md rounded-4xl mt-8 mb-8 gap-10">
                <RecentArrivals />
                <Testimonials />
            </div>
            <BottomOffer />

        </>
    )
}

export default Home
