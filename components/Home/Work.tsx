import { work_Data } from "@/utils/dumydata";
import { Manrope } from "next/font/google";
import React from "react";

const Work = () => {
  return (
    <div className="container mx-auto md:my-20 p-4">
      <h5 className="lg:text-[42px] text-[32px] text-center font-bold text-[#303231] font-manrope md:py-10">
        How Neighbourly <span className="text-[#F3B39D]">Works</span>{" "}
      </h5>

      <div className="flex flex-col md:flex-row grow-1 justify-center gap-[8px] md:gap-[16px] lg:gap-[30px]">
        {work_Data.map((item, ind) => (
          <div
            key={ind}
            className={`${item.bg} p-4 sm:p-6 flex flex-col md:items-start items-center gap-3 sm:gap-4 max-w-full mx-auto w-full lg:min-w-[346px]`}
          >
            <div
              className={`${item.iconBg} w-fit text-white text-[18px] sm:text-[20px] p-2 sm:p-2.5 rounded-2xl`}
            >
              {item.icon}
            </div>
            <p className="text-[20px] sm:text-[22px] md:text-[24px] text-[#12141D] font-manrope font-semibold leading-snug sm:leading-[28px] md:leading-[30px] lg:max-w-[140px]">
              {item.title}
            </p>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#697586] font-poppins font-medium leading-[20px] sm:leading-[22px] md:leading-[24px] lg:max-w-[328px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
