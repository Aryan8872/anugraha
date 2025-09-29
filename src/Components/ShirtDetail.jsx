import React, { useState } from "react";
import ShirtDetailSwiper from "./Swipers/ShirtDetailSwiper";
import { tshirtDetailData } from "../data/TshirtDetail";
import { useParams } from "react-router-dom";
import RoundedButton from "./common/RoundedButton";
import { PiPlus } from "react-icons/pi";
import RecentArrivals from "./RecentArrivals";
import AlsoBoughtSwiper from "./AlsoBoughtSwiper";

const ShirtDetail = () => {
  const { id } = useParams();
  const tshirtData = tshirtDetailData[id];
  const [shirtSize, setShirtSize] = useState("XL");

  return (
    <div className="pt-9 w-[95%] xl:w-[85%] mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-14  ">
        <ShirtDetailSwiper data={tshirtData} />

        <div className="flex flex-col gap-2 mt-7 md:mt-0 md:pl-10 lg:pl-0 pb-20  ">
          <span className="font-dew-bold text-3xl">
            {tshirtData.tshirt_name}
          </span>
          <span className="font-dew-semibold text-lg">
            Rs. {tshirtData.tshirt_price}
          </span>
          <span className="font-dew-semibold text-base">
            <span className="font-dew-regular">Size:</span> {shirtSize}
          </span>
          <div className="w-full flex flex-row mt-3 mb-3 gap-2">
            {tshirtData.tshirt_sizes.map((size, index) => (
              <div
                onClick={() => {
                  setShirtSize(size);
                }}
                className={`flex font-dew-semibold items-center bg-prima justify-center border-black/20  rounded-sm cursor-pointer border-[1.2px] h-10 w-16 ${
                  shirtSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {size}
              </div>
            ))}
          </div>

          <RoundedButton text={"Order T-shirt"} bgcolor={"green-primary"} />

          <section className="font-dew-regular mt-3 tracking-[1px]">
            {tshirtData.tshirt_description}
          </section>

          <section className="border-black/30 mt-3 pt-5 border-t-[0.3px]">
            <span className="font-dew-semibold flex justify-between">
              Return, Exchange & Refund Policy
              <PiPlus />
            </span>
          </section>

          <section className="border-black/30 mt-3  pt-5 border-t-[0.3px] ">
            <span className="font-dew-semibold flex justify-between">
              Cancellation Policy
              <PiPlus />
            </span>
          </section>

          <section className="border-black/30 mt-3  pt-5 border-t-[0.3px]">
            <span className="font-dew-semibold flex justify-between">
              Shipping Info
              <PiPlus />
            </span>
          </section>
        </div>
      </div>
      <div className="flex flex-col items-center pt-5 w-full gap-9">
        <span className="text-3xl font-dew-bold">People Also Bought</span>
        <AlsoBoughtSwiper />
      </div>
    </div>
  );
};

export default ShirtDetail;
