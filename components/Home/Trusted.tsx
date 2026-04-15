"use client";
import { api } from "@/src/service/axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { trusted_Data } from "@/utils/dumydata";

const Trusted = () => {
  // const [state, setState] = useState<any>([]);
  // const getStats = async () => {
  //   try {
  //     const res = await api.get("stats");
  //     setState([
  //       {
  //         num: `+ 334`,
  //         text: "Recommendations",
  //         textColor: "text-[#FFFFFF]",
  //       },
  //       {
  //         num: `+ 3`,
  //         text: "Suburbs",
  //         textColor: "text-[#FFFFFF]",
  //       },
  //       {
  //         num: `+ 3`,
  //         text: "Services",
  //         textColor: "text-[#FFFFFF]",
  //       },
  //     ]);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   getStats();
  // }, []);

  return (
    <div className="bg-green">
      <div className="container mx-auto p-4">
        <motion.h6
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:text-[54px] md:text-[42px] sm:text-[32px] text-[24px]  font-bold text-[white] md:text-start text-center md:mt-10 mt-6 font-manrope "
        >
          Trusted by neighbours <br />{" "}
          <span className="">across Sydney</span>{" "}
        </motion.h6>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex lg:items-center justify-between items-center sm:flex-row flex-col md:gap-10 gap-6 md:py-16 py-8"
        >
          {trusted_Data.map((item: any, ind: number) => (
            <motion.div key={ind}>
              <p
                className={`${item.textColor} lg:text-[56px] md:text-[40px] text-[32px] font-bold sm:text-start text-center font-manrope`}
              >
                {item.num}
              </p>
              <p className="text-white lg:text-[32px] text-[20px] text-center font-manrope">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Trusted;
