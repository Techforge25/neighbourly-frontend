"use client";
import { api } from "@/src/service/axios";
import React, { useEffect, useState } from "react";

const Trusted = () => {
  const [state, setState] = useState<any>([]);
  const getStats = async () => {
    try {
      const res = await api.get("stats");
      setState([
        {
          num: `+ ${res.data.data.recommendations}`,
          text: "Neighbour recommendations",
          textColor: "text-[#8FA58A]",
        },
        {
          num: `+ ${res.data.data.businesses}`,
          text: "Local businesses",
          textColor: "text-[#FFFFFF]",
        },
        {
          num: `+ ${res.data.data.addresses}`,
          text: "Total addresss",
          textColor: "text-[#F3B39D]",
        },
      ]);
    } catch (error) {}
  };
  
  useEffect(() => {
    getStats();
  }, []);
  
  return (
    <div className="bg-[#1D1D1D]">
      <div className="container mx-auto p-4">
        <h6 className="lg:text-[54px] text-[35px] font-bold text-[white] md:mt-10 mt-6 font-manrope ">
          Trusted by neighbours <br />{" "}
          <span className="text-[#F3B39D]">across Sydney</span>{" "}
        </h6>

        <div className="flex lg:items-center lg:justify-between lg:flex-row flex-col md:gap-10 gap-6 md:py-16 py-8">
          {state.map((item: any, ind: number) => (
            <div key={ind}>
              <p
                className={`${item.textColor} lg:text-[52px] md:text-[40px] text-[20px] font-bold font-manrope`}
              >
                {item.num}
              </p>
              <p className="text-white lg:text-[28px] text-[16px] font-manrope ">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
