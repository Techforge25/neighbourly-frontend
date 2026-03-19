import React from "react";
import { IoMdAdd } from "react-icons/io";
import Card from "../Card";

const LocalRecommendation = () => {
  return (
    <div className="max-w-[1296px] mx-auto my-20 p-4">
      <div className="flex flex-col md:gap-[32px] gap-[16px]">
        <p className="w-[50%] mx-auto text-[42px] text-center font-manrope font-bold md:leading-[49px] leading-[30px]">
          <span className="text-textdark">Want to see more </span>
          <span className="text-primary">local recommendations?</span>
        </p>

        <button className="w-[285px] mx-auto  md:flex hidden items-center justify-center gap-2 border lg:px-4 px-2 lg:py-3 py-2 rounded-full bg-secondary text-white lg:text-[16px] text-sm">
          <span>Share your recommendation</span>
          <span>
            <IoMdAdd size={20} />
          </span>
        </button>
      </div>

      <div className="mt-20 relative w-full overflow-hidden">
        <Card />

        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-md bg-gray-700/1 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default LocalRecommendation;
