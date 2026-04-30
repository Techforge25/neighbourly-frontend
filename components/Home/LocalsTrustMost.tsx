import { SERVICE_OPTIONS } from "@/utils/dumydata";
import Image from "next/image";
import React from "react";

const LocalsTrustMost = () => {
  return (
    <div className="max-w-[1260px] sm:h-[541px] h-[340px] mx-auto rounded-[22px] overflow-hidden relative bg-share-modal-icon bg-[url('/images/findSectionBg.png')] bg-cover bg-center mb-12">
  
  {/* Text */}
  <div className="absolute left-10 sm:top-16 top-10">
    <h2 className="font-manrope font-bold text-[28px] leading-[32px] sm:text-[36px] sm:leading-[40px] md:text-[44px] md:leading-[48px] lg:text-[52px] lg:leading-[53px]">
      <span className="block text-text-dark-secondary ">See who locals</span>
      <span className="block text-text-dark-secondary">trust most in the</span>
      <span className="block text-white">Northern Beaches.</span>
    </h2>

    <div className="flex flex-col sm:mt-2">
      {
      SERVICE_OPTIONS.map((item, ind) => (
        <div key={ind} className="sm:mt-2">
          <span className="text-text-dark-secondary sm:text-[1.75rem] text-[1.3rem] font-bold">{item=="Other" ? " " : item}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Image (bottom aligned) */}
  <div className="absolute bottom-0 sm:right-0">
    <Image
      src="/images/mockImages.png"
      alt="Locals Trust Most"
      width={1000}
      height={1000}
      className="w-[1050px] object-contain"
    />
  </div>

</div>
  );
};

export default LocalsTrustMost;
