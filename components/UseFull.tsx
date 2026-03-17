import React from "react";
import { FiShare2 } from "react-icons/fi";

const UseFull = ({color}:{color?: string}) => {
  return (
    <div className={`bg-[${color?color:"#FE9A86"}] bg-[url('/images/find.png')] bg-cover bg-center min-h-[400px] sm:min-h-[450px] lg:h-[500px] flex items-center`}>
      <div className="container mx-auto px-4 py-12 sm:py-14 lg:py-16">
        
        <div className="w-full">
          
          {/* Heading */}
          <p className=" text-[22px] sm:text-[28px] md:text-[34px] lg:text-[42px] text-center text-[#303231] font-bold leading-snug">
            know someone who’d<span className="text-white">find this useful?</span>
          </p>

          {/* Description */}
          <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] text-center text-white leading-relaxed sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto">
            Send Neighbourly to a friend, neighbour or group and help grow
            trusted recommendations in your suburb.
          </p>

          {/* Button */}
          <div className="mt-6 flex items-center justify-center">
            <button className="flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-3 sm:py-4 rounded-full bg-white text-[14px] sm:text-[16px]">
              <span>Share Neighbourly</span>
              <FiShare2 size={20} className="sm:size-[24px]" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UseFull;