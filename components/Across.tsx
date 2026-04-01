import { sydneyAcrossData } from "@/utils/dumydata";
import React from "react";

const Across = () => {
  return (
    <section className="bg-green">
      <div className="md:max-w-[1441px] w-[90%] mx-auto md:min-h-[438px] md:py-[72px] py-[30px] md:px-[75px] px-[10px] ">
        <div className="">
          <h4 className="md:text-[30px] text-[26px] font-bold font-manrope  leading-[30px] md:w-[500px] text-white ">
            Trusted by neighbours across Sydney
          </h4>

          <div className="flex md:items-center md:flex-row flex-col flex-wrap md:justify-between justify-center md:mt-30 mt-4 md:gap-4  gap-4">
            {sydneyAcrossData.map((item, ind) => (
              <div key={ind} className="flex items-center gap-[10px] ">
                <span className="bg-icon-bg md:h-[62px] h-[40px] md:w-[62px] w-[40px] flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="font-manrope font-medium md:text-[32px] text-[20px] md:w-[300px] leading-[32px] text-white">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Across;
