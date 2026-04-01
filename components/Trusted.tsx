"use client";
import { api } from "@/src/service/axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
          text: "Total addresses",
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
        <motion.h6
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:text-[54px] md:text-[35px] text-[28px] font-bold text-[white] md:mt-10 mt-6 font-manrope "
        >
          Trusted by neighbours <br />{" "}
          <span className="text-[#F3B39D]">across Sydney</span>{" "}
        </motion.h6>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex lg:items-center lg:justify-between lg:flex-row flex-col items-center justify-center md:gap-10 gap-6 md:py-16 py-8"
        >
          {state.map((item: any, ind: number) => (
            <div key={ind}>
              <p
                className={`${item.textColor} lg:text-[52px] md:text-[40px] text-[32px] font-bold font-manrope text-center`}
              >
                {item.num}
              </p>
              <p className="text-white lg:text-[28px] text-[16px] font-manrope ">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Trusted;
