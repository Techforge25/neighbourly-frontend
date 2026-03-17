import Image from "next/image";
import React from "react";
import { IoMdAdd } from "react-icons/io";

const TrustSection = () => {
  return (
    <main className="w-[90%] md:w-[80%] lg:w-[65%] mx-auto py-12 sm:py-16">
      <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-16">
        {/* Text Section */}
        <div className="w-full lg:w-[40%] font-manrope">
          <p className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold leading-snug">
            Find the local services your neighbours{" "}
            <span className="text-[#F3B39D]">trust and recommend.</span>
          </p>
          <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] text-[#697586] font-medium leading-relaxed">
            Neighbourly is a free service that helps you discover trusted local
            businesses through recommendations from people who live in your
            suburb — not through paid listings or whoever pays most for the
            lead.
          </p>
          <button className="mt-6 md:flex hidden items-center gap-2 border lg:px-4 px-2 lg:py-3 py-2 rounded-full bg-[#F3B39D] text-white lg:text-[16px] text-sm">
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
            className="w-full max-w-[485px] h-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default TrustSection;
