import React from "react";
import { WordRotate } from "../ui/word-rotate";
import { IoMdArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#000000]/30 "></div>

      {/* Content */}
      <div className={`font-manrope absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-center px-4 sm:px-6 md:px-0 w-full max-w-5xl`}>
        {/* Heading */}
        <div className="uppercase mb-6">
          <p className="font-bold text-[32px] sm:text-[40px] md:text-[52px] lg:text-[62px] text-white">
            your suburb’s Most
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-2">
            <p className="font-bold text-[32px] sm:text-[40px] md:text-[52px] lg:text-[62px] text-white">
              Recommended
            </p>
            <WordRotate
              className="font-bold text-[32px] sm:text-[40px] md:text-[52px] lg:text-[62px] text-white font-monrope"
              words={["Word", "Rotate"]}
            />
          </div>
        </div>

        {/* Search bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-full p-2 w-full sm:w-auto max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Enter your suburb or postcode"
            className="w-full  py-2 px-3 text-[#697586] text-[14px] sm:text-[16px] outline-none rounded-full"
          />
          <button className="flex items-center justify-center gap-2 bg-[#718496] text-white px-6 py-3 rounded-full text-[14px] sm:text-[16px]">
            Search
            <IoMdArrowForward size={20} className="sm:size-[24px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
