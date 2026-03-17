import { work_Data } from "@/utils/dumydata";
import { Manrope } from "next/font/google";
import React from "react";

const Work = () => {
  return (
    <div className="container mx-auto py-14">
      <h5 className="lg:text-[42px] text-[21px] text-center font-bold text-[#303231] pb-6">
        How Neighbourly <span className="text-[#F3B39D]">Works</span>{" "}
      </h5>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-3 p-4">
        {work_Data.map((item, ind) => (
          <div key={ind} className={`${item.bg} p-6 rounded-lg flex flex-col items-start gap-4 `}>
            <div className={`${item.iconBg} w-fit text-white text-[20px] p-2 rounded-2xl`}>
              {item.icon}
            </div>
            <p className={`text-[24px] text-[#12141D] lg:w-40`}>{item.title}</p>
            <p className="text-[16px] text-[#697586] lg:w-[70%]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
