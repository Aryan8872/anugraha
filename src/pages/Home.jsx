import BottomOffer from "../Components/BottomOfferSection"
import CategorySection from "../Components/CategorySection"
import HeroSwiper from "../Components/HeroSwiper"
import RecentArrivals from "../Components/RecentArrivals"
import Testimonials from "../Components/Testimonials"

const Home = () => {
    return (
        <>
            <HeroSwiper />

            <div className="flex flex-col bg-white shadow-md rounded-4xl mt-8 mb-8 gap-10">
                <CategorySection/>
                <RecentArrivals />
                <Testimonials />
            </div>
            <BottomOffer />

        </>
    )
}

export default Home
