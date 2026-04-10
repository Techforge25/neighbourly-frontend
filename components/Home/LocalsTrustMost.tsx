import Image from "next/image";
import React from "react";

const LocalsTrustMost = () => {
  return (
    <div className="">
      <div className="max-w-[1296px] mx-auto p-4 md:pb-10">
        <p className="font-manrope font-bold md:text-[42px] sm:text-[40px] text-[28px] ">See who locals <span className="text-primary">trust most</span></p>
      </div>
      <div className="flex flex-col md:flex-row flex-1 items-center justify-center gap-[8px] md:gap-[16px] lg:gap-[30px] flex-wrap p-4">
        <Image
          src="/images/trustMostPman.png"
          alt="Locals Trust Most"
          width={411}
          height={437}
          className="md:w-[411px] w-full sm:w-[320px] w-full md:min-h-[437px]"
        />
        <Image
          src="/images/trustMostEman.png"
          alt="Locals Trust Most"
          width={411}
          height={437}
          className="md:w-[411px] w-full sm:w-[320px] w-full md:min-h-[437px]"
        />
        <Image
          src="/images/trustMostHman.png"
          alt="Locals Trust Most"
          width={411}
          height={437}
          className="md:w-[411px] w-full sm:w-[320px] w-full md:min-h-[437px]"
        />
      </div>
    </div>
  );
};

export default LocalsTrustMost;
