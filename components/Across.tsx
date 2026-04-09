import { sydneyAcrossData } from "@/utils/dumydata";
import React from "react";

const Across = () => {
  return (
    <section className="bg-green">
      <div className="md:max-w-[1441px] w-[90%] mx-auto py-20">
        <div className="">
          <h4 className="md:text-[52px] sm:text-[32px] text-[28px] font-bold font-manrope  md:leading-[60px] sm:leading-[40px] leading-[30px] md:w-[600px] text-white ">
            Trusted by neighbours across Sydney
          </h4>

          <div className="flex items-center justify-between flex-wrap mt-20 ">
            {sydneyAcrossData.map((item, ind) => (
              <div
                key={ind}
                className="relative flex items-center gap-[18px] md:p-[16px] p-[8px]"
              >
                {/* Left line */}
                {ind === 1 && (
                  <div className="absolute left-[-33px] top-1/2 -translate-y-1/2 h-[40%] w-[4px] bg-white hidden md:block"></div>
                )}
                {/* Right line */}
                {ind === 1 && (
                  <div className="absolute right-[22px] top-1/2 -translate-y-1/2 h-[40%] w-[4px] bg-white hidden md:block"></div>
                )}

                <span className="flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="font-manrope font-medium md:text-[36px] text-[20px] sm:w-[318px] leading-[32px] text-white">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Across;
