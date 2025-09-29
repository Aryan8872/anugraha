import React, { useState } from "react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const ShirtDetailSwiper = ({ data }) => {
  const sideImages = data.other_images?.length
    ? [data.front_image, data.back_image, ...data.other_images]
    : [data.front_image, data.back_image];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="lg:w-full flex flex-col-reverse lg:flex-row gap-2">
      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        watchSlidesProgress
        direction="vertical"
        breakpoints={{
          1024:{
            direction:"vertical"
          },
          0:{
            direction:"horizontal"
          }
        }}
        className="shirt-detail-swiper-custom-navigation !mx-0 lg:h-[500px]  lg:w-28"
      >
        {sideImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} className="h-40 w-full lg:w-28 rounded-md object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="h-[65vh]  bg-red-200 !mx-0 w-[100%]"
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Pagination, Thumbs]}
      >
        {sideImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} className="w-full h-full rounded-md object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShirtDetailSwiper;
