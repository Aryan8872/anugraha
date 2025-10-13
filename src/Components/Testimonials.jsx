"use client";
import { CgQuote } from "react-icons/cg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import RoundedButton from "./common/RoundedButton";
import { FcNext, FcPrevious } from "react-icons/fc";
const testimonialData = [
  {
    name: "Sara C.",
    text: "I had so many questions and you were willing to take the time to help me out. We were also on a strict deadline ... Very impressed with the quality and quickness. Will definitely be using you in the future.",
    image: "/tshirts/tshirt1.png",
  },
  {
    name: "John D.",
    text: "Amazing service! The team responded super quickly and delivered exactly what we wanted. Highly recommend.",
    image: "/tshirts/tshirt2.png",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-12  pb-14 ">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 5500, disableOnInteraction: true }}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicMainBullets: false,
          el: ".custom-pagination-testimonials-swiper",
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
          nextEl: ".custom-next-testimonial",
          prevEl: ".custom-prev-testimonial",
        }}
        loop={true}
        speed={1200}
        spaceBetween={60}
        className="px-4"
      >
        {testimonialData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex flex-col gap-7 w-full self-start lg:w-1/4">
                <h2 className="text-2xl font-dew-semibold">
                  Testimonials
                </h2>
                <p className="text-gray-600 font-dew-bold">
                  Feel free to leave your feedback by attaching a photo, it
                  helps a lot to support our business for you
                </p>
                <RoundedButton
                  bgcolor={"green-primary"}
                  text={"write a review"}
                />
              </div>

              <div className="w-full flex flex-row  gap-3 ">
                <div className="w-full rounded-4xl xl:ml-32 flex justify-center bg-image-bg-color">
                  <img
                  loading="lazy"
                    src={data.image}
                    alt={data.name}
                    className="rounded-2xl h-[300px] lg:min-h-[500px] object-contain"
                  />
                </div>
                <div className="relative w-full h-[300px] lg:min-h-[300px] self-start bg-green-primary rounded-4xl px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-5">
                  <div className="flex absolute hidden sm:block top-2 right-2 sm:right-7 items-center justify-center w-14 h-14 bg-white rounded-full p-2">
                    <CgQuote
                      size={45}
                      className="object-cover"
                      color="#CBCBCB"
                    />
                  </div>
                  <span className="font-dew-bold text-lg md:text-2xl py-3 px-6 sm:px-12 rounded-4xl border-2  border-black w-auto self-start">
                    {data.name}
                  </span>
                  <p className="text-black font-dew-semibold line-clamp-6">
                    {data.text}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination-testimonials-swiper flex gap-2 mt-6 justify-center"></div>

      <div className="flex items-center gap-4 mt-6">
        <button className="custom-prev-testimonial w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-lg">
          <FcPrevious className="cursor-pointer" />
        </button>

        <button className="custom-next-testimonial w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-lg">
          <FcNext className="cursor-pointer" />
        </button>

        {/* <span className="text-gray-600 text-sm">(24) reviews</span> */}
      </div>
    </div>
  );
};

export default Testimonials;
