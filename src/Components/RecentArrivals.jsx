import { useRef } from "react"
import { BiCart } from "react-icons/bi"
import { FcNext, FcPrevious } from "react-icons/fc"
import "swiper/css"
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import RoundedButton from './common/RoundedButton'

const RecentArrivals = () => {
    const swiperRef = useRef(null)
    const recentData = [
        {
            name: "Graphity print",
            price: "$999",
            image: "/tshirts/tshirt1.png"
        },
        {
            name: "Graphity print",
            price: "$999",
            image: "/tshirts/tshirt2.png"
        },
        {
            name: "Graphity print",
            price: "$999",
            image: "/tshirts/tshirt3.png"
        },
        {
            name: "Graphity print",
            price: "$999",
            image: "/tshirts/tshirt4.png"
        },
        {
            name: "Graphity print",
            price: "$999",
            image: "/tshirts/tshirt5.png"
        },
        {
            name: "Graphity print",
            price: "$999",
            image: "/tshirts/tshirt6.png"
        },
        {
            name: "Graphity print",
            price: "$999",
            image: "/tshirts/tshirt4.png"
        },
        {
            name: "Graphity print",
            price: "$999",
            image: "/tshirts/tshirt5.png"
        },
    ]

    return (
        <div className='w-full flex flex-col gap-12 rounded-t-4xl bg-white px-4 py-10 sm:px-12 h-[860px]'>
            <div className='flex w-full items-center justify-between'>
                <span className='font-dew-expanded-semibold text-2xl'>recent arrivals</span>
                <div className='flex gap-7 items-center'>
                    <span className='font-dew-semibold'>Take a look at out entire collection</span>
                    <RoundedButton text={"Open Store"} textcolor={"black"} bgcolor={"green-primary"} />
                </div>
            </div>
            <div className='h-full relative'>
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination]}
                    slidesPerView={4}
                    spaceBetween={16}
                    slidesPerGroup={1}
                    speed={1200}
                    loop={true}               

                    grabCursor={true}
                    pagination={{
                        clickable: true,
                        dynamicMainBullets: false,
                        el: '.custom-pagination',
                        type: 'bullets',
                        renderBullet: function (index, className) {
                            return '<span class="' + className + ' !opacity-100 hover:!bg-gray-600"></span>';
                        }
                    }}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev'
                    }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 16,
                            slidesPerGroup: 4
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                            slidesPerGroup: 3
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                            slidesPerGroup: 2
                        }
                    }}
                >
                    {
                        recentData.map((tshirt, index) => (
                            <SwiperSlide key={index} className="w-[45%]">
                                <div className={`flex w-full h-full flex-col gap-6 ${(index + 1) % 2 == 0 ? 'mt-24' : 'mt-0'}`}>
                                    <div className='w-full bg-[#EEEBEE] h-[480px] rounded-4xl'>
                                        <img src={tshirt.image} className='w-full h-full object-contain' />
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <div className='flex flex-col gap-3'>
                                            <span className="font-dew-bold">{tshirt.name}</span>
                                            <span className="font-dew-semibold">{tshirt.price}</span>
                                        </div>
                                        <button className="bg-black/70 flex items-center justify-center cursor-pointer hover:shadow-md rounded-full h-10 w-10 p-2">
                                            <BiCart size={28} color="white" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <button className="custom-next absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 cursor-pointer p-2 text-lg rounded-full h-12 w-12 flex items-center justify-center border border-[#99a1af] bg-white shadow-md hover:shadow-lg transition-shadow">
                    <FcNext />
                </button>

                <button className="custom-prev absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 cursor-pointer p-2 text-lg rounded-full h-12 w-12 flex items-center justify-center border border-[#99a1af] bg-white shadow-md hover:shadow-lg transition-shadow">
                    <FcPrevious />
                </button>

                <div className="custom-pagination flex gap-2 mt-6 justify-center"></div>
            </div>
        </div>
    )
}

export default RecentArrivals