
import { FcNext, FcPrevious } from 'react-icons/fc';
import 'swiper/css';
import { Autoplay, Navigation, Pagination, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const HeroSwiper = () => {

    const shirtData = [
        {
            imageLink: "/tshirts/tshirt1.png",
            title: "PurePima Only Tee – White",
            category: ["Casual"],
            excerpt: "Soft and breathable 100% Pima cotton tee modeled full-body—ideal for everyday style."
        },
        {
            imageLink: "/tshirts/tshirt2.png",
            title: "Athletic Model in White Tee",
            category: ["Casual"],
            excerpt: "Athletic young male showcasing a clean white T-shirt and ripped jeans—perfect for casual gym wear."
        },
        {
            imageLink: "/tshirts/tshirt3.png",
            title: "Bearded Model in Crewneck Tee",
            category: ["Casual"],
            excerpt: "Bearded gentleman in a classic crewneck tee—clean, minimalist look on white background."
        },
        {
            imageLink: "/tshirts/tshirt4.png",
            title: "Long Sleeve Essential Tee",
            category: ["Casual"],
            excerpt: "Model wearing long-sleeve white T-shirt—ideal for layering or transitional seasons."
        },
        {
            imageLink: "/tshirts/tshirt5.png",
            title: "Stylish Casual Tee – Unsplash",
            category: ["Casual"],
            excerpt: "Trendy t-shirt model images from Unsplash—modern fit and effortless style."
        },
        {
            imageLink: "/tshirts/tshirt6.png",
            title: "Long Sleeve Essential Tee",
            category: ["Casual"],
            excerpt: "High-quality male model T-shirt images from Adobe Stock—professional lookbook ready."
        },
    ];

    return (
        <div className='w-full relative  h-[85vh]'>
            <Swiper
                modules={[Navigation, Autoplay, Pagination, Parallax]}
                slidesPerView={1}
                autoplay={{ delay: 5500, disableOnInteraction: true }}
                pagination={{ clickable: true }}
                speed={1500}
                navigation={{
                    nextEl: '.custom-next-hero',
                    prevEl: '.custom-prev-hero'
                }}
                parallax={{ enabled: true }}
                className='h-full'
            >
                {
                    shirtData.map((data, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <div className="flex flex-col h-full md:flex-row justify-between   w-full px-8 xl:px-16 py-10 md:py-16">
                                <div className="flex items-center justify-center w-full md:w-[45%] mb-8 md:mb-0">
                                    <img
                                        src={data.imageLink}
                                        className="w-full max-h-[60vh] object-contain"
                                        alt={data.title}
                                    />
                                </div>

                                <div className="flex flex-col gap-6 lg:gap-10 w-full md:w-[50%] text-black">
                                    <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-dew-bold">
                                        {data.title}
                                    </span>

                                    <button className="w-auto text-black font-dew-bold self-start bg-green-primary rounded-4xl px-6 py-3">
                                        Explore More
                                    </button>

                                    <span className="font-dew-semibold w-full sm:w-[80%] md:w-[70%] xl:w-[50%]">
                                        {data.excerpt}
                                    </span>

                                    {data.category.map((cat, i) => (
                                        <button
                                            key={i}
                                            className="px-4 py-2 rounded-4xl cursor-pointer transition-colors duration-200 w-auto font-dew-semibold self-start border border-black text-black "
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>

            <button className="custom-next-hero absolute rotate-90 top-[60%] right-7 z-10 transform -translate-y-1/2 cursor-pointer p-2 text-lg rounded-full h-12 w-12 flex items-center justify-center border border-[#99a1af] bg-white shadow-md hover:shadow-lg transition-shadow">
                <FcNext />
            </button>

            <button className="custom-prev-hero absolute rotate-90 top-[40%] right-7 z-10 transform -translate-y-1/2 cursor-pointer p-2 text-lg rounded-full h-12 w-12 flex items-center justify-center border border-[#99a1af] bg-white shadow-md hover:shadow-lg transition-shadow">
                <FcPrevious />
            </button>
        </div>
    )
}

export default HeroSwiper
