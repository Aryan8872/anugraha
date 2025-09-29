import React, { useState } from "react";
import ShirtDetailSwiper from "./Swipers/ShirtDetailSwiper";
import { tshirtDetailData } from "../data/TshirtDetail";
import { useParams } from "react-router-dom";
import RoundedButton from "./common/RoundedButton";

const ShirtDetail = () => {
  const { id } = useParams();
  const tshirtData = tshirtDetailData[id];
  const [shirtSize, setShirtSize] = useState("XL");

  console.log(tshirtData);
  return (
    <div className="grid grid-cols-2 gap-x-14 pt-11 w-[85%] mx-auto">
      <ShirtDetailSwiper data={tshirtData} />

      <div className="flex flex-col gap-2">
        <span className="font-dew-bold text-2xl">{tshirtData.tshirt_name}</span>
        <span className="font-dew-semibold text-lg">
          Rs. {tshirtData.tshirt_price}
        </span>
        <span className="font-dew-semibold text-base">
          <span className="font-dew-regular">Size:</span> {shirtSize}
        </span>
        <div className="w-full flex flex-row mt-2 mb-4 gap-2">
          {tshirtData.tshirt_sizes.map((size, index) => (
            <div
              onClick={() => {
                setShirtSize(size);
              }}
              className={`flex font-dew-semibold items-center bg-prima justify-center border-black/20  rounded-sm cursor-pointer border-[1.2px] h-10 w-16 ${shirtSize===size?'bg-black text-white':'bg-white text-black'}`}
            >
              {size}
            </div>
          ))}
        </div>

        <RoundedButton   text={"Order T-shirt"} bgcolor={'green-primary'} />
      </div>
    </div>
  );
};

export default ShirtDetail;
