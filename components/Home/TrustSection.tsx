import Image from "next/image";
import React from "react";
import { IoMdAdd } from "react-icons/io";

const TrustSection = () => {
  return (
    <main className="lg:max-w-[1296px] mx-auto md:my-20 p-6">
      <div className="md:max-w-[1080px] mx-auto flex items-center justify-between md:gap-10 gap-6 flex-col lg:flex-row">
        {/* Text Section */}
        <div className="flex flex-col md:gap-[32px] gap-[16px] md:max-w-[460px] mx-auto">
          <p className="md:text-[42px] text-[28px] font-bold font-manrope md:leading-[49px] leading-[38px] ">
            <span className="text-[#303231]">
              Find the local services your neighbours
            </span>
            <span className="text-[#F3B39D]">trust and recommend.</span>
          </p>
          <p className="text-[16px]  text-[#697586] font-medium leding-[28px]">
            Neighbourly is a free service that helps you discover trusted local
            businesses through recommendations from people who live in your
            suburb — not through paid listings or whoever pays most for the
            lead.
          </p>
          <button className="w-[285px] md:flex hidden items-center gap-2 border lg:px-4 px-2 lg:py-3 py-2 rounded-full bg-[#F3B39D] text-white lg:text-[16px] text-sm">
            <span>Share your recommendation</span>
            <span>
              <IoMdAdd size={20} />
            </span>
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-auto flex justify-center">
          <Image
            src="/images/trust-section.png"
            alt="Trust Section Image"
            width={1000}
            height={1000}
            className="w-[495px]"
          />
        </div>
      </div>
    </main>
  );
};

export default TrustSection;
