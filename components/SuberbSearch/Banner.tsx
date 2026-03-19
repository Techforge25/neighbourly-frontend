import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary h-[400px] w-full rounded-lg flex items-center justify-center">
      <div className="max-w-[757px] h-[164px] mx-auto">
        <div className="flex items-center justify-center">
          <button className="flex items-center bg-[#FFFFFF42] px-4  py-1 text-white rounded-full font-manrope font-bold text-[12px] leading-[16px] ">
            <span>
              <IoLocationOutline size={20} />
            </span>
            <span>Curl Curl</span>
          </button>
        </div>

        <div className="flex items-start flex-start">
          <button className="bg-white px-[41px] py-[5px] max-w-[133px] rounded-[100px] text-[#FE9A86] text-[40px] font-extrabold font-manrope">
            24
          </button>
          <h1 className="font-bold font-manrope text-[62px] text-white leading-[68px] text-center ">
            <span>Recommendations in</span>
            <span>Curl Curl</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
