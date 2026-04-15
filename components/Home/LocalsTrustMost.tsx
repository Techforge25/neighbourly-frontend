import Image from "next/image";
import React from "react";

const LocalsTrustMost = () => {
  return (
    <div className="max-w-[1296px] mx-auto">
      <div className="md:mb-4">
        <p className="font-manrope font-bold md:text-[42px] sm:text-[40px] text-[28px] md:p-4 pl-6 md:text-start text-center ">See who locals <span className="text-primary">trust most</span></p>
      </div>
      <div className="flex flex-col flex-1 md:flex-row items-center justify-center gap-[8px] md:gap-[16px] lg:gap-[30px] flex-wrap lg:p-0 p-4">
        <Image
          src="/images/trustMostPman.png"
          alt="Locals Trust Most"
          width={411}
          height={437}
          className="lg:w-[411px] w-full  w-full md:min-h-[437px]"
        />
        <Image
          src="/images/trustMostEman.png"
          alt="Locals Trust Most"
          width={411}
          height={437}
          className="lg:w-[411px] w-full w-full md:min-h-[437px]"
        />
        <Image
          src="/images/trustMostHman.png"
          alt="Locals Trust Most"
          width={411}
          height={437}
          className="lg:w-[411px] w-full  md:min-h-[437px]"
        />
      </div>
    </div>
  );
};

export default LocalsTrustMost;
