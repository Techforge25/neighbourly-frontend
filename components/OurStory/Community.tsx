import { Community_Sec_Data } from "@/utils/dumydata";
import React from "react";

const Community = () => {
  return (
    <div className="md:w-[95%] w-[90%] mx-auto my-20">
      <div className="flex flex-col gap-[62px]">
        <h4 className="md:text-[42px] text-[28px] font-bold font-manrope text-center md:w-[532px] mx-auto leading-[49px]">
          <span className="text-[#202939]">A hyper-local</span>
          <span className="text-[#F3B39D]">community service</span>
        </h4>

        <div className="flex items-center justify-between md:flex-row flex-col gap-10">
          {Community_Sec_Data.map((item, ind) => (
            <div key={ind} className="md:w-[320px] mx-auto text-center">
              <div className={`${item.iconBg} w-fit mx-auto p-4 rounded-[8px]`}>{item.icon}</div>
              <p className="text-[24px]  text-[#12141D] font-manrope font-bold mt-[20px]">{item.title}</p>
              <p className="text-[16px] text-[#697586]  mt-[10px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
