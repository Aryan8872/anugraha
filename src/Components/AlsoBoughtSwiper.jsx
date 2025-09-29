import React from "react";
import { Link } from "react-router-dom";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { recentData } from "../data/RecentTshirtData";
import { BiCart } from "react-icons/bi";

const AlsoBoughtSwiper = () => {
  return (
    <div className="h-full w-full relative">
      <Swiper
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
          el: ".custom-pagination",
          type: "bullets",
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              ' !opacity-100 mt-16  hover:!bg-gray-600"></span>'
            );
          },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          1170: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
          },
          430: {
            slidesPerView: 2,
            spaceBetween: 16,
            slidesPerGroup: 1,
          },
          240: {
            slidesPerView: 1,
            spaceBetween: 16,
            slidesPerGroup: 1,
          },
        }}
      >
        {recentData.map((tshirt, index) => (
          <SwiperSlide key={index} className="">
            <Link to={`/t-shirt/1`}>
              <div className={`flex w-full  h-full flex-col gap-6 `}>
                <div className="w-full bg-[#EEEBEE] h-[360px] md:h-[420px] rounded-4xl">
                  <img
                    src={tshirt.image}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className="flex flex-col gap-3">
                    <span className="font-dew-bold">{tshirt.name}</span>
                    <span className="font-dew-semibold">{tshirt.price}</span>
                  </div>
                  <button className="bg-black/70 flex items-center justify-center cursor-pointer hover:shadow-md rounded-full h-10 w-10 p-2">
                    <BiCart size={28} color="white" />
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <button className="custom-next absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 cursor-pointer p-2 text-lg rounded-full h-12 w-12 flex items-center justify-center border border-[#99a1af] bg-white shadow-md hover:shadow-lg transition-shadow">
                    <FcNext />
                </button>

                <button className="custom-prev absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 cursor-pointer p-2 text-lg rounded-full h-12 w-12 flex items-center justify-center border border-[#99a1af] bg-white shadow-md hover:shadow-lg transition-shadow">
                    <FcPrevious />
                </button> */}

      <div className="custom-pagination flex gap-2 mt-6 justify-center"></div>
    </div>
  );
};

export default AlsoBoughtSwiper;
