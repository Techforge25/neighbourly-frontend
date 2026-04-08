import Image from "next/image";
import React from "react";

const RecommendationLed = () => {
  return (
    <div className="lg:w-[90%]  mx-auto md:my-20 my-10">
      <div className="flex flex-col md:gap-[62px] gap-[10px]">
        <div className="text-center md:w-[672px] w-[90%] mx-auto flex items-center flex-col gap-[12px]">
          <div className="md:text-[42px] text-[26px] font-bold font-manrope leadin-[49px]">
            <span className="text-tabText">Built around recommendations</span>
            {" "}
            <span className="text-primary">
              from the people closest to you
            </span>{" "}
          </div>
          <p className="md:w-[528px] text-[16px] text-para mx-auto">
            A free, community-led way to find trusted local services through
            neighbours, not noisy review sites.
          </p>
        </div>

        <div className="flex items-center justify-center">

            <Image
              src="/images/ourStoryMocup.png"
              alt="Description of the image"
              width={500}
              height={300}
              className="w-[332px] h-[680px] object-contain"
              loading="lazy"
            />


        </div>

      </div>
    </div>
  );
};

export default RecommendationLed;
