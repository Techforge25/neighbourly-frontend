import { our_story_data } from "@/utils/dumydata";
import Image from "next/image";
import React from "react";

const Ourstory = () => {
  return (
    <div className="md:w-[1104px] w-[90%] mx-auto md:my-20 my-10 p-4">
      <div className="flex item-center justify-between flex-col lg:flex-row md:gap-20 gap-8">
        <div>
          <div className="">
            <p className="md:text-[42px] text-[32px] text-[#303231] font-bold font-manrope">
              <span>Our </span><span className="text-[#F3B39D]">story</span>
            </p>
            <p className="text-[16px] text-[#202939] md:mt-10 mt-4 font-poppins leading-[24px]">
              Neighbourly started with a frustration we knew well: how hard it
              can be to find local service providers you can genuinely trust.
            </p>
          </div>

          {
            <div className="mt-10 flex flex-col mdd:gap-5 gap-2.5">
              {our_story_data.map((item, ind) => (
                <div key={ind}>
                  <p className="text-[16px] text-[#697586] font-poppins leading-[24px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          }

          <div className="border-l-4 border-[#F3B39D] md:mt-10 mt-4 pl-2">
            <p className="flex flex-col">
              <span className="text-[#202939] lg:text-[23px] text-[16px] font-semibold font-poppins">
                Kate and Andrew Gordon, Founders
              </span>
              <span className="text-[#697586] text-[16px] font-poppins">
                Founders
              </span>
            </p>
          </div>
        </div>

        <div>
          <Image
            src={"/images/our-story.png"}
            alt="image"
            width={1000}
            height={1000}
            className="w-full h-auto max-w-full lg:min-w-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Ourstory;
