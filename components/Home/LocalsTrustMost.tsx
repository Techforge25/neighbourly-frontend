import Image from "next/image";
import React from "react";

const LocalsTrustMost = () => {
  return (
    <div className="">
      <div className=" container mx-auto p-4 p-2 pb-10">
        <p className="font-manrope font-bold md:text-[42px] sm:text-[32px] text-[18px] ">See who locals <span className="text-primary">trust most</span></p>
      </div>
      <div className="flex flex-col md:flex-row flex-1 items-center justify-center gap-[8px] md:gap-[16px] lg:gap-[30px] flex-wrap">
        <Image
          src="/images/trustMostPman.png"
          alt="Locals Trust Most"
          width={411}
          height={437}
          className="md:w-[411px] sm:w-[320px] w-[220px] md:min-h-[437px]"
        />
        <Image
          src="/images/trustMostEman.png"
          alt="Locals Trust Most"
          width={411}
          height={437}
          className="md:w-[411px] sm:w-[320px] w-[220px] md:min-h-[437px]"
        />
        <Image
          src="/images/trustMostHman.png"
          alt="Locals Trust Most"
          width={411}
          height={437}
          className="md:w-[411px] sm:w-[320px] w-[220px] md:min-h-[437px]"
        />
      </div>
    </div>
  );
};

export default LocalsTrustMost;
