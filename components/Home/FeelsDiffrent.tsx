import { feel_Diff } from "@/utils/dumydata";
import Image from "next/image";
import React from "react";

const FeelsDiffrent = () => {
  return (
    <div className="container mx-auto py-12 sm:py-16 lg:py-20 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">
          <h5 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] font-bold text-[#303231] text-center lg:text-left">
            Why Neighbourly{" "}
            <span className="text-[#F3B39D]">feels different</span>
          </h5>

          <div className="mt-10 sm:mt-14 lg:mt-20">
            {feel_Diff.map((item, ind) => (
              <div key={ind}>
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 pb-4">
                  <p
                    className={`border p-2 sm:p-3 rounded-full ${item.ib} ${item.iconBorder}`}
                  >
                    {item.icon}
                  </p>

                  <p className="text-[#303231] font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/feels.png"
            alt="Description of the image"
            width={500}
            height={300}
            className="w-full max-w-[500px] h-auto"
          />

          <div className="absolute top-[70%] sm:top-[75%] md:top-[80%] lg:top-65 rounded w-[95%] sm:w-[65%] p-4 sm:p-5 md:p-6 mx-auto left-0 right-0 bg-[#718496] text-white">
            <p className="text-[18px] sm:text-[21px] md:text-[26px] lg:text-[31px]">
              Find trusted locals in your area
            </p>
            <p className="text-[14px] sm:text-[15px] md:text-[16px]">
              Discover{" "}
              <span className="font-bold">
                plumbers, electricians, cleaners
              </span>{" "}
              and more recommended by people nearby — making it easier to choose
              with confidence, while helping great local businesses build their
              local profile through genuine community support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelsDiffrent;
