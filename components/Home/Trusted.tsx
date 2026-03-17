import { trusted_Data } from "@/utils/dumydata";
import React from "react";

const Trusted = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto p-4">
        <h6 className="lg:text-[54px] text-[35px] font-bold text-[white] mt-10  ">
          Trusted by neighbours <br />{" "}
          <span className="text-[#F3B39D]">across sydney</span>{" "}
        </h6>

        <div className="flex lg:items-center lg:justify-between lg:flex-row flex-col gap-10 py-16">
          {trusted_Data.map((item, ind) => (
            <div key={ind}>
              <p className={`${item.textColor} lg:text-[52px] md:text-[40px] text-[20px] font-bold`}>{item.num}</p>
              <p className="text-white lg:text-[28px] text-[16px] ">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
