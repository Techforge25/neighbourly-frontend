import { SERVICE_OPTIONS } from "@/utils/dumydata";
import Image from "next/image";
import React from "react";

const LocalsTrustMost = () => {
  return (
    <div className="max-w-[1260px] mx-auto rounded-[22px] overflow-hidden relative bg-share-modal-icon bg-[url('/images/findSectionBg.png')] bg-cover bg-center mb-12 min-h-[340px] sm:min-h-[480px] md:min-h-[592px]">
      {/* Text + Pills */}
      <div className="absolute left-4 sm:left-6 md:left-10 top-6 sm:top-10 md:top-16 z-10 max-w-[55%] sm:max-w-[50%] md:max-w-[45%]">
        <h2 className="font-manrope font-bold text-[18px] leading-[22px] sm:text-[28px] sm:leading-[32px] md:text-[36px] md:leading-[40px] lg:text-[44px] lg:leading-[48px] xl:text-[52px] xl:leading-[56px]">
          <span className="block text-text-dark-secondary">See who locals</span>{" "}
          <span className="block text-text-dark-secondary">
            trust most in the
          </span>{" "}
          <span className="block text-white">Northern Beaches.</span>
        </h2>

        <div className="flex flex-col gap-1.5 sm:gap-2 mt-3 sm:mt-4 md:mt-6 sm:max-w-[210px]">
          {SERVICE_OPTIONS.map((item, ind) => (
            <div
              key={ind}
              className="flex items-center gap-2 sm:gap-3 border border-white rounded-full px-1.5 sm:px-2 py-1 sm:py-1.5"
            >
              <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.value}
                  fill
                  loading="lazy"
                  sizes="100vh"
                  className="object-contain"
                />
              </div>
              <p className="text-white text-xs sm:text-lg md:text-xl lg:text-[1.75rem] font-bold leading-tight">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Image (bottom aligned) */}
      <div className="absolute md:flex  hidden bottom-0 right-0 w-[50%] sm:w-[55%] md:w-[60%] lg:w-[70%] xl:w-auto pointer-events-none">
        <Image
          src="/images/mokUpHand.svg"
          alt="Locals Trust Most"
          width={1050}
          height={1000}
          loading="lazy"
          className="w-full xl:w-[1050px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default LocalsTrustMost;
